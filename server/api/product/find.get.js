import {ProductsModel} from "../../databaseModels/products";

export default defineEventHandler(async (event) => {
    const {id} = getQuery(event);
    return await ProductsModel.findById(id);
})