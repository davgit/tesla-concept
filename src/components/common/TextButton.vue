<template>
    <a v-bind:href="url" :id="idname" class="text-btn cursor-pointer flex items-center text-black uppercase text-xs font-medium"
         :class="[ title ? classname + 'block' : 'hidden' ]">
        <i class=" text-base text-black w-10 h-10 border-solid border-3 border-black rounded-full text-center leading-9 mr-2">
            <font-awesome-icon :icon="['fas', 'plus']" /></i> {{title}}
    </a>
</template>

<script>
    export default {
        name: "TextButton",
        props: [ 'title', 'url', 'classname', 'idname' ],
    }
</script>

<style scoped>

</style>