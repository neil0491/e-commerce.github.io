<template>
  <div>
    <button :class="outline ? 'btn-outline' : 'btn-transparent'">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
    outline: Boolean,
  },
};
</script>
