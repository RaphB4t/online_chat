<script setup>

const props = defineProps(["messages"])
const messages = props.messages


</script>

<template>
        <div id="content" class="bg-gray-500">
            <p v-for=" m in messages" :key="m">{{m}} <button @onclick="modifier(m)">Modif</button></p>
        </div>
</template>