<template>
  <div>
    <form class="subscribe">
      <input
        class="subscribe__text"
        type="text"
        placeholder="Адрес электронной почты"
      />
      <input class="subscribe__button" type="button" value="Подписаться" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.subscribe {
  position: relative;
  height: 100%;
  &__text {
    color: var(--color-text-black);
    opacity: 0.85;
    position: relative;
    width: 100%;
    height: 37px;
    background: #fff;
    border: 1px solid #c5c5c5;
    border-radius: 23.5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 34px;
    padding: 0 147px 0 20px;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    outline: none;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  &__button {
    cursor: pointer;
    position: absolute;
    width: 147px;
    height: 37px;
    top: 50%;
    right: 0;
    background: #ff7112;
    border: 0;
    border-radius: 23.5px;
    color: #fff;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: 0.2s;
    transition: 0.2s;
    font-size: 12px;
    font-weight: 500;
    -webkit-backface-visibility: initial;
    backface-visibility: initial;
  }
}
</style>
