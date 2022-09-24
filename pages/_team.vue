<template>
  <div>
    <p>チーム名とか入りそう</p>
    <span>{{ teamName }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    teamName() {
      return this.$route.params.team
    },
  },
}
</script>

<style lang="scss" scoped></style>
