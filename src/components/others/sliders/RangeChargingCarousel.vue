<template>
    <div class="utility-storage-carousel pb-20">
        <carousel
            class="range-charge-slider"
            :autoplay="true"
            :autoHeight="true"
            :items='1'
            :margin="20"
            :dots="true"
            :loop="true"
            :nav="false"
            :animateIn="'fadeIn'"
            :animateOut="'fadeOut'"
            :dotsContainer="'#range-slider-custom-dots'"
        >
            <div class="item">
                <img src="../../../assets/images/charger-1.jpg" alt="Storage 1">
            </div>
            <div class="item">
                <img src="../../../assets/images/charger-2.jpg" alt="Storage 2">
            </div>
            <div class="item">
                <img src="../../../assets/images/model-x-range-desktop.png" alt="Storage 3">
            </div>
        </carousel>
        <div class="utility-dots-container lg:w-w840 sm:w-full ml-auto mr-auto mb-2 py-6 mt-10">
            <div id="range-slider-custom-dots" class="owl-dots flex items-start">
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title">
                        Home Charging
                    </span>
                    <span class="stitle utility-storage-slide-stitle text-dark_light_gray">
                        Charge Model X overnight for one week worth of driving
                    </span>
                </button>
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title">
                        On the Road
                    </span>
                    <span class="stitle utility-storage-slide-stitle text-dark_light_gray">
                        Stop and recharge half the battery while you get a cup of coffee
                    </span>
                </button>
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title">
                        Upon Arrival
                    </span>
                    <span class="stitle utility-storage-slide-stitle text-dark_light_gray">
                        Park and recharge for your next destination while away from home
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "RangeChargingCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>