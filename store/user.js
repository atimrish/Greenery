import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state: () => ({
        user: ref({})
    }),
    actions: {
        async getMe() {
            const {data} = await useFetch('/api/user/me');
            this.user = data.value;
        }
    }
});