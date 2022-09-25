<template>
  <div class="wrapper">
    <div class="bg-orange"></div>
    <div class="team__wrapper">
      <span>{{ teamName }}</span>
    </div>
    <nuxt-link to="/">
      <img class="back" src="~/assets/image/back.png" alt="戻る" />
    </nuxt-link>

    <transition name="fade">
      <div v-if="items" class="shabon__wrapper">
        <div
          class="shabon__animation"
          v-for="(item, index) in items"
          :key="`key-${index}`"
          @click="showImageModal(index)"
        >
          <Shabon
            :src="`data:image/jpeg;base64,${item.img}`"
            :shabonId="index % 5"
          />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="selectedImageIndex !== null"
        class="modal"
        @click.self="closeModal"
      >
        <img
          class="modal__image"
          :src="`data:image/jpeg;base64,${items[selectedImageIndex].img}`"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
      selectedImageIndex: null,
      socket: null,
    }
  },
  computed: {
    teamName() {
      return this.$route.params.team
    },
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

    const res = await this.$axios.get(
      `https://ddcc6rhxy5.execute-api.ap-northeast-1.amazonaws.com/prod/photoconne/${this.teamName}`
    )

    this.items = res.data
  },
  methods: {
    showImageModal(index) {
      console.log(index)
      this.selectedImageIndex = index
    },
    closeModal() {
      this.selectedImageIndex = null
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-orange {
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(34, 27, 158, 1) 0%,
    rgba(219, 77, 32, 1) 0%,
    rgba(221, 143, 81, 1) 100%
  );
  min-height: 100vh;
  width: 100vw;
}

.shabon__wrapper {
  display: flex;
  justify-content: center;
  width: 800px;
  margin: auto;
  flex-wrap: wrap;
}

.shabon__animation {
  margin: 0 20px;
  cursor: pointer;
  opacity: 0;
  transition: 1s opacity;
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

.back {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 125px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  &__image {
    height: 50vh;
  }
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
    transform: translate(0, 0) rotate(-20deg);
    opacity: 1;
  }
  100% {
    transform: translate(0, 40px) rotate(20deg);
    opacity: 1;
  }
}
</style>
