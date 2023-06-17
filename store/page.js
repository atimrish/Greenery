import {defineStore} from "pinia";

export const usePageStore = defineStore('pageStore', {
    state: () => ({
        currentPage: ref('/')
    }),
    actions: {
        setPage(value) {
            this.currentPage = value
        }
    }
})