<template>
    <div class="autopilot-indicators flex pb-20 lg:flex-row sm:flex-col sm:flex-wrap">
        <div class="autopilot-indicators-left mb-2 ml-auto mr-auto flex-grow lg:order-1 sm:order-2">
            <video class="video hero-video w-full" muted loop autoplay playsinline data-keepplaying>
                <source src="../../../assets/videos/ap-modelx.mp4" type="video/mp4">
            </video>
        </div>

        <!-- Indicators Carousel -->
        <AutopilotIndicatorsCarousel />
    </div>
</template>

<script>
    import AutopilotIndicatorsCarousel from "../../others/sliders/AutopilotIndicatorsCarousel";
    export default {
        name: "AutopilotIndicators",
        components: {
            AutopilotIndicatorsCarousel
        }
    }
</script>

<style scoped>

</style>