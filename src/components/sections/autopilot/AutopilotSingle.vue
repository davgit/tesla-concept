<template>
    <div id="single-autopilot" class="pt-spc26 px-8 hidden">
        <div class="single-autopilot-details-box max-w-laptopSize m-auto relative">

            <div class="utility-single-box-width  absolute left-0 top-0 z-10 w-full">
                <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:max-w-Max840 sm:w-w420">
                    <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                        Features
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium">
                        Autopilot enables your car to steer, accelerate and brake automatically within <br class="lg:block sm:hidden">
                        its lane. Full Self-Driving Capability introduces additional features and improves <br class="lg:block sm:hidden">
                        existing functionality to make your car more capable over time including:
                    </p>
                </div>
            </div>

            <!-- Autopilot Feature Carousel -->
            <AutopilotFeatureCarousel />


            <!-- Autopilot Indicators -->
            <AutopilotIndicators />
        </div>

        <div class="full-self-driving-box ml-auto mr-auto lg:max-w-Max840 xl:w-full md:w-w420  pb-20">
            <div class="utility-single-box-width z-10 relative w-full">
                <div class="full-self-driving-heading ml-auto mr-auto mb-4">
                    <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                        Full Self-Driving Hardware
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium lg:w-w370 sm:w-full">
                        Every new Model X comes standard with <br>
                        advanced hardware capable of providing <br>
                        Autopilot features today, and full self-driving <br>
                        capabilities in the future—through software <br>
                        updates designed to improve functionality over time.
                    </p>
                </div>
            </div>

            <div class="full-self-driving-img-box relative w-w1505 h-h1020 relative">
                <img src="../../../assets/images/modelx_top_view.jpg" alt="Model x" class="car-img w-full">
                <img src="../../../assets/images/layer2.png" alt="Shape" class="shape absolute left-0 top-0 w-full">
            </div>
        </div>

        <div class="future-autopilot xl:max-w-laptopSize m-auto pb-24 sm:w-full md:w-full">
            <div class="future-autopilot-flex flex items-center lg:flex-row sm:flex-col">
                <div class="future-autopilot-left lg:w-w560 sm:w-full lg:order-1 sm:order-2 flex-1">
                    <video class="video hero-video w-full h-full object-contain left-0 top-0" muted loop autoplay playsinline data-keepplaying>
                        <source src="../../../assets/videos/the_future_of_autopilot_1.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="future-autopilot-right xl:pl-10 sm:w-full md:pl-0 lg:w-2/6 xl:w-w420 md:w-w420 md:ml-auto md:mr-auto lg:order-2 sm:order-1 md:mb-4">
                    <InfoBoxOne title="The Future of Autopilot" desc="All Tesla vehicles have the hardware needed in the future for full self-driving in almost all circumstances, at a safety level we believe will be at least twice as good as the average human driver." />
                </div>
            </div>
        </div>

        <SingleSectionCloseBtn url="#autopilot-banner" idname="autopilot-single-close-btn" nextBtnUrl="#performance-area" nextBtnId="autopilot-single-close-btn" />

    </div>
</template>

<script>
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import AutopilotIndicators from "./AutopilotIndicators";
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import AutopilotFeatureCarousel from "../../others/sliders/AutopilotFeatureCarousel";
    export default {
        name: "AutopilotSingle",
        components: {
            AutopilotFeatureCarousel,
            InfoBoxOne,
            AutopilotIndicators,
            SingleSectionCloseBtn
        }
    }
</script>

<style scoped>

</style>