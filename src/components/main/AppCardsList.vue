<script>
import { store } from "../../store";
import AppCard from "./AppCard.vue";

export default {
  name: "CardsList",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="cards-list flex flex-wrap g-10">
    <AppCard
      class="card"
      v-for="card in store.cards"
      :image="card.card_images[0].image_url"
      :name="card.name"
      :archetype="card.archetype"
    ></AppCard>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.cards-list {
  background-color: #fff;
  .card {
    width: calc((100% - 40px) / 5);
    background-color: $bg-primary;
  }
}
</style>
