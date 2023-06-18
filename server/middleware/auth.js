import jwt_lib from 'jsonwebtoken';
import secret from "../../helpers/secret";

const {verify} = jwt_lib;
const needAuthMiddleware = async (event) => {
    const token = getCookie(event, 'jwt');

    await verify(token, secret);

}

export default defineEventHandler(async (event) => {
    const url = event.node.req.url;

    switch (url) {
        case '/api/auth/logout':
        case '/api/user/me':
        case '/api/comment/store':
        case '/api/product/add-to-favorites':
            try {
                await needAuthMiddleware(event);
            } catch (e) {
                event.node.res.statusCode = 401;
                return {
                    'error': 'token not verified'
                }
            }
            break;
    }

});