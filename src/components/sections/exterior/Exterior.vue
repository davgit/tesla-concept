<template>
    <section class="section utility performance exterior overflow-hidden" id="exterior-area">
        <div class="utility-banner flex flex-col w-full bg-center bg-cover bg-no-repeat" id="exterior-banner">
            <div class="utility-banner-top overflow-hidden relative bg-center bg-cover bg-no-repeat flex items-start justify-center">

                <!-- Exterior Top -->
                <ExteriorTop />

            </div>

            <!-- Exterior Bottom -->
            <ExteriorBottom />
        </div>

        <!-- Exterior Single -->
        <ExteriorSingle />
    </section>
</template>

<script>
    import $ from 'jquery'
    import ExteriorSingle from "./ExteriorSingle";
    import ExteriorTop from "./ExteriorTop";
    import ExteriorBottom from "./ExteriorBottom";
    export default {
        name: "Exterior",
        components: {
            ExteriorBottom,
            ExteriorTop,
            ExteriorSingle
        },
        mounted() {
            $(document).on('click', '#exterior-single-btn', function () {
                $("#single-exterior").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-exterior-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#exterior-single-close-btn', function () {
                $("#single-exterior").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-exterior-popup');
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