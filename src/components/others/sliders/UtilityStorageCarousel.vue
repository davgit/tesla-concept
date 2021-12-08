<template>
    <div class="utility-storage-carousel">
        <carousel
                :autoplay="true"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :loop="true"
                :dots="true"
                :nav="false"
                :animateIn="'fadeIn'"
                :animateOut="'fadeOut'"
                :dotsContainer="'#utility-custom-dots'"
        >
            <div class="item">
                <img src="../../../assets/images/storage-1.jpg" alt="Storage 1">
            </div>
            <div class="item">
                <img src="../../../assets/images/storage-2.jpg" alt="Storage 2">
            </div>
            <div class="item">
                <img src="../../../assets/images/storage-3.jpg" alt="Storage 3">
            </div>
            <div class="item">
                <img src="../../../assets/images/storage-4.jpg" alt="Storage 4">
            </div>
        </carousel>
        <div class="utility-dots-container lg:w-w840 sm:w-full ml-auto mr-auto mb-2 py-6 mt-10">
            <div id="utility-custom-dots" class="owl-dots flex items-start">
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Max Space
                    </span>
                    <span class="stitle utility-storage-slide-stitle sm:text-xs">
                        Seats fold flat for all the space you need
                    </span>
                </button>
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Luggage
                    </span>
                    <span class="stitle utility-storage-slide-stitle sm:text-xs">
                        Carry all your things, anywhere you go
                    </span>
                </button>
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Bike
                    </span>
                    <span class="stitle utility-storage-slide-stitle sm:text-xs">
                        Fit your bike in the back, with the wheels on
                    </span>
                </button>
                <button role="button" class="owl-dot utility-storage-slide-dots">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Snowboard
                    </span>
                    <span class="stitle utility-storage-slide-stitle sm:text-xs">
                        Go on an adventure with the whole family
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "UtilityStorageCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>