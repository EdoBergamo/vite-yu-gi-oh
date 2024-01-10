<script>
export default {
  name: "Card",
  props: ["name", "image", "archetype"],
};
</script>

<template>
  <article class="content-card flex flex-col justify-between">
    <div class="box-img">
      <img class="img-content" :src="image" :alt="name" />
    </div>
    <h4 class="text-center">{{ name }}</h4>
    <h5 class="text-center">{{ archetype }}</h5>
  </article>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.content-card {
  height: 400px;
  padding-bottom: 10px;

  h4 {
    padding: 0 2px;
    color: #fff;
    text-transform: uppercase;
  }
}
</style>
