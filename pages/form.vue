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
      imageElement: null,
      folder: null,
      socket: null,
      aspect: null,
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      if (!this.image || !this.folder) return

      const canvas = document.createElement('canvas')
      canvas.width = 200
      canvas.height = 200 * this.aspect

      const ctx = canvas.getContext('2d')
      ctx.drawImage(this.imageElement, 0, 0, canvas.width, canvas.height)

      console.log(
        canvas.toDataURL('image/jpeg').replace(/data:image\/.*;base64,/gi, '')
      )

      const obj = JSON.stringify({
        action: 'sendphoto',
        base_64_image: canvas
          .toDataURL('image/jpeg')
          .replace(/data:image\/.*;base64,/gi, ''),
        folder_name: `ishinomakihackathon2022-${this.folder}`,
      })
      console.log(obj)
      this.socket.send(obj)
    },
    selectImage(e) {
      const reader = new FileReader()

      const image = e.target.files[0]
      console.log(image)

      reader.onload = (e) => {
        console.log('読み込んだ')
        const image = new Image()
        image.onload = () => {
          console.log(image.width, image.height)
          this.aspect = image.height / image.width
          this.imageElement = image
        }
        image.src = reader.result
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
