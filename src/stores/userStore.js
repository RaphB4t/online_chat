import {defineStore} from "pinia";
import {ref} from "vue";

export const userStore = defineStore('user',() => {
    const username = ref('Mattheo50')
    const avatar = ref('https://ibb.co/dm6P3vP')
    const id = ref('')
    

    return {username,avatar,id}
})