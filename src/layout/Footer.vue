<template>
  <footer class="footer mt-auto">
    <div class="footer__container">
      <div class="row">
        <div class="col-12 col-md-6 footer__news">
          <h3 class="footer__title">
            Интернет магазин бытовой техники и электроники "СИРИУС НКА"
          </h3>
          <p class="footer__subtitle">
            В каждом разделе мы расположили товары по категориям, чтобы вам было
            проще ознакомиться с каждым из них. Если вы хотите ускорить процесс
            выбора товаров, то вы можете воспользоваться функцией поиска по
            сайту.
          </p>
          <p class="footer__subtitle">
            Для удобство покупателей, в нашем интернннет магазине, для
            приобретения товаров предусмотренна онлайн оплата.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <h3 class="footer__title">Контакты</h3>
          <p class="footer__subtitle">
            <strong>Наш адрес:</strong> Туркестанская обл. Сарыагашский район.
            Село Акниет. 160900. Пупошенко 41.
          </p>
          <p class="footer__subtitle"><strong>Телефон:</strong> +77714568440</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $white;
  padding: 3rem 0;
  &__container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__title {
    font-size: 14px;
    font-weight: 700;
  }
  &__subtitle {
    font-size: 14px;
    padding-right: 1rem;
  }
  &__news {
    padding-right: 3rem;
  }
}
</style>
