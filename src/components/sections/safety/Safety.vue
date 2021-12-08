<template>
    <section class="section safety overflow-hidden safety-box" id="safety-area">
        <div class="safety-content-box flex h-full" id="safety-banner">
            <SafetySidebar />
            <SafetyResponsiveSidebar />

            <SafetyRightAnnotations />
        </div>

        <!-- Single Content -->
        <SafetySingle />
    </section>
</template>

<script>
    import $ from 'jquery';
    import SafetySingle from "./SafetySingle";
    import SafetySidebar from "./SafetySidebar";
    import SafetyResponsiveSidebar from "./SafetyResponsiveSidebar";
    import SafetyRightAnnotations from "./SafetyRightAnnotations";
    export default {
        name: "Safety",
        components: {
            SafetyRightAnnotations,
            SafetyResponsiveSidebar,
            SafetySidebar,
            SafetySingle
        },
        mounted() {
            $(document).on('click', '#safety-single-btn', function () {
                $("#safety-single").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-safety-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#safety-single-close-btn', function () {
                $("#safety-single").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-safety-popup');
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