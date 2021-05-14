<template>
  <div>
    <div class="row">
      <div
        v-for="card in cards"
        :key="card.id"
        class="col-6 col-md-4 col-lg-3 py-1"
      >
        <router-link to="/cart">
          <div class="card">
            <img :src="card.img" :alt="card" />
            <div class="card__content pt-4">
              <h5>{{ card.title }}</h5>
              <p class="card__subtitle">{{ card.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    cards: [
      {
        id: 1,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: "Смартфон Apple iPhone 11 128GB Black",
        price: "360тг",
      },
      {
        id: 2,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: `
Ноутбук Apple MacBook Pro Retina M1`,
        price: "360тг",
      },
      {
        id: 3,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title:
          "Ноутбук Apple MacBook Pro Retina M1 / 8ГБ / 256SSD / 13.3 / Mac OS Big Sur / (MYD82RU/A)",
        price: "360тг",
      },
      {
        id: 4,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: "Смартфон Apple iPhone 11 128GB Black",
        price: "360тг",
      },
      {
        id: 5,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: "Смартфон Apple iPhone 11 128GB Black",
        price: "360тг",
      },
      {
        id: 6,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: "Смартфон Apple iPhone 11 128GB Black",
        price: "360тг",
      },
      {
        id: 7,
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        title: "Смартфон Apple iPhone 11 128GB Black",
        price: "360тг",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.card {
  text-decoration: none;
  padding: 0.4rem;
  min-height: 186px;
  max-height: 404px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: min-content;
  padding: 1rem;
  background: $white;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 5px 38px 2px rgba(34, 60, 80, 0.28);
  }
  &__content {
    /* height: 100px; */
    h5 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
