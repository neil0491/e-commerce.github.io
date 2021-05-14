<template>
  <header class="header">
    <nav class="row nav">
      <div class="col-1 col-md-2">
        <router-link to="/"
          ><img class="nav__logo" src="/img/logo.png" alt="logo"
        /></router-link>
      </div>
      <div class="col-7 nav__search">
        <search />
      </div>
      <div class="col-2 nav__login">
        <Button outline button-text="Войти" />
        <Button button-text="Регистрация" />
      </div>
    </nav>
  </header>
</template>

<script>
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";
export default {
  components: { Search, Button },
  data: () => ({
    buttonText: "Hello",
  }),
};
</script>

<style scoped lang="scss">
.header {
  background: $white;
  padding: 1.2rem;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1300px - 30px);
  margin: 0 auto;

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
