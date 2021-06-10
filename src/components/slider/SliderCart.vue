<template>
  <div class="container-slide">
    <hooper :wheelControl="false" group="group1" class="top-slide">
      <slide v-for="(slide, indx) in images" :key="indx" :index="indx">
        <div class="top-slide__inner">
          <img
            class="hooper__img"
            :src="'https://immense-sea-29580.herokuapp.com' + slide.url"
          />
        </div>
      </slide>
    </hooper>

    <hooper
      group="group1"
      autoPlay
      :playSpeed="10000"
      mouseDrag
      :settings="hooperSettings"
      :wheelControl="false"
      class="bottom-slide"
    >
      <slide v-for="(slide, indx) in images" :key="indx" :index="indx">
        <div class="bottom">
          <img
            class="bottom__img"
            :src="'https://immense-sea-29580.herokuapp.com' + slide.url"
          />
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Slider",
  props: ["images"],
  data: () => ({
    hooperSettings: {
      itemsToShow: 4,
      centerMode: true,
    },
  }),
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>

<style scoped lang="scss">
.container-slide {
  margin-bottom: 1rem;
}
.hooper-list {
  height: 100px;
}
.top-slide {
  height: 400px;

  @media (max-width: 767px) {
    height: 300px;
  }
}
.hooper__img {
  object-fit: contain;
  height: 410px;
}
.bottom-slide {
  height: 100px;
}
.hooper-navigation {
  position: relative;
  top: -45px;
}
.bottom {
  margin: 0.5rem;
  &__img {
    object-fit: contain;
    height: 100px;
  }
}
</style>
