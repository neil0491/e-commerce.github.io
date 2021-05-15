<template>
  <div class="MiniCart-Container">
    <div class="MiniCart-Title">
      Корзина
      <button @click="CHANGE_STATE_CART" class="MiniCart-Close"></button>
    </div>
    <ul class="MiniCart-ItemWrapper">
      <li
        v-for="(item, index) in CART_ITEMS"
        :key="item.id"
        aria-label="Cart Item"
        class="CartItem"
      >
        <div class="CartItem-Info CartItem-Info_isMinicart">
          <div class="CartItem-Info">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="CartItem-Title">
            <p>{{ item.title }}</p>
          </div>
          <div class="Field Field_type_qty CartItem-QtySelector">
            <input id="QtySelector" type="qty" value="1" />
            <button @click="INCREMENT_CART_ITEM(index)">
              <span>+</span></button
            ><button @click="DECCREMENT_CART_ITEM(index)">
              <span>–</span>
            </button>
          </div>
          <div class="CartItem-Actions CartItem-Actions_isMinicart">
            <button
              class="ProductWishlistButton-Button ProductWishlistButton-Button_iconOnly ProductWishlistButton-Button_notIsProductInWishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                class="remove"
              >
                <path
                  fill="#202020"
                  fill-rule="nonzero"
                  d="M10.013 17.5c-.474 0-.907-.185-1.257-.515L1.75 9.979C.328 8.557-.187 6.476.43 4.6 1.256 2.107 3.399.5 5.913.5c1.525 0 2.947.598 3.998 1.648l.082.083.082-.083A5.61 5.61 0 0 1 14.072.5c1.525 0 2.947.598 3.998 1.648 2.204 2.205 2.204 5.811 0 8.016l-6.8 6.82c-.33.33-.783.516-1.257.516zM5.933 2.458c-1.32 0-2.947.72-3.627 2.76-.392 1.175-.062 2.494.824 3.38l6.862 6.862 6.697-6.697a3.66 3.66 0 0 0 1.072-2.617c0-.989-.392-1.916-1.072-2.617a3.66 3.66 0 0 0-2.617-1.071c-.989 0-1.916.391-2.617 1.071l-.783.763a.983.983 0 0 1-1.401 0l-.763-.763c-.659-.7-1.586-1.071-2.575-1.071z"
                ></path>
              </svg></button
            ><button @click="DELETE_FROM_CART(index)" class="CartItem-Icon">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="CartItem-Price">
            <p aria-label="Цена продукта" class="ProductPrice">
              $ {{ item.price }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="MiniCart-Summary">
      <ul>
        <li class="MiniCart-SummaryItem">
          <span>{{ CART_COUNT }} вида товаров на сумму</span
          ><span>{{ CART_TOTAL_PRICE }}</span>
        </li>
      </ul>
      <div class="Delivery">
        <p>Заказы от 10 000 тенге доставим бесплатно</p>
      </div>
      <a href="/cart"
        ><button class="CartSummary-Button CartSummary-Button_big">
          Перейти в корзину
        </button></a
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "CART_TOTAL_PRICE",
      "CART_ITEMS",
      "CART_TOTAL_PRICE",
      "CART_COUNT",
    ]),
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECCREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
      "CHANGE_STATE_CART",
    ]),
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
/*! CSS Used from: https://www.technodom.kz/static/version1620861655823/frontend/Technodom/pwa/en_US/Magento_Theme/bundle.css?0d250d95d5f73849b14c */
.Field {
  margin-top: 1rem;
}
.Field {
  margin-top: 1.5rem;
}
.Field [type="qty"] {
  width: var(--input-type-number-width);
  font-weight: 700;
  padding-right: 0;
}
.Field [type="qty"]:focus {
  border: 1px solid var(--input-border-color);
}
.Field [type="qty"] ~ button {
  position: absolute;
  left: calc(var(--input-type-number-width) - 1.5rem);
  padding: 0;
  margin: 0;
  height: 50%;
  width: 1.5rem;
  font-size: 1.5rem;
  line-height: 0;
}
.Field [type="qty"] ~ button:last-child {
  bottom: 0;
}
.Field::-webkit-input-placeholder {
  color: var(--field-note);
  font-size: 0.9rem;
}
.Field::-moz-placeholder {
  color: var(--field-note);
  font-size: 0.9rem;
}
.Field::-ms-input-placeholder {
  color: var(--field-note);
  font-size: 0.9rem;
}
.Field::placeholder {
  color: var(--field-note);
  font-size: 0.9rem;
}
.Field button:disabled {
  opacity: 0.3;
  pointer-events: none;
}
.ProductPrice {
  --price-color: var(--color-primary-base);
  font-size: 2rem;
}
.ProductPrice del {
  padding-left: 0.3em;
  font-size: 0.7em;
}
.ProductPrice {
  --price-color: var(--color-primary-dark);
  color: var(--price-color);
  display: inline-block;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1rem;
  line-height: 1;
}
@media (min-width: 768px) {
  .ProductPrice {
    font-size: 1.35rem;
  }
}
.ProductPrice ins {
  text-decoration: none;
  margin-bottom: 2px;
}
.ProductPrice del {
  color: var(--color-neutral-base);
  font-size: 1rem;
  padding-left: 0;
}
.ProductPrice del,
.ProductPrice ins {
  display: block;
}
.ProductPrice data,
.ProductPrice del {
  white-space: nowrap;
}
.Image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 0;
  width: 100%;
}
.Image:after {
  content: "";
  opacity: 0;
}
.Image_ratio_square {
  padding-bottom: 100%;
}
.Image_isLoaded,
.Image_isReal {
  -webkit-animation: none;
  animation: none;
  background: transparent;
}
.Image > * {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.ProductWishlistButton-Button {
  --button-border-width: 2px;
}
@media (max-width: 767px) {
  .ProductWishlistButton-Button {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
}
.ProductWishlistButton-Button {
  --button-background: transparent;
  --button-hover-background: var(--color-primary-base);
  --button-hover-color: var(--color-text-white);
  --button-color: var(--color-primary-base);
  --button-border-width: 1px;
  --button-padding: 1rem;
}
.ProductWishlistButton-Button svg {
  fill: var(--header-wishlist-heart-border);
  -webkit-transition: fill 0.15s;
  transition: fill 0.15s;
  will-change: fill;
}
.ProductWishlistButton-Button .remove {
  --header-wishlist-heart-border: #000;
  margin: auto;
}
.ProductWishlistButton-Button .remove:hover {
  opacity: 0.8;
}
.ProductWishlistButton-Button_iconOnly {
  --button-background: transparent;
  --button-hover-background: transparent;
  --button-hover-color: transparent;
  --button-color: transparent;
  --button-border-width: 0;
  --button-padding: 0;
  width: 30px;
  height: 30px;
  display: inline-block;
}
.TooltipAdvanced {
  margin-left: 5px;
}
.TooltipAdvanced-ContentVisible {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: var(--color-tooltip-text);
  border: 1px solid var(--color-tooltip-border);
  cursor: default;
}
.TooltipAdvanced-Content {
  z-index: 1;
  display: none;
  padding: 15px;
  background: #f6f6f6;
  position: absolute;
  width: 250px;
  margin-left: -125px;
  top: 20px;
  left: 50%;
  word-break: keep-all;
}
@media (max-width: 767px) {
  .TooltipAdvanced-Content {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
}
.TooltipAdvanced:hover .TooltipAdvanced-Content {
  display: block;
}
.CartItem {
  grid-template-columns: 10rem auto;
  grid-column-gap: 0.5rem;
  padding: 0 2.5rem 0 0;
  border-bottom: 1px solid var(--color-neutral-light);
  border-left: var(--border-standart);
  border-right: var(--border-standart);
}
.CartItem:before {
  content: none;
}
.CartItem a {
  padding: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.CartItem a:hover,
.CartItem a:link {
  text-decoration: none;
}
.CartItem-Title p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.CartItem .CartItem-QtySelector button {
  --button-border: var(--color-primary-base);
  --button-color: var(--color-primary-base);
  color: var(--button-color);
  background: transparent;
}
@media (max-width: 767px) {
  .CartItem .CartItem-QtySelector button span {
    top: -0.1rem;
  }
}
.CartItem-Info {
  margin-top: 1rem;
  grid-template-columns: auto;
}
@media (min-width: 768px) {
  .CartItem-Price {
    width: 120px;
  }
}
.CartItem-Price p {
  color: var(--color-text-black);
}
.CartItem .ProductPrice {
  text-align: right;
  line-height: 2rem;
  margin-top: 0;
}
.CartItem {
  font-family: MuseoSansCyrl, sans-serif;
  margin: 0;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: auto;
  border-bottom: 3px solid var(--color-neutral-light);
}
.CartItem:last-child {
  margin: 0;
  border-bottom: 0;
}
.CartItem-Title {
  grid-area: title;
  min-width: 0;
  font-weight: 500;
  color: var(--color-text-black);
  text-align: left;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
@media (max-width: 767px) {
  .CartItem-Title {
    align-self: center;
  }
}
.CartItem-Title a {
  width: 90%;
  display: block;
  color: var(--color-text-black);
}
.CartItem-Title p {
  font-size: 12px;
  line-height: 1.2em;
  white-space: normal;
}
.CartItem .CartItem-QtySelector {
  grid-area: qty;
  --input-type-number-width: 7rem;
  align-self: center;
  margin-top: 0;
}
@media (max-width: 767px) {
  .CartItem .CartItem-QtySelector {
    justify-self: start;
  }
}
.CartItem .CartItem-QtySelector input {
  border: 0;
  text-align: center;
  padding: 0;
  height: 2rem;
  font-weight: 400;
  cursor: default;
  -moz-appearance: textfield;
}
.CartItem .CartItem-QtySelector button {
  z-index: 2;
  width: 2rem;
  height: 2rem;
  text-align: center;
  top: 0;
  left: calc(var(--input-type-number-width) - 2rem);
  border: 0;
  border-radius: 50%;
  font-weight: 100;
  opacity: 0.6;
  color: var(--color-quantity-add);
  background: var(--color-neutral-light);
}
.CartItem .CartItem-QtySelector button:last-child {
  left: 0;
  color: var(--color-quantity-remove);
}
.CartItem .CartItem-QtySelector button span {
  top: -0.1rem;
}
.CartItem-Icon,
.CartItem .ProductWishlistButton-Button {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 20px;
  padding: 0;
  background-color: initial;
  border: 0;
  color: $gray-90;
}

.CartItem .ProductWishlistButton-Button svg {
  /* margin: auto; */
  height: 20px;
  width: 20px;
}
.CartItem-Icon:not([disabled]):focus,
.CartItem-Icon:not([disabled]):hover,
.CartItem .ProductWishlistButton-Button:not([disabled]):focus,
.CartItem .ProductWishlistButton-Button:not([disabled]):hover {
  background-color: initial;
}
.CartItem-Actions {
  grid-area: actions;
  display: grid;
  grid-template-columns: repeat(2, auto);
  -webkit-box-pack: center;
  justify-content: center;
}
@media (max-width: 1023px) {
  .CartItem-Actions {
    justify-self: end;
  }
}
@media (max-width: 767px) {
  .CartItem-Actions {
    justify-self: end;
  }
}
.CartItem-Actions_isMinicart {
  justify-self: end;
}
.CartItem-Actions button:first-child {
  margin: 0 1rem;
}
.CartItem-Actions button:last-child {
  margin: 0;
}
.CartItem-Info {
  display: grid;
  margin: 0;
  width: 100%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
@media (max-width: 1023px) {
  .CartItem-Info {
    grid-template-rows: auto auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "thumbnail title title price" "qty . actions actions";
  }
}
@media (max-width: 1023px) and (min-width: 768px) {
  .CartItem-Info {
    grid-template-areas: "thumbnail title title price" "qty . . actions";
  }
}
.CartItem-Info_isMinicart {
  margin-right: 1rem;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "thumbnail title title price" "qty . actions actions";
}
.CartItem-Info_isMinicart .CartItem-Thumbnail {
  margin: 0 1rem;
}
.CartItem-Info_isMinicart .CartItem-QtySelector {
  margin-left: 1rem;
}
.CartItem-Thumbnail {
  grid-area: thumbnail;
  height: 58px;
  width: 58px;
}
@media (max-width: 1024px) {
  .CartItem-Thumbnail {
    margin: 0 1rem;
  }
}
@media (max-width: 767px) {
  .CartItem-Thumbnail {
    height: 45px;
    width: 45px;
    margin: 0.5rem 1.5rem 0;
  }
}
.CartItem-Thumbnail a,
.CartItem-Thumbnail img,
.CartItem-Thumbnail picture,
.CartItem-Thumbnail source {
  padding: 0;
  height: 58px;
  width: 58px;
}
@media (max-width: 767px) {
  .CartItem-Thumbnail a,
  .CartItem-Thumbnail img,
  .CartItem-Thumbnail picture,
  .CartItem-Thumbnail source {
    height: 45px;
    width: 45px;
  }
}
.CartItem-Price {
  grid-area: price;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  align-self: center;
  justify-self: end;
  margin-right: 0;
  color: var(--color-text-black);
}
.CartItem-Price p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.CartItem-Service {
  border-top: 1px solid var(--color-neutral-light);
  padding: 10px;
  right: 5px;
}
.CartItem-ServiceButton,
.CartItem-ServiceButton:focus,
.CartItem-ServiceButton:hover {
  border-color: transparent;
  background-color: initial;
  padding: 5px;
  font-size: 12px;
  text-align: left;
}
.CartItem-ServiceText {
  font-weight: 500;
  color: var(--color-primary-base);
  padding: 5px;
  display: inline-block;
}
@media (max-width: 767px) {
  .CartItem-ServiceText {
    padding-left: 5px;
  }
}
.CartItem-TooltipContent {
  background-color: var(--color-expandable-divider);
  color: var(--color-primary-dark);
}
.CartItem-TooltipContent_isMinicart {
  width: unset;
  left: -130px;
  margin-left: unset;
  max-width: 300px;
  padding: 10px;
}
.CartItem-TooltipIcon {
  display: inline-block;
  margin-left: 10px;
}
.CartItem-TooltipIcon_isMinicart {
  display: none;
}
.CartItem-ChangeText {
  display: none;
  color: var(--color-primary-base);
  font-weight: 500;
  margin-left: 5px;
}
@media (min-width: 1024px) {
  .CartItem-ServicesListWrapper {
    float: right;
    max-width: calc(100% - 280px);
  }
}
.CartItem-ServicesListWrapper_isMinicart {
  float: unset;
  max-width: 100%;
}
.MiniCart-Title {
  width: 100%;
  font-size: 10px;
  font-weight: 700;
  padding: 1rem;
  border-bottom: 1px solid var(--color-neutral-light);
}
.MiniCart-ItemWrapper,
.MiniCart-Title {
  background-color: var(--color-cart-background);
}
.MiniCart-ItemWrapper {
  max-height: 300px;
  overflow-y: auto;
}
.MiniCart-Close {
  --button-background: transparent;
  --button-border: transparent;
  --button-padding: 0;
  --button-hover-background: transparent;
  --button-hover-border: transparent;
  --button-hover-color: var(--button-color);
  --button-color: #000;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.MiniCart-Close:after,
.MiniCart-Close:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  top: 7px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: currentColor;
}
.MiniCart-Close:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.MiniCart-Summary {
  width: 100%;
  border-radius: 0 0 5px 5px;
  padding: 1rem 0;
  border-top: 1px solid var(--color-neutral-light);
  background-color: var(--color-cart-background);
}
.MiniCart-Summary li {
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: flex;
  margin-bottom: 1.5rem;
}
.MiniCart-Summary li:before {
  content: none;
}
.MiniCart-Summary a {
  padding: 0 1rem;
}
.MiniCart-Summary a:focus,
.MiniCart-Summary a:hover {
  text-decoration: none;
}
.MiniCart-SummaryItem {
  font-size: 12px;
  font-weight: 500;
  padding: 1rem;
}
.MiniCart-SummaryItem span:last-child {
  font-weight: 700;
}
.MiniCart-Container {
  position: absolute;
  padding: 0.5rem;
  right: 0;
  z-index: 1;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 360px;
  max-height: 504px;
  background-color: $white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  -webkit-transition: opacity 0.15s ease-in 0.15s,
    -webkit-transform 0.15s ease-in 0.2s;
  transition: opacity 0.15s ease-in 0.15s, -webkit-transform 0.15s ease-in 0.2s;
  transition: transform 0.15s ease-in 0.2s, opacity 0.15s ease-in 0.15s;
  transition: transform 0.15s ease-in 0.2s, opacity 0.15s ease-in 0.15s,
    -webkit-transform 0.15s ease-in 0.2s;
  overflow-y: auto;
}
.MiniCart-Container a {
  color: $gray-90;
}
.MiniCart .CartItem {
  border-left: 0;
  border-right: 0;
}
.MiniCart a {
  height: 100%;
}
@media (min-width: 768px) {
  .MiniCart a {
    display: grid;
  }
}
.MiniCart li,
.MiniCart li:last-child {
  margin: 0;
}
.Delivery {
  background-color: rgba(255, 113, 18, 0.06);
  color: var(--color-menu-contacts);
  padding: 10px;
  text-align: center;
  margin: 10px 0;
}
.Delivery p {
  line-height: normal;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
}
</style>
