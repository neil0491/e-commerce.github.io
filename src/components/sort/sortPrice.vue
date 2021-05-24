<template>
  <div class="sort-price">
    <span class="sort-price__header">
      Продуктов: {{ categories[0].products.length }}
    </span>
    <div class="sort-price__category">
      <label for="sort">Сортировать цену</label>
      <select v-model="selected" @change="select" name="sort">
        <option
          v-for="(select, index) in selectOption"
          :key="index"
          :value="select.value"
        >
          {{ select.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
  data: () => ({
    selectOption: [
      { value: "asc", title: "По возрастанию" },
      { value: "desc", title: "По убыванию" },
    ],
    selected: "",
  }),
  methods: {
    select() {
      this.$emit("sortProduct", this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-price {
  display: flex;
  justify-content: space-between;
  background-color: $white;
  margin: $grid-gutter-width 0;
  border-radius: $br-s;
  font-size: 0.8rem;
  padding: 1rem;
  color: $gray-75;
  &__header {
  }
  &__category {
    label {
      margin-right: 1rem;
    }
  }
}
</style>
