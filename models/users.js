import {defineMongooseModel} from "#nuxt/mongoose";
export const Users = defineMongooseModel('Users', {
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    password: {
        type: String,
        required: true
    },
    salt: {
      type: String,
      required: true
    },
    photo: {
        type: String,
        required: false
    },
    favorites: {
        type: Array,
        default: []
    },
    cart: {
        type: Array,
        default: []
    }
}, {timestamps: true});
