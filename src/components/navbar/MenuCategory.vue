<template>
  <div @click="CLOSE_MENU" class="categories">
    <div class="categories__list">
      <div class="categories__header bottom-border">
        <button @click="CLOSE_MENU" class="prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h4>LOGO</h4>
      </div>
      <ul>
        <li
          v-for="cateegory in cateegories"
          :key="cateegory.id"
          class="categories__item"
        >
          <!-- {{ cateegory }} -->

          <div class="d-flex">
            <router-link :to="`product/${cateegory.id}`">
              {{ cateegory.title }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  props: ["cateegories"],
  data: () => ({
    products: null,
  }),
  computed: {
    ...mapGetters(["GET_ALL_CATEGORIES", "GET_CATEGORY", "GET_MENU"]),
  },
  methods: {
    ...mapActions(["FETCH_ALL_CATEGORIES", "CLOSE_MENU", "CLOSE_MENU"]),

    // getCategoryContain: async () => {
    //   const productInCategory = await axios(
    //     `http://localhost:1337/categories?id_contains=1`
    //   );
    //   console.log(productInCategory.data);
    //   this.products = productInCategory.data;
    // },
  },
  // mounted() {
  //   this.FETCH_ALL_CATEGORIES();
  //   // this.getCategoryContain();
  //   axios
  //     .get(`http://localhost:1337/brands`)
  //     .then((res) => (this.products = res.data));
  // },
};
</script>

<style scoped lang="scss">
.prev {
  background: transparent;
}
.categories {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: $overlay-black;
  z-index: 100;
  &__header {
    background: $white;
    max-width: 400px;
    padding: 1rem;
    display: flex;
    align-items: center;
    line-height: 1rem;
    i {
      font-size: 1.9rem;
      margin-right: 1rem;
      color: $color-primary-base;
      &:hover {
        opacity: 0.8;
      }
    }
    h4 {
      margin-bottom: 0;
      width: 100%;
      text-align: center;
    }
  }
  &__list {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    list-style: none;
    background: $white;
    max-width: 400px;
    margin: 0;
    padding: 0;
    height: 100%;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }
  &__item {
    line-height: 2;
    width: 100%;
    display: inline-block;
    padding: 0.5rem 1.4rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: $color-primary-base;
      color: $white;
    }
  }
}
</style>
