<template>
    <div class="utility-banner-bottom lg:w-largeDesktop sm:w-full ml-auto mr-auto px-spc15 flex h-h250">
        <div class="utility-banner-bottom-left min-w-spMin1 py-12">
            <!-- InfoBox -->
            <InfoBoxOne stitle="Utility" title="Room for Everything" />

            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium hidden tablet-rp-none pt-4">
                Model X has the most storage room of any SUV in its class, comfortable seating for up to seven adults and the capability to tow up to 5,000 pounds. Falcon Wing doors are equipped with sensors to monitor the proximity of surroundings, and can open in even the tightest parking spaces.
            </p>
            <div class="single-details-buttons flex items-center mt-4">
                <div class="left mr-5">
                    <TextButton
                            url="#single-utility"
                            idname="utility-single-btn"
                            title="Learn More" />
                </div>
                <div class="right">
                    <SingleRoundButton url="#" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" title="Order Now" />
                </div>
            </div>
        </div>
        <div class="utility-banner-bottom-right py-12">
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium xl:block lg:block hidden tablet-rp">
                Model X has the most storage room of any SUV in its class, comfortable seating for up to seven adults and the capability to tow up to 5,000 pounds. Falcon Wing doors are equipped with sensors to monitor the proximity of surroundings, and can open in even the tightest parking spaces.
            </p>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "UtilityBottom",
        components: {
            SingleRoundButton,
            TextButton,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>