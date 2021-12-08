<template>
    <div class="autopilot-slider-carousel pb-20">
        <carousel
                class="autopilot-slider"
                :autoplay="false"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :dotsContainer="'#autopilot-map-custom-dots'"
        >
            <div class="item relative">
                <video class="video hero-video w-full h-full object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/Model_X_Navigte_0.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item relative">
                <video class="video hero-video w-full h-full object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/summon.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item relative">
                <video class="video hero-video w-full h-full object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/parking_0.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item relative">
                <video class="video hero-video w-full h-full object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/lane_change.mp4" type="video/mp4">
                </video>
            </div>
        </carousel>
        <div class="range-map-dot-container utility-dots-container xl:w-w840 md:w-full ml-auto mr-auto mb-2 pb-6">
            <div id="autopilot-map-custom-dots" class="owl-dots flex items-start">
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50">
                    <span class="title utility-storage-slide-title sm:text-14 sm:leading-5 sm:mb-4">
                        Navigate on <br>
                        Autopilot
                    </span>
                    <span class="stitle block pt-4 text-14 font-medium leading-spc5 sm:text-xs sm:pb-3 sm:pt-0">
                        Active guidance from highway on-ramp to off-ramp
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14 sm:leading-5 sm:mb-4">
                        Summon
                    </span>
                    <span class="stitle block pt-4 text-14 font-medium leading-spc5 sm:text-xs sm:pb-3 sm:pt-0">
                        Automatically retrieve your car
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14 sm:leading-5 sm:mb-4">
                        Autopark
                    </span>
                    <span class="stitle block pt-4 text-14 font-medium leading-spc5 sm:text-xs sm:pb-3 sm:pt-0">
                        Parallel and perpendicular parking, with a single touch
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14 sm:leading-5 sm:mb-4">
                        Auto Lane Change
                    </span>
                    <span class="stitle block pt-4 text-14 font-medium leading-spc5 sm:text-xs sm:pb-3 sm:pt-0">
                        Automatically change lanes while driving on the highway
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "AutopilotFeatureCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>