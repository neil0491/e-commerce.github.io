<template>
  <div>
    <accordion title="Цена">
      <price class="py-2" />
    </accordion>
    <accordion title="Производитель">
      <Brand :brandList="brands" class="py-2" />
    </accordion>
  </div>
</template>

<script>
import accordion from "../components/accordion/accordion.vue";
import Price from "../components/sort/price.vue";
import Brand from "../components/sort/brand.vue";
import allBrands from "@/graphql/allBrands.gql";

export default {
  components: { accordion, Price, Brand },
  props: ["title"],
  data: () => ({
    brands: [],
  }),
  apollo: {
    brands: {
      query: allBrands,
      updated: (data) => data.allBrands,
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss"></style>
