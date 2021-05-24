<template>
  <nav class="nav px-4">
    <ul class="nav__list">
      <li class="nav__list-item">
        <div class="menu" @click="OPEN_MENU">
          <i class="me-2 fas fa-list-ul"></i>Все категории
        </div>
      </li>
      <li class="nav__list-item">
        <router-link to="/">Главная</router-link>
      </li>
      <li class="nav__list-item">
        <router-link to="/products">Все товары</router-link>
      </li>
    </ul>
    <button @click="goToCart" class="nav__cart">
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
    ...mapActions(["OPEN_MENU"]),
    goToCart() {
      this.$router.push({ name: "Cart" });
    },
  },
  computed: {
    ...mapGetters(["CART_COUNT"]),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  cursor: pointer;
  padding-right: 1rem;
  border-right: 1px solid $gray-10;
}
.nav {
  display: flex;
  justify-content: space-between;
  height: $height-mobile-menu;
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
