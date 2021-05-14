<template>
  <div>
    <app-header></app-header>
    <main class="container-fluid">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import AppHeader from "./layout/AppHeader.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    Footer,
  },
};
</script>
