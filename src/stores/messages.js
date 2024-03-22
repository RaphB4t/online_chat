import {defineStore} from "pinia";
import {ref} from "vue";

export const messagesStore = defineStore('messages',() => {
    const content = ref([])    
    return {content}
})