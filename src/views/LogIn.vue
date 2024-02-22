<script setup>
import { ref } from "vue"
import { createClient } from '@supabase/supabase-js'
import {useRouter} from "vue-router";   //bonne pratique

const router = useRouter()

const url ="https://xzhmfiwrnzzunouxywvd.supabase.co"

const anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6aG1maXdybnp6dW5vdXh5d3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDM1MDgsImV4cCI6MjAyNDE3OTUwOH0.kjRYMu70d_fq_reQsJOmSnnsD6gYvkqsVwWIb8_i1uc"

const supabase = createClient(url, anon)

const email = ref()
const password = ref()

async function logIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  router.push('/')
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
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="logIn">Log in and chat !</button>
    </div>
</template>
