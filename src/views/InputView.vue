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
<div id="page">
    <div id="content" class="bg-gray-500">
        <p v-for=" m in messages" :key="m">{{m}} <button @onclick="modifier(m)">Modif</button></p>
    </div>
    
        <p id="nbMessage">{{nbMessages}}</p>
        <div id="input-area">
        <input id="messageInput" class="bg-gray-500 rounded-md" type="text" v-model=sendMessage width="20%">
        <button @click="envoyerMessage()"><img src="/images/sendIcon.png" width="35px" alt=""></button>
    </div>
</div>
</template>

<style>
#page{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#content{
    flex-grow: 1;
}

#nbMessage{
    text-align: center;
}

#messageInput{
    margin-right: 5%;
}

#input-area{
    display: flex;
    align-items: center;
    align-self: center;
}
</style>