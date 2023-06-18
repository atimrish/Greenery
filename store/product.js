import {defineStore} from "pinia";
import {useFetch} from "#app";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: ref([]),
        currentProduct: ref({})
    }),
    actions: {
        async createProduct(title, description, category, subcategory, characts, price) {
            const input = document.querySelector('#create_category');
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('subcategory', subcategory);
            formData.append('price', price);

            for (let i = 0; i < input.files.length; i++) {
                formData.append('photo_' + i, input.files[i])
            }

            for (let i = 0; i < characts.length; i++) {
                formData.append('char_' + i, JSON.stringify(characts[i]))
            }

            try {
                const {data} = await useFetch('/api/product/store', {
                    method: 'POST',
                    body: formData
                })
            } catch (e) {
                console.log(e)
            }
        },

        async getAllProducts() {
            const {data} = await useFetch('/api/product');
            this.products = data.value;
        },

        async getCurrentProduct(id) {
            this.currentProduct = this.products.find(item => item._id === id);
        },

        async pushComment(product_id, commentData) {
            const formData = new FormData();
            formData.append('text', commentData.text);
            formData.append('rating', commentData.rating);
            formData.append('product_id', product_id);


            commentData.files.forEach((item, index) => {
                formData.append('photo_' + index, item);
            });

            const data = await useFetch('/api/comment/store', {
                method: 'POST',
                body: formData
            });
            await this.fetchCurrentProduct(product_id);
        },

        async fetchCurrentProduct(id) {
            const {data} = await useFetch(`/api/product/find?id=${id}`);
            this.currentProduct = data.value;
        },

        async addToFavorites(product_id) {
            await useFetch(`/api/product/add-to-favorites?id=${product_id}`, {
                method: 'POST'
            });
        },

        async deleteFromFavorites(product_id) {
            await useFetch(`/api/product/delete-from-favorites?id=${product_id}`, {
                method: 'POST'
            });
        },

        async addToCart(product_id) {
            await useFetch(`/api/product/add-to-cart?id=${product_id}`, {
                method: 'POST'
            });
        },

        async deleteFromCart(product_id) {
            await useFetch(`/api/product/delete-from-cart?id=${product_id}`, {
                method: 'POST'
            });
        },
    }
});