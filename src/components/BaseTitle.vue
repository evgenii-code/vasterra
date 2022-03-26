<template>
  <component class="title" :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseTitle',

  props: {
    tag: {
      type: String,
      default: 'h2',
      validator: (tag) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag),
    },
  },
};
</script>

<style lang="scss">
@import "../scss/utils/toRem";

.title {
  margin: 0;
  font-weight: 900;
  font-size: toRem(26px);
  line-height: 123.0769%;
  color: var(--color-dark-text-heading);
  text-align: left;

  @media screen and (min-width: 480px) {
    text-align: center;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3.125vw;
    line-height: 125%;
  }
}
</style>
