<template>
  <ul>
    <li class="my-2" v-for="brand in brandList" :key="brand.id">
      <input type="checkbox" name="Chekbox" />
      <label>{{ brand.title }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["brandList"],
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
