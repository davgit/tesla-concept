<template>
    <ul class="bottom-list expand w-2/4 pt-spc28 pb-12 hidden" id="specs-lists-box">
        <li class="mb-2 pr-5 pb-5 pl-spc6">
            <span class="title block text-white leading-spc5 py-spc29 font-semibold text-14 relative">
                Premium Interior
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Self-presenting and closing front doors
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Premium audio system specifically tuned for a Tesla's ultra-quiet cabin
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Cold weather features including heated seats for every passenger, heated steering wheel, wiper blade defrosters and washer nozzle heaters
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                HEPA air filtration system prevents viruses, bacteria and offensive odors from entering the cabin
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                <a href="#" class="underline">Premium Connectivity</a> (1 year included)
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Music and media over Bluetooth
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Location-aware automatic garage door opener
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                LED fog lamps
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Panoramic windshield with ultraviolet and infrared protection
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Auto dimming, power folding, heated side mirrors
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Custom driver profiles
            </span>
            <span class="stitle block py-spc29 text-white leading-spc5 text-14">
                Wireless phone charging in center console
            </span>
        </li>
        <li class="pb-3">
            <SingleRoundButton url="#" classname="py-spc6 px-10 text-white border-white hover:text-primary hover:bg-white" title="OWNER'S MANUAL" />
        </li>
        <li>
            <SingleSectionCloseBtn url="#specs-banner" idname="specs-single-close-btn" nextBtnUrl="#order-section" nextBtnId="specs-single-close-btn" />
        </li>
    </ul>
</template>

<script>
    import SingleSectionCloseBtn from "../../common/SingleSectionCloseBtn";
    import SingleRoundButton from "../../common/SingleRoundButton";
    export default {
        name: "SpecsSingle",
        components: {
            SingleRoundButton,
            SingleSectionCloseBtn
        }
    }
</script>

<style scoped>

</style>