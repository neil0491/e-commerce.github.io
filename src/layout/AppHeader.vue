<template>
  <header class="header">
    <section class="py-2 bottom-border">
      <div class="row header-search">
        <div class="col-2 col-md-2">
          <router-link to="/">
            <div>
              <img
                class="header-search__logo"
                src="/img/logo-1.png"
                alt="logo"
              /></div
          ></router-link>
        </div>
        <div class="col-10 col-md-7 header-search__search">
          <search />
        </div>
        <div v-if="!username" class="col-2 header-search__login">
          <div @click="OPEN_MODAL">
            <Button outline button-text="Войти" />
          </div>
          <div @click="OPEN_REGISTRATION">
            <Button button-text="Регистрация" />
          </div>
        </div>
        <div v-else class="col-2 header-search__login">
          <button @click="logoutUser" class="btn btn-primary">Выйти</button>
          <div class="wrapper-user">
            <div @click="hoverUser = !hoverUser" class="user">
              <i class="fas fa-user"></i>
            </div>
            <div v-show="hoverUser" class="user__name">
              <div class="bottom-border">
                Добро пожаловать, <br />
                {{ username }}
              </div>
              <div class="user__content">
                В вашей корзине {{ GET_TOTAL_CART }} товара
              </div>
              <router-link :to="{ name: 'Cart' }" class="btn btn-primary">
                Перейти в корзину
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="header__navbar">
      <navbar />
    </section>
    <section class="header__mobile-navbar">
      <mobile-navbar />
    </section>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import Button from "../components/Button.vue";
import MobileNavbar from "../components/navbar/MobileNavbar.vue";
import Navbar from "../components/navbar/Navbar.vue";
import Search from "../components/Search.vue";

export default {
  components: {
    Search,
    Button,
    Navbar,
    MobileNavbar,
  },
  data: () => ({
    isModal: false,
    hoverUser: false,
  }),
  methods: {
    ...mapActions(["OPEN_MODAL", "OPEN_REGISTRATION"]),
    ...mapMutations(["logout"]),
    logoutUser() {
      this.hoverUser = false;
      this.logout();
    },
  },

  computed: {
    ...mapGetters([
      "IS_CART_STATE",
      "IS_DESKTOP",
      "IS_MOBILE",
      "GET_MENU",
      "username",
      "GET_TOTAL_CART",
    ]),
  },
};
</script>

<style scoped lang="scss">
.wrapper-user {
  position: relative;
  margin-left: 14px;
  .user__name {
    position: absolute;
    cursor: auto;
    font-weight: 500;
    font-style: italic;
    width: 230px;
    background: $white;
    color: $gray-75;
    padding: 0.5rem;
    top: 65px;
    left: -175px;
    z-index: 2;
    text-align: center;
    -webkit-box-shadow: 1px 1px 27px 12px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px 1px 27px 12px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 1px 27px 12px rgba(34, 60, 80, 0.2);
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -10px;
      right: 17px;
      background: $white;
      height: 30px;
      width: 30px;
      z-index: -1;
      transform: rotate(45deg);
    }
    .btn {
      font-size: 14px;
      margin-bottom: 1rem;
    }
  }
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    margin: auto;
    color: $white;
    background: $color-primary-base;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    &__content {
      font-style: normal;
      padding: 0.5rem 0.2rem;
    }
  }
}
.header {
  background: $white;
  position: sticky;
  top: 0;
  z-index: 10;
  border-top: 1px solid $gray-10;
  &__navbar {
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__mobile-navbar {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: $white;
    -webkit-box-shadow: 0px -4px 8px -1px rgba(34, 60, 80, 0.15);
    -moz-box-shadow: 0px -4px 8px -1px rgba(34, 60, 80, 0.15);
    box-shadow: 0px -4px 8px -1px rgba(34, 60, 80, 0.15);
    @media (max-width: 767px) {
      display: block;
    }
  }
}
.header-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0rem auto;
  padding: 0 1rem;
  &__logo {
    width: 100px;
    margin: 0 auto;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  &__search {
    padding: 0 30px 0 0;
    margin-right: 2%;
    @media (max-width: 767px) {
      padding: 0;
      margin: 0;
    }
  }
  &__login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
