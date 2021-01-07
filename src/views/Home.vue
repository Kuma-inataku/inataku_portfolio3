<template>
  <div class="contain">
    <!-- ここからVue-carousel -->
    <v-carousel cycle hide-delimiters :show-arrows="false">
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <!-- ここまでVue-carousel -->
    <div class="pa-4 d-flex flex-column justify-center align-center" id="subtitle">
      <h2>Hello, J-Rock World!</h2>
      <p>J-Rockのあらゆる「困った」を即解決！</p>
    </div>
    <div class="mt-8 mb-8">
      <div class="contents">
        <h2 class="text-center mb-6">CONTENTS</h2>
        <div class="contents_box">
          <div class="text-center mb-10">
            <v-btn text to="/search" block :elevation="2" x-large color="#64B5F6" height="70px" dark>
              <v-icon class="mr-2">fas fa-search</v-icon>
              GO TO SEARCH
            </v-btn>
          </div>
          <div class="d-flex justify-space-between" >
            <v-btn text to="/about" elevation="2" outlined color="#E3F2FD" width="200px" height="100px">
            <v-icon class="mr-2">fas fa-microphone</v-icon>
              ABOUT
            </v-btn>
            <v-btn text to="/" disabled :elevation="2" color="#E3F2FD" width="200px" height="100px">
            <v-icon class="mr-2">fas fa-users</v-icon>
            COMMUNITY
            </v-btn>
            <v-btn text to="/" disabled :elevation="2" color="#E3F2FD" width="200px" height="100px">
            <v-icon class="mr-2">fas fa-calendar-alt</v-icon>
            FES-CALENDAR
            </v-btn>
            <v-btn text to="/contact" :elevation="2" color="#E3F2FD" width="200px" height="100px">
            <v-icon class="mr-2">far fa-envelope</v-icon>
            CONTACT
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/images/top_image3.jpg')
          },
          {
            src: require('../assets/images/top_image4.jpg')
          },
          {
            src: require('../assets/images/top_image5.jpg')
          },
        ],
      }
    },
  }
</script>

<style>
.contain{
  position: relative;
}
#subtitle{
  position: absolute;
  top: 45%;
  left: 5%;
  line-height: 1.8;
  background-color:rgba(255,255,255,0.7);
}
.contents{
  background-color:rgba(255,255,255,0.7);
}
.contents_box{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto ;
}
.v-application a{
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
</style>