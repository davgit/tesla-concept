<template>
    <div class="utility-banner-bottom xl:w-largeDesktop ml-auto mr-auto px-spc15 flex h-h250 md:h-auto md:w-full">
        <div class="utility-banner-bottom-left min-w-spMin1 py-12">
            <InfoBoxOne stitle="Performance" title="The Quickest SUV" />
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium hidden tablet-rp-none rp pt-4">
                Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions, with Dual Motor All-Wheel Drive, adaptive air suspension and the quickest acceleration of any SUV on the road—from zero to 60 mph in 2.6 seconds.
            </p>
            <div class="single-details-buttons flex items-center mt-4">
                <div class="left mr-5">
                    <TextButton
                        url="#single-performance"
                        idname="performance-single-btn"
                        title="Learn More"
                    />
                </div>
                <div class="right">
                    <SingleRoundButton url="#" title="Order Now" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" />
                </div>
            </div>
        </div>
        <div class="utility-banner-bottom-right py-12 xl:block lg:block hidden tablet-rp rp-none">
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium">
                Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions, with Dual Motor All-Wheel Drive, adaptive air suspension and the quickest acceleration of any SUV on the road—from zero to 60 mph in 2.6 seconds.
            </p>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "PerformanceBottom",
        components: {
            SingleRoundButton,
            TextButton,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>