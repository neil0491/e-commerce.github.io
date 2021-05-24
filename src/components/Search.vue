<template>
  <div>
    <form class="header-search">
      <input
        type="text"
        class="header-search__input"
        placeholder="Я хочу найти..."
        @focus.stop="SET_FOCUS_SEARCH(true)"
        v-model="inputSearch"
      />
      <button type="button" class="header-search__button">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Search",
  computed: {
    inputSearch: {
      get() {
        return this.$store.state.inputSerch;
      },
      set(value) {
        return this.SET_INPUT_SEARCH(value);
      },
    },
  },

  methods: {
    ...mapMutations(["SET_INPUT_SEARCH", "SET_FOCUS_SEARCH"]),
  },
};
</script>

<style scoped lang="scss">
.header-search {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 1rem;
  overflow: hidden;
  &__input {
    width: 100%;
    padding: $padding-form 1.5rem;
    margin: 0 auto;
    border: 2px solid $brand-orange;
    border-radius: 20px;
    background-color: $white;
    font-weight: 300;
    @media (max-width: 767px) {
      padding: 6px 1.5rem;
      border: 1px solid $gray-30;
      font-size: 1.05rem;
    }
  }
  &__button {
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    width: 5rem;
    background: $brand-orange;
    font-size: 1rem;
    color: $white;
    border-top-right-radius: $button-border-radius;
    border-bottom-right-radius: $button-border-radius;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    cursor: pointer;
    @media (max-width: 767px) {
      background: transparent;
      color: $gray-30;
    }
  }
}
</style>
