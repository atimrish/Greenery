import {UserModel} from "~/server/databaseModels/users.js";
import {compare} from "bcrypt";
import jwt_lib from 'jsonwebtoken';
import {randomUUID} from "crypto";
import secret from '~/helpers/secret';
import setTokenCookie from "../../../helpers/setTokenCookie";

const {sign} = jwt_lib;
export default defineEventHandler(async (event) => {
    const {login, password} = await readBody(event);
    const res = await UserModel.findOne({$or: [{email: login}, {phone: login}]});


    const handleError = () => {
        throw new Error()
    }


    try {

        if (res === null) handleError();
        if (!await compare(password, res.password)) handleError()

    } catch (e) {
        event.node.res.statusCode = 422;
        return {
            'error': 'Неправильный логин или пароль'
        }
    }

    const token_id = randomUUID();

    const jwt = sign({
        user_id: res._id,
        token_id: token_id,
        exp: Math.floor(Date.now() / 1000) + 900,
        iat: Math.floor(Date.now() / 1000)
    }, secret);

    const refresh_token = sign({
       token_id: token_id,
       exp: Math.floor(Date.now() / 1000) + 99900,
       iat: Math.floor(Date.now() / 1000)
    }, secret);


    setTokenCookie(event, 'jwt', jwt);
    setTokenCookie(event, 'rf', refresh_token);

    event.node.res.statusCode = 200;
    return {
        message: 'Вы вошли в аккаунт',
        isAdmin: res.isAdmin
    };
});