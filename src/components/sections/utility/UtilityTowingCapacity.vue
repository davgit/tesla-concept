<template>
    <div class="utility-slider-1-best-storage towing-capacity ml-auto mr-auto mb-4 pb-5 lg:min-w-Min840 xl:flex-no-wrap xl:flex-row md:min-w-full flex justify-between md:flex-wrap md:flex-col">
        <div class="cmp-rich-heading lg:w-6/12 sm:w-full">
            <InfoBoxOne title="Towing Capacity" desc="Model X has incredible torque, and the capability to tow up to 5,000 pounds—allowing you to go anywhere, anytime." />
        </div>
        <ul class="cmp-rich-list flex my-2 items-start">
            <li class="flex pb-spc6 mr-spc6 pr-spc6 relative w-2/4 clear-both pt-6">
                <span class="title text-size28 tracking-space3 leading-none font-semibold text-dark_gray pr-spc6">
                    5000
                </span>
                <span class="stitle text-size10 leading-spc7">
                    lb Towing <br>Limit
                </span>
            </li>
            <li class="flex pb-spc6 ml-spc6 pl-spc6 relative w-2/4 clear-both pt-6">
                <span class="title text-size28 tracking-space3 leading-none font-semibold text-dark_gray pr-spc6">
                    750+
                </span>
                <span class="stitle text-size10 leading-spc7">
                    lb-ft <br>Torque
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    export default {
        name: "UtilityTowingCapacity",
        components: {
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>