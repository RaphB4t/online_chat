<script setup>
import { ref, watch } from 'vue';
import InputView from './InputView.vue';
import ChatList from './ChatList.vue';

const listeDeMessages = ref(["bonjour","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa"])

function addMessageToList(payload){
    listeDeMessages.value.push(payload.message)
}

</script>

<template>

<div id="page">
    <ChatList :messages="listeDeMessages"/>
    <footer>
        <InputView :nb-messages="listeDeMessages.length" @send-message="addMessageToList"/>
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