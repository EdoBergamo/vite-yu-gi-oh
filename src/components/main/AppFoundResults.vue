<script>
export default {
  name: "FoundResults",
  props: ["found"],
};
</script>

<template>
  <div class="result-content">Found {{ found }} cards</div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.result-content {
  background-color: #242424;
  padding: 10px;
  color: #fff;
}
</style>
