<template>
  <img v-if="src" class="shabon" :src="src" alt="" />
</template>

<script>
import { getRandom } from '~/assets/javascript/random.js'

export default {
  data() {
    return {
      src: '',
    }
  },
  mounted() {
    const num = getRandom(0, 4)
    console.log(num)
    this.src = require(`~/assets/image/shabon${num}.png`)
  },
}
</script>

<style lang="scss" scoped>
.shabon {
  width: 100%;
}
</style>
