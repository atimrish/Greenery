import {defineMongooseModel} from "#nuxt/mongoose";

export const Products = defineMongooseModel('Products',{
    title: {
        type: String,
        required: true
    },
    photos: {
      type: Array,
      default: []
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Array,
        default: []
    },
    reviews: {
        type: Array,
        default: []
    },
    characteristics: {
        type: Array,
        default: []
    }
}, {timestamps: true});
