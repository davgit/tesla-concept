<template>
    <div class="menu md:block hidden">
        <nav class="main-header-menu">
            <ul class="menu flex items-center">
                <li v-for="(nav, index) in navs" :key="index">
                    <a class="header-menu" :href="nav.path">{{nav.title}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                navs: [
                    {
                        title: "Model S",
                        path: "#"
                    },
                    {
                        title: "Model 3",
                        path: "#"
                    },
                    {
                        title: "Model X",
                        path: "#"
                    },
                    {
                        title: "Model Y",
                        path: "#"
                    },
                    {
                        title: "Solar Roof",
                        path: "#"
                    },
                    {
                        title: "Solar Panels",
                        path: "#"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>