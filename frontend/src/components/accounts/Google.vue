<template>
<div>
    <!-- 수정 1. google 2. vuex accounts -->
    <!-- <a href="http://localhost:8000/oauth2/authorization/kakao"> -->
    <!-- <h1 style="color: white">하이하이</h1> -->
    <a href="https://i5a309.p.ssafy.io/oauth2/authorization/kakao">
      <v-img class="mx-auto logoTopM" max-height="270" max-width="300" :src="require('../../assets/kakao_login_medium_wide.png')" />
    </a>
    <div class="rounded-lg">

    <a href="https://i5a309.p.ssafy.io/oauth2/authorization/google">
      <v-img class="mx-auto loginButtonM circleLittle" max-height="390" max-width="301" :src="require('../../assets/madeGoogle.png')" />
    </a>
    </div>
</div>
</template>

<script>

// import GoogleLogin from 'vue-google-login';
// const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
 
 export default {
  name: 'Google',
  data() {
    return {
    params: {
        // client_id: API_KEY
    },
    renderParams: {
        width: 250,
        height: 50,
        longtitle: true
            }
        }
  },
  components: {
    // GoogleLogin,
  },
  methods: {
  },
 }

</script>

<style>
.logoTopM {margin-top: 70px;}
.loginButtonM {margin-top: 30px;}
.circle {border-radius: 15px;}
.circleLittle {border-radius: 5px;}
</style>