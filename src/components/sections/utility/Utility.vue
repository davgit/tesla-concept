<template>
    <section class="section utility overflow-hidden" id="utility-area">
        <div class="utility-banner flex flex-col w-full" id="utility-banner">
            <div class="utility-banner-top relative bg-center bg-cover bg-no-repeat flex items-end">

                <!-- Utility Specs -->
                <UtilitySpecs />

            </div>

            <!-- Utility Bottom -->
            <UtilityBottom />
        </div>

        <!-- Utility Single -->
        <UtilitySingle />

    </section>
</template>

<script>
    import $ from 'jquery';
    import UtilitySingle from "./UtilitySingle";
    import UtilitySpecs from "./UtilitySpecs";
    import UtilityBottom from "./UtilityBottom";
    export default {
        name: "Utility",
        components: {
            UtilityBottom,
            UtilitySpecs,
            UtilitySingle
        },
        mounted() {
            $(document).on('click', '#utility-single-btn', function () {
                $("#single-utility").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-utility-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#utility-single-close-btn', function () {
                $("#single-utility").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-utility-popup');
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