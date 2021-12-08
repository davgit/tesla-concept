<template>
    <section class="section relative model-x text-center">
        <video id="carVideo" muted autoplay data-autoplay playsinline data-keepplaying class="video block w-full h-screen object-cover absolute left-0 top-0">
            <source src="../../../assets/videos/hero_1.mp4" type="video/mp4">
        </video>
        <video muted autoplay playsinline data-keepplaying class="video responsive-hero-video object-center-top block w-full h-auto object-cover absolute left-0 top-0 hidden">
            <source src="../../../assets/videos/hero-portrait.mp4" type="video/mp4">
        </video>
        <video muted autoplay playsinline data-keepplaying class="video mobile-video object-center-top block w-full h-auto object-cover absolute left-0 top-0 hidden">
            <source src="../../../assets/videos/hero-mobile_1.mp4" type="video/mp4">
        </video>
        <div class="hero-banner-content flex items-center justify-between flex-col h-full z-10 relative">
            <!-- ModelX Header -->
            <ModelXHeader />

            <!-- ModelX Specs -->
            <ModelXSpecs />

            <div class="hero-scroll-section-btn absolute bottom-0 w-full text-center z-10">
                <a href="#Safety" class="scroll-section-btn w-5 h-5 bg-no-repeat bg-cover bg-center inline-block bg-transparent"></a>
            </div>
        </div>
    </section>
</template>

<script>
    import ModelXSpecs from "./ModelXSpecs";
    import ModelXHeader from "./ModelXHeader";
    export default {
        name: "ModelX",
        components: {
            ModelXHeader,
            ModelXSpecs,
        },
    }
</script>

<style scoped>

</style>