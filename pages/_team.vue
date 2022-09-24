<template>
  <div class="wrapper">
    <span>{{ teamName }}</span>
    <div v-for="(item, index) in items" :key="`key-${index}`">
      <Shabon :src="`data:image/jpeg;base64,${item.img}`" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
    }
  },
  computed: {
    teamName() {
      return this.$route.params.team
    },
  },
  mounted() {
    this.$axios
      .get(
        'https://ddcc6rhxy5.execute-api.ap-northeast-1.amazonaws.com/prod/photoconne/testa7ac8147-af71-4b9d-908b-94797ddaf46f'
      )
      .then((res) => {
        this.items = res.data
      })
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(
    180deg,
    rgba(34, 27, 158, 1) 0%,
    rgba(219, 77, 32, 1) 0%,
    rgba(221, 143, 81, 1) 100%
  );
  min-height: 100vh;
}
</style>
