<template>
  <nav class="nav py-3 px-4">
    <ul class="nav__list">
      <li class="nav__list-item">
        <router-link to="/products"
          ><i class="me-2 fas fa-list-ul"></i>Все категории </router-link
        >|
      </li>
      <li class="nav__list-item">
        <router-link to="/">Новинки</router-link>
      </li>
      <li class="nav__list-item">
        <router-link to="/">Одежда</router-link>
      </li>
    </ul>
    <button @click="CHANGE_STATE_CART" class="nav__cart">
      <div class="icon-block">
        <i class="fas fa-shopping-cart"></i>

        <div v-show="CART_COUNT" class="badge">{{ CART_COUNT }}</div>
      </div>
    </button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["OPEN_MODAL", "OPEN_REGISTRATION", "CHANGE_STATE_CART"]),
  },
  computed: {
    ...mapGetters(["CART_COUNT"]),
  },
};
</script>

<style lang="scss" scoped>
.icon-block {
  position: relative;
  .badge {
    position: absolute;
    left: -10px;
    bottom: -3px;
    background: $ui-red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: $white;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__list-item {
    margin-right: 1rem;
  }
  &__cart {
    background: transparent;
    color: $gray-75;
    font-size: 1.2rem;
    padding: 0;
  }
}
</style>
