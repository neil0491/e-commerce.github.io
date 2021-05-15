<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <aside class="category-options mt-1">
          <div class="category-options__prisce"></div>
        </aside>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col"><card :cards="GET_ALL_PRODUCTS" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/cards/Card.vue";
export default {
  components: { Card },
  computed: {
    ...mapGetters(["GET_ALL_PRODUCTS"]),
  },
  methods: {
    ...mapActions(["FETCH_ALL_PRODUCTS"]),
  },
  mounted() {
    this.FETCH_ALL_PRODUCTS();
  },
};
</script>

<style scoped lang="scss">
.category-options {
  background: $white;
  height: 100%;
  border-radius: $br-s;
}
</style>