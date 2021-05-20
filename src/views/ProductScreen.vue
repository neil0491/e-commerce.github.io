<template>
  <div class="product">
    <div class="row">
      <div class="product__gallery col-12 col-md-5">
        <slider-cart :images="GET_PRODUCT.images" v-if="IS_DESKTOP" />
        <slider v-if="IS_MOBILE" />
      </div>
      <div class="col-12 col-md-7">
        <div>
          <img
            class="product__logo"
            :src="'http://localhost:1337' + GET_PRODUCT.brands[0].logo[0].url"
            alt="Logo"
          />
          <h1 class="product__title">
            {{ GET_PRODUCT.title }}
          </h1>
          <span class="product__articule"
            >Артикул: {{ GET_PRODUCT.articul }}</span
          >
          <p class="product__price top-border">$ {{ GET_PRODUCT.price }}</p>
          <div class="product__button button-block">
            <button
              @click="addToCArt(GET_PRODUCT)"
              class="btn button-block__add"
            >
              Добавить в корзину
            </button>
            <button
              @click="routingCart(GET_PRODUCT)"
              class="btn button-block__cart"
            >
              Перейти в корзину
            </button>
          </div>
        </div>
        <div class="product__description">
          <span style="font-weight: bold"> Описание </span>
          <div v-html="GET_PRODUCT.description"></div>
        </div>
      </div>
      <div class="col-12 p-4">
        <div v-html="GET_PRODUCT.feature"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Slider from "../components/slider/Slider.vue";
import SliderCart from "../components/slider/SliderCart.vue";

export default {
  components: { SliderCart, Slider },
  data: () => ({
    color: null,
  }),
  computed: {
    ...mapGetters(["GET_PRODUCT", "IS_MOBILE", "IS_DESKTOP"]),
  },
  methods: {
    ...mapActions(["FETCH_PRODUCT", "ADD_TO_CART"]),

    addToCArt(id) {
      this.ADD_TO_CART(id);
    },
    routingCart(id) {
      this.ADD_TO_CART(id);
      this.$router.push({ name: "Cart" });
    },
  },
  created() {
    this.FETCH_PRODUCT(this.$route.params.id);
  },
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
