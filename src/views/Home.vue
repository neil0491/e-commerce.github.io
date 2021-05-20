<template>
  <div>
    <Slider class="mt-2" />
    <div class="tab-content">
      <tabs mode="light">
        <tab title="Все">
          <card :cards="GET_ALL_PRODUCTS" />
        </tab>
        <tab
          v-for="category in GET_ALL_CATEGORIES"
          :key="category.id"
          :title="category.title"
        >
          <card :cards="category.products" />
        </tab>
      </tabs>
      <section class="aria-label">
        <p class="pt-2 typography-subtitle">Сейчас покупают</p>
        <card :cards="GET_ALL_PRODUCTS" />
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";
import Tab from "../components/Tab/Tab.vue";
import Tabs from "../components/Tab/Tabs.vue";
import Slider from "../components/slider/Slider";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Card, Tabs, Tab, Slider },
  data: () => ({
    tab: {},
  }),
  computed: {
    ...mapGetters(["GET_ALL_PRODUCTS", "GET_ALL_CATEGORIES", "GET_CATEGORY"]),
  },
  methods: {
    ...mapActions([
      "FETCH_ALL_PRODUCTS",
      "FETCH_ALL_CATEGORIES",
      "FETCH_CATEGORY",
    ]),
  },
  mounted() {
    this.FETCH_ALL_PRODUCTS();
    this.FETCH_ALL_CATEGORIES();
  },
};
</script>

<style scoped lang="scss">
.tab-content {
  margin-top: 2rem;
  text-transform: uppercase;
}
</style>
