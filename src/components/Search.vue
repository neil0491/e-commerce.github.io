<template>
  <form class="header-search">
    <input
      type="text"
      class="header-search__input"
      placeholder="Я хочу найти..."
    />
    <button type="button" class="header-search__button">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: "Search",
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
    z-index: 14;
    cursor: pointer;
  }
}
</style>
