<template>
  <div id="app" class="app">
    <cards-list class="app__cards-list" :list-items="populatedSolutions">
      <template #title
        >Solve your business problems with excellent web solutions</template
      >
    </cards-list>
  </div>
</template>

<script>
import CardsList from './components/CardsList.vue';
import solutions from './data/solutions.json';

export default {
  name: 'App',

  components: {
    CardsList,
  },

  data() {
    return {
      solutions,
    };
  },

  computed: {
    populatedSolutions() {
      return this.solutions.map((solution) => ({
        ...solution,
        images: {
          regular: this.getFilePath(solution.image_name, '@1x'),
          large: this.getFilePath(solution.image_name, '@2x'),
        },
      }));
    },
  },

  methods: {
    getFilePath(name, size = '@1x') {
      return `./images/${name}${size}.jpg`;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/utils/toRem";
@import "./scss/index.scss";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__cards-list {
    margin: auto 0;
    padding: toRem(60px) 0;
  }
}
</style>
