import jwt_lib from 'jsonwebtoken';
import secret from "~/helpers/secret";
import {UserModel} from "../../databaseModels/users";

const {verify} = jwt_lib;
export default defineEventHandler(async (event) => {
    const jwt = getCookie(event, 'jwt');

    try {
        const {user_id} = verify(jwt, secret);

        const {isAdmin} = await UserModel.findById(user_id);

        return {
            'verified': true,
            isAdmin: isAdmin
        }

    } catch (e) {
        event.node.res.statusCode = 422;
        return {
            'error': {
                message:'token not verified',
                type: e
            }
        }
    }

});