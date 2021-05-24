<template>
  <div>
    <div class="MyAccount-Action MyAccount-Action_state_signIn">
      <button @click="closeModal" class="MyAccount-Action__close">X</button>
      <div class="MyAccount-FlexWrapper">
        <form class="Form" @submit.prevent="handleSubmit">
          <div>
            <p class="MyAccount-WelcomeTitle Typography__Subtitle">
              Новый пользователь
            </p>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="username"
                type="text"
                placeholder="Имя"
                v-model="user.username"
              />
              <div
                v-if="submitted && !$v.user.username.required"
                class="invalid-feedback"
              >
                Укажите имя
              </div>
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="lastname"
                type="text"
                v-model="user.lastName"
                placeholder="Фамилия"
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
              <div
                v-if="submitted && $v.user.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.phone.required"
                  >Укажите номер телефона</span
                >
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
              <div
                v-if="submitted && $v.user.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.email.required">Введите Email</span>
                <span v-if="!$v.user.email.email">Не верный Email</span>
              </div>
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="password"
                type="password"
                v-model="user.password"
                placeholder="Пароль"
              />
              <div
                v-if="submitted && $v.user.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.password.required">Введите пароль</span>
                <span v-if="!$v.user.password.minLength"
                  >Пароль должен состоять от 6 символов</span
                >
              </div>
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="password"
                type="password"
                v-model="user.confirmPassword"
                placeholder="Подтвердите пароль"
              />
              <div
                v-if="submitted && $v.user.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.confirmPassword.required"
                  >Введите пароль заново</span
                >
                <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
                  >Не верно ввели</span
                >
              </div>
            </div>
          </div>
          <div class="CheckboxNext">
            <label class="CheckboxNext__Label" for="cbox">
              <input
                class="CheckboxNext__Input"
                name="cbox"
                type="checkbox"
                v-model="chekedPolitic"
              />

              <span class="CheckboxNext__CustomInput"></span>
              <div class="CheckboxNext__TextWrapper">
                <div class="HalykBank-Terms">
                  <p class="HalykBank-TermsParagraph">
                    Настоящим я подтверждаю, что ознакомлен и согласен с
                    условиями
                    <a
                      class="HalykBank-TermUrl"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="/"
                      >Политики конфиденциальности</a
                    >
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div class="MyAccount-Buttons MyAccount-Buttons_state_signIn">
            <button
              :disabled="!chekedPolitic"
              class="ButtonNext ButtonNext_Size-L ButtonNext_Theme-Omega ButtonNext_Shadow-default Button Button_isHollow"
            >
              <p class="ButtonNext__Text ButtonNext__Text_Size-L">
                Регистрация
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
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  numeric,
} from "vuelidate/lib/validators";


export default {
  data: () => ({
    loading: false,
    user: {
      username: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    chekedPolitic: false,
    submitted: false,
  }),
  validations: {
    user: {
      username: { required },
      lastName: { required },
      email: { required, email },
      phone: { required, numeric },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  methods: {
    ...mapActions(["CLOSE_REGISTRATION"]),
    closeModal() {
      this.CLOSE_REGISTRATION();
    },

    ...mapMutations({
      setUser: "setUser",
    }),

    async handleSubmit() {
      try {
        this.submitted = true;
        //stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        this.loading = true;
        const response = await axios.post(
          "http://localhost:1337/auth/local/register",
          {
            username: this.user.username,
            lastName: this.user.lastName,
            email: this.user.email,
            phone: this.user.phone,
            password: this.user.password,
          }
        );
        this.loading = false;
        this.setUser(response.data.user);
        this.closeModal();
      } catch (error) {
        this.loading = false;
        console.log("error" + error);
        alert("Пользователь существует!");
        this.closeModal();
      }
    },
  },
};
</script>
