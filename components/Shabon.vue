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
  width: 200px;
  height: 200px;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid #000;
  &__image {
    width: 70%;
  }
}
</style>
