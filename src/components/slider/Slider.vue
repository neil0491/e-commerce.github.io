<template>
  <hooper  style="height: 600px">
    <slide>
      <img src="/img/s21.jpg" alt="slide" />
    </slide>
    <slide>
      <img src="/img/sony.jpg" alt="slide" />
    </slide>
    <slide>
      <img src="/img/LG.jpg" alt="slide" />
    </slide>

    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
};
</script>
