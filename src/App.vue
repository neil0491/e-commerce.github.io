<template>
  <div class="app">
    <menu-category v-if="GET_MENU" />
    <modal v-if="GET_IS_MODAL">
      <enter-form></enter-form>
    </modal>
    <modal v-if="GET_IS_MODAL_REGISTRATION">
      <registration-form></registration-form>
    </modal>
    <app-header></app-header>
    <search-list />
    <main>
      <div @click="closeSearchPaper" class="main-wrapper">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AppHeader from "./layout/AppHeader.vue";
import Footer from "./layout/Footer.vue";
import MenuCategory from "@/components/navbar/MenuCategory.vue";
import EnterForm from "@/components/Forms/EnterForm.vue";
import RegistrationForm from "@/components/Forms/RegistrationForm.vue";
import Modal from "@/components/modal/Modal.vue";
import SearchList from "./components/navbar/searchList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Footer,
    MenuCategory,
    Modal,
    EnterForm,
    RegistrationForm,
    SearchList,
  },
  computed: {
    ...mapGetters([
      "IS_MOBILE",
      "IS_DESKTOP",
      "GET_MENU",
      "GET_ALL_CATEGORIES",
      "GET_IS_MODAL",
      "GET_IS_MODAL_REGISTRATION",
    ]),
  },
  methods: {
    ...mapActions([
      "SET_MOBILE",
      "SET_DESKTOP",
      "OPEN_MODAL",
      "OPEN_REGISTRATION",
      "FETCH_ALL_CATEGORIES",
    ]),

    ...mapMutations(["SET_FOCUS_SEARCH"]),
    closeSearchPaper() {
      this.SET_FOCUS_SEARCH(false);
    },

    openModal() {
      this.OPEN_MODAL();
    },
    openModalRegistration() {
      this.OPEN_REGISTRATION();
    },
  },
  mounted() {
    this.FETCH_ALL_CATEGORIES();
    console.log(process.env.VUE_APP_WEBSITE);
    let vm = this;
    addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
      } else {
        vm.SET_MOBILE();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 0;
  .main-wrapper {
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
  }
}
</style>
