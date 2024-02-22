<script setup>

import { ref,computed} from 'vue';
import CustomButton from '../components/CustomButton.vue';

//////////////////////
import { createClient } from '@supabase/supabase-js'
import router from "../router/main_router";


const url ="https://xzhmfiwrnzzunouxywvd.supabase.co"

const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6aG1maXdybnp6dW5vdXh5d3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDM1MDgsImV4cCI6MjAyNDE3OTUwOH0.kjRYMu70d_fq_reQsJOmSnnsD6gYvkqsVwWIb8_i1uc"

const supabase = createClient(url, anon)
///////////////////////
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

async function signOut() {
  const { error } = await supabase.auth.signOut()
  router.push('signup')
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