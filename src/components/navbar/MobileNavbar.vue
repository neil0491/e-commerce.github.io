<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/">
          <div class="nav__icons">
            <i class="fas fa-home"></i>
            <span>Главная</span>
          </div>
        </router-link>
      </li>
      <li class="nav__item">
        <div @click="OPEN_MENU" class="nav__icons">
          <i class="fas fa-bars"></i>
          <span>Категория</span>
        </div>
      </li>
      <li class="nav__item">
        <div @click="goToCart" class="nav__icons">
          <div class="icon-block">
            <i class="fas fa-shopping-cart"></i>
            <div v-show="CART_COUNT" class="badge">{{ CART_COUNT }}</div>
          </div>
          <span>Корзина</span>
        </div>
      </li>
      <li class="nav__item">
        <div v-if="!isUserAuth" @click="OPEN_MODAL" class="nav__icons">
          <i class="fas fa-user"></i>
          <span>Войти</span>
        </div>
        <div v-else @click="logoutUser" class="nav__icons">
          <i class="fas fa-user"></i> <span>Выйти</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {},
  data: () => ({}),
  methods: {
    ...mapActions(["CHANGE_STATE_CART", "OPEN_MENU", "OPEN_MODAL"]),
    logoutUser() {
      this.logout();
    },
    goToCart() {
      this.$router.push({ name: "Cart" });
    },
  },
  computed: {
    ...mapGetters(["CART_COUNT", "GET_MENU", "isUserAuth"]),
    ...mapMutations(["logout"]),
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  &__item {
    cursor: pointer;
  }
  &__list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: $height-mobile-menu;
  }
  &__icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.1rem;
  }
}
</style>
