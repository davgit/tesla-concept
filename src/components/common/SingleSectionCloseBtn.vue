<template>
    <div class="z-20 fixed bottom-0 close-next-btn">
        <a
            :href="url"
            :id="idname"
            class="closing-popup-section-btn close-section-btn block flex text-center text-xs items-center">
            <i class="leading-7 border-solid border-black w-spc15 h-spc15 inline-block hover:bg-black hover:text-white">
                <font-awesome-icon :icon="['fas', 'times']" />
            </i>
            <span class="opacity-0 close-btn-text block ml-2 close-text text-14 uppercase text-black font-medium">
                Close
            </span>
        </a>
        <a
            :href="nextBtnUrl"
            :id="nextBtnId"
            class="closing-popup-section-btn next-section-btn hidden flex text-center text-xs items-center">
            <i class="leading-7 border-solid border-black w-spc15 h-spc15 inline-block hover:bg-black hover:text-white">
                <font-awesome-icon :icon="['fas', 'angle-down']" />
            </i>
            <span class="opacity-0 close-btn-text block ml-2 close-text text-14 uppercase text-black font-medium">
                Next
            </span>
        </a>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "SingleSectionCloseBtn",
        props: ['idname', 'url', 'nextBtnUrl', 'nextBtnId'],
        mounted() {
            $('.section').on('scroll', function() {
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    $("body").addClass('nextBtn').removeClass('closeBtn');
                } else {
                    $("body").removeClass('nextBtn').addClass('closeBtn');
                }
            })
        }
    }
</script>

<style scoped>

</style>