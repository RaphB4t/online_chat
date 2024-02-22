<script setup>

import { ref,computed} from 'vue';
import CustomButton from '../components/CustomButton.vue';
import {signOut} from "../api/auth"

const emit = defineEmits(['sendMessage'])

const message = ref();
const props = defineProps(["nbMessages"])
const nbMessage = props.nbMessages

function envoyerMessage(){
    if(message.value != null && message.value != "" && message.value != undefined){
        emit("sendMessage",{message:message.value})
        message.value=""
    }
}

</script>
<template>
    <p id="nbMessage">Vous avez {{ nbMessage }} messages</p>
    <div id="input-area">
        <input id="messageInput" class="bg-gray-500 rounded-md" type="text" v-model=message width="20%">
        <CustomButton @click="envoyerMessage()">
            <img src="/images/sendIcon.png" width="35px" alt="">
        </CustomButton>
        <!--<button @click="envoyerMessage()"><img src="/images/sendIcon.png" width="35px" alt=""></button>-->
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="signOut">Log out</button>
    </div>
</template>

<style>

#nbMessage{
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
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 1%;
}

</style>