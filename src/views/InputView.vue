<script setup>

import { ref,computed} from 'vue';

const sendMessage = ref();
const messages = ref(["aa","b"]);

const nbMessages = computed(()=> `Vous avez ${messages.value.length} messages`)

function envoyerMessage(){
    if(sendMessage != ""){
        messages.value.push(sendMessage.value);
        sendMessage.value=""
    }
}

function modifier(m){
    sendMessage.value = m.value;
}

</script>
<template>
<div class="bg-gray-500">
    <p v-for=" m in messages" :key="m">{{m}} <button @onclick="modifier(m)">Modif</button></p>
</div>
<p>{{nbMessages}}</p>
<input class="bg-gray-500 rounded-md" type="text" v-model="sendMessage">
<button @click="envoyerMessage()"><img src="/images/sendIcon.png" width="50px" alt=""></button>

</template>