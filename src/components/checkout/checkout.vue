<template>
  <div class="chekout my-2">
    <h4>Личные данные</h4>
    <form class="Form">
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="username"
          type="text"
          v-model="user.username"
          placeholder="Имя"
        />
        <div
          v-if="submitted && !$v.user.username.required"
          class="invalid-feedback"
        >
          Укажите Имя
        </div>
      </div>
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="lastname"
          type="text"
          placeholder="Фамилия"
          v-model="user.lastName"
        />
        <div
          v-if="submitted && !$v.user.lastName.required"
          class="invalid-feedback"
        >
          Укажите Фамилию
        </div>
      </div>
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="phone"
          type="phone"
          placeholder="Номер телефона"
          v-model="user.phone"
        />
        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
          <span v-if="!$v.user.phone.required">Укажите номер телефона</span>
        </div>
      </div>
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="email"
          type="email"
          placeholder="Электронная почта"
          v-model="user.email"
        />
        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
          <span v-if="!$v.user.email.required">Введите Email</span>
          <span v-if="!$v.user.email.email">Не верный Email</span>
        </div>
      </div>
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="adress"
          type="text"
          placeholder="Адрес"
          v-model="user.adress"
        />
        <div
          v-if="submitted && !$v.user.adress.required"
          class="invalid-feedback"
        >
          Укажите Адрес
        </div>
      </div>
      <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
        <input
          class="FieldNext FieldNext_KeepLabel"
          name="city"
          type="text"
          placeholder="Город"
          v-model="user.city"
        />
        <div
          v-if="submitted && !$v.user.city.required"
          class="invalid-feedback"
        >
          Укажите Город
        </div>
      </div>
      <div class="MyAccount-Buttons MyAccount-Buttons_state_signIn">
        <button
          @click.prevent="handleCheckout"
          class="ButtonNext_Size-L btn-primary ButtonNext_Shadow-default"
        >
          <p class="ButtonNext__Text ButtonNext__Text_Size-L">Оплатить</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, numeric } from "vuelidate/lib/validators";
import createCart from "@/graphql/createCart.gql";
import { mapGetters } from "vuex";

export default {
  props: {
    token: {
      type: Object,
      required: true,
    },
    invoiceID: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    user: {
      username: "",
      lastName: "",
      phone: "",
      email: "",
      adress: "",
      city: "",
    },
    submitted: false,
  }),
  validations: {
    user: {
      username: { required },
      lastName: { required },
      adress: { required },
      city: { required },
      email: { required, email },
      phone: { required, numeric },
    },
  },
  methods: {
    ...mapGetters(["GET_USER", "CART_TOTAL_PRICE", "CART_ITEMS"]),
    addUserCart() {
      this.$apollo.mutate({
        mutation: createCart,
        variables: {
          username: this.user.username,
          lastName: this.user.lastName,
          email: this.user.email,
          adress: this.user.adress,
          city: this.user.city,
          phone: this.user.phone.toString(),
          price: this.CART_TOTAL_PRICE().toString(),
        },
      });
    },

    createPaymentObject(amount) {
      var paymentObject = {
        invoiceId: this.invoiceId,
        backLink: "https://example.kz/success.html",
        failureBackLink: "https://example.kz/failure.html",
        postLink: "https://example.kz/",
        failurePostLink: "https://example.kz/order/1123/fail",
        language: "RU",
        description: `Оплата от ${
          this.user.username
        } на сумму ${this.CART_TOTAL_PRICE()}`,
        accountId: "testuser1",
        terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
        amount: amount,
        currency: "KZT",
        phone: this.user.phone,
        email: this.user.email,
        cardSave: true,
      };
      paymentObject.auth = this.token;
      return paymentObject;
    },

    // eslint-disable-next-line no-undef
    async handleCheckout() {
      try {
        this.submitted = true;
        //stop here if form is invalid
        this.$v.$touch();

        if (this.$v.$invalid) {
          return;
        }
        this.loading = true;
        const chekoutPrice = await this.createPaymentObject(
          this.CART_TOTAL_PRICE()
        );
        await this.addUserCart();

        localStorage.clear();
        this.loading = false;
        // eslint-disable-next-line no-undef
        halyk.pay(chekoutPrice);
      } catch (error) {
        this.loading = false;
        console.log("error" + error);
      }
    },
  },
  watch: {
    user() {},
  },
  computed: {},
  mounted() {
    this.user = {
      username: this.GET_USER().username,
      lastName: this.GET_USER().lastName,
      email: this.GET_USER().email,
      phone: this.GET_USER().phone,
    };
  },
};
</script>

<style lang="scss" scoped>
.ButtonNext__Text {
  color: $white;
}
.chekout {
  width: 100%;
  background: $white;
  height: 100%;
  border-radius: $border-card;
  padding: 2rem;
}
</style>
