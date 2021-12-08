<template>
    <div class="car-tire-slider-box z-10 absolute w-w840 xl:w-w840 ml-auto mr-auto md:w-full">
        <carousel
                class="car-tire-slider"
                :autoplay="false"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :animateIn="'fadeIn'"
                :animateOut="'fadeOut'"
                :dotsContainer="'#car-tire-dots'"
        >
            <div class="car-tire-item bg-top bg-no-repeat xl:w-w840 h-h345 xl:h-h345 md:h-spc33 md:ml-auto md:mr-auto"></div>
            <div class="car-tire-item bg-top bg-no-repeat xl:w-w840 h-h345 xl:h-h345 md:h-spc33 md:ml-auto md:mr-auto bg2"></div>
            <div class="car-tire-item bg-top bg-no-repeat xl:w-w840 h-h345 xl:h-h345 md:h-spc33 md:ml-auto md:mr-auto bg3"></div>
        </carousel>
        <div id="car-tire-dots" class="owl-dots flex items-start md:ml-auto md:mr-auto md:relative">
            <button class="owl-dot text-left items-start opacity-50">
                <img class="xl:w-w300 md:w-h250" src="../../../assets/images/tire-1.png" alt="Tire">
                <span class="title block text-14 leading-spc5 text-black font-semibold pt-spc6 relative">
                    20” Silver
                </span>
                <span class="stitle block text-xs text-black leading-spc3 pb-3 font-medium tracking-space2">
                    Standard wheels, with optimal traction and range in all weather conditions
                </span>
            </button>
            <button class="owl-dot text-left items-start opacity-50">
                <img class="xl:w-w300 md:w-h250" src="../../../assets/images/tire-2.png" alt="Tire">
                <span class="title block text-14 leading-spc5 text-black font-semibold pt-spc6 relative">
                    20'' Two-Tone <br>Slipstream Wheels
                </span>
                <span class="stitle block text-xs text-black leading-spc3 pb-3 font-medium tracking-space2">
                    Standard wheels, with optimal traction and a sleek, upgraded aesthetic
                </span>
            </button>
            <button class="owl-dot text-left items-start opacity-50">
                <img class="xl:w-w300 md:w-h250" src="../../../assets/images/tire-3.png" alt="Tire">
                <span class="title block text-14 leading-spc5 text-black font-semibold pt-spc6 relative">
                    22” Onyx Black
                </span>
                <span class="stitle block text-xs text-black leading-spc3 pb-3 font-medium tracking-space2">
                    Premium wheels, with maximum performance and handling
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "ExteriorCarTireCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>