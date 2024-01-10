<script>
import axios from "axios";
import { store } from "../../store";

export default {
  name: "Search",
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiArchetypeUrl).then((data) => {
      store.archetypes = data.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <label for="filter"></label>
    <select
      id="filter"
      class="content-filter"
      name="archetype"
      v-model="store.searchValueType"
      @keyup.enter="$emit('search')"
    >
      <option selected value="">Filtra archetype...</option>
      <option
        v-for="archetype in store.archetypes"
        :value="archetype.archetype_name"
      >
        {{ archetype.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.content-filter {
  padding: 5px 10px 5px 0;
  margin: 10px 0;
}
</style>
