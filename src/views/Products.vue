<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <aside class="category-options">
        <accordion title="Цена">
          <price class="py-2" />
        </accordion>
        <accordion title="Производитель">
          <Brand :brandList="brands" class="py-2" />
        </accordion>
      </aside>
    </div>
    <div class="col-12 col-md-9">
      <div class="row">
        <div class="col"><card :cards="products" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";
import allProducts from "@/graphql/allProducts.gql";
import accordion from "@/components/accordion/accordion.vue";
import Brand from "@/components/sort/brand.vue";
import Price from "../components/sort/price.vue";
export default {
  components: { Card, accordion, Brand, Price },
  data: () => ({
    select: "default",
    products: null,
    brands: [],
    sort: "price:asc",
  }),
  apollo: {
    products: {
      query: allProducts,
      variables() {
        return {
          sort: this.sort,
        };
      },
    },
    brands: {
      query: allProducts,
    },
  },
  watch: {
    sort() {
      return `price:${this.SortProductPrice}`;
    },
  },
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
