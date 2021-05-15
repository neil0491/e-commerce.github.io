<template>
  <div>
    <div class="MyAccount-Action MyAccount-Action_state_signIn">
      <button @click="closeModal" class="MyAccount-Action__close">X</button>
      <div class="MyAccount-FlexWrapper">
        <form id="MyAccountWelcome" class="Form">
          <div>
            <p class="MyAccount-WelcomeTitle Typography__Subtitle">
              Форма Регистрации
            </p>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="name"
                type="text"
                placeholder="Имя"
                value=""
              />
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="lastname"
                type="text"
                value=""
                placeholder="Фамилия"
              />
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="phone"
                type="phone"
                placeholder="Номер телефона"
                value=""
              />
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="phone"
                type="email"
                placeholder="Электронная почта"
                value=""
              />
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                id="password"
                name="password"
                type="password"
                value=""
                placeholder="Пароль"
              />
              <p
                class="FieldNext__Message Typography__Caption Typography__Caption_Bold"
              ></p>
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                id="password"
                name="password"
                type="password"
                value=""
                placeholder="Подтвердите пароль"
              />
              <p
                class="FieldNext__Message Typography__Caption Typography__Caption_Bold"
              ></p>
            </div>
          </div>
          <div class="MyAccount-Buttons MyAccount-Buttons_state_signIn">
            <button
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
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["CLOSE_REGISTRATION"]),
    closeModal() {
      console.log("CLOSE");
      this.CLOSE_REGISTRATION();
    },
  },
};
</script>
