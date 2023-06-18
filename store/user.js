import {defineStore} from "pinia";
import {useFetch} from "#app";

export const useUserStore = defineStore('user',{
    state: () => ({
        user: ref({})
    }),
    actions: {
        async getMe() {
            const {data} = await useFetch('/api/user/me');
            this.user = data.value;
        },

        async getUserById(id) {
            const {data} = await useFetch(`/api/user/find?uid=${id}`);
            return data;
        }
    }
});