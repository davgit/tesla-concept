<template>
    <section class="section range overflow-hidden" id="range-area">
        <div class="range-content-flex flex h-full" id="range-banner">
            <div class="range-left-video w-full relative flex flex-col justify-end">

                <!-- Range Background Video -->
                <RangeBgVideo />

                <!-- Range Specs -->
                <RangeSpecs />

            </div>

            <!-- Range Sidebar -->
            <RangeSidebar />
        </div>

        <!-- Range Single -->
        <RangeSingle />

    </section>
</template>

<script>
    import $ from 'jquery';
    import RangeSingle from "./RangeSingle";
    import RangeSpecs from "./RangeSpecs";
    import RangeSidebar from "./RangeSidebar";
    import RangeBgVideo from "./RangeBgVideo";
    export default {
        name: "Range",
        components: {
            RangeBgVideo,
            RangeSidebar,
            RangeSpecs,
            RangeSingle
        },
        mounted() {
            $(document).on('click', '#range-single-btn', function () {
                $("#single-range").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table').css({
                    'scroll-behavior': 'smooth'
                });
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-range-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#range-single-close-btn', function () {
                $("#single-range").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-range-popup');
                setTimeout(() => {
                    $("html, .section").css({
                        'scroll-behavior': 'auto'
                    });
                }, 1500)
            });
        }
    }
</script>

<style scoped>

</style>