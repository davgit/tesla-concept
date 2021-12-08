<template>
    <section class="section utility performance overflow-hidden" id="performance-area">
        <div class="utility-banner flex flex-col w-full" id="performance-banner">
            <div class="utility-banner-top relative bg-cover bg-no-repeat bg-center flex items-end">

                <!-- Performance Specs -->
                <PerformanceSpecs />

            </div>

            <!-- Performance Bottom -->
            <PerformanceBottom />
        </div>

        <!-- Performance Single -->
        <PerformanceSingle />

    </section>
</template>

<script>
    import $ from 'jquery';
    import PerformanceSingle from "./PerformanceSingle";
    import PerformanceSpecs from "./PerformanceSpecs";
    import PerformanceBottom from "./PerformanceBottom";
    export default {
        name: "Performance",
        components: {
            PerformanceBottom,
            PerformanceSpecs,
            PerformanceSingle
        },
        mounted() {
            $(document).on('click', '#performance-single-btn', function () {
                $("#single-performance").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-performance-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#performance-single-close-btn', function () {
                $("#single-performance").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-performance-popup');
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