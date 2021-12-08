<template>
    <div class="rating-storage-wrap lg:w-w840 m-auto flex justify-between pb-20 lg:flex-row lg:flex-no-wrap sm:flex-wrap sm:flex-col sm:w-w420 sm:ml-auto sm:mr-auto">
        <div class="rating-copy lg:max-w-Maxw300 sm:max-w-full">
            <InfoBoxOne title="5-Star Safety Rating" desc="Model X is the first SUV to achieve a US NHTSA 5-star safety rating in every category and subcategory, has incredible side impact protection and one of the lowest rollover risks of any SUV on the road." />
        </div>
        <div class="rating-card lg:w-w55p sm:w-full flex justify-between">
            <div class="rating-header lg:w-w45p sm:w-auto border-solid border-3 border-black p-5 flex justify-between flex-col">
                <h1 class="lg:text-size56 sm:text-4xl flex justify-center lg:leading-spc6 sm:leading-9 font-bold items-start text-dark_gray">
                    5&nbsp;<span class="inline-block lg:text-xl sm:text-xs">★</span>
                </h1>
                <h2 class="leading-none lg:text-size26 sm:text-base font-semibold text-dark_gray">
                    Overall NHTSA Rating
                </h2>
            </div>
            <div class="w-w55p lg:pl-8 sm:pl-0 w-full">
                <RatingOne />
            </div>
        </div>
    </div>
</template>

<script>
    import RatingOne from "../../others/ratings/RatingOne";
    import InfoBoxOne from "../../others/infoboxes/InfoBoxOne";
    export default {
        name: "SafetyRatings",
        components: {
            InfoBoxOne,
            RatingOne
        }
    }
</script>

<style scoped>

</style>