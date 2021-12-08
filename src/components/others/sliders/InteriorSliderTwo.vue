<template>
    <div class="range-map-carousel pb-20">
        <carousel
                class="interior-bottom-slider"
                :autoplay="true"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :animateIn="'fadeIn'"
                :animateOut="'fadeOut'"
                :dotsContainer="'#interior-bottom-slider-custom-dots'"
        >
            <div class="item relative">
                <img src="../../../assets/images/screen1.jpg" alt="screen 1">
            </div>
            <div class="item relative">
                <img src="../../../assets/images/screen2.jpg" alt="screen 2">
            </div>
            <div class="item relative">
                <img src="../../../assets/images/screen3.jpg" alt="screen 3">
            </div>
            <div class="item relative">
                <img src="../../../assets/images/screen4.jpg" alt="screen 4">
            </div>
        </carousel>
        <div class="range-map-dot-container utility-dots-container xl:w-w840 ml-auto mr-auto mb-2 py-6 mt-10 md:w-full">
            <div id="interior-bottom-slider-custom-dots" class="owl-dots flex">
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50">
                            <span class="title utility-storage-slide-title md:text-14">
                                Media
                            </span>
                    <span class="stitle block pt-4 text-xs font-medium leading-spc3 tracking-space2 pb-2 md:text-xs">
                                FM radio and Bluetooth® connectivity, with on-demand & internet radio capability
                            </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                            <span class="title utility-storage-slide-title md:text-14">
                                Navigation
                            </span>
                    <span class="stitle block pt-4 text-xs font-medium leading-spc3 tracking-space2 pb-2 md:text-xs">
                                Smart routing that automatically adjusts to real-time traffic conditions
                            </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                            <span class="title utility-storage-slide-title md:text-14">
                                Controls
                            </span>
                    <span class="stitle block pt-4 text-xs font-medium leading-spc3 tracking-space2 pb-2 md:text-xs">
                                Personalized drive settings, climate controls and cabin controls
                            </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                            <span class="title utility-storage-slide-title md:text-14">
                                Energy
                            </span>
                    <span class="stitle block pt-4 text-xs font-medium leading-spc3 tracking-space2 pb-2 md:text-xs">
                                Real-time energy consumption and range estimation
                            </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "InteriorSliderTwo",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>