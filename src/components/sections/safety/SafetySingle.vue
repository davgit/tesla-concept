<template>
    <div id="safety-single" class="safety-single pt-spc26 relative pb-20 hidden">
        <!-- Safety Ratings -->
        <SafetyRatings />

        <!-- Safety Build Annotations -->
        <SafetyBuildAnnotation />

        <SingleSectionCloseBtn url="#safety-banner" idname="safety-single-close-btn" nextBtnUrl="#utility-area" nextBtnId="safety-single-close-btn" />

    </div>
</template>

<script>
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import SafetyBuildAnnotation from "./SafetyBuildAnnotation";
    import SafetyRatings from "./SafetyRatings";

    export default {
                name: "SafetySingle",
        components: {
            SafetyRatings,
            SafetyBuildAnnotation,
            SingleSectionCloseBtn
        }
    }
</script>

<style scoped>

</style>