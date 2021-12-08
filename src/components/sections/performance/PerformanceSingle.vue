<template>
    <div id="single-performance" class="pt-spc26 px-8 hidden">
        <div class="single-performance-box max-w-laptopSize m-auto">

            <div class="utility-single-box-width">
                <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 xl:min-w-Min840 w-full md:w-w420 md:min-w-full">
                    <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                        Electric Powertrain
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium">
                        The all-electric powertrain and low center of gravity provide the <br class="xl:block lg:block hidden">
                        best performance, range and efficiency.
                    </p>
                </div>
            </div>

            <!-- Performance Electric Carousel -->
            <PerformanceElectricCarousel />

            <div class="future-autopilot-flex flex items-center pb-24 xl:flex-row flex-no-wrap md:flex-col">
                <div class="future-autopilot-left xl:w-w560 md:w-full xl:order-1 md:order-2 flex-1">
                    <video class="video hero-video w-full h-full object-contain left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                        <source src="../../../assets/videos/total-control-x_sm.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="future-autopilot-right xl:pl-10 md:pl-0 w-w420 xl:mb-0 xl:order-2 md:mb-3 md:order-1 flex-none">
                    <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                        Dual Motor <br>
                        All-Wheel Drive
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium xl:w-w370 md:w-full ">
                        Only Tesla has the technology that provides dual motors with independent traction to both front and rear wheels for unparalleled control, in all weather conditions. As a result, Model X instantly controls traction and torque to every wheel, with a unique and superior all-wheel drive system.
                    </p>
                </div>
            </div>

        </div>

        <SingleSectionCloseBtn url="#performance-banner" idname="performance-single-close-btn" nextBtnUrl="#interior-area" nextBtnId="performance-single-close-btn" />
    </div>
</template>

<script>
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import PerformanceElectricCarousel from "../../others/sliders/PerformanceElectricCarousel";
    export default {
        name: "PerformanceSingle",
        components: {
            PerformanceElectricCarousel,
            SingleSectionCloseBtn
        }
    }
</script>

<style scoped>

</style>