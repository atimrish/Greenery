import {defineStore} from "pinia";
import {useFetch} from "#app";

export const useAuthStore = defineStore('auth', {
    state: () => ({
       isAuth: ref(false),
       isAdmin: ref(false)
    }),
    actions: {
        async login(authData) {
            try {
                const {data} = await useFetch('/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(authData)
                });

                this.isAuth = true;
                this.isAdmin = data.value.isAdmin;

            } catch (e) {
                this.isAuth = false;
                this.isAdmin = false;
            }
        },

        async verify() {
            try {
                const {data} = await useFetch('/api/auth/verify', {
                    method: 'POST'
                });
                this.isAdmin = data.value.isAdmin;
                this.isAuth = data.value.verified;

            } catch (e) {
                await this.refresh();
            }
        },

        async refresh() {
            try {
                const {data} = await useFetch('/api/auth/refresh', {
                    method: 'POST'
                });
                this.isAdmin = data.value.isAdmin;
                this.isAuth = true;
            } catch (e) {
                this.isAuth = false;
                this.isAdmin = false;
            }
        },

        async logout() {
            try {
                const {data} = await useFetch('/api/auth/logout', {
                    method: 'POST'
                });
            } catch (e) {
                console.log(e)
            }
            this.isAuth = false;
            this.isAdmin = false;
        },

        async register(registerData) {
            try {
                const {data} = await useFetch('/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify(registerData)
                });
                this.isAuth = true;

            } catch (e) {
                console.log(e)
            }
        }
    }
})