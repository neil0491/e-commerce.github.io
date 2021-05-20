<template>
  <div class="container-slide">
    <hooper :wheelControl="false" group="group1" class="top-slide">
      <slide v-for="(slide, indx) in images" :key="indx" :index="indx">
        <div class="top-slide__inner">
          <img class="hooper__img" :src="'http://localhost:1337' + slide.url" />
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
          <img class="bottom__img" :src="'http://localhost:1337' + slide.url" />
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
    // slides: [
    //   "https://images.samsung.com/is/image/samsung/assets/ru/galaxy-a52/buy/A52_AwesomeBlack_ProductKV_MO_img.jpg",

    //   "https://images.samsung.com/is/image/samsung/assets/ru/galaxy-a52/buy/A52_GroupKV_MO_img_local.jpg?imwidth=720",
    //   "https://samsung-sam.uz/wp-content/uploads/2021/04/a52_1111.jpg",

    //   "https://samsung-sam.uz/wp-content/uploads/2021/04/a52_1111.jpg",
    // ],
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
.hooper-list {
  height: 100px;
}
.top-slide {
  height: 400px;
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
    object-fit: cover;
    height: 100px;
  }
}
</style>
