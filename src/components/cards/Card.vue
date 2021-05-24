<template>
  <div>
    <div class="row">
      <div
        v-for="card in filtringProduct"
        :key="card.id"
        class="col-6 col-md-4 col-lg-3 py-1"
      >
        <router-link :to="{ name: 'Product', params: { id: card.id } }">
          <div class="card">
            <img
              :src="'http://localhost:1337' + card.image.url"
              :alt="card.id"
            />
            <div class="card__content pt-2">
              <h5>{{ card.title }}</h5>
              <p class="card__subtitle">{{ card.price }} тг.</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Card",
  props: {
    cards: Array,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      "GET_ID_BRANDS",
      "GET_SUBMIT_PRICE",
      "GET_MAX_PRICE",
      "GET_MIN_PRICE",
    ]),
    brandsCard() {
      return this.cards.filter((product) => {
        product.brands.map((brand) => this.arrayBrands.push(brand.id));
      });
    },
    filtringProduct() {
      if (this.GET_ID_BRANDS.length) {
        return this.cards.filter((data) =>
          data.brands.some((brand) => {
            return this.GET_ID_BRANDS.indexOf(brand.id) !== -1;
          })
        );
      }
      if (this.GET_SUBMIT_PRICE) {
        return this.cards.filter((product) =>
          product.price > this.GET_MIN_PRICE &&
          product.price < this.GET_MAX_PRICE
            ? product
            : ""
        );
      }
      return this.cards;
    },
  },
  methods: {
    ...mapMutations["CLEAR_SUBMIT_PRICE"],
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.card {
  text-decoration: none;
  padding: 0.4rem;
  height: 100%;
  min-height: 186px;
  max-height: 404px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: $white;
  transition: all 0.2s ease-in;
  img {
    height: 200px;
    object-fit: contain;
  }
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 5px 38px 2px rgba(34, 60, 80, 0.28);
  }
  &__content {
    h5 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
