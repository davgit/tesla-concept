<template>
    <div class="utility-storage-carousel2 pb-10">
        <div class="utility-storage-slider2 lg:pb-0 sm:pb-6 relative">
            <carousel
                :autoplay="true"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :loop="true"
                :dots="true"
                :nav="true"
                :navText="[prevText, nextText]"
                :responsive="{
                    0: {
                        items: 1,
                        nav: false
                    },
                    450: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                    }
                }" >
                <div class="item">
                    <img src="../../../assets/images/seating-gallery-1.jpg" alt="Seat">
                    <p class="caption text-dark_gray lg:w-w840 sm:w-w420 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium">
                        <strong class="">Seven Seat</strong> Maximum passenger and cargo capacity, with seating for seven adults.
                    </p>
                </div>
                <div class="item">
                    <img src="../../../assets/images/seating-gallery-2.jpg" alt="Seat">
                    <p class="caption text-dark_gray lg:w-w840 sm:w-w420 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium">
                        <strong class="">Six Seat</strong> Enhanced seating for six adults, with open access between the second and third row.
                    </p>
                </div>
                <div class="item">
                    <img src="../../../assets/images/seating-gallery-3.jpg" alt="Seat">
                    <p class="caption text-dark_gray lg:w-w840 sm:w-w420 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium">
                        <strong class="">Five Seat</strong> Comfortable seating for five adults in two rows.
                    </p>
                </div>
            </carousel>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "UtilitySeatingCarousel",
        components: {
            carousel
        },
        data() {
            return {
                prevText: '<svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57.1 75.4l7.1-7.1L45.9 50l18.3-18.3-7.1-7.1L31.8 50"></path></svg>',
                nextText: '<svg class="tds-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polyline points="42.9 24.6 35.8 31.7 54.1 50 35.8 68.3 42.9 75.4 68.2 50"></polyline></svg>'
            }
        }
    }
</script>

<style scoped>

</style>