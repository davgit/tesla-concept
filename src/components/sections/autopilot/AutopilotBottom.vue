<template>
    <div class="utility-banner-bottom lg:w-largeDesktop sm:w-full ml-auto mr-auto px-spc15 flex h-h250 sm:pr-5">
        <div class="utility-banner-bottom-left min-w-spMin1 py-12">

            <InfoBoxOne stitle="Autopilot" title="Future of Driving" />

            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium hidden pt-4 tablet-rp-none rp">
                Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.
            </p>
            <div class="single-details-buttons flex items-center mt-4">
                <div class="left mr-5">
                    <TextButton url="#single-autopilot" idname="autopilot-single-btn" title="Learn More" />
                </div>
                <div class="right">
                    <SingleRoundButton url="#" title="Order Now" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" />
                </div>
            </div>
        </div>
        <div class="utility-banner-bottom-right py-12">
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium xl:block lg:block hidden tablet-rp rp-none">
                Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.
            </p>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "AutopilotBottom",
        components: {
            SingleRoundButton,
            TextButton,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>