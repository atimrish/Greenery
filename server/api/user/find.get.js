import {UserModel} from '~/server/databaseModels/users.js';

export default defineEventHandler(async (event) => {
    const {uid} = getQuery(event);

    const {surname, name, photo} = await UserModel.findOne({_id: uid});

    return {
        surname: surname,
        name: name,
        photo: photo
    };
});