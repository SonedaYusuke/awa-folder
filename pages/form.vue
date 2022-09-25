<template>
  <div>
    <form>
      <input v-model="folder" placeholder="チーム名を入力してね" />
      <input
        @change="selectImage"
        ref="input"
        type="file"
        accept="image/jpeg, image/png"
      />
      <button @click="submit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      folder: null,
      socket: null,
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      if (!this.image || !this.folder) return

      const obj = JSON.stringify({
        action: 'sendphoto',
        base_64_image: this.image,
        folder_name: `ishinomakihackathon2022-${this.folder}`,
      })
      console.log(obj)
      this.socket.send(obj)
    },
    selectImage(e) {
      const reader = new FileReader()

      const image = e.target.files[0]

      reader.onload = () => {
        console.log('読み込んだ')
        this.image = reader.result
      }

      reader.readAsDataURL(image)
    },
  },
  mounted() {
    this.socket = new WebSocket(
      'wss://o2vmciuox2.execute-api.ap-northeast-1.amazonaws.com/production/'
    )

    this.socket.onopen = (event) => {
      console.log('connection!!')
      console.log(event)
    }
  },
}
</script>

<style lang="scss" scoped></style>
// new Blob( // [ // JSON.stringify( // { // action: 'sendphoto', //
base_64_image: this.image, // folder_name: 'test', // }, // null, // 2 // ), //
], // { // type: 'application/json', // } // )
