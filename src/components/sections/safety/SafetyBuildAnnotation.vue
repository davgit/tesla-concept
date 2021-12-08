<template>
    <div class="annotations-storage">
        <div class="annotations-copy">
            <div class="flex lg:w-w840 m-auto sm:w-w420 ">
                <div class="annotations-content lg:w-6/12 sm:w-full lg:pr-spc11 sm:pr-0">
                    <InfoBoxOne title="Built for Safety" desc="Model X is one of the safest SUVs ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide a very low probability of occupant injury." />
                </div>
            </div>
        </div>
        <div class="annotations-structure relative">
            <div class="structure--image bg-no-repeat bg-contain bg-center w-full mt-spc19"></div>
            <div class="annotations-numbers lg:hidden sm:flex absolute max-w-Max420 ml-auto mr-auto w-full h-full top-0">
                <span class="list-item absolute w-space2 h-space2 bg-black text-white text-center font-semibold rounded-full one">1</span>
                <span class="list-item absolute w-space2 h-space2 bg-black text-white text-center font-semibold rounded-full two">2</span>
                <span class="list-item absolute w-space2 h-space2 bg-black text-white text-center font-semibold rounded-full three">3</span>
            </div>
        </div>
        <ul class="image-annotations annotations-detail lg:w-w840 sm:w-w420 sm:mt-spc11 ml-auto mr-auto pl-4 xl:mt-0 mt-spc10s lg:mb-spc6 xl:flex-no-wrap xl:flex-row sm:mb-0 flex md:flex-wrap md:flex-col">
            <li class="annotations--front relative lg:w-1/3 xl:pb-0 xl:ml-0 md:w-full md:max-w-full md:ml-10 md:pb-6 md:font-bold">
                    <span class="list-title leading-spc5 font-semibold text-dark_gray text-14 block py-spc25">
                        Front-Impact Protection
                    </span>
                <p class="list-desc w-w90p pb-space1 leading-spc5 text-14 text-dark_gray font-medium">
                    There is no internal combustion engine in Model X, so the crumple zone has greater opportunity to minimize occupant deceleration in the event of frontal impact.
                </p>
            </li>
            <li class="annotations--top relative lg:w-1/3 xl:pb-0 xl:ml-0 md:w-full md:max-w-full md:ml-10 md:pb-6 md:font-bold">
                    <span class="list-title leading-spc5 font-semibold text-dark_gray text-14 block py-spc25">
                        Side-Impact Protection
                    </span>
                <p class="list-desc w-w90p pb-space1 leading-spc5 text-14 text-dark_gray font-medium">
                    The combination of a high-strength central pillar and an energy-absorbing sill structure provides exceptional protection to both the occupant and the under-floor mounted battery pack.
                </p>
            </li>
            <li class="annotations--bottom relative lg:w-1/3 xl:pb-0 xl:ml-0 md:w-full md:max-w-full md:ml-10 md:pb-6 md:font-bold">
                    <span class="list-title leading-spc5 font-semibold text-dark_gray text-14 block py-spc25">
                        Very Low Rollover Risk
                    </span>
                <p class="list-desc w-w90p pb-space1 leading-spc5 text-14 text-dark_gray font-medium">
                    The position and weight of the floor-mounted battery pack provides a very low center of gravity—allowing for a very low rollover risk.
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    export default {
        name: "SafetyBuildAnnotation",
        components: {
            InfoBoxOne
        }
    }
</script>

<style scoped>

</style>