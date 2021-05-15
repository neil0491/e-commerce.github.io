<template>
  <div class="container-slide">
    <hooper
      style="height: 400px"
      :wheelControl="false"
      group="group1"
      class="top-slide"
    >
      <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
        <div class="top-slide__inner">
          <img class="hooper__img" :src="slide" />
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
      <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
        <div class="bottom">
          <img class="bottom__img" :src="slide" />
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Slider",
  data: () => ({
    slides: [
      "https://images.samsung.com/is/image/samsung/assets/ru/galaxy-a52/buy/A52_AwesomeBlack_ProductKV_MO_img.jpg",

      "https://images.samsung.com/is/image/samsung/assets/ru/galaxy-a52/buy/A52_GroupKV_MO_img_local.jpg?imwidth=720",
      "https://samsung-sam.uz/wp-content/uploads/2021/04/a52_1111.jpg",

      "https://samsung-sam.uz/wp-content/uploads/2021/04/a52_1111.jpg",
    ],
    hooperSettings: {
      itemsToShow: 5,
    },
  }),
  components: {
    Hooper,
    Slide,
  },
};
</script>

<style scoped lang="scss">
.hooper__img {
  object-fit: contain;
  height: 410px;
}
.bottom {
  margin: 0.5rem;
  &__img {
    object-fit: contain;
    height: 100px;
  }
}
</style>
