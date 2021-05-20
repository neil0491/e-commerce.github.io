<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <aside class="category-options">
        <Aside />
      </aside>
    </div>
    <div class="col-12 col-md-9">
      <div class="row">
        <div class="col-12">
          <sort-price />
        </div>
        <div class="col"><card :cards="GET_ALL_PRODUCTS" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/cards/Card.vue";
import SortPrice from "../components/sort/sortPrice.vue";
import Aside from "../layout/Aside.vue";
export default {
  components: { Card, Aside, SortPrice },
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
