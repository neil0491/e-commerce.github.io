<template>
  <div class="tab border bottom-border">
    <div class="tab__header">
      <a href="#" class="tab__link" @click.prevent="active = !active">
        <strong>{{ title }}</strong>
        <span class="down-Arrow" v-show="!active"
          ><i class="fas fa-caret-down"></i
        ></span>
        <span class="up-Arrow" v-show="active"
          ><i class="fas fa-caret-up"></i
        ></span>
      </a>
    </div>
    <div class="tab__content" v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data: () => ({
    active: false,
  }),
};
</script>
<style lang="scss">
.tab {
  border-radius: $border-card;
  &__link {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    display: block;
    color: $gray-75;
    display: flex;
    justify-content: space-between;
  }
  &__content {
    padding: 0 1rem;
  }
}
</style>
>
