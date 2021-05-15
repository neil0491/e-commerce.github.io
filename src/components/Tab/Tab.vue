<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "tab",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
