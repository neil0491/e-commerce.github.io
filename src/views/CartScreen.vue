<template>
  <div class="cart-wrapper">
    <div class="row">
      <main class="col-12 col-lg-9">
        <div class="empty-cart" v-if="CART_ITEMS < 1">
          У вас нет товаров в корзине
        </div>
        <article v-else>
          <div
            v-for="(cart, index) in CART_ITEMS"
            :key="cart.id"
            class="card card-body"
          >
            <div class="row align-items-center my-2">
              <div class="col-md-6">
                <figure class="itemside">
                  <div class="aside">
                    <img
                      :src="'http://localhost:1337' + cart.image.url"
                      class="border img-sm"
                    />
                  </div>
                  <figcaption class="info">
                    <span class="text-muted">{{ cart.category.title }}</span>
                    <router-link
                      :to="{ name: 'Product', params: { id: cart.id } }"
                      class="title h6"
                    >
                      {{ cart.title }}
                    </router-link>
                  </figcaption>
                </figure>
              </div>
              <div class="col">
                <div class="input-group input-spinner">
                  <div class="input-group-prepend">
                    <button
                      @click="INCREMENT_CART_ITEM(index)"
                      class="btn btn-primary js-change-qty"
                      type="button"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control js-cart-quantity"
                    :value="CART_ITEMS[index].quantity"
                  />
                  <div class="input-group-append">
                    <button
                      @click="DECCREMENT_CART_ITEM(index)"
                      class="btn btn-primary js-change-qty"
                      type="button"
                      :disabled="false"
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <!-- input-group.// -->
              </div>
              <!-- col.// -->
              <div class="col">
                <div class="price h5">{{ cart.price }}</div>
              </div>
              <div class="col flex-grow-0 text-right">
                <div
                  @click="DELETE_FROM_CART(index)"
                  class="btn btn-primary js-remove"
                >
                  <i class="fa fa-trash-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- row.// -->
        </article>
        <!-- card .// -->
      </main>
      <!-- col.// -->
      <aside class="col-12 col-lg-3">
        <div class="card">
          <div class="card-body">
            <dl class="dlist-align">
              <dt>Товары:</dt>
              <dd class="text-right js-total-original">
                <!-- {{ getTotalPrice(CART_ITEMS) }} -->
                {{ getTotalCart(CART_ITEMS) }}
              </dd>
            </dl>
            <dl class="dlist-align">
              <dt>Общая стоимость:</dt>
              <dd class="text-right js-total-original">
                {{ CART_TOTAL_PRICE }}
              </dd>
            </dl>

            <hr class="my-4" />
            <dl class="dlist-align mb-4">
              <dt>Всего к оплате:</dt>
              <dd class="text-right text-dark b">
                <strong class="js-total-cost">{{ CART_TOTAL_PRICE }}</strong>
              </dd>
            </dl>
            <a href="/" class="btn btn-primary btn-block mt-4">
              Оформить заказ
            </a>
          </div>
          <!-- card-body.// -->
        </div>
        <!-- card.// -->
      </aside>
      <!-- col.// -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["CART_TOTAL_PRICE", "CART_ITEMS"]),
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECCREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
    ]),
    getTotalPrice(cartItems) {
      const tottal = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      return tottal;
    },
    disableButton() {},
    getTotalCart(cartItems) {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.cart-wrapper {
  margin: 1rem 0;
  
}
.empty-cart {
  width: 100%;
  background: $white;
  height: 100%;
  border-radius: $border-card;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.5rem;
  color: $gray-55;
  padding: 2rem;
}

.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
.input-group > .form-control:focus {
  z-index: 3;
}
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-prepend,
.input-group-append {
  display: flex;
}
.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}
.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}
.input-group-prepend {
  margin-right: -1px;
}
.input-group-append {
  margin-left: -1px;
}
.input-group > .input-group-prepend > .btn,
.input-group > .input-group-append:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .input-group-append > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.card img {
  max-width: 100%;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.border {
  border: 1px solid #e4e4e4 !important;
}
.flex-grow-0 {
  -webkit-box-flex: 0 !important;
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}
.align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}
.text-right {
  text-align: right !important;
}
.text-danger {
  color: #eb1537 !important;
}
.text-dark {
  color: #212529 !important;
}
.text-muted {
  color: #9faab7 !important;
}
.card .title {
  color: #212529;
}

.btn-light i {
  color: $white;
}

.btn.disabled {
  cursor: not-allowed;
}
.itemside {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0;
}
.itemside .aside {
  position: relative;
  flex-shrink: 0;
}
.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}
.itemside .title {
  display: block;
  margin-bottom: 5px;
  color: #212529;
}
.itemside a.title:hover {
  color: $ui-red;
}
dl dt {
  font-weight: 400;
}
dl dd {
  margin-bottom: 5px;
}
[class*="dlist-"] {
  margin-bottom: 5px;
}
[class*="dlist-"] dd {
  margin-bottom: 0;
}
.dlist-align {
  display: flex;
}
.dlist-align dt {
  width: 140px;
  word-wrap: break-word;
  font-weight: 600;
}
.dlist-align dd {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
.price {
  font-weight: 600;
  color: #212529;
  text-align: center;
}
.input-spinner {
  width: 125px;
  flex-wrap: nowrap;
  display: inline-flex;
  vertical-align: middle;
}
.input-spinner input.form-control {
  text-align: center;
  max-width: 35px;
  height: 35px;
  font-weight: 700;
  flex-basis: 46px;
  border: 1px solid $gray-90;
  flex-grow: 0;
}
.input-spinner .btn {
  width: 42px;
  text-align: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.img-sm {
  width: 60px;
}

.js-remove {
  width: 45px;
  height: 45px;
  line-height: 45px;
  padding: 0;
}
.js-change-qty {
  padding: 0;
}
</style>
