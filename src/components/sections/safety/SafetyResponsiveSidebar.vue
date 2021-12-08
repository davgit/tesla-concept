<template>
    <div class="safety-sidebar bg-white py-12 px-spc11 relative lg:hidden sm:flex items-start responsive-sidebar">
        <div class="section-title w-2/5 flex-1 pb-12">

            <InfoBoxOne stitle="Safety" title="The Safest SUV" />

            <div class="safety-sidebar-bottom relative mt-4">
                <div class="single-details-buttons flex items-center">
                    <div class="left mr-5">
                        <TextButton url="#safety-single" idname="safety-single-btn" title="Learn More" />
                    </div>
                    <div class="right">
                        <SingleRoundButton title="Order Now" url="#" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" />
                    </div>
                </div>
            </div>

        </div>

        <InfoBoxOne desc="Model X is one of the safest SUVs ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide a very low probability of occupant injury." />

    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import SingleRoundButton from "../../common/SingleRoundButton";
    import TextButton from "../../common/TextButton";
    export default {
        name: "SafetyResponsiveSidebar",
        components: {TextButton, SingleRoundButton, InfoBoxOne}
    }
</script>

<style scoped>

</style>