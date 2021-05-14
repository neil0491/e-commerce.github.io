<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-5 footer__news">
          <h3 class="footer__title">Будьте в курсе новостей</h3>
          <p class="footer__subtitle">
            Подпишитесь на последние обновления и узнавайте о новинках и
            специальных предложениях первыми
          </p>
          <footer-form />
        </div>
        <div class="col">
          <h3 class="footer__title">Интернет-магазин</h3>
        </div>
        <div class="col">
          <h3 class="footer__title">Компания «Технодом»</h3>
        </div>
        <div class="col">
          <h3 class="footer__title">Помощь покупателю</h3>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterForm from "../components/FooterForm.vue";
export default {
  components: { FooterForm },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $white;
  padding: 3rem 0;
  &__title {
    margin-bottom: 3rem;
    font-size: 14px;
    font-weight: 700;
  }
  &__subtitle {
    font-size: 14px;
  }
  &__news {
    padding-right: 3rem;
  }
}
</style>
