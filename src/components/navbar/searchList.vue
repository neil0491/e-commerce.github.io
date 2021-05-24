<template>
  <div v-if="GET_FOCUS_SEARCH" class="search-paper">
    <ul class="search-paper__list">
      <li v-if="$apollo.loading">Loading...</li>
      <li
        v-else
        v-for="product in products"
        :key="product.id"
        class="search-paper__item bottom-border"
        @click="goToProduct(product.id)"
      >
        <div class="search-paper__link">
          {{ product.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import serchProducts from "@/graphql/searchProducts.gql";

export default {
  data() {
    return {
      products: [],
    };
  },
  apollo: {
    products: {
      query: serchProducts,
      variables() {
        return {
          searchText: this.GET_INPUT_SEARCH,
        };
      },
      skip() {
        return !this.GET_INPUT_SEARCH;
      },
    },
  },
  methods: {
    ...mapMutations(["SET_FOCUS_SEARCH"]),
    goToProduct(id) {
      this.SET_FOCUS_SEARCH(false);
      this.$router.push({ name: "Product", params: { id: id } });
    },
  },
  computed: {
    ...mapGetters(["GET_FOCUS_SEARCH", "GET_INPUT_SEARCH"]),
  },
};
</script>

<style lang="scss" scoped>
.search-paper {
  position: relative;
  &__list {
    position: fixed;
    left: 50%;
    width: 80%;
    background: $gray-03;
    margin: 0.5rem auto;
    z-index: 100;
    border-radius: $border-card;

    transform: translateX(-50%);
  }
  &__item {
    cursor: pointer;
    &:hover {
      background: $brand-light-orange;
    }
  }
  &__link {
    display: inline-block;
    padding: 1rem;
    width: 100%;
    height: 100%;
    font-weight: 500;
  }
}
</style>
