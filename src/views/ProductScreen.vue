<template>
  <div class="product">
    <loading-query v-if="$apollo.loading" />
    <div v-else class="row">
      <div class="product__gallery col-12 col-md-5">
        <slider-cart :images="products[0].images" />
      </div>
      <div class="col-12 col-md-7">
        <div>
          <img class="product__logo" :src="getImg()" alt="Logo" />
          <h1 class="product__title">
            {{ products[0].title }}
          </h1>
          <span class="product__articule"
            >Артикул: {{ products[0].articul }}</span
          >
          <p class="product__price top-border">{{ products[0].price }} тг.</p>
          <div class="product__button button-block">
            <button
              @click="addToCArt(products[0])"
              class="btn button-block__add"
            >
              Добавить в корзину
            </button>
            <button
              @click="routingCart(products[0])"
              class="btn button-block__cart"
            >
              Перейти в корзину
            </button>
          </div>
        </div>
        <div class="product__description">
          <span style="font-weight: bold"> Описание </span>
          <div v-html="products[0].description"></div>
        </div>
      </div>
      <div class="col-12 p-4">
        <div v-html="products[0].feature"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoadingQuery from "../components/loading/loadingQuery.vue";
import SliderCart from "../components/slider/SliderCart.vue";

import product from "../graphql/product.gql";

export default {
  components: { SliderCart, LoadingQuery },
  data: () => ({
    products: [],
  }),

  apollo: {
    products: {
      prefetch: true,
      query: product,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  computed: {
    ...mapGetters(["IS_MOBILE"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    getImg() {
      return (
        process.env.VUE_APP_WEBSITE + this.products[0].brands[0].logo[0].url
      );
    },

    addToCArt(id) {
      this.ADD_TO_CART(id);
    },
    routingCart(id) {
      this.ADD_TO_CART(id);
      this.$router.push({ name: "Cart" });
    },
  },
  // mounted() {
  //   this.FETCH_PRODUCT(this.$route.params.id);
  // },
};
</script>

<style scoped lang="scss">
.product {
  margin: 1rem 0;
  padding: 2rem 1rem;
  background-color: $white;
  @media (max-width: 767px) {
    margin: 0.5rem 0;
  }
  &__logo {
    width: 70px;
  }
  &__description {
    max-width: 500px;
    text-align: justify;
    padding-right: 2rem;
  }
  &__gallery {
    padding: 0 2rem;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  &__price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    padding: 1rem 0 0;
  }
  &__button {
    display: block;
    text-transform: uppercase;
    width: 100%;
    color: $white;
    margin-bottom: 2rem;
  }
  &__details {
    margin-top: 1rem;
  }
  &__articule {
    font-size: 0.8rem;
  }
}
.btn {
  color: $white;
  border-radius: 50px;
  padding: $button-padding;
  margin: 0.5rem 0;
}
.button-block {
  &__add {
    background-color: $ui-green;
    margin-right: 0.5rem;
  }
  &__cart {
    background-color: $color-text-link;
  }
}
.details {
  &__header {
    font-weight: bold;
    font-size: 0.8rem;
  }
  &__list-items {
    list-style: none;
    padding: 0;
  }
  &__list-item {
    font-size: 0.9rem;
    span {
      font-weight: bold;
      margin-left: 0.3rem;
    }
  }
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
