<template>
  <div>
    <nav
      class="mobile-responsive-fixed-nav fixed left-0 z-20 w-full bg-white hidden"
    >
      <div class="top flex justify-between items-center w-full">
        <div class="top-left">
          <router-link to="/" class="py-spc30 px-5 inline-block">
            <img :src="logoBlack" alt="Logo" />
          </router-link>
        </div>
        <div class="top-right">
          <a href="#" id="scrolltopbtn" class="p-spc30 inline-block">
            <svg
              class="tds-icon"
              viewBox="0 0 100 100"
              width="20"
              height="20"
              aria-labelledby="btn-mobile--return_to_top"
            >
              <title id="btn-mobile--return_to_top"></title>
              <path
                d="M0 52.5c0-1.3.5-2.6 1.5-3.5L50 .5 98.5 49c2 2 2 5.1 0 7.1s-5.1 2-7.1 0L50 14.6 8.5 56.1c-2 2-5.1 2-7.1 0-.9-1-1.4-2.3-1.4-3.6z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="bottom flex justify-center items-center pb-1">
        <SingleRoundButton
          url="#"
          title="Test Drive"
          classname="default-btn template-btn py-0 pl-6 pr-6 mr-2 text-dark_gray border-black hover:text-white hover:bg-primary text-size10"
        />
        <SingleRoundButton
          url="#"
          title="Order Now"
          classname="default-btn template-btn py-0 pl-6 pr-6 text-white border-black bg-black hover:text-white hover:bg-primary text-size10"
        />
      </div>
    </nav>

    <div
      class="desktop-fixed-nav flex justify-between items-center fixed  left-0 w-full z-40"
    >
      <div class="left">
        <router-link to="/" class="py-spc30 px-5 inline-block logo-black">
          <img :src="logoBlack" alt="Logo" />
        </router-link>
        <router-link
          to="/"
          class="py-spc30 px-5 inline-block logo-white hidden"
        >
          <img :src="logoWhite" alt="Logo" />
        </router-link>
      </div>
      <div class="right">
        <a href="#" id="scrolltopbtn" class="p-spc30 inline-block">
          <svg
            class="tds-icon"
            viewBox="0 0 100 100"
            width="20"
            height="20"
            aria-labelledby="btn--return_to_top"
          >
            <title id="btn--return_to_top"></title>
            <path
              d="M0 52.5c0-1.3.5-2.6 1.5-3.5L50 .5 98.5 49c2 2 2 5.1 0 7.1s-5.1 2-7.1 0L50 14.6 8.5 56.1c-2 2-5.1 2-7.1 0-.9-1-1.4-2.3-1.4-3.6z"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <div
      class="detailbox-fixed-nav flex justify-between items-center fixed left-0 z-40 px-5"
    >
      <div class="left-logo">
        <router-link to="/" class="block py-spc30 logo-black">
          <img :src="logoBlack" alt="Logo" />
        </router-link>
        <router-link to="/" class="block py-spc30 logo-white hidden">
          <img :src="logoWhite" alt="Logo" />
        </router-link>
      </div>
      <div class="right">
        <SingleRoundButton
          url="#"
          title="Order Now"
          classname="default-btn template-btn py-0 pl-6 pr-6 text-white border-black bg-black hover:text-dark_gray hover:bg-transparent text-size10 mr-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleRoundButton from "./SingleRoundButton";
import $ from 'jquery';

export default {
    name: "ScrollFixedHeader",
    components: {
        SingleRoundButton
    },
    data() {
        return {
            logoBlack: require('@/assets/images/logo-2.png'),
            logoWhite: require('@/assets/images/logo.png'),
        }
    },
    mounted() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                $(".mobile-responsive-fixed-nav").addClass('active');
            } else {
                $(".mobile-responsive-fixed-nav").removeClass('active');
            }
            prevScrollpos = currentScrollPos;
            if($(window).scrollTop() < 50) {
                $(".mobile-responsive-fixed-nav").removeClass('active');
            }
            if($(window).scrollTop() > 100) {
                $(".desktop-fixed-nav").addClass('active');
            } else {
                $(".desktop-fixed-nav").removeClass('active');
            }

        }

        $(document).on('click','#scrolltopbtn', function () {
            $('html, body').animate({scrollTop:0},1000);
        });
    }
}
</script>

<style scoped></style>
