import {UserModel} from "../../databaseModels/users";
import jwt_lib from "jsonwebtoken";
const {decode} = jwt_lib;
import secret from "../../../helpers/secret";
export default defineEventHandler(async (event) => {

    const jwt = getCookie(event, 'jwt');
    const {user_id} = await decode(jwt, secret);
    const {id} = getQuery(event);

    console.log(id)

    await UserModel.updateOne({_id: user_id}, {
        $pull: {
            cart: {
                product_id: id
            }
        }
    });

    return 'Товар удален';
});