import jwt_lib from 'jsonwebtoken';
import secret from "../../helpers/secret";
import {UserModel} from "../databaseModels/users";

const {decode} = jwt_lib;
const needAdminMiddleware =  async (event) => {
    const token = getCookie(event, 'jwt');

    const {user_id} = decode(token, secret);

    const {isAdmin} = await UserModel.findById(user_id);
    if (!isAdmin) throw Error();
}

export default defineEventHandler(async (event) => {
    const url = event.node.req.url;

    switch (url) {
        case '/api/product/store':
        case '/api/category/store':
        case '/api/category/subcategory_store':
            try {
                await needAdminMiddleware(event);
            } catch (e) {
                event.node.res.statusCode = 403;
                return {
                    'error': 'forbidden'
                }
            }
            break;
    }

});