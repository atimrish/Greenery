import {ProductsModel} from "../../databaseModels/products";

export default defineEventHandler(async (event) => {
    return await ProductsModel.find();
})
