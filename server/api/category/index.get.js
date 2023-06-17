import {CategoryModel} from "~/server/databaseModels/category.js";
export default defineEventHandler(async () => {
    return await CategoryModel.find();
});