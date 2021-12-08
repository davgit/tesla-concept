<template>
    <div class="safety-sidebar bg-white pt-12 pl-6 pr-spc11 relative">
        <div class="safety-sidebar-top">
            <div class="section-title">
                <InfoBoxOne stitle="Range" title="Go Anywhere" desc="Model X can get you anywhere you want to go—with industry-leading range and convenient charging options, all over the world." />
            </div>
        </div>
        <div class="safety-sidebar-bottom absolute ">
            <div class="single-details-buttons flex items-center">
                <div class="left mr-5">
                    <TextButton
                        url="#single-range"
                        idname="range-single-btn"
                        title="Learn More"
                    />
                </div>
                <div class="right">
                    <SingleRoundButton
                        url="#"
                        classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary"
                        title="Order Now"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "RangeSidebar",
        components: {
            SingleRoundButton,
            TextButton,
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>