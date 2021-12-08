<template>
    <carousel
            class="car-wheels-slider"
            :autoplay="false"
            :autoHeight="true"
            :items='1'
            :margin="20"
            :dots="false"
            :loop="true"
            :nav="false"
            :animateIn="'fadeIn'"
            :animateOut="'fadeOut'"
            :dotsContainer="'#car-solid-clr-dots'"
    >
        <div class="car-wheels-item bg-top bg-no-repeat relative h-h875px"></div>
        <div class="car-wheels-item bg2 bg-top bg-no-repeat relative h-h875px"></div>
        <div class="car-wheels-item bg3 bg-top bg-no-repeat relative h-h875px"></div>
        <div class="car-wheels-item bg4 bg-top bg-no-repeat relative h-h875px"></div>
        <div class="car-wheels-item bg5 bg-top bg-no-repeat relative h-h875px"></div>
    </carousel>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "ExteriorCarWheelCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>