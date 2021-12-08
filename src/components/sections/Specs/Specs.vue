<template>
    <section class="section specs bg-black xl:py-12 px-5 md:pb-20 overflow-hidden" id="specs-area">
        <div class="specs-contents flex xl:pt-0 md:pt-12" id="specs-banner">
            <!-- Specs Left -->
            <SpecsLeft />

            <div class="specs-right-content w-2/4 pl-6 pt-6">

                <div class="specs-right-tabs xl:w-w475 md:w-full">
                    <h1 class="text-white text-size28 font-semibold leading-9 tracking-space3 pb-6">
                        Model X Specs
                    </h1>
                    <!-- Specs Tab-->
                    <SpecsTab />

                    <div class="specs-bottom-btn mt-spc21">
                        <a href="#specs-lists-box" id="specs-single-btn" class="expand-list-btn cursor-pointer flex items-center text-white uppercase text-xs font-bold mt-10">
                            <i class="text-base text-white w-10 h-10 border-solid border-3 border-white rounded-full text-center leading-loose mr-2">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                            </i> Expand List
                        </a>
                    </div>

                    <!-- Specs Single -->
                    <SpecsSingle />

                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import $ from 'jquery';
    import SpecsTab from "./SpecsTab";
    import SpecsSingle from "./SpecsSingle";
    import SpecsLeft from "./SpecsLeft";
    export default {
        name: "Specs",
        components: {
            SpecsLeft,
            SpecsSingle,
            SpecsTab
        },
        mounted() {
            $(document).on('click', '#specs-single-btn', function () {
                $("#specs-lists-box").show();
                $(".vision-menu-header-main, .desktop-fixed-nav").hide();
                $(".section").removeClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").addClass('section-specs-popup');
                $("html, .section").css({
                    'scroll-behavior': 'smooth'
                });
            });
            $(document).on('click', '#specs-single-close-btn', function () {
                $("#specs-lists-box").slideToggle(500);
                $(".vision-menu-header-main, .desktop-fixed-nav").show();
                $(".section").addClass('fp-section fp-table');
                $(".section.active").addClass('fp-section');
                $("body").removeClass('section-specs-popup');
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