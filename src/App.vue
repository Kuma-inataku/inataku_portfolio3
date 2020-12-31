<template>
  <v-app>
    <!-- <v-navigation-drawer app v-model="drawer" clipped>Navigation Lists</v-navigation-drawer> -->
    <v-app-bar color="#64B5F6" dark app>
    <!-- <v-app-bar color="primary" class="red--text" app> -->
      <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>
        J-Rock Consultant
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-flex justify-center">
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
      <div class="sns-image">
        <a href="https://twitter.com/TkTkTkTkTako">
          <img src=".\assets\images\twitter.jpg" width="60px" height="60px"/>
        </a>
        <a href="https://www.instagram.com/kuma_kuma_0121/">
          <img src=".\assets\images\instagram.jpg" alt="" width="60px" height="60px"/>
        </a>
      </div>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless color="#64B5F6" dark>
      <v-col class="text-center">
        Copyright© 2020 Japanese Rock Consultant All Rights Reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      drawer:null
    }
  }
};
</script>
<style>
.sns-image{
    width: 3.57143rem;
    position: fixed;
    z-index: 9999;
    top: 45vh;
    left: 0;
    right: auto;
}
</style>