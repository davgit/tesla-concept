<template>
    <div id="single-utility" class="pt-spc26 pl-8 pr-8 hidden">
        <div class="utility-single-box-width xl:max-w-laptopSize  md:max-w-full m-auto">

            <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:min-w-Min840 sm:min-w-full">
                <InfoBoxOne title="Best in Class Storage" desc="The all-electric powertrain in Model X allows for tremendous cargo capacity by eliminating the room needed for an engine, radiators, exhausts and other mechanical vehicle equipment. This extra space allows for best in class storage, and provides the capacity for a second trunk, located in the front." />
            </div>

            <!-- Utility Storage Carousel -->
            <UtilityStorageCarousel />

            <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:min-w-Min840 sm:min-w-full">
                <InfoBoxOne title="Seating for up to Seven" desc="Designed to maximize passenger comfort, Model X has five, six and seven seat configuration options to suit the specific needs of you and your family. Second and third row seats can fold flat when not in use, allowing for more interior cargo space." />
            </div>

            <!-- Utility Seat Carousel-->
            <UtilitySeatingCarousel />


            <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:min-w-Min840 sm:min-w-full z-10 relative">
                <h1 class="text-size28 text-primary font-semibold leading-9 tracking-space3 text-dark_gray pb-4">
                    Falcon Wing Doors
                </h1>
                <p class="text-14 leading-spc5 pb-space1 text-dark_gray font-medium">
                    The Falcon Wing doors enhance accessibility to the second and third rows, and are capable of opening in
                    <br>even the tightest parking spaces. Each door is equipped with sensors to monitor the proximity of
                    <br>surroundings and smoothly open, up and out of the way.
                </p>
            </div>

            <div class="falcon-wing-doors-img">
                <img src="../../../assets/images/doors2.jpg" alt="Doors">
            </div>

            <div class="utility-slider-1-best-storage ml-auto mr-auto mb-4 lg:max-w-Max840 sm:min-w-full">
                <InfoBoxOne title="Automatic Doors" desc="As you approach Model X the front doors automatically open. In the driver’s seat, you can close them with a tap of the brake pedal." />
            </div>

            <div class="automatic-door pb-20">
                <video muted autoplay playsinline data-keepplaying loop class="video block w-full">
                    <source src="../../../assets/videos/door.mp4" type="video/mp4">
                </video>
            </div>

            <!-- Utility Towing Capacity -->
            <UtilityTowingCapacity />

            <div class="towing-img pb-24">
                <img class="w-full" src="../../../assets/images/towing2.jpg" alt="Towing">
            </div>


        </div>

        <!-- Single Section Close Button -->
        <SingleSectionCloseBtn url="#utility-banner" idname="utility-single-close-btn" nextBtnUrl="#range-area" nextBtnId="utility-single-close-btn" />
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import UtilityStorageCarousel from "../../others/sliders/UtilityStorageCarousel";
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import UtilitySeatingCarousel from "../../others/sliders/UtilitySeatingCarousel";
    import UtilityTowingCapacity from "./UtilityTowingCapacity";

    export default {
        name: "UtilitySingle",
        components: {
            UtilityTowingCapacity,
            UtilitySeatingCarousel,
            SingleSectionCloseBtn,
            UtilityStorageCarousel,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>