<template>
    <div class="specs-content-bottom pb-spc7 flex items-center text-white flex-flow ">
        <div class="bottom-item one h-full px-5">
            <h1 class="stars flex items-end justify-center text-center whitespace-no-wrap content-center mb-2">★★★★★</h1>
            <span class="text-xs font-medium">5-Star Safety</span>
        </div>
        <div class="bottom-item two h-full px-5">
            <h1 class="font-semibold flex items-center items-end justify-center text-center whitespace-no-wrap content-center text-size28"><img src="../../../assets/images/man-sit.svg" alt="Man Sit"> 7</h1>
            <span class="text-xs font-medium">Room for Seven</span>
        </div>
        <div class="bottom-item three h-full border-none px-5">
            <h1 class="tracking-space1 flex items-end justify-center text-center whitespace-no-wrap content-center text-size28 font-semibold">
                351 <span class="mi">mi</span>
            </h1>
            <span class="tracking-space2 text-xs font-medium leading-spc1 inline-block">Range <br>(EPA est.)</span>
        </div>
        <div class="bottom-item four pt-5 h-full border-none">
            <SingleRoundButton url="#" title="Order Now" classname="text-white hover:text-primary hover:bg-white" />
        </div>
    </div>
</template>

<script>
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "ModelXSpecs",
        components: {SingleRoundButton}
    }
</script>

<style scoped>

</style>