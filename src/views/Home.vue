<template>
  <div>
    <Slider class="mt-4" />
    <div class="tab-content">
      <tabs mode="light">
        <tab title="Хит продаж"> <card :cards="cards" /></tab>
        <tab title="Смартфоны и гаджеты"> <card :cards="cards" /></tab>
        <tab title="Ноутбуки и гаджеты"> <card :cards="cards" /></tab>
      </tabs>
      <section class="aria-label">
        <p class="pt-2 typography-subtitle">Сейчас покупают</p>
        <card :cards="cards" />
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";
import Tab from "../components/Tab/Tab.vue";
import Tabs from "../components/Tab/Tabs.vue";
import Slider from "../components/slider/Slider";

export default {
  name: "Home",
  components: { Card, Tabs, Tab, Slider },
};
</script>

<style scoped lang="scss">
.tab-content {
  margin-top: 2rem;
}
</style>
