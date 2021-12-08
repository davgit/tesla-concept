<template>
    <router-link
        v-bind:to="url"
         class="default-btn template-btn py-spc6 px-10 "
        :class="[ title ? classname + ' block' : ' hidden' ]">
        {{title}}
    </router-link>
</template>

<script>
    export default {
        name: "SingleRoundButton",
        props: [ 'title', 'url', 'classname' ]
    }
</script>

<style scoped>

</style>