<template>
  <div>
    <nuxt-link class="shabon-link" to="/チームシャボン">
      <div class="shabon-wrapper">
        <Shabon
          src="https://shanaiho-navi.jp/wp-content/uploads/2017/06/Fotolia_74570267_Subscription_Monthly_M-1024x682.jpg"
        />
        <p class="team-name">チームシャボン</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.shabon-wrapper {
  width: fit-content;
}

.shabon-link {
  display: block;
  width: fit-content;
}

.team-name {
  text-align: center;
}
</style>
