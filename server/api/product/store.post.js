import {uploadFile} from "~/helpers/uploadFile";
import {normalizeMultipartBody} from "~/helpers/normalizeMultipartBody";
import {ProductsModel} from "~/server/databaseModels/products";

export default defineEventHandler(async (event) => {

    const normalized = await normalizeMultipartBody(event);

    const regex_photo = /^photo_/;
    const files = [];
    const filenames = [];

    const regex_char = /^char_/;
    let chars = [];

    for (const normalizedKey in normalized) {
        if (regex_photo.test(normalizedKey)) {
            files.push(normalized[normalizedKey]);
        }
        if (regex_char.test(normalizedKey)) {
            chars.push(normalized[normalizedKey]);
        }
    }

    await files.forEach((item, index) => {
        const ext = item.type.slice(item.type.lastIndexOf('/') + 1);
        const filename = Date.now() + '_' + index + '.' + ext;
        const file = item.data;

        filenames.push(filename);

        uploadFile(file, 'public/photo/product/', filename);
    });
    chars = normalizeChars(chars);


    const category = normalized.subcategory.data.toString() !== '' ? normalized.subcategory.data : normalized.category.data;



    await ProductsModel.create({
        title: normalized.title.data,
        photos: filenames,
        description: normalized.description.data,
        category: category,
        characteristics: chars,
        price: normalized.price.data
    });

    return 'Товар добавлен';
});


const normalizeChars = (chars) => {
    let new_chars = [];

    chars.forEach((item) => {
        const str = JSON.parse(Buffer.from(item.data).toString());
        const data = {
            title: str.char_name,
            value: str.char_value
        };
        new_chars.push(data);
    })

    return new_chars;
}