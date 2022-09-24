<template>
  <div class="shabon">
    <img
      class="shabon__image"
      :src="require(`~/assets/image/shabon${shabonId}.png`)"
      alt=""
    />
    <img class="shabon__photo" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    shabonId: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.shabon {
  position: relative;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  &__image {
    opacity: 0.8;
    width: 100%;
  }
  &__photo {
    width: 50%;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
