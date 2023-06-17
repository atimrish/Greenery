import {normalizeMultipartBody} from "~/helpers/normalizeMultipartBody";
import {uploadFile} from "~/helpers/uploadFile";
import {CategoryModel} from "~/server/databaseModels/category.js";


export default defineEventHandler(async (event) => {

    const normalized = await normalizeMultipartBody(event);



    const ext = normalized.photo.type.slice(normalized.photo.type.lastIndexOf('/') + 1);
    const filename = Date.now() + '.' + ext;
    const file = normalized.photo.data;

    const title = normalized.title.data;

    await uploadFile(file, 'public/photo/category/', filename);

    try {
        await CategoryModel.create({title: title, photo: filename});
    } catch (e) {
        return  e
    }


    return {
        message: 'Категория добавлена'
    };
});