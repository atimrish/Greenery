import {defineStore} from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: ref([]),
        currentProduct: ref({})
    }),
    actions: {
        async createProduct(title, description, category, subcategory, characts) {
            const input = document.querySelector('#create_category');
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('subcategory', subcategory);

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
        }

    }
});