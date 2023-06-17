import {defineStore} from "pinia";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: ref([])
    }),
    actions: {
        async createCategory(title) {
            const input = document.querySelector('#create_category');
            const formData = new FormData();
            formData.append('title', title);
            formData.append('photo', input.files[0]);

            try {
                const {data} = await useFetch('/api/category/store', {
                    method: 'POST',
                    body: formData
                });
                await this.getCategories();
            } catch (e) {
                console.log(e)
            }
        },

        async createSubcategory(title, category_id) {
            const input = document.querySelector('#create_subcategory');
            const formData = new FormData();
            formData.append('title', title);
            formData.append('photo', input.files[0]);
            formData.append('category_id', category_id);

            try {
                const {data} = await useFetch('/api/category/subcategory_store', {
                    method: 'POST',
                    body: formData
                });
            } catch (e) {
                console.log(e)
            }

        },

        async getCategories() {
            const {data} = await useFetch('/api/category');
            this.categories = data.value;
        }

    }
});