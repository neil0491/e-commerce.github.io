<template>
  <form class="input">
    <div class="input__header">
      <input class="input__price" placeholder="от" type="text" />
      <input class="input__price" placeholder="до" type="text" />
    </div>
    <input
      class="input__button btn btn-primary"
      type="button"
      value="Применить"
    />
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    width: 100%;
    display: flex;
  }
  &__price {
    width: 45%;
    margin: 0.5rem 0;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    border-radius: $button-border-radius;
    border: 1px solid $gray-55;
  }
  &__price:last-child {
    width: 45%;
    margin-left: auto;
  }
  &__button {
    padding: 0 1rem;
    margin-left: auto;
    font-size: 0.8rem;
  }
}
</style>
