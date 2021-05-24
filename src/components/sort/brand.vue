<template>
  <ul>
    <li class="my-2" v-for="brand in brandList" :key="brand.id">
      <input
        v-model="checked"
        :value="brand.id"
        type="checkbox"
        name="Chekbox"
      />
      <label>{{ brand.title }}</label>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["brandList"],
  data() {
    return {
      checked: [],
    };
  },
  watch: {
    checked() {
      this.SET_ID_BRANDS(this.checked);
    },
  },
  methods: {
    ...mapMutations(["SET_ID_BRANDS"]),
  },
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
  width: 14px;
  height: 14px;
}
label {
  display: inline-block;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  vertical-align: text-top;
}
</style>
