<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <aside class="category-options">
        <Aside />
      </aside>
    </div>
    <div class="col-12 col-md-9">
      <loading-query v-if="$apollo.loading" />
      <div v-else class="row">
        <div class="col-12">
          <sort-price
            @sortProduct="SortProductPrice"
            :categories="categories"
          />
        </div>
        <div class="col"><card :cards="this.categories[0].products" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import category from "../graphql/category.gql";
import Card from "../components/cards/Card.vue";
import SortPrice from "../components/sort/sortPrice.vue";
import Aside from "../layout/Aside.vue";
import LoadingQuery from "../components/loading/loadingQuery.vue";

export default {
  components: { Card, Aside, SortPrice, LoadingQuery },
  apollo: {
    categories: {
      query: category,
      variables() {
        return {
          id: this.$route.params.id,
          sort: this.sort,
        };
      },
      updated: (data) => data.category,
    },
  },
  data: () => ({
    select: "default",
    categories: null,
    sort: "price:asc",
    products: [],
  }),
  watch: {
    sort() {
      return `price:${this.SortProductPrice}`;
    },
  },
  computed: {},
  methods: {
    SortProductPrice(item) {
      this.sort = `price:${item}`;
    },
  },
};
</script>

<style scoped lang="scss">
.category-options {
  background: $white;
  border-radius: $br-s;
  margin: $grid-gutter-width 0;
  position: sticky;
  top: 135px;
  @media (max-width: 767px) {
    /* display: none; */
  }
  &__price {
  }
}
</style>
