import {normalizeMultipartBody} from "../../../helpers/normalizeMultipartBody";
import {ProductsModel} from "../../databaseModels/products";
import {uploadFile} from "../../../helpers/uploadFile";
import jwt_lib from 'jsonwebtoken';
import secret from "../../../helpers/secret";

const {decode} = jwt_lib;

export default defineEventHandler(async (event) => {
   const normalized = await normalizeMultipartBody(event);
   const filenames = [];
   const files = [];
   const regex = /^photo_/;

   for (const normKey in normalized) {
      if (regex.test(normKey)) {
         files.push(normalized[normKey])
      }
   }

   files.forEach((item, index) => {
      const ext = item.type.slice(item.type.lastIndexOf('/') + 1);
      const filename = Date.now() + '_' + index + '.' + ext;
      const file = item.data;

      filenames.push(filename);

      uploadFile(file, 'public/photo/comment/', filename);
   });

   const jwt = getCookie(event, 'jwt');

   const {user_id} = await decode(jwt, secret)

   const product_id = normalized.product_id.data;
   const rating = +Buffer.from(normalized.rating.data).toString();
   const comment_text = Buffer.from(normalized.text.data).toString();

   console.log(product_id)

   await ProductsModel.updateOne({_id: product_id}, {
      $push: {
         'reviews': {
            user_id: user_id,
            rating: rating,
            text: comment_text,
            photos: filenames,
            created_at: Date.now()
         }
      }
   }, {timestamps: true})

   return 'Комментарий оставлен';
});