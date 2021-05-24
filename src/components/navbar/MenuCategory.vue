<template>
  <div @click="CLOSE_MENU" class="categories">
    <div class="categories__list">
      <div class="categories__header bottom-border">
        <button @click="CLOSE_MENU" class="prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <img class="logo" src="/img/logo-1.png" alt="logo" />
      </div>
      <ul>
        <li
          v-for="cateegory in categories"
          :key="cateegory.id"
          class="categories__item"
        >
          <router-link :to="{ name: 'Category', params: { id: cateegory.id } }">
            <div class="d-flex">
              {{ cateegory.title }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import categories from "../../graphql/categories.gql";

export default {
  components: {},
  apollo: {
    categories: {
      query: categories,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {
    ...mapActions(["CLOSE_MENU"]),
  },
};
</script>

<style scoped lang="scss">
.logo {
  width: 100px;
  margin: 0 80px;
}

.prev {
  background: transparent;
}
.categories {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: $overlay-black;
  z-index: 100;
  &__header {
    background: $white;
    max-width: 400px;
    padding: 1rem;
    display: flex;
    align-items: center;
    line-height: 1rem;
    i {
      font-size: 1.9rem;
      margin-right: 1rem;
      color: $color-primary-base;
      &:hover {
        opacity: 0.8;
      }
    }
    h4 {
      margin-bottom: 0;
      width: 100%;
      text-align: center;
    }
  }
  &__list {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    list-style: none;
    background: $white;
    max-width: 400px;
    margin: 0;
    padding: 0;
    height: 100%;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }
  &__item {
    line-height: 2;
    width: 100%;
    display: inline-block;
    padding: 0.5rem 1.4rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: $color-primary-base;
      color: $white;
    }
  }
}
</style>
