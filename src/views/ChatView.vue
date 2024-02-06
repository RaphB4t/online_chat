<script setup>
import { ref } from 'vue';
import InputView from './InputView.vue';
import ChatList from './ChatList.vue';

const listeDeMessages = ref(["bonjour"])

function addMessageToList(payload){
    listeDeMessages.value.push(payload.message)
}

</script>

<template>

<div id="page">
    <ChatList :messages="listeDeMessages"/>
    <InputView :nb-messages="listeDeMessages.length" ,@send-message="addMessageToList"/>
</div>

</template>

<style>
#page{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

</style>