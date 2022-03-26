<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: 'BaseContainer',
};
</script>

<style lang="scss">
@import "../scss/utils/toRem";

.container {
  padding: 0 toRem(15px);

  @media screen and (min-width: 1200px) {
    padding: 0 toRem(50px);
  }
}
</style>
