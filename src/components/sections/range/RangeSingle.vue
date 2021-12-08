<template>
    <div id="single-range" class="pt-spc26 pl-8 pr-8 hidden">
        <div class="single-range-details-box max-w-laptopSize m-auto">

            <div class="utility-single-box-width">
                <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:min-w-Min840 sm:w-w420 sm:min-w-full w-full">
                    <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                        Go Anywhere
                    </h1>
                    <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium">
                        Experience the freedom of long-distance travel with convenient <br class="xl:block lg:block: md:block hidden">
                        access to the Tesla global charging network.
                    </p>
                </div>
            </div>

            <!-- Map Range Carousel -->
            <RangeMapCarousel />

            <div class="utility-single-box-width">
                <div class="utility-slider-1-best-storage charge-anywhere ml-auto mr-auto mb-4 lg:min-w-Min840 sm:w-420 sm:min-w-full">
                    <InfoBoxOne title="Charge Anywhere" desc="Stay charged with convenient options anywhere you go — at home, on the road and upon arrival." />
                </div>
            </div>

            <!-- Range Charging Anywhere-->
            <RangeChargingCarousel />

            <div class="range-supercharge utility-single-box-width pb-20">
                <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 max-w-Max840">
                    <InfoBoxOne title="Supercharge" desc="Charge for about 15 minutes while you grab a cup of coffee or a quick bite to eat. And with over 16,000 Superchargers placed along well-traveled routes around the world, Model X can get you anywhere you want to go." />
                </div>

                <div class="map-container relative">
                    <!-- Range World Wide Map -->
                    <RangeMap />

                    <div class="supercharge-value relative z-10 border-solid border-3 border-black lg:py-5 lg:pr-5 lg:pl-space2 sm:py-2 sm:pr-spc6 sm:pl-2 flex flex-col ml-48">
                        <h1 class="text-size28 tracking-space3 leading-9 font-semibold text-primary">
                            16,000+
                        </h1>
                        <h2 class="lg:text-2xl sm:text-size10 tracking-space4 text-primary font-semibold">
                            Superchargers
                        </h2>
                        <h5 class="lg:text-2xl sm:text-size10 leading-relaxed tracking-space4 text-primary font-semibold lg:mt-16 sm:mt-8">
                            1,800+ Stations
                        </h5>
                    </div>
                    <SingleRoundButton url="#" classname="py-1 pl-8 pr-8 absolute text-dark_gray border-black hover:text-white hover:bg-primary" title="Learn More" />
                </div>
            </div>

        </div>
        <SingleSectionCloseBtn url="#range-banner" idname="range-single-close-btn" nextBtnUrl="#autopilot-area" nextBtnId="range-single-close-btn" />
    </div>
</template>

<script>
    import RangeMapCarousel from "../../others/sliders/RangeMapCarousel";
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import RangeChargingCarousel from "../../others/sliders/RangeChargingCarousel";
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import SingleRoundButton from "../../common/SingleRoundButton";
    import RangeMap from "./RangeMap";

    export default {
        name: "RangeSingle",
        components: {
            RangeMap,
            SingleRoundButton,
            SingleSectionCloseBtn,
            RangeChargingCarousel,
            InfoBoxOne,
            RangeMapCarousel
        }
    }
</script>

<style scoped>

</style>