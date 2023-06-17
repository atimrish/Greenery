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
    price: {
      type: Number,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
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
