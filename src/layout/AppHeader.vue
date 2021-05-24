<template>
  <header class="header">
    <section class="py-2 bottom-border">
      <div class="row header-search">
        <div class="col-2 col-md-2">
          <router-link to="/">
            <div>
              <img
                class="header-search__logo"
                src="/img/logo.png"
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
        <div class="col-2 header-search__login">
          {{ username }}
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
import { mapActions, mapGetters } from "vuex";

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
  }),
  methods: {
    ...mapActions(["OPEN_MODAL", "OPEN_REGISTRATION"]),
  },

  computed: {
    ...mapGetters([
      "IS_CART_STATE",
      "IS_DESKTOP",
      "IS_MOBILE",
      "GET_MENU",
      "username",
    ]),
  },
};
</script>

<style scoped lang="scss">
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
