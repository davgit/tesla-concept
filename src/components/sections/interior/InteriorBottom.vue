<template>
    <div class="utility-banner-bottom xl:w-largeDesktop ml-auto mr-auto px-spc15 flex h-h250 md:w-full">
        <div class="utility-banner-bottom-left min-w-spMin1 py-12">
            <InfoBoxOne stitle="Interior" title="Built Around the Driver" />
            <p class="rp text-14 text-dark_gray leading-spc5 pb-space1 font-medium hidden">
                Model X is built to provide the most convenient interior experience ever—with best in class storage, seating for up to seven adults and an expansive 17-inch touchscreen. A seven-seat configuration option comes standard with fold-flat seats for maximum cargo space.
            </p>
            <div class="single-details-buttons flex items-center mt-4">
                <div class="left mr-5">
                    <TextButton url="#single-interior" idname="interior-single-btn" title="Learn More" />
                </div>
                <div class="right">
                    <SingleRoundButton url="#" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" title="Order Now" />
                </div>
            </div>
        </div>
        <div class="utility-banner-bottom-right rp-none py-12">
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium">
                Model X is built to provide the most convenient interior experience ever—with best in class storage, seating for up to seven adults and an expansive 17-inch touchscreen. A seven-seat configuration option comes standard with fold-flat seats for maximum cargo space.
            </p>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "InteriorBottom",
        components: {
            SingleRoundButton,
            TextButton,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>