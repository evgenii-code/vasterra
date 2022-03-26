<template>
  <article class="card">
    <div class="card__wrapper">
      <h3 class="card__title">{{ card.title }}</h3>
      <p class="card__text">{{ card.text }}</p>
    </div>

    <picture class="card__picture">
      <source :srcset="card.images.large" media="(min-width: 600px)" />
      <img :src="card.images.regular" :alt="card.title" class="card__image" />
    </picture>
  </article>
</template>

<script>
export default {
  name: 'CardsItem',

  props: {
    card: {
      type: Object,
      requred: true,
    },
  },
};
</script>

<style lang="scss">
@import "../scss/utils/toRem";

.card {
  $padding-inline: toRem(46px);
  $padding-block: toRem(22px);

  position: relative;
  background: var(--color-primary);
  border-radius: 40px;
  color: var(--color-light-text);
  padding: $padding-inline $padding-block;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: toRem(26px);

  &__title,
  &__text {
    margin: 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__title {
    font-weight: 700;
    font-size: toRem(20px);
    line-height: 120%;
    margin-right: toRem(-16px);

    -webkit-line-clamp: 2;
  }

  &__text {
    margin-top: toRem(11px);
    font-weight: 400;
    font-size: toRem(16px);
    line-height: 137.5%;

    -webkit-line-clamp: 6;
  }

  &__picture {
    margin-top: auto;
    margin-bottom: -$padding-inline;
    margin-right: -$padding-block;
    width: 100%;
    max-width: toRem(204px);
    aspect-ratio: 1.2515;
    align-self: flex-end;
  }

  &__image {
    display: block;
    border-top-left-radius: 3px;
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    $padding-inline: 3.125vw;
    $padding-block: 1.953vw;

    padding: $padding-inline $padding-block;
    flex-direction: row;
    gap: 2.03125vw;

    &__title {
      font-size: 1.563vw;
    }

    &__text {
      font-size: 1.25vw;
    }

    &__picture {
      min-width: 45.2%;
      aspect-ratio: .8474;
      margin-bottom: -$padding-inline;
      margin-right: -$padding-block;
    }

    &__image {
      object-fit: cover;
      object-position: left top;
      height: 100%;
    }
  }
}
</style>
