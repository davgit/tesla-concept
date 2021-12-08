<template>
    <div class="car-solid-clr-carousel relative">
        <div class="utility-slider-1-best-storage z-10 ml-auto mr-auto mb-4 xl:w-w840 xl:px-0 absolute pb-spc19 md:w-w420 md:px-2 sm:px-2">
            <h1 class="text-size28 text-black font-semibold leading-9 tracking-space3 pb-4">
                Signature Colors
            </h1>
            <p class="text-14 leading-spc5 pb-space1 text-black font-medium">
                Customize Model X with <br class="xl:block lg:block hidden">
                signature, multi-layered paint
            </p>
            <SingleRoundButton url="#" classname="py-spc25 px-10 text-dark_gray border-black hover:text-white hover:bg-primary" title="Design your Model X" />
        </div>

        <carousel
                class="car-solid-clr-slider h-h938 xl:h-h938 lg:h-h938 w-full md:h-auto"
                :autoplay="false"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="true"
                :animateIn="'fadeIn'"
                :animateOut="'fadeOut'"
                :navText="[prevText, nextText]"
                :dotsContainer="'#car-solid-clr-dots'"
                :responsive="{
                    0: {
                        items: 1,
                        nav: false
                    },
                    450: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                    }
                }" >
            <div class="clr-slider-item bg-cover bg-center md:bg-no-repeat h-h938 xl:h-h938 lg:h-h938 w-full md:h-size540 sm:h-size540">
                <img src="../../../assets/images/car-clr.png" alt="Car">
            </div>
            <div class="clr-slider-item bg-cover bg-center md:bg-no-repeat h-h938 xl:h-h938 lg:h-h938 w-full md:h-size540 sm:h-size540 bg2">
                <img src="../../../assets/images/car-clr-2.png" alt="Car">
            </div>
            <div class="clr-slider-item bg-cover bg-center md:bg-no-repeat h-h938 xl:h-h938 lg:h-h938 w-full md:h-size540 sm:h-size540 bg3">
                <img src="../../../assets/images/car-clr-3.png" alt="Car">
            </div>
            <div class="clr-slider-item bg-cover bg-center md:bg-no-repeat h-h938 xl:h-h938 lg:h-h938 w-full md:h-size540 sm:h-size540 bg4">
                <img src="../../../assets/images/car-clr-4.png" alt="Car">
            </div>
            <div class="clr-slider-item bg-cover bg-center md:bg-no-repeat h-h938 xl:h-h938 lg:h-h938 w-full md:h-size540 sm:h-size540 bg5">
                <img src="../../../assets/images/car-clr-5.png" alt="Car">
            </div>
        </carousel>
        <div id="car-solid-clr-dots" class="owl-dots absolute flex items-center z-10">
            <button class="bg-white relative owl-dot"></button>
            <button class="bg-gray-700 relative owl-dot"></button>
            <button class="bg-black relative owl-dot"></button>
            <button class="bg-red-700 relative owl-dot"></button>
            <button class="bg-blue-700 relative owl-dot"></button>
        </div>
    </div>
</template>

<script>
    import SingleRoundButton from "../../common/SingleRoundButton";
    import carousel from "vue-owl-carousel";

    export default {
        name: "ExteriorCarColorCarousel",
        components: {
            SingleRoundButton,
            carousel
        },
        data() {
            return {
                prevText: '<svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57.1 75.4l7.1-7.1L45.9 50l18.3-18.3-7.1-7.1L31.8 50"></path></svg>',
                nextText: '<svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polyline points="42.9 24.6 35.8 31.7 54.1 50 35.8 68.3 42.9 75.4 68.2 50"></polyline></svg>'
            }
        }
    }
</script>

<style scoped>

</style>