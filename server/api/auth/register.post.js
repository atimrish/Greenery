import {UserModel} from "~/server/databaseModels/users.js";
import {genSalt, hash} from "bcrypt";
import jwt_lib from "jsonwebtoken";
import {randomUUID} from "crypto";
import secret from "~/helpers/secret";
import setTokenCookie from "../../../helpers/setTokenCookie";

const {sign} = jwt_lib;

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const salt = await genSalt(10);
    const password = await hash(body.password, salt);

    const {_id} = await UserModel.create({
        surname: body.surname,
        name: body.name,
        email: body.email,
        phone: body.phone,
        salt: salt,
        password: password
    });

    const token_id = randomUUID();

    const jwt = sign({
        user_id: _id,
        token_id: token_id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 900,
    }, secret);

    const refresh_token = sign({
        token_id: token_id,
        exp: Math.floor(Date.now() / 1000) + 99900,
        iat: Math.floor(Date.now() / 1000)
    }, secret);

    event.node.res.statusCode = 200;

    setTokenCookie(event, 'jwt', jwt);
    setTokenCookie(event, 'rf', refresh_token);

    return {
        message: "Регистрация прошла успешно",
    };

})