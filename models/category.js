import {defineMongooseModel} from "#nuxt/mongoose";

export const Category = defineMongooseModel('Categories',{
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    child: {
        type: Array,
        default: []
    }
});