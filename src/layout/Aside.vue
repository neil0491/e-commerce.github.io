<template>
  <div class="">
    <accordion title="Цена">
      <price class="py-2" />
    </accordion>
    <accordion title="Производитель">
      <Brand :brandList="brandList" class="py-2" />
    </accordion>
  </div>
</template>

<script>
import accordion from "../components/accordion/accordion.vue";
import Price from "../components/sort/price.vue";
import Brand from "../components/sort/brand.vue";
export default {
  components: { accordion, Price, Brand },
  props: ["title"],
  data: () => ({
    brandList: [
      { id: 1, title: "Samsung" },
      { id: 2, title: "LG" },
    ],
  }),
};
</script>

<style scoped lang="scss">
</style>