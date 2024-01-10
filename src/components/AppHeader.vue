<script>
import AppLogo from "./header/AppLogo.vue";

export default {
  name: "Header",
  components: {
    AppLogo,
  },
};
</script>

<template>
  <header class="flex items-center">
    <AppLogo />
    <h1>Yu-Gi-Oh API</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 10px 20px;
}
.flex {
  display: flex;
  gap: 10px;
}
</style>
