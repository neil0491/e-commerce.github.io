<template>
  <div class="product my-4">
    <div class="row">
      <div class="product__gallery col-6">
        <slider-cart />
      </div>
      <div class="col-6">
        <div class="px-4">
          <h1 class="product__title">
            {{ GET_PRODUCT.title }}
          </h1>
          <p class="product__price">$ {{ GET_PRODUCT.price }}</p>
          <button @click="addToCArt(GET_PRODUCT)" class="product__button">
            Добавить в корзину
          </button>
        </div>
        <div class="product__details details">
          <p class="details__header">Описание</p>
          <ul class="details__list-items">
            <li class="details__list-item">
              Диагональ дисплея, дюйм <span>6.5</span>
            </li>
            <li class="details__list-item">
              Разрешение дисплея <span>1080x2400</span>
            </li>
            <li class="details__list-item">
              Операционная система<span> Android 11</span>
            </li>
            <li class="details__list-item">
              Объём встроенной памяти<span>128</span>
            </li>
            <li class="details__list-item">
              Количество SIM-карт<span>2</span>
            </li>
            <li class="details__list-item">
              Ёмкость аккумулятора, mAh: <span>>4500</span>
            </li>
          </ul>
        </div>
        <div class="my-4">
          <span style="font-weight: bold"> Description </span>
          <p>{{ GET_PRODUCT.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SliderCart from "../components/slider/SliderCart.vue";
export default {
  components: { SliderCart },
  computed: {
    ...mapGetters(["GET_PRODUCT"]),
  },
  methods: {
    ...mapActions(["FETCH_PRODUCT", "ADD_TO_CART"]),

    addToCArt(id) {
      this.ADD_TO_CART(id);
    },
  },
  mounted() {
    this.FETCH_PRODUCT(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
p {
  line-height: 1.5rem;
  width: 80%;
  font-size: 14px;
}
.product {
  padding: 1rem;
  background-color: $white;
  &__gallery {
    padding: 0 1rem;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  &__price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &__button {
    text-transform: uppercase;
    width: 100%;
    padding: 0.5rem;
    background-color: $ui-green;
    color: $white;
    border-radius: 50px;
    margin-bottom: 2rem;
  }
  &__details {
    margin-top: 1rem;
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
</style>
