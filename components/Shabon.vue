<template>
  <div class="shabon">
    <img class="shabon__image" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.shabon {
  width: 250px;
  height: 250px;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~/assets/image/shabon0.png');
  background-size: contain;
  opacity: 0.63;
  &__image {
    width: 60%;
    opacity: 1;
  }
}
</style>
