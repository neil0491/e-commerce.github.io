<template>
  <div>
    <Slider class="mt-2" />
    <div class="tab-content">
      <div v-if="$apollo.loading">Loading...</div>
      <tabs v-else mode="light">
        <tab :title="categories[0].title">
          <card :cards="categories[0].products" />
        </tab>
        <tab :title="categories[1].title">
          <card :cards="categories[1].products" />
        </tab>
        <tab :title="categories[2].title">
          <card :cards="categories[2].products" />
        </tab>
        <tab :title="categories[3].title">
          <card :cards="categories[3].products" />
        </tab>
      </tabs>
      <section>
        <div class="wrapper-brand" v-for="brand in brands" :key="brand.id">
          <div v-if="brand.products.length" class="wrapper-brand__header">
            <h5 class="pt-2 wrapper-brand__title">
              {{ brand.title }}
            </h5>
            <router-link
              class="wrapper-brand__link"
              :to="{ name: 'Brands', params: { id: brand.id } }"
              >Просмотреть</router-link
            >
          </div>
          <card :cards="brand.products" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";
import Tab from "../components/Tab/Tab.vue";
import Tabs from "../components/Tab/Tabs.vue";
import Slider from "../components/slider/Slider";
import categoryLimit from "@/graphql/categoryLimit.gql";

export default {
  name: "Home",
  components: { Tab, Tabs, Slider, Card },
  data: () => ({
    tab: {},
    categories: [],
    brands: [],
  }),
  apollo: {
    brands: {
      query: categoryLimit,
    },
    categories: {
      query: categoryLimit,
    },
  },
};
</script>

<style scoped lang="scss">
.tab-content {
  margin-top: 2rem;
  text-transform: uppercase;
}
.wrapper-brand {
  margin: 0.8rem 0;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__link {
    font-size: 14px;
    text-transform: none;
    background: $color-primary-base;
    padding: $padding-form;
    border-radius: $button-border-radius;
    color: $white;
    font-weight: 700;
  }
}
</style>
