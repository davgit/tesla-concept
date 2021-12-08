<template>
    <div class="premium-interior-flex flex items-center xl:flex-no-wrap xl:flex-row md:flex-wrap md:flex-col">
        <div class="premium-interior-left relative xl:w-6/12 md:w-w550">
            <video loop muted autoplay playsinline data-keepplaying class="video block w-full xl:pl-spc27 md:pl-0">
                <source src="../../../assets/videos/hepa_sm_0.mp4" type="video/mp4">
            </video>
        </div>
        <div class="premium-interior-right w-6/12 px-spc19 xl:max-w-Max420 xl:w-full md:w-w420 md:ml-auto md:mr-auto md:py-6 md:px-0">
            <h3 class="text-14 font-bold text-white py-2 leading-spc5 tracking-space2">
                Pollution-Free, Inside and Out
            </h3>
            <p class="text-14 leading-spc5 text-white">
                Hospital-grade air quality is delivered through a HEPA filtration system to prevent viruses and bacteria from entering the cabin.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InteriorPollution"
    }
</script>

<style scoped>

</style>