<template>
    <header class="vision-menu-header-main absolute left-0 top-0 z-20 w-full">
        <div class="container-fluid px-5 flex items-center justify-between py-space1">
            <!-- Logo -->
            <Logo />

            <!-- Navbar -->
            <Navbar />

            <!-- Right Side Menu-->
            <RightSideMenu />
        </div>
    </header>
</template>

<script>
    import Logo from "./Logo";
    import Navbar from "./Navbar";
    import RightSideMenu from "./RightSideMenu";
    export default {
        name: "Header",
        components: {RightSideMenu, Navbar, Logo}
    }
</script>

<style scoped>

</style>