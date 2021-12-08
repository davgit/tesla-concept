<template>
    <div class="performance-electric-carousel pb-20">
        <carousel
                class="performance-electric-slider"
                :autoplay="true"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :animateIn="'fadeIn'"
                :animateOut="'fadeOut'"
                :dotsContainer="'#performance-electric-custom-dots'"
        >
            <div class="item relative">
                <video class="video hero-video w-full h-h500 object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/performancemotor_desktop.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item relative">
                <video class="video hero-video w-full h-h500 object-cover left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                    <source src="../../../assets/videos/performancemotor_desktop_2.mp4" type="video/mp4">
                </video>
            </div>
        </carousel>
        <div class="range-map-dot-container utility-dots-container xl:w-w840 ml-auto mr-auto mb-2 py-6 md:w-full">
            <div id="performance-electric-custom-dots" class="owl-dots flex items-start">
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex p-4 relative opacity-50">
                    <span class="title utility-storage-slide-title xl:text-size18 md:text-14">
                        Long Range Plus
                    </span>
                    <span class="stitle block text-xs pb-2 text-dark_gray leading-spc3 md:tracking-widest md:pb-3">
                        Premium option with all-wheel drive and longest range
                    </span>
                    <span class="acceleration-value-flex w-full flex items-center xl:mt-5 xl:flex-no-wrap xl:flex-row md:flex-wrap md:flex-col md:mt-0">
                        <span class="acceleration-value-left flex text-2xl leading-7 text-primary font-semibold tracking-space4 w-full flex-1 pr-6 xl:mb-0 md:mb-4">
                            4.4s
                            <span class="text-xs leading-spc3 text-dark_gray xl:ml-2 md:ml-3">0-60 <br>mph</span>
                        </span>
                        <span class="acceleration-value-right flex text-2xl leading-7 text-primary font-semibold tracking-space4 w-full flex-1">
                            351
                            <span class="text-xs leading-spc3 text-dark_gray xl:ml-2 md:ml-6">mile <br>range</span>
                        </span>
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title xl:text-size18 md:text-14">
                        Performance
                    </span>
                    <span class="stitle block pt-3 text-xs pb-2 text-dark_gray leading-spc3 md:tracking-widest md:pb-3">
                        Performance option with all-wheel drive and ludicrous acceleration
                    </span>
                    <span class="acceleration-value-flex w-full flex items-center xl:flex-no-wrap xl:flex-row md:flex-wrap md:flex-col md:mt-0">
                        <span class="acceleration-value-left flex text-2xl leading-7 text-primary font-semibold tracking-space4 w-full flex-1 pr-6 xl:mb-0 md:mb-4">
                            2.6s
                            <span class="text-xs leading-spc3 text-dark_gray xl:ml-2 md:ml-3">0-60 <br>mph</span>
                        </span>
                        <span class="acceleration-value-right flex text-2xl leading-7 text-primary font-semibold tracking-space4 w-full flex-1">
                            305
                            <span class="text-xs leading-spc3 text-dark_gray xl:ml-2 md:ml-spc30">mile <br>range</span>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "PerformanceElectricCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>