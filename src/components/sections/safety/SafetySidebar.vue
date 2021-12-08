<template>
    <div class="safety-sidebar bg-white pt-12 px-spc11 relative lg:block sm:hidden">
        <div class="safety-sidebar-top">
            <InfoBoxOne
                stitle="Safety"
                title="The Safest SUV"
                desc="Model X is one of the safest SUVs ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide a very low probability of occupant injury."/>

            <!-- Rating -->
            <div class="rating-wrapper p-6">
                <h1 class="rating-title text-xl font-semibold text-dark_gray leading-7 text-center pb-4">
                    5-Star Overall NHTSA Rating
                </h1>
                <RatingOne />
            </div>

        </div>
        <div class="safety-sidebar-bottom lg:absolute sm:relative">
            <div class="single-details-buttons flex items-center">
                <div class="left mr-5">
                    <TextButton url="#safety-single" idname="safety-single-btn" title="Learn More" />
                </div>
                <div class="right">
                    <SingleRoundButton title="Order Now" url="#" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:bg-primary hover:text-white" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    import RatingOne from "../../others/ratings/RatingOne";
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "SafetySidebar",
        components: {SingleRoundButton, TextButton, RatingOne, InfoBoxOne}
    }
</script>

<style scoped>

</style>