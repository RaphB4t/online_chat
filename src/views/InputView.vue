<script setup>

import { ref,computed} from 'vue';
const emit = defineEmits(['sendMessage'])

const message = ref();
const props = defineProps(["nbMessages"])
const nbMessage = props.nbMessages

function envoyerMessage(){
    if(message.value != null){
        emit("sendMessage",{message:message.value})
        message.value=""
    }
}

</script>
<template>
    <p id="nbMessage">Vous avez {{ nbMessage }} messages</p>
    <div id="input-area">
        <input id="messageInput" class="bg-gray-500 rounded-md" type="text" v-model=message width="20%">
        <button @click="envoyerMessage()"><img src="/images/sendIcon.png" width="35px" alt=""></button>
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
    align-items: center;
    align-self: center;
}
</style>