import {useAuthStore} from "~/store/auth";



export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    await authStore.verify();
    if (!authStore.isAdmin) {
        return  navigateTo('/');
    }
});