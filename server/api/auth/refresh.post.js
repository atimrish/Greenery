import jwt_lib from 'jsonwebtoken';
import {randomUUID} from "crypto";
import secret from '~/helpers/secret';
import setTokenCookie from "../../../helpers/setTokenCookie";
import {UserModel} from "../../databaseModels/users";

const {sign, decode} = jwt_lib;
export default defineEventHandler(async (event) => {
    const jwt = getCookie(event, 'jwt');
    const refresh_token = getCookie(event, 'rf');


    if (jwt == null || refresh_token == null) {
        event.node.res.statusCode = 422;
        return {
            error: 'token not verified'
        };
    }

    const v_jwt = decode(jwt, secret);
    const v_rf = decode(refresh_token, secret);


    if (v_jwt.token_id !== v_rf.token_id) {
        event.node.res.statusCode = 422;
        return {
            error: 'token not verified'
        };
    }

    const user_id = v_jwt.user_id;
    const new_token_id = randomUUID();

    const new_jwt = sign({
        user_id: user_id,
        token_id: new_token_id,
        exp: Math.floor(Date.now() / 1000) + 900,
        iat: Math.floor(Date.now() / 1000)
    }, secret);

    const new_refresh_token = sign({
        token_id: new_token_id,
        exp: Math.floor(Date.now() / 1000) + 99900,
        iat: Math.floor(Date.now() / 1000)
    }, secret);



    setTokenCookie(event, 'jwt', new_jwt);
    setTokenCookie(event, 'rf', new_refresh_token);

    event.node.res.statusCode = 200;

    const {isAdmin} = await UserModel.findById(user_id);

    return {
        message: 'token refreshed',
        isAdmin: isAdmin
    }
});