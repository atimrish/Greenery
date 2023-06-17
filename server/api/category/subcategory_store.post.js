import {normalizeMultipartBody} from "../../../helpers/normalizeMultipartBody";
import {uploadFile} from "../../../helpers/uploadFile";
import {CategoryModel} from "../../databaseModels/category";

export default defineEventHandler(async (event) => {
    const normalized = await normalizeMultipartBody(event);


    const ext = normalized.photo.type.slice(normalized.photo.type.lastIndexOf('/') + 1);
    const filename = Date.now() + '.' + ext;
    const file = normalized.photo.data;

    const title = Buffer.from(normalized.title.data).toString();
    const category_id = normalized.category_id.data;

    await uploadFile(file, 'public/photo/subcategory/', filename);

    try {
        await CategoryModel.updateOne({_id: category_id}, {
            $push: {
                'child': {
                    title: title,
                    photo: filename
                }
            }
        });
    } catch (e) {
        return e
    }


    return {
        message: 'Категория добавлена'
    };
})