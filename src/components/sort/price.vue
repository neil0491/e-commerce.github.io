<template>
  <form class="input">
    <div class="input__header">
      <input
        v-model="minPrice"
        class="input__price"
        placeholder="от"
        min="0"
        type="number"
      />
      <input
        v-model="maxPrice"
        class="input__price"
        placeholder="до"
        min="0"
        type="number"
      />
    </div>
    <div class="input__button-group">
      <input
        class="input__button btn btn-primary"
        type="button"
        value="Сброс"
        @click="clearSubmit"
      />
      <input
        class="input__button btn btn-primary"
        type="button"
        value="Применить"
        @click="submitPrice"
      />
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    submitPrice() {
      this.$store.commit("SET_SUBMIT_PRICE");
    },
    clearSubmit() {
      this.$store.commit("CLEAR_SUBMIT_PRICE");
      this.$store.commit("SET_MIN_PRICE", 0);
      this.$store.commit("SET_MAX_PRICE", 0);
    },
  },
  computed: {
    minPrice: {
      get() {
        return this.$store.state.minPrice;
      },
      set(minPrice) {
        return this.$store.commit("SET_MIN_PRICE", minPrice);
      },
    },
    maxPrice: {
      get() {
        return this.$store.state.maxPrice;
      },
      set(maxPrice) {
        return this.$store.commit("SET_MAX_PRICE", maxPrice);
      },
    },
  },
};
</script>

<style scoped lang="scss">
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  display: none;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    width: 100%;
    display: flex;
  }
  &__price {
    width: 45%;
    margin: 0.5rem 0;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    border-radius: $button-border-radius;
    border: 1px solid $gray-55;
  }
  &__price:last-child {
    width: 45%;
    margin-left: auto;
  }
  &__button {
    display: block;
    padding: 0 0.5rem;
    margin-right: 5px;
    font-size: 0.8rem;
  }
  &__button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
