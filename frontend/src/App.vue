<template>
  <v-app>
    <v-main class="background-color">
      <follow-alert/>
      <like-alert></like-alert>
      <store-alert></store-alert>
      <!-- Header -->
      <Header v-if="$route.name !== 'LoginView' && $route.name !== 'PostRouteView' && $route.name !== 'ReviseRouteView' && $route.name !== 'ReviseOthersRouteView'"/>

      <!-- 라우터 뷰 -->
      <transition
        mode="out-in"
        name="router-anim"
        :enter-active-class="this.$route.meta.enterActiveClass"
        :leave-active-class="this.$route.meta.leaveActiveClass"
      > 
        <router-view/>
      
      </transition>
        <!-- <transition
          mode="out-in"
          :enter-active-class="this.$route.meta.enterActiveClass"
          :leave-active-class="this.$route.meta.leaveActiveClass"
        >
        </transition> -->
      <!-- </router-view> -->

    
      <!-- Footer -->
      <Nav v-if="$route.name !== 'LoginView'"/>

    </v-main>
  </v-app>
</template>

<script>
import StoreAlert from '@/components/alert/StoreAlert.vue'
import LikeAlert from '@/components/alert/LikeAlert.vue'
import FollowAlert from '@/components/alert/FollowAlert.vue'
import Header from '@/components/common/Header.vue'
import Nav from '@/components/common/Nav.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Header,
    Nav,
    FollowAlert,
    LikeAlert,
    StoreAlert,
  },
};
</script>
<style>
.background-color {
  background-color: #101423;
  /* background-image: url("./assets/background-color.jpg"); */
}


</style>