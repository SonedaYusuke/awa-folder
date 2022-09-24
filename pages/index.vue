<template>
  <div>
    <div class="bg bg-orange"></div>
    <div class="bg bg-blue" :data-fadeBg="isLeaving"></div>
    <div class="wrapper">
      <button
        class="shabon-link"
        to="/チームシャボン"
        @click="leavePage('チームジャンボ')"
      >
        <div class="shabon-wrapper">
          <div class="shabon-animation">
            <Shabon
              src="https://shanaiho-navi.jp/wp-content/uploads/2017/06/Fotolia_74570267_Subscription_Monthly_M-1024x682.jpg"
            />
          </div>
          <p class="team-name">チームシャボン</p>
        </div>
      </button>
      <template v-if="isLeaving">
        <div
          class="shabon-fadein"
          v-for="index in 40"
          :style="{
            left: `${((index % 10) - 1) * 180}px`,
            top: `${Math.floor(index / 10) * 120}px`,
          }"
          :key="index"
          :data-shabon="index"
        >
          <ShabonNoImage />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
      isLeaving: false,
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
  methods: {
    leavePage(link) {
      this.isLeaving = true
      setTimeout(() => {
        this.$router.push(link)
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 3s opacity;
  z-index: 0;
  &[data-fadeBg='true'] {
    opacity: 0;
  }
}

.bg-blue {
  background: linear-gradient(
    180deg,
    rgba(34, 27, 158, 1) 0%,
    rgba(19, 102, 179, 1) 0%,
    rgba(82, 225, 253, 1) 100%
  );
}

.bg-orange {
  background: linear-gradient(
    180deg,
    rgba(34, 27, 158, 1) 0%,
    rgba(219, 77, 32, 1) 0%,
    rgba(221, 143, 81, 1) 100%
  );
}

.shabon-wrapper {
  width: fit-content;
}

.shabon-link {
  display: block;
  width: fit-content;
}

.shabon-animation {
  animation: bounce 3s infinite alternate ease-in-out;
}

.shabon-fadein {
  position: absolute;
  animation: shabonFadeIn 3s infinite;
  width: 200px;
  opacity: 0;

  &[data-shabon='1'] {
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='2'] {
    width: 160px;
    animation: shabonFadeIn 3s infinite;
  }
  &[data-shabon='3'] {
    width: 180px;
  }
  &[data-shabon='4'] {
    width: 200px;
  }
  &[data-shabon='5'] {
    width: 140px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='6'] {
    width: 200px;
  }
  &[data-shabon='7'] {
    width: 200px;
  }
  &[data-shabon='8'] {
    width: 100px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='9'] {
    width: 200px;
  }
  &[data-shabon='10'] {
    width: 200px;
  }
  &[data-shabon='11'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='12'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='13'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='14'] {
    width: 200px;
  }
  &[data-shabon='15'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='16'] {
    width: 250px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='17'] {
    width: 200px;
  }
  &[data-shabon='18'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='19'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='20'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='21'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='22'] {
    width: 200px;
  }
  &[data-shabon='23'] {
    width: 200px;
  }
  &[data-shabon='24'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s infinite;
  }
  &[data-shabon='25'] {
    width: 200px;
    animation: shabonFadeIn 4s 0.5s infinite;
  }
  &[data-shabon='26'] {
    width: 200px;
  }
  &[data-shabon='27'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s infinite;
  }
  &[data-shabon='28'] {
    width: 200px;
  }
  &[data-shabon='29'] {
    width: 200px;
  }
  &[data-shabon='30'] {
    width: 200px;
  }
}

.team-name {
  text-align: center;
  margin-top: 80px;
  position: relative;
  z-index: 0;
}

@keyframes bounce {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 30px);
  }
}

@keyframes shabonFadeIn {
  0% {
    transform: translate(0, 100vh);
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translate(0, -200px);
    opacity: 0.7;
  }
}

@keyframes fadeBg {
  0% {
    background: linear-gradient(
      180deg,
      rgba(34, 27, 158, 1) 0%,
      rgba(19, 102, 179, 1) 0%,
      rgba(82, 225, 253, 1) 100%
    );
  }
  100% {
    background: linear-gradient(
      180deg,
      rgba(34, 27, 158, 1) 0%,
      rgba(219, 77, 32, 1) 0%,
      rgba(221, 143, 81, 1) 100%
    );
  }
}
</style>
