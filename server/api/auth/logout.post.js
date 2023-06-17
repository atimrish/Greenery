import jwt_lib from 'jsonwebtoken';
import secret from "~/helpers/secret";

const {verify} = jwt_lib;

export default defineEventHandler((event) => {
    const jwt = getCookie(event, 'jwt');

    try {
        verify(jwt, secret);
    } catch (e) {
        event.node.res.statusCode = 422;
        return {
            error: 'token not verified'
        }
    }

    event.node.res.statusCode = 200;
    deleteCookie(event, 'jwt', {
        sameSite: 'lax'
    });
    deleteCookie(event, 'rf', {
        sameSite: 'lax'
    });
    return {
        message: 'logged out'
    }
})
