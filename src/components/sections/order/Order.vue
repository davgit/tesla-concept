<template>
    <section class="section order-section overflow-hidden" id="order-section">
        <!-- Order ModelX -->
        <OrderModelX />

        <!-- Footer -->
        <Footer />
    </section>
</template>

<script>
    import OrderModelX from "./OrderModelX";
    import Footer from "../../common/Footer";
    export default {
        name: "Order",
        components: {
            Footer,
            OrderModelX
        }
    }
</script>

<style scoped>

</style>