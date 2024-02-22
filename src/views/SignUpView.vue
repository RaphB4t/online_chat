<script setup>
import { ref } from "vue"
import {signUp} from "../api/auth"

const email = ref()
const password = ref()

function signup(){
    signUp(email.value,password.value)
}

</script>

<template>
    <div class="h-full flex flex-col justify-center items-center gap-10">
        <label>
            Email:
            <input class="text-black p-1" type="text" placeholder="Email" v-model="email">
        </label>
        <label>
            Password:
            <input class="text-black p-1" type="password" placeholder="password" v-model="password">
        </label>
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="signup">Sign up and chat !</button>
        <a :href="href" @click="">déja un compte ? se connecter.</a>
    </div>
</template>