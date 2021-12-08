<template>
    <div class="section-title">
        <span class="stitle text-size17 text-primary font-normal leading-none block"
        :class="[ stitle ? 'block' : 'hidden' ]">
          {{stitle}}
        </span>
        <h1 class="title text-size28 font-semibold text-dark_gray leading-8 tracking-space3"
            :class="[ title ? 'block' : 'hidden' ]">
            {{title}}
        </h1>
        <p class="desc pt-4 mb-4 pb-space1 text-14 font-medium text-dark_gray"
           :class="[ desc ? 'block' : 'hidden' ]">
            {{desc}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "InfoBoxOne",
        props: ['stitle', 'title', 'desc']
    }
</script>

<style scoped>

</style>