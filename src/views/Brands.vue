<template>
  <div class="row">
    <div class="col">
      <div class="my-4">
        <h3>{{ brands[0].title }}</h3>
      </div>
      <card :cards="brands[0].products" />
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";
import brands from "@/graphql/brands.gql";

export default {
  components: { Card },
  data: () => ({
    brands: [],
  }),
  apollo: {
    brands: {
      query: brands,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
