x
<script>
import axios from "axios";
import AppFoundResults from "./main/AppFoundResults.vue";
import AppCardsList from "./main/AppCardsList.vue";
import AppCard from "./main/AppCard.vue";
import { store } from "../store";
import AppSearch from "./main/AppSearch.vue";

export default {
  name: "Main",
  components: {
    AppFoundResults,
    AppCardsList,
    AppCard,
    AppSearch,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      console.log(this.store.searchValueType);
      axios
        .get(this.store.apiUrl, {
          params: {
            archetype: this.store.searchValueType,
          },
        })
        .then((data) => {
          store.cards = data.data.data;
        });
    },
  },
  created() {
    this.search();
  },
};
</script>

<template>
  <main>
    <AppSearch @search="search" />
    <div class="container main">
      <AppFoundResults :found="store.cards.length"></AppFoundResults>
      <AppCardsList>
        <AppCard/>
      </AppCardsList>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
  background-color: $bg-primary;
  .main {
    background-color: #fff;
    padding: 50px;
  }
}
</style>
