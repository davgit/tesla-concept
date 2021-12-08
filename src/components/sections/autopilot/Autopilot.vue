<template>
    <section class="section utility autopilot overflow-hidden" id="autopilot-area">
        <div class="utility-banner flex flex-col w-full" id="autopilot-banner">
            <div class="utility-banner-top overflow-hidden relative bg-center bg-cover bg-no-repeat flex lg:items-center sm:items-end">
                <!-- Autopilot Bg Video -->
                <AutopilotBgVideo />

                <!-- Autopilot Specs-->
                <AutopilotSpecs />

            </div>

            <!-- Autopilot Bottom -->
            <AutopilotBottom />
        </div>

        <!-- Autopilot Single -->
        <AutopilotSingle />

    </section>
</template>

<script>
    import $ from 'jquery';
    import AutopilotSingle from "./AutopilotSingle";
    import AutopilotSpecs from "./AutopilotSpecs";
    import AutopilotBgVideo from "./AutopilotBgVideo";
    import AutopilotBottom from "./AutopilotBottom";
    export default {
        name: "Autopilot",
        components: {
            AutopilotBottom,
            AutopilotBgVideo,
            AutopilotSpecs,
            AutopilotSingle
        },
        mounted() {
            $(document).on('click', '#autopilot-single-btn', function () {
                $("#single-autopilot").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-autopilot-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#autopilot-single-close-btn', function () {
                $("#single-autopilot").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-autopilot-popup');
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