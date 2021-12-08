<template>
    <div class="utility-banner-bottom xl:w-largeDesktop xl:bg-transparent ml-auto mr-auto px-spc15 flex h-h250 xl:flex-no-wrap xl:flex-row md:w-full md:bg-white md:flex-wrap md:flex-col">
        <div class="utility-banner-bottom-left min-w-spMin1 py-12">
            <span class="stitle block text-size17 leading-spc4 text-primary">
                Exterior
            </span>
            <h1 class="title text-size28 leading-9 font-semibold tracking-space3 text-dark_gray">
                Designed for <br class="xl:block hidden">Efficiency
            </h1>
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium hidden tablet-rp-none pt-4">
                Model X is built for efficiency—with an uncompromised design, allowing for industry-leading range, performance and utility. A spoiler provides incredible aerodynamics and the lowest drag coefficient of any vehicle in its class.
            </p>
            <div class="single-details-buttons flex items-center mt-4">
                <div class="left mr-5">
                    <TextButton url="#single-exterior" idname="exterior-single-btn" title="Learn More" />
                </div>
                <div class="right">
                    <SingleRoundButton url="#" title="Order Now" classname="py-spc6 pl-8 pr-8 text-dark_gray border-black hover:text-white hover:bg-primary" />
                </div>
            </div>
        </div>
        <div class="utility-banner-bottom-right py-12">
            <p class="text-14 text-dark_gray leading-spc5 pb-space1 font-medium xl:block lg:block hidden tablet-rp">
                Model X is built for efficiency—with an uncompromised design, allowing for industry-leading range, performance and utility. A spoiler provides incredible aerodynamics and the lowest drag coefficient of any vehicle in its class.
            </p>
        </div>
    </div>
</template>

<script>
    import TextButton from "../../common/TextButton";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "ExteriorBottom",
        components: {
            SingleRoundButton,
            TextButton
        }
    }
</script>

<style scoped>

</style>