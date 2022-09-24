<template>
  <div class="wrapper">
    <div class="team__wrapper">
      <span>{{ teamName }}</span>
    </div>
    <div class="shabon__wrapper">
      <div v-for="(item, index) in items" :key="`key-${index}`">
        <Shabon
          :src="`data:image/jpeg;base64,${item.img}`"
          :shabonId="index % 5"
        />
      </div>
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

.shabon__wrapper {
  display: flex;
}

.team__wrapper {
  background-image: url('~/assets/image/team-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 260px;
  height: 93px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 18px;
  padding-left: 10px;
}
</style>
