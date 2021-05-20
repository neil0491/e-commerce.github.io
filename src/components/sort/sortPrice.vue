<template>
  <div class="sort-price">
    <span class="sort-price__header">Продуктов</span>
    <div class="sort-price__category">
      <label for="sort">Сортировать</label>
      <select name="sort">
        <option value="default"></option>
        <option value="DESC">Возрастанию цены</option>
        <option value="ASC">Убыванию цены</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
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