<template>
    <div id="single-exterior" class="hidden">
        <!-- Exterior Car Color Carousel -->
        <ExteriorCarColorCarousel />

        <div class="car-carousel-two relative">
            <div class="utility-slider-1-best-storage z-10 top-0 ml-auto mr-auto mb-4 xl:w-w840 absolute pb-spc19 md:w-w420 md:pb-0">
                <h1 class="text-size28 text-black font-semibold leading-9 tracking-space3 pb-4">
                    Wheels
                </h1>
                <p class="text-14 leading-spc5 pb-space1 text-black font-medium xl:block lg:block hidden">
                    Customize Model X with <br>
                    signature, multi-layered paint
                </p>
                <p class="text-14 leading-spc5 pb-space1 text-black font-medium md:block xl:hidden lg:hidden">
                    Experience enhanced handling, traction and acceleration <br>with our 20” or 22” wheels.
                </p>
            </div>

            <!-- Exterior Car Wheel Carousel -->
            <ExteriorCarWheelCarousel />

            <!-- Exterior Car Tire Carousel -->
            <ExteriorCarTireCarousel />
        </div>

        <div class="attention-details-wrap bg-black pb-24 pt-spc19">
            <div class="attention-details-box-width xl:w-largeDesktop2 ml-auto mr-auto md:w-w550">
                <!-- Exterior Attention Detail Top -->
                <ExteriorAttentionDetailTop />

                <!-- Exterior Attention Detail Bottom -->
                <ExteriorAttentionDetailBottom />

            </div>

        </div>


        <SingleSectionCloseBtn url="#exterior-banner" idname="exterior-single-close-btn" nextBtnUrl="#specs-area" nextBtnId="exterior-single-close-btn" />
    </div>
</template>

<script>
    import ExteriorCarColorCarousel from "../../others/sliders/ExteriorCarColorCarousel";
    import ExteriorCarWheelCarousel from "../../others/sliders/ExteriorCarWheelCarousel";
    import ExteriorCarTireCarousel from "../../others/sliders/ExteriorCarTireCarousel";
    import ExteriorAttentionDetailTop from "./ExteriorAttentionDetailTop";
    import ExteriorAttentionDetailBottom from "./ExteriorAttentionDetailBottom";
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    export default {
        name: "ExteriorSingle",
        components: {
            SingleSectionCloseBtn,
            ExteriorAttentionDetailBottom,
            ExteriorAttentionDetailTop,
            ExteriorCarTireCarousel,
            ExteriorCarWheelCarousel,
            ExteriorCarColorCarousel
        }
    }
</script>

<style scoped>

</style>