<template>
  <div id="app" class="font-body">
    <SideScrollNav />

    <!-- Header -->
    <Header />

    <ScrollFixedHeader />

    <!-- FullPage -->
    <full-page id="fullpage" ref="fullpage" :options="options">
      <!-- ModelX -->
      <ModelX />

      <!-- Safety -->
      <Safety />

      <!-- Utility -->
      <Utility />

      <!-- Range -->
      <Range />

      <!-- Autopilot -->
      <Autopilot />

      <!-- Performance -->
      <Performance />

      <!-- Interior -->
      <Interior />

      <!-- Exterior -->
      <Exterior />

      <!-- Specs -->
      <Specs />

      <!-- Order -->
      <Order />
    </full-page>
  </div>
</template>

<script>
import SideScrollNav from "./components/common/SideScrollNav";
import ModelX from "./components/sections/modelx/ModelX";
import Safety from "./components/sections/safety/Safety";
import Header from "./components/common/Header";
import Utility from "./components/sections/utility/Utility";
import Range from "./components/sections/range/Range";
import Autopilot from "./components/sections/autopilot/Autopilot";
import Performance from "./components/sections/performance/Performance";
import Interior from "./components/sections/interior/Interior";
import Exterior from "./components/sections/exterior/Exterior";
import Specs from "./components/sections/Specs/Specs";
import Order from "./components/sections/order/Order";
import ScrollFixedHeader from "./components/common/ScrollFixedHeader";

export default {
  name: "App",
  components: {
    ScrollFixedHeader,
    Order,
    Specs,
    Exterior,
    Interior,
    Performance,
    Autopilot,
    Range,
    Utility,
    Header,
    Safety,
    ModelX,
    SideScrollNav
  },
  data() {
    return {
      options: {
        // License : https://github.com/alvarotrigo/fullpage.js#options
        licenseKey: "ENTER_YOUR_KEY_HERE",
        //Navigation
        menu: "#fp-nav",
        lockAnchors: false,
        anchors: [
          "Model-X",
          "Safety",
          "Utility",
          "Range",
          "Autopilot",
          "Performance",
          "Interior",
          "Exterior",
          "Specs",
          "Order"
        ],
        navigation: true,
        navigationPosition: "right",
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: "bottom",

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollBar: true,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: true,
        dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements:
          ".side-menu-container, .section-safety-popup #safety-area, .section-utility-popup #utility-area, .section-range-popup #range-area, .section-autopilot-popup #autopilot-area, .section-performance-popup #performance-area, .section-interior-popup #interior-area, .section-exterior-popup #exterior-area, .section-specs-popup #specs-area",
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        fixedElements: "#header, .footer",
        responsiveWidth: 1025,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: true,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate"
        },
        cards: false,
        cardsOptions: {
          perspective: 100,
          fadeContent: true,
          fadeBackground: true
        },

        //Custom selectors
        sectionSelector: ".section",
        slideSelector: ".slide",

        lazyLoading: true
      },
      metaInfo: {
        // Children can override the title.
        title: "My Page Title",
        // Result: My Page Title ← My Site
        // If a child changes the title to "My Other Page Title",
        // it will become: My Other Page Title ← My Site
        titleTemplate: "%s ← My Site",
        // Define meta tags here.
        meta: [
          { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
            name: "description",
            content: "The description of site goes here...."
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
