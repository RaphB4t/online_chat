<script setup>
import { nextTick, ref, watch } from 'vue';


const props = defineProps(["messages"])
const messages = props.messages

const messagesContainer = ref(null);


watch(messages, async ()=>{
    await nextTick()
    messagesContainer.value.lastElementChild.scrollIntoView()
})


</script>

<template>
        <div id="content" class="bg-gray-500 max-h-screen overflow-y-auto" ref="messagesContainer">
            <p v-for=" m in messages" :key="m">{{m}} <button @onclick="modifier(m)"  >Modif</button></p>
        </div>
</template>