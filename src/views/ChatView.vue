<script setup>
import { ref, watch } from 'vue';
import InputView from './InputView.vue';
import ChatList from './ChatList.vue';
import useSupabase from "../api/supabase";
import { userStore } from "../stores/userStore"
import {messagesStore} from "../stores/messages"
import { storeToRefs } from 'pinia'

const {supabase} = useSupabase()

const store = messagesStore()
const content = storeToRefs(store)

const unsubscribe = store.$subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
  getAllMessage()
})

const {id} = userStore()
console.log(id)

const listeDeMessages = ref(["bonjour"])

function addMessageToList(payload){
    listeDeMessages.value.push(payload.message)
}

async function getAllMessage(payload){
    listeDeMessages.value.splice(0,listeDeMessages)
    const { data: { user } } = await supabase.auth.getUser()
    const {data , error} = await supabase.from('messages').select().eq('author_id',user.id)

    content.value.push('oui')
    console.log(data.forEach((element) => {
        listeDeMessages.value.push(element.content)
    }))
    
}

</script>

<template>

<div id="page">
    <ChatList :messages="listeDeMessages"/>
    <footer>
        <InputView :nb-messages="listeDeMessages.length" @send-message="getAllMessage"/>
    </footer>
</div>

</template>

<style>
#page{
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

footer{
    position: sticky;
    bottom: 0px;
    display: flex;
    flex-direction: column;
}

</style>