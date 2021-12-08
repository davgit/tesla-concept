<template>
    <div class="utility-storage-carousel2 pb-10 pb-20">
        <carousel
                class="interior-top-slider relative md:pb-6"
                :autoplay="true"
                :autoHeight="true"
                :items='1'
                :margin="20"
                :dots="true"
                :loop="true"
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
                }">
            <div class="item">
                <img src="../../../assets/images/interior-gallery-1.jpg" alt="Seat">
                <p class="caption text-white xl:w-w840 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium md:w-w420">
                    The front of Model X is expansive—with spacious seating and the largest all glass panoramic
                    <br>windshield in production.
                </p>
            </div>
            <div class="item">
                <img src="../../../assets/images/interior-gallery-2.jpg" alt="Seat">
                <p class="caption text-white xl:w-w840 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium md:w-w420">
                    Model X has two driver displays—a central 17-inch touchscreen, and a second screen located behind
                    <br>the steering wheel.
                </p>
            </div>
            <div class="item">
                <img src="../../../assets/images/interior-gallery-3.jpg" alt="Seat">
                <p class="caption text-white xl:w-w840 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium md:w-w420">
                    With the front row extended forward, the back seat is extremely spacious, providing a comfortable
                    <br>driving experience for every passenger.
                </p>
            </div>
            <div class="item">
                <img src="../../../assets/images/interior-gallery-4.jpg" alt="Seat">
                <p class="caption text-white xl:w-w840 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium md:w-w420">
                    The seven-seat configuration option comes standard with second and third row seats that fold
                    <br>flat for maximum cargo space.
                </p>
            </div>
            <div class="item">
                <img src="../../../assets/images/interior-gallery-5.jpg" alt="Seat">
                <p class="caption text-white xl:w-w840 ml-auto mr-auto text-left text-14 leading-spc5 pb-space1 pt-4 font-medium md:w-w420">
                    A second trunk in the front provides extra cargo room, for all your things.
                </p>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "InteriorSliderOne",
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