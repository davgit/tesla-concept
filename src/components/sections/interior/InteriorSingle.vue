<template>
    <div id="single-interior" class="pt-spc26 px-8 bg-black hidden">
        <div class="single-interior-box max-w-laptopSize m-auto">

            <!-- Interior Slider -->
            <InteriorSliderOne />

            <div class="utility-slider-1-best-storage better-over-time ml-auto mr-auto mb-4 xl:max-w-Max840 xl:w-full md:w-w420">
                <h1 class="text-size28 text-white font-semibold leading-9 tracking-space3 pb-4">
                    Better Over Time
                </h1>
                <p class="text-14 leading-spc5 pb-space1 text-white font-medium">
                    Access everything on the expansive 17-inch touchscreen—designed to improve <br>
                    over time with regular software updates, introducing new features, functionality <br>
                    and performance.
                </p>
            </div>

            <!-- Interior Slider two -->
            <InteriorSliderTwo />

            <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 xl:max-w-Max840 xl:w-full md:w-w420">
                <h1 class="text-size28 text-white font-semibold leading-9 tracking-space3 pb-4">
                    Panoramic Windshield
                </h1>
                <p class="text-14 leading-spc5 pb-space1 text-white font-medium xl:block lg:block md:hidden">
                    The largest all glass panoramic windshield in production provides a seamless <br>view of the stars and sky above. Optimized solar tinting and an obstruction-<br>free view creates unlimited visibility for the driver and up to six passengers.
                </p>
                <p class="text-14 leading-spc5 pb-space1 text-white font-medium md:block lg:hidden">
                    Tesla's quiet powertrain and meticulous noise suppression engineering create interior sound dynamics comparable to a recording studio.
                </p>
            </div>
            <div class="panoramic-img-box pb-20 xl:w-full md:w-w550 md:ml-auto md:mr-auto">
                <img src="../../../assets/images/panowind.jpg" alt="Panoramic">
            </div>

            <div class="premium-interior-box pb-24">
                <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 xl:max-w-Max840 xl:w-full pb-spc19 md:w-w420 md:pb-0">
                    <h1 class="text-size28 text-white font-semibold leading-9 tracking-space3 pb-4">
                        Premium Interior
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-white font-medium">
                        Tesla's quiet powertrain and meticulous noise suppression engineering create interior sound dynamics comparable to a recording studio.
                    </p>
                </div>

                <div class="premium-interior-box">

                    <!-- Interior Pollution -->
                    <InteriorPollution />

                    <!-- Interior Weather -->
                    <InteriorWeather />

                    <!-- Interior Pristine -->
                    <InteriorPristine />
                </div>
            </div>

        </div>

        <SingleSectionCloseBtn url="#interior-banner" idname="interior-single-close-btn" nextBtnUrl="#exterior-area" nextBtnId="interior-single-close-btn" />
    </div>
</template>

<script>
    import InteriorSliderOne from "../../others/sliders/InteriorSliderOne";
    import InteriorSliderTwo from "../../others/sliders/InteriorSliderTwo";
    import InteriorPollution from "./InteriorPollution";
    import InteriorWeather from "./InteriorWeather";
    import InteriorPristine from "./InteriorPristine";
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    export default {
        name: "InteriorSingle",
        components: {
            SingleSectionCloseBtn,
            InteriorPristine,
            InteriorWeather,
            InteriorPollution,
            InteriorSliderTwo,
            InteriorSliderOne
        }
    }
</script>

<style scoped>

</style>