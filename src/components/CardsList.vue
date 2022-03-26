<template>
  <section class="cards">
    <base-container class="cards__container cards__container--title">
      <base-title class="cards__title"><slot name="title" /></base-title>
    </base-container>

    <base-container class="cards__container cards__container--swiper">
      <swiper
        tag="ul"
        v-bind="swiperOptions"
        class="cards__list"
      >
        <swiper-slide class="cards__item" tag="li" v-for="item in listItems" :key="item.id">
          <cards-item class="cards__card" :card="item" />
        </swiper-slide>
      </swiper>
    </base-container>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import BaseContainer from './BaseContainer.vue';
import BaseTitle from './BaseTitle.vue';
import CardsItem from './CardsItem.vue';

export default {
  name: 'CardsList',

  components: {
    Swiper,
    SwiperSlide,
    BaseContainer,
    BaseTitle,
    CardsItem,
  },

  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 1,
        grabCursor: true,
        breakpoints: {
          1200: {
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
            grabCursor: false,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import 'swiper/scss';
@import "../scss/utils/toRem";

.cards {
  &__container {
    &--swiper {
      padding: 0;
    }
  }

  &__title {
    max-width: toRem(430px);
    margin: 0 auto toRem(33px);
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    height: unset;
    max-width: toRem(280px);
    min-height: toRem(249px);
  }

  @media screen and (min-width: 1200px) {
    &__container {
      &--swiper {
        padding: 0 toRem(50px);
      }
    }

    &__title {
      max-width: 50.625vw;
      margin: 0 auto toRem(50px);
    }

    .swiper-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: toRem(30px) toRem(20px);
      transform: unset !important;
    }

    &__item {
      margin: 0;
      max-width: unset;
      width: unset !important;
    }
  }
}
</style>
