<template>
    <div class="order-content-flex flex items-center">
        <div class="order-img-desc flex items-center w-w85p mt-spc22 xl:ml-spc23 pb-spc24 md:ml-spc36">
            <div class="order-content-left pl-6 pt-6 md:flex-none">
                <h1 class="text-size28 leading-9 text-primary font-semibold tracking-space3 pb-4">
                    Order Model X
                </h1>
                <SingleRoundButton url="#" classname="w-full py-spc6 px-10 text-dark_gray border-black hover:text-white hover:bg-primary" title="Order Now" />
            </div>
            <div class="order-content-right-img pl-6 pt-6">
                <img src="../../../assets/images/modelx2.jpg" alt="ModelX">
            </div>
        </div>
    </div>
</template>

<script>
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "OrderModelX",
        components: {
            SingleRoundButton
        }
    }
</script>

<style scoped>

</style>