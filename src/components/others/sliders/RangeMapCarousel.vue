<template>
    <div class="range-map-carousel pb-20">
        <div class="range-map-slider">
            <carousel
                    :autoplay="true"
                    :autoHeight="true"
                    :items='1'
                    :margin="20"
                    :dots="true"
                    :autoplayTimeout="8000"
                    :loop="true"
                    :nav="false"
                    :dotsContainer="'#range-map-custom-dots'"
            >
                <div class="item relative">
                    <img src="../../../assets/images/map_berkeley_bg_1.jpg" alt="map 1" />
                    <svg
                        class="svg1 absolute left-0 top-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1225 562" xml:space="preserve">
                        <path d="M467,446.1l0.1-3.5l-2-3.2l0.1-3.1l-2.5-11.3l2-2l1.8-5.2l6.3-3.5l7.3-10.3l4-2.9l0.1-4.5l-1.1-3.1v-10l4.5-11.7l7-5.4l7.5-8.6l0.5-0.3l13.1-7.4l8.2-11.7l0.4-6.7l3.6-6.7l7.5-3.3l44.6-45.4l9-5.6l34.9-8.8l4.3-9l9-6.5h16.3l4.2-2.7h3.8l21.5-25.9l2.7-5.9l25.7-25.5l1-4.8l9-3.3l6.1-7.7l1.9-6.1l6.3-6.9l4.8-7.5l1-5.2l2.3-2.1l1.7-9l4.4-9.8l2.9-9.8l2.5-2.9h2.5l7.3-4.8v-2.7l9.4-5.4l3.8-4.2h3.6l8.4-8.4v-2.5l5.6-4l1.7-2.5l1.7-3.3l6.9-3.1l2.3-2.5l10.5-3.3l6.1-4.4h2.9l8.4,6.7l3.1-0.2l1.5-1.9h11.9l8.6-2.7l8.4-0.6l5.6-3.8h6.7l3.6,3.1l2.1-1l2.9,1.5l4.6-1.5l4,1.9l5.2,0.8v7.1v5.4l-1.5,5.9l3.6,11.7v2.9l1,1.9v3.6l1.9,2.5h8.4" fill="none" stroke="#000000" style="stroke-dasharray: 711.514, 711.514; stroke-dashoffset: 0;"></path>
                        <g class="tooltip" transform="translate(918,103.49999237060547)">
                            <circle fill="#231F20" cx="0" cy="0.8" r="4.4"></circle>
                            <g>
                                <rect x="-38.2" y="5.5" fill="#EC1C24" width="76.3" height="22.1"></rect>
                                <rect x="-4.4" y="1.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.3565 1.8045)" fill="#EC1C24" width="8.9" height="8.9"></rect>
                            </g>
                            <text id="miles-1" text-anchor="middle" transform="matrix(1 0 0 1 0 21.2519)" fill="#ffffff" font-family="Gotham Bold" font-size="13px">178 Miles</text>
                        </g>
                    </svg>
                </div>
                <div class="item relative">
                    <img src="../../../assets/images/map_newyork_bg_2.jpg" alt="map 2">
                    <svg
                            class="svg2 absolute left-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1225 562" xml:space="preserve">
                            <path d="M257.3,476.5l-0.2-6.3l4.4-6.3l0.7-7.2l3.2-3.5l3.7-3.8l0.8-2.7l2.4-1.1l1.8-1l1.3-6.5l2-1.1l6.4,2.1c0,0,3.2,1.7,4.2-0.4c1.1-2.1,1.4-3,2-3.4s1.1-3.8,1.1-3.8l4.7-3.8l3.8-1.7c0,0,5.8-5,6.6-8.4c0,0,1.1-3,3.4-3.5s5.6-2.2,5.8-4.3c0.1-2.1-0.8-4.7-0.5-5.4c0.3-0.7,2-5.8,3.9-7c2-1.2,4.3-2.2,4.9-1.2c0.6,1.1,4.8-0.4,6-1.2c1.2-0.8,2.5-0.9,4.5-1.1c2-0.1,5.5-2.6,7.1-3.3c1.6-0.7,3.8-1.1,6.2-0.8s4.6,0.4,5.8-0.8c1.2-1.2,3.4-3.4,6-4.3c2.6-0.9,7.3-2.9,8.9-4.2c1.6-1.3,6.2-2.1,8.7-2.8c2.5-0.7,5.9-2.6,6.8-3.3c0.9-0.7,3.7-3.2,5.4-3.8c1.7-0.7,5.1-3.5,6.4-5.9s4.5-4.2,11.2-5.1c6.7-0.9,11.4-0.3,12.9-0.7s9.1-2.1,9.8-2.8c0.8-0.7,7.9-8.9,8.5-10.4c0.7-1.4,0.3-4.7,1.7-5.4s5.3-2.2,6.4-3.5c1.2-1.3,4.5-5.1,5.3-5.9c0.8-0.8,3-2.5,5.1-3.3c2.1-0.8,12.7-7.1,13.8-9.7c1.1-2.6,3-7,3.8-9.2c0.8-2.2,5.1-12.1,5.1-12.1s5.4-5.1,6.3-6.2c0.9-1.1,3.2-4,3.2-4s1.1-3.9,4-6.8c2.9-2.9,3.1-4.9,4.7-6.1c1.6-1.2,4.2-8.1,4.6-8.5l3.5-7.4l3.1-3.9l1.3-4.9l4.1-7c0,0,0.9-6.6-2-9.7c-2.9-3.1-0.5-6,1.7-7.4c2.2-1.3,9.2-3.2,11.4-3.7c2.2-0.5,5.6-6.3,6-6.7c0.4-0.4,6.4-3.3,6.4-3.3l3.8-3.2l7.9-2.3l5.8-5.8c0,0,5.8-0.8,6.8-0.8c1.1,0,2.2,1.7,4.1,0.1c1.8-1.6,12.7-7.4,12.7-7.4s7.1-4.6,8.9-8.2s8.5-5.8,9.4-6.5c0.9-0.7,4.6-6.1,6.6-10.3s4.6-9.2,5.4-9.7c0.8-0.5,4.5-4.7,5.2-5.8c0.8-1.1,6.4-13.3,7.1-14.2c0.7-0.9,3.5-7.7,6-9.1l1.3-0.8c0,0,3.6-2.1,5.3-2.7c1.7-0.7,6.4-2.2,8.8-2.8s5.8-2.5,7.2-3.7s6.4-3.4,8-4.1c1.6-0.7,13.3-5,15.1-5.3c1.8-0.3,9.9-2.9,12.9-4.8c0,0,7.6-0.7,8-0.7c0.4,0,3.7-1.3,3.7-1.3s8.3-0.7,10.5,0s2.8,0,5-1.3s5.8-3.8,5.8-4.2c0-0.4,3.3-4.7,3.3-4.7s5.9-2.1,9.5-3.6s6.1-1.1,6.7-2.4c0.6-1.3,1.7-2.6,3.5-3.1c1.8-0.5,6.4-2,7.9-2.9s4.2-0.9,6-0.8s6.8,0.8,8.7-0.7c1.9-1.4,7.8-3.8,8.7-4.1c0.9-0.3,5.9-1.3,5.9-1.3s6.7-2.6,8.3-2.6c1.6,0,8.5-2,8.5-2s9.1-0.8,10.1-0.8c1.1,0,4.2,2,5,2.4c0.8,0.4,8.8,1.2,9.9-2.5l3.5-3.3c0,0,1.2,0.4,1.5,0c0.3-0.4,2.4-3.3,2.4-3.3l3-5.5l0.5-3.8l-3.5-2.6" fill="none" stroke="#000000" style="stroke-dasharray: 794.698, 794.698; stroke-dashoffset: 0;"></path>
                        <g class="tooltip" transform="translate(828.1000366210938,48.5001335144043)">
                                <circle fill="#231F20" cx="0" cy="0.8" r="4.4"></circle>
                            <g>
                                    <rect x="-38.2" y="5.5" fill="#EC1C24" width="76.3" height="22.1"></rect>
                                <rect x="-4.4" y="1.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.3565 1.8045)" fill="#EC1C24" width="8.9" height="8.9"></rect>
                                </g>
                            <text id="miles-2" text-anchor="middle" transform="matrix(1 0 0 1 0 21.2519)" fill="#ffffff" font-family="Gotham Bold" font-size="13px">211 Miles</text>
                            </g>
                        </svg>
                </div>
                <div class="item relative">
                    <img src="../../../assets/images/map_florida_bg_3.jpg" alt="map 3">
                    <svg
                            class="svg3 absolute left-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1225 562" xml:space="preserve">
                            <path d="M783.8,488.9v-3.9l2.8-6.4v-2.2l1.9-3.3v-5.4l1.4-2.6v-4l1.9-3.8V446l3.7-4v-11.5l2.9-7.2l0.3-11.5l-0.3-15.5l1.2-4.1L796,387v-6.3l-1.8-3.3v-10.3l-4.2-7.4l-3.7-10l-6.7-9.4l-6.8-6.7v-4.6l-3.7-8.6l-3.7-4l-7-12.8l-2.6-9.2l-3.4-6.4v-2.8l-0.4-7.6l-4.1-9.9l-2.9-3.6l-1.6-4l-3.9-3.9l-1.5-0.7h-15l-6.5-7.9l-5.7-4.7h-18.3l-4.9-1.8l-9.8-14.9l-4.9-4.3l-0.7-5.4l-16.1-16.9l-1.2-9l-9.1-12.8L636,167l-5.7-2.7L615,151l-1.5-2.1l-3.1-9.7l-1.1-8.8l-2.7-3.6l-1.8-8.4l-4.3-5.4l-3.9-9.1l-0.3-9.4l-7.9-9.7l-0.4-2l4.4-4.8l4.7-0.5l1.1-4.2" fill="none" stroke="#000000" style="stroke-dasharray: 522.051, 522.051; stroke-dashoffset: 0;"></path>
                        <g class="tooltip" transform="translate(598.2000122070312,73.29999542236328)">
                                <circle fill="#231F20" cx="0" cy="0.8" r="4.4"></circle>
                            <g>
                                    <rect x="-38.2" y="5.5" fill="#EC1C24" width="76.3" height="22.1"></rect>
                                <rect x="-4.4" y="1.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.3565 1.8045)" fill="#EC1C24" width="8.9" height="8.9"></rect>
                                </g>
                            <text id="miles-3" text-anchor="middle" transform="matrix(1 0 0 1 0 21.2519)" fill="#ffffff" font-family="Gotham Bold" font-size="13px">195 Miles</text>
                            </g>
                        </svg>
                </div>
                <div class="item relative">
                    <img src="../../../assets/images/map_austin_bg_4.jpg" alt="map 4">
                    <svg
                            class="svg4 absolute left-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1225 562" xml:space="preserve">
                            <path d="M436.3,488.4l8.7-17.7l-0.4-3.4l0.4-7.7l-2-9.7l-1.2-3.9l0.6-11.6l-0.8-4.6l1.8-2.5l2.9-6l9.2-27l2.1-5.2l5.1-6.9l0.9-5.2l5.3-6.3l5.1-9.6l4.3-2.3l3.7-3.3l6.2-2.9l2-4l2.9-1.3l3.9-12.7l8.7-17.7l2.2-2.3l2.5-12.5l11.7-22.3l1.6-6.2l2.1-8V263v-29.5l1-3.2l1.4-2.8v-4.3l-5-14.9l2.9-5.6l0.6-8.8l22.2-15.3l1.5-1.7l7.4-14.1l2.9-19.9l-0.6-1.6l-1.8-3.4l-0.2-3.9c0,0,3-4.9,3.4-5.2c0.3-0.2,0.9-2.8,0.9-2.8l3.3-6.7V85.4l-1.6-2.5l0.4-2.9l2.5-3.1l1.4-3.8" fill="none" stroke="#000000" style="stroke-dasharray: 464.01, 464.01; stroke-dashoffset: 0;"></path>
                        <g class="tooltip" transform="translate(568.4002075195312,73.0999984741211)">
                                <circle fill="#231F20" cx="0" cy="0.8" r="4.4"></circle>
                            <g>
                                    <rect x="-38.2" y="5.5" fill="#EC1C24" width="76.3" height="22.1"></rect>
                                <rect x="-4.4" y="1.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.3565 1.8045)" fill="#EC1C24" width="8.9" height="8.9"></rect>
                                </g>
                            <text id="miles-4" text-anchor="middle" transform="matrix(1 0 0 1 0 21.2519)" fill="#ffffff" font-family="Gotham Bold" font-size="13px">195 Miles</text>
                            </g>
                        </svg>
                </div>
            </carousel>
        </div>
        <div class="range-map-dot-container utility-dots-container lg:w-w840 sm:w-full ml-auto mr-auto mb-2 py-6 mt-10">
            <div id="range-map-custom-dots" class="owl-dots flex items-start">
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Berkeley <br>
                        to Lake Tahoe
                    </span>
                    <span class="stitle block pt-4 text-size17 font-medium pb-2">
                        <strong class=" text-size28 font-semibold text-primary leading-9 tracking-space3">178</strong> miles
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Manhattan <br>
                        to Boston
                    </span>
                    <span class="stitle block pt-4 text-size17 font-medium pb-2">
                        <strong class=" text-size28 font-semibold text-primary leading-9 tracking-space3">211</strong> miles
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Fort Lauderdale <br>
                        to Orlando
                    </span>
                    <span class="stitle block pt-4 text-size17 font-medium pb-2">
                        <strong class=" text-size28 font-semibold text-primary leading-9 tracking-space3">195</strong> miles
                    </span>
                </button>
                <button role="button" class="owl-dot block leading-spc8 tracking-space4 text-size18 text-left flex w-w186 p-4 relative opacity-50 ml-6">
                    <span class="title utility-storage-slide-title sm:text-14">
                        Austin <br>
                        to Dallas
                    </span>
                    <span class="stitle block pt-4 text-size17 font-medium pb-2">
                        <strong class=" text-size28 font-semibold text-primary leading-9 tracking-space3">195</strong> miles
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "RangeMapCarousel",
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>