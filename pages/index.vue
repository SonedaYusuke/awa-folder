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
export default {
  data() {
    return {
      socket: null,
    }
  },
  mounted() {
    this.socket = new WebSocket(
      'wss://o2vmciuox2.execute-api.ap-northeast-1.amazonaws.com/production/'
    )

    this.socket.onmessage = (event) => {
      console.log('get message!')
      console.log(event.data)
    }

    this.socket.onopen = (event) => {
      console.log('connection!!')
    }
  },
}
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
