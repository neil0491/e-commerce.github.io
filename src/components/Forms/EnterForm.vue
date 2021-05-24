<template>
  <div>
    <div class="MyAccount-Action MyAccount-Action_state_signIn">
      <button @click="closeModal" class="MyAccount-Action__close">X</button>
      <div class="MyAccount-FlexWrapper">
        <form @submit.prevent="handleSubmit" class="Form">
          <div>
            <p class="MyAccount-WelcomeTitle Typography__Subtitle">
              Авторизация
            </p>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="email"
                type="email"
                placeholder="Введите Email"
                v-model="email"
              />
              <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                <span v-if="!$v.email.required">Введите Email</span>
                <span v-if="!$v.email.email">Не верный Email</span>
              </div>
            </div>

            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="password"
                type="password"
                v-model="password"
                placeholder="Подтвердите пароль"
              />
              <div
                v-if="submitted && $v.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.password.required">Введите пароль</span>
                <span v-if="!$v.password.minLength"
                  >Пароль должен состоять от 6 символов</span
                >
              </div>
            </div>
            <div class="MyAccount-Buttons MyAccount-Buttons_state_signIn">
              <button
                class="ButtonNext ButtonNext_Size-L ButtonNext_Theme-Alpha ButtonNext_Shadow-default Button"
              >
                <p class="ButtonNext__Text ButtonNext__Text_Size-L">
                  Войти в аккаунт
                </p>
              </button>
            </div>
            <!-- <div class="MyAccount-ForgotPassword">
              <button type="button" class="Button Button_likeLink">
                Забыли пароль?
              </button>
            </div> -->
          </div>
          <div class="MyAccount-Buttons MyAccount-Buttons_state_signIn">
            <button
              @click="openRegistration"
              class="ButtonNext ButtonNext_Size-L ButtonNext_Theme-Omega ButtonNext_Shadow-default Button Button_isHollow"
            >
              <p class="ButtonNext__Text ButtonNext__Text_Size-L">
                Создать аккаунт
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import strapi from "@/utils/Strapi";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      submitted: false,
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    ...mapActions(["CLOSE_MODAL", "OPEN_REGISTRATION"]),
    ...mapMutations({
      setUser: "setUser",
    }),
    closeModal() {
      this.CLOSE_MODAL();
    },
    openRegistration() {
      this.CLOSE_MODAL();
      this.OPEN_REGISTRATION();
    },
    async handleSubmit() {
      try {
        this.submitted = true;
        //stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.loading = true;
        const response = await strapi.login(this.email, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.CLOSE_MODAL();
      } catch (err) {
        this.loading = false;
        console.log("error" + err);
        alert("Не верный логин или пароль!");
        this.CLOSE_MODAL();
      }
    },
  },
};
</script>
