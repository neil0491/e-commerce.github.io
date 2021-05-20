<template>
  <div>
    <div class="MyAccount-Action MyAccount-Action_state_signIn">
      <button @click="closeModal" class="MyAccount-Action__close">X</button>
      <div class="MyAccount-FlexWrapper">
        <form id="MyAccountWelcome" class="Form">
          <div>
            <p class="MyAccount-WelcomeTitle Typography__Subtitle">
              Форма входа
            </p>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
                name="phone"
                type="phone"
                placeholder="Номер телефона"
                value=""
              />
              <p
                class="FieldNext__Message Typography__Caption Typography__Caption_Bold"
              ></p>
            </div>
            <div class="FieldNext__Wrapper FieldNext__Wrapper_v1">
              <input
                class="FieldNext FieldNext_KeepLabel"
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
                name="password"
                type="password"
                value=""
                placeholder="Подтвердите пароль"
              />
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
            <div class="MyAccount-ForgotPassword">
              <button type="button" class="Button Button_likeLink">
                Забыли пароль?
              </button>
            </div>
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["CLOSE_MODAL", "OPEN_REGISTRATION"]),
    closeModal() {
      this.CLOSE_MODAL();
    },
    openRegistration() {
      this.CLOSE_MODAL();
      this.OPEN_REGISTRATION();
    },
  },
};
</script>
