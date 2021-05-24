<template>
  <div>
    <register />
    <signin />
    <div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav" v-if="username">
          <li>
            <a href="#" class="uk-link-reset">{{ username }}</a>
          </li>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>

        <ul class="uk-navbar-nav" v-else>
          <li><a href="/users/register">Signup</a></li>
          <li><a href="/users/signin">Signin</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import register from "../components/Forms/register.vue";
import Signin from "../components/Forms/signin.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: { register, Signin },

  computed: {
    // Set your username thanks to your getter
    ...mapGetters(["username"]),
    
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "logout",
    }),
  },
};
</script>

<style>
</style>
