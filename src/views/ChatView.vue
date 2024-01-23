<script setup>
import { ref } from 'vue';



const messages = ref(["aa","b"]);
</script>

<template>

<div class="bg-gray-500">
    <ul>
        <li v-for="item in messages">{{item}}</li>
    </ul>
</div>

</template>