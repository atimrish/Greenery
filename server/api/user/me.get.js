import {UserModel} from '~/server/databaseModels/users.js';
import jwt_lib from 'jsonwebtoken';

const {verify} = jwt_lib;
export default defineEventHandler(async (event) => {
    const jwt = getCookie(event, 'jwt');
    const secret = 'ZGFtaXJfZ2F5';

    const {user_id} = await verify(jwt, secret);

    const {surname, name, email, phone, isAdmin, favorites, cart} = await UserModel.findOne({_id: user_id});

    return {
        surname: surname,
        name: name,
        email: email,
        phone: phone,
        isAdmin: isAdmin,
        favorites: favorites,
        cart: cart
    };
});