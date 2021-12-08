<template>
    <section class="section utility autopilot interior overflow-hidden" id="interior-area">
        <div class="utility-banner flex flex-col w-full" id="interior-banner">
            <div class="utility-banner-top overflow-hidden relative bg-center bg-cover bg-no-repeat flex  xl:items-center xl:justify-end md:items-end md:pb-spc31">

                <!-- Interior Specs -->
                <InteriorSpecs />

            </div>

            <!-- Interior Bottom -->
            <InteriorBottom />
        </div>

        <!-- Interior Single -->
        <InteriorSingle />
    </section>
</template>

<script>
    import $ from 'jquery';
    import InteriorSingle from "./InteriorSingle";
    import InteriorSpecs from "./InteriorSpecs";
    import InteriorBottom from "./InteriorBottom";
    export default {
        name: "Interior",
        components: {
            InteriorBottom,
            InteriorSpecs,
            InteriorSingle
        },
        mounted() {
            $(document).on('click', '#interior-single-btn', function () {
                $("#single-interior").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table').css({
                    'scroll-behavior': 'smooth'
                });
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-interior-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#interior-single-close-btn', function () {
                $("#single-interior").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-interior-popup');
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