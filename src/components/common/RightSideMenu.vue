<template>
    <div class="right-menu-wrap flex justify-between items-center">
        <ul class="right-menu flex items-center ">
            <li><router-link class="mr-4 header-menu" to="#">Shop</router-link></li>
            <li><router-link class="mr-4 header-menu" to="#">Sign In</router-link></li>
        </ul>
        <div class="header-menu-trigger z-30 flex flex-wrap flex-col justify-between items-center relative w-space2 h-spc cursor-pointer"
             v-on:click="showSideMenu"
             v-bind:class="{active: SideMenuTrigger}" >
            <span class="h-space3 bg-white w-full"></span>
            <span class="h-space3 bg-white w-full"></span>
            <span class="h-space3 bg-white w-full"></span>
        </div>
        <div class="side-menu-container overflow-x-hidden fixed z-20 w-spc8 top-0 bg-white h-full pt-6 pb-spc9 px-5"
             v-bind:class="{active: SideMenuTrigger}">
            <div class="menu-visible-mask fixed h-full left-0 top-0"></div>
            <span class="close-side-menu"></span>
            <ul>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Model S</router-link></li>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Model 3</router-link></li>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Model X</router-link></li>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Model Y</router-link></li>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Solar Roof</router-link></li>
                <li class="lg:hidden md:hidden sm:block">
                    <router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Solar Panels</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Existing Inventory</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Used Inventory</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Test Drive</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Find Us</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Support</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Get Newsletter</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">News</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Energy</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Cybertruck</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Roadster</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Semi</router-link></li>
                <li class="block"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Charging</router-link></li>
                <li class="block responsive-hidden-menu hidden"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Shop</router-link></li>
                <li class="block responsive-hidden-menu hidden"><router-link class="py-5 px-spc6 block text-black uppercase text-14 tracking-space2 font-semibold" to="#">Sign In</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightSideMenu",
        data() {
            return {
                SideMenuTrigger: false
            }
        },
        methods: {
            showSideMenu: function () {
                this.SideMenuTrigger = !this.SideMenuTrigger
            },
        },
    }
</script>

<style scoped>

</style>