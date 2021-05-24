<template>
  <div :class="{ tabs__light: mode === 'light', tabs__dark: mode === 'dark' }">
    <ul class="tabs__header py-2">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tab__selected: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.map((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style scoped lang="scss">
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs__header > li {
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  font-weight: bold;
  border-radius: $button-border-radius;
  background: $white;
}
.tab {
  color: $gray-90;
  border-radius: 10px;
}

.tabs__light li {
  color: $gray-90;
}
.tabs__light li.tab__selected {
  border: $button-border-width solid $brand-orange;
  color: $brand-orange;
}
.tabs__dark .tab {
  background-color: #555;
  color: #eee;
}
.tabs__dark li {
  background-color: #ddd;
  color: #aaa;
}
.tabs__dark li.tab__selected {
  background-color: #555;
  color: white;
}
</style>
