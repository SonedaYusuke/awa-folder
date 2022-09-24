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
  animation: bounce 3s infinite alternate ease-in-out;
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

@keyframes bounce {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 30px);
  }
}
</style>
