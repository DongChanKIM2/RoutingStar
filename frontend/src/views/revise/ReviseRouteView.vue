<template>
  <v-container v-if="canRendering" class="pa-0">

    <ReviseHeader :tempThumbnail="tempThumbnail" 
    :routeDescription="responseData.success.routeDescription"
    :whatTag="responseData.success.whatTag" 
    :withTag="responseData.success.withTag"
    @freeze-map="freezeMap" @recover-freeze-map="recoverFreezeMap"/>

    <UpdateMap :isFreeze="isFreeze" :resPlacesData="responseData.success.places" 
    @thumbnail-checked="thumbnailChecked" @update-tumbnail-image="updateThumbnailImage"/> 

    <!-- <ImageInput @update-tumbnail-image="updateThumbnailImage"/> -->

    <UpdateMapPointForm @update-tumbnail-image="updateThumbnailImage" :isthumbail="isthumbail" 
    :listLength="responseData.success.places.length"
    @change-isthumbail="changeIsthumbail"/>

  </v-container>
</template>

<script>
import UpdateMap from '@/components/revise/UpdateMap.vue'
import UpdateMapPointForm from '@/components/revise/UpdateMapPointForm.vue'
// import ImageInput from '@/components/revise/ImageInput.vue'
import ReviseHeader from '@/components/revise/ReviseHeader.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'ReviseRouteView',
  data() {
   return {
    responseData: this.routeInfo,
    isFreeze: false,
    tempThumbnail: '',
    isthumbail: false,
    canRendering: false,
   }
 },
  components: {
    UpdateMap,
    UpdateMapPointForm,
    // ImageInput,
    ReviseHeader
  },
  computed: {
    ...mapGetters(['jwt', 'routeInfo',])
  },
  methods: {
    ...mapActions(['fetchLoginedToken', 'changeMethodType', 'setClickedRouteId']),
    // 모달이 열리면 map freeze하기
    freezeMap() {
      this.isFreeze = true
    },
    // 모달이 닫히면 map freeze 풀기=
    recoverFreezeMap() {
      this.isFreeze = false
      // console.log(this.isFreeze)
    },
    updateThumbnailImage(image) {
      console.log('updateThumbnailImage로 들어옴')
      this.tempThumbnail = image
    },
    thumbnailChecked() {
      this.isthumbail = true
    },
    changeIsthumbail() {
      this.isthumbail = !this.isthumbail
    },
    changeRendering() {
      this.canRendering = !this.canRendering
    }
  },
  async created () {
    const token = this.jwt
    this.$store.dispatch('fetchLoginedToken', token)
    const tmp_id = this.jwt[2]
    this.setClickedRouteId(this.$route.params.routeId)
    // prop받은 routeId로 변경필요
    const routeId = this.$route.params.routeId
    const access_token = this.jwt[0]
    // 수정페이지에서는 put요청을 보내야함
    this.changeMethodType('put')

    const config = {
      headers: {
        'access_token': access_token
      }
    }
    await axios.get(`https://i5a309.p.ssafy.io/api/v1/route/${tmp_id}/${routeId}`, config)
      .then((res) => {
        this.responseData = res.data
        this.canRendering = true
      })
      .catch((err) => {console.log(err)})
  },
}
</script>

<style>

</style>