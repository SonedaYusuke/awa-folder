<template>
  <div>
    <div class="bg bg-orange"></div>
    <div class="bg bg-blue" :data-fadeBg="isLeaving"></div>
    <transition name="fade">
      <div v-if="!isLeaving" class="wrapper">
        <div class="shabon__contain">
          <div
            class="shabon-link"
            v-for="item in items"
            :key="item.folder_name"
          >
            <div class="shabon-wrapper">
              <button
                class="shabon-animation"
                @click="leavePage(item.folder_name)"
              >
                <!-- TODO: サムネ画像欲しい -->
                <Shabon src="" />
              </button>
              <p class="team-name">{{ item.folder_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="shabons-animation-wrapper">
      <transition-group name="fade">
        <template v-if="isLeaving">
          <div
            class="shabon-fadein"
            v-for="index in 40"
            :style="{
              left: `${((index % 10) - 1) * 180}px`,
              top: `${Math.floor(index / 10) * 180}px`,
            }"
            :key="index"
            :data-shabon="index"
          >
            <ShabonNoImage />
          </div>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
      isLeaving: false,
      items: null,
    }
  },
  async mounted() {
    this.socket = new WebSocket(
      'wss://o2vmciuox2.execute-api.ap-northeast-1.amazonaws.com/production/'
    )

    // TODO: websocketの処理を追加
    this.socket.onmessage = (event) => {
      console.log('get message!')
      console.log(event.data)
    }

    this.socket.onopen = (event) => {
      console.log('connection!!')
    }

    // TODO: APIでチームの情報を全て取得する

    const res = await this.$axios.get(
      'https://ddcc6rhxy5.execute-api.ap-northeast-1.amazonaws.com/prod/photoconne/all'
    )
    console.log(res.data)
    this.items = res.data
  },
  methods: {
    leavePage(link) {
      this.isLeaving = true
      setTimeout(() => {
        this.$router.push(link)
      }, 3500)
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

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shabon-wrapper {
  width: fit-content;
  margin-bottom: 30px;
}

.shabon-link {
  display: block;
  width: fit-content;
}

.shabon-animation {
  margin: 0 20px;
  &:nth-child(1n) {
    animation: bounce 3.4s infinite alternate ease-in-out;
  }
  &:nth-child(2n) {
    animation: bounce 3s infinite alternate ease-in-out;
    scale: 1.2;
  }
  &:nth-child(3n) {
    animation: bounce 2.8s infinite alternate ease-in-out;
    scale: 0.9;
  }
  &:nth-child(4n) {
    animation: bounce 2.5s infinite alternate ease-in-out;
    scale: 1.4;
  }
}

.shabons-animation-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  pointer-events: none;
}

.shabon-fadein {
  position: absolute;
  animation: shabonFadeIn 3s;
  width: 200px;
  opacity: 0;

  &[data-shabon='1'] {
    animation: shabonFadeIn 3s 0.5s forwards;
  }
  &[data-shabon='2'] {
    width: 160px;
    animation: shabonFadeIn 3s forwards;
  }
  &[data-shabon='3'] {
    width: 180px;
    animation: shabonFadeIn 2.8s 0.2s forwards;
  }
  &[data-shabon='4'] {
    width: 200px;
  }
  &[data-shabon='5'] {
    width: 140px;
    animation: shabonFadeIn 3s 0.5s forwards;
  }
  &[data-shabon='6'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.8s forwards;
  }
  &[data-shabon='7'] {
    width: 200px;
  }
  &[data-shabon='8'] {
    width: 100px;
    animation: shabonFadeIn 2.6s 0.5s forwards;
  }
  &[data-shabon='9'] {
    width: 200px;
    animation: shabonFadeIn 2.8s forwards;
  }
  &[data-shabon='10'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.2s forwards;
  }
  &[data-shabon='11'] {
    width: 200px;
    animation: shabonFadeIn 3.2s 0.2s forwards;
  }
  &[data-shabon='12'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 1s forwards;
  }
  &[data-shabon='13'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.3s forwards;
  }
  &[data-shabon='14'] {
    width: 200px;
  }
  &[data-shabon='15'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.4s forwards;
  }
  &[data-shabon='16'] {
    width: 250px;
    animation: shabonFadeIn 3s 0.1s forwards;
  }
  &[data-shabon='17'] {
    width: 200px;
  }
  &[data-shabon='18'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.1s forwards;
  }
  &[data-shabon='19'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.2s forwards;
  }
  &[data-shabon='20'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s forwards;
  }
  &[data-shabon='21'] {
    width: 200px;
    animation: shabonFadeIn 3s forwards;
  }
  &[data-shabon='22'] {
    width: 200px;
  }
  &[data-shabon='23'] {
    width: 200px;
  }
  &[data-shabon='24'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.2s forwards;
  }
  &[data-shabon='25'] {
    width: 200px;
    animation: shabonFadeIn 4s 0.5s forwards;
  }
  &[data-shabon='26'] {
    width: 200px;
  }
  &[data-shabon='27'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s forwards;
  }
  &[data-shabon='28'] {
    width: 200px;
    animation: shabonFadeIn 3s forwards;
  }
  &[data-shabon='29'] {
    width: 200px;
    animation: shabonFadeIn 2.6s 0.2s forwards;
  }
  &[data-shabon='30'] {
    width: 200px;
    animation: shabonFadeIn 3s forwards;
  }
  &[data-shabon='31'] {
    width: 110px;
    animation: shabonFadeIn 2.6s 0.5s forwards;
  }
  &[data-shabon='32'] {
    width: 180px;
    animation: shabonFadeIn 3.3s 0.3s forwards;
  }
  &[data-shabon='34'] {
    width: 200px;
    animation: shabonFadeIn 2.8s forwards;
  }
  &[data-shabon='35'] {
    width: 170px;
    animation: shabonFadeIn 3s 0.2s forwards;
  }
  &[data-shabon='36'] {
    width: 130px;
    animation: shabonFadeIn 2.6s 0.5s forwards;
  }
  &[data-shabon='36'] {
    width: 110px;
    animation: shabonFadeIn 2s 0.3s forwards;
  }
  &[data-shabon='37'] {
    width: 200px;
    animation: shabonFadeIn 3s 0.5s forwards;
  }
  &[data-shabon='38'] {
    width: 200px;
    animation: shabonFadeIn 3s forwards;
  }
  &[data-shabon='39'] {
    width: 180px;
    animation: shabonFadeIn 2.6s 0.3s forwards;
  }
  &[data-shabon='40'] {
    width: 200px;
    animation: shabonFadeIn 2.8s forwards;
  }
}

.shabon__contain {
  display: flex;
  justify-content: center;
  width: 800px;
  margin: auto;
  flex-wrap: wrap;
}

.team-name {
  text-align: center;
  margin-top: 30px;
  position: relative;
  z-index: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
    transform: translate(0, 50vh);
    opacity: 0;
  }
  20% {
    opacity: 0.7;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    transform: translate(0, -200px);
    opacity: 0;
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
