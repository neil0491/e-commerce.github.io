<template>
  <div>
    <div class="row">
      <div
        v-for="card in cards"
        :key="card.id"
        class="col-6 col-md-4 col-lg-3 py-1"
      >
        <router-link :to="{ name: 'Product', params: { id: card.id } }">
          <div class="card">
            <img :src="card.image" :alt="card.id" />
            <div class="card__content pt-4">
              <h5>{{ card.title }}</h5>
              <p class="card__subtitle">$ {{ card.price }}</p>
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
  props: {
    cards: Array,
  },
};
</script>

<style scoped lang="scss">
.card {
  text-decoration: none;
  padding: 0.4rem;
  height: 100%;
  min-height: 186px;
  max-height: 404px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: $white;
  transition: all 0.2s ease-in;
  img {
    height: 200px;
    object-fit: contain;
  }
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 5px 38px 2px rgba(34, 60, 80, 0.28);
  }
  &__content {
    h5 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1.2rem;
      font-weight: 500;
      
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
