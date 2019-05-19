<template>
  <div class="f-sticky" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlySticky",
  mounted() {
    this.$refs.wrapper.parentNode.addEventListener("scroll", e => {
      console.log(e);
      console.log("hi");
    });
  }
};
</script>

<style scoped lang="scss">
.f-sticky {
}
</style>
