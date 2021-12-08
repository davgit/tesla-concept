<template>
    <carousel
            class="autopilot-indicators-slider relative pt-10 sm:mt-0 sm:mb-4 w-2/6 flex-grow lg:order-2 sm:order-1"
            :autoplay="true"
            :autoHeight="true"
            :items='1'
            :margin="20"
            :dots="true"
            :loop="true"
            :nav="false"
            :animateIn="'fadeIn'"
            :animateOut="'fadeOut'"
    >
        <div class="indicators-item">
            <h1 class="text-size28 font-semibold leading-9 tracking-space3 text-primary pb-4">
                Driver Assistance <br>Capabilities
            </h1>
            <p class="text-14 pb-14 leading-spc5">
                All new Tesla vehicles come standard with the most advanced driver assistance capabilities, designed to provide enhanced safety and convenience for a stress-free driving experience.
            </p>
        </div>
        <div class="indicators-item">
            <h1 class="text-size28 font-semibold leading-9 tracking-space3 text-primary pb-4">
                Driver Assistance <br>Capabilities
            </h1>
            <p class="text-14 pb-14 leading-spc5">
                Eight cameras and 12 ultrasonic sensors detect lane lines and surrounding objects—providing 360 degrees of visibility, at all times.
            </p>
        </div>
        <div class="indicators-item">
            <h1 class="text-size28 font-semibold leading-9 tracking-space3 text-primary pb-4">
                Driver Assistance <br>Capabilities
            </h1>
            <p class="text-14 pb-14 leading-spc5">
                Model X keeps you within a lane while matching speed to traffic conditions, without any driver input.
            </p>
        </div>
    </carousel>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "AutopilotIndicatorsCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>