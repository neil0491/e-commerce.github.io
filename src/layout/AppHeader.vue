<template>
  <header class="header">
    <section class="py-2 bottom-border">
      <div class="row header-search">
        <div class="col-1 col-md-2">
          <router-link to="/"
            ><img class="header-search__logo" src="/img/logo.png" alt="logo"
          /></router-link>
        </div>
        <div class="col-7 header-search__search">
          <search />
        </div>
        <div class="col-2 header-search__login">
          <div @click="openModal">
            <Button outline button-text="Войти" />
          </div>
          <div @click="openModalRegistration">
            <Button button-text="Регистрация" />
          </div>
          <modal v-if="GET_IS_MODAL">
            <enter-form></enter-form>
          </modal>
          <modal v-if="GET_IS_MODAL_REGISTRATION">
            <registration-form></registration-form>
          </modal>
        </div>
      </div>
    </section>
    <section class="header__navbar">
      <navbar />
    </section>
    <cart-modal v-if="IS_CART_STATE" />
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Button from "../components/Button.vue";
import CartModal from "../components/Cart/CartModal.vue";
import EnterForm from "../components/Forms/EnterForm.vue";
import RegistrationForm from "../components/Forms/RegistrationForm.vue";
import Modal from "../components/modal/Modal.vue";
import Navbar from "../components/navbar/Navbar.vue";
import Search from "../components/Search.vue";

export default {
  components: {
    Search,
    Button,
    Modal,
    EnterForm,
    RegistrationForm,
    Navbar,
    CartModal,
  },
  data: () => ({
    isModal: false,
  }),
  methods: {
    ...mapActions(["OPEN_MODAL", "OPEN_REGISTRATION"]),

    openModal() {
      this.OPEN_MODAL();
    },
    openModalRegistration() {
      this.OPEN_REGISTRATION();
    },
  },
  computed: {
    ...mapGetters([
      "GET_IS_MODAL",
      "GET_IS_MODAL_REGISTRATION",
      "IS_CART_STATE",
    ]),
  },
};
</script>

<style scoped lang="scss">
.header {
  background: $white;
  position: sticky;
  top: 0;
  z-index: 999;
  &__navbar {
    max-width: 1400px;
    margin: 0 auto;
  }

  border-top: 1px solid $gray-10;
}
.header-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1300px - 30px);
  margin: 0rem auto;
  &__logo {
    width: 100px;
  }
  &__search {
    padding: 0 30px;
    margin-right: 2%;
  }
  &__login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
