<script setup>
import { ref } from "vue"
import {logIn} from "../api/auth"
import useSupabase from "../api/supabase";
import { userStore } from "../stores/userStore"
import { storeToRefs } from 'pinia'

const {supabase} = useSupabase()

const store = userStore()
const { username, avatar ,id} = storeToRefs(store)

const email = ref()
const password = ref()

function login(){
    logIn(email.value,password.value)
    //test()
}

async function test(){
    let { data: {user} } = await supabase.auth.getUser()
    id = user.id
    console.log(user.id)
    const { data, error } = await supabase.from('profiles').eq('id',id)
    username = data.username
    avatar = data.avatar
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
        <label>
            Username:
            <input class="text-black p-1" type="text" placeholder="username" v-model="password">
        </label><label>
            Avatar:
            <input class="text-black p-1" type="text" placeholder="avatar" v-model="password">
        </label>
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="login">Log in and chat !</button>
    </div>
</template>
