<template>
  <div>
    <!-- ここからVue-carousel -->
    <!-- <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12"> -->
        <v-carousel cycle hide-delimiters :show-arrows="false" height="700px" interval="8000" class="contain">
          <v-carousel-item 
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          >
          <!-- カルーセルは敢えて入れない方向(挙動がおかしくなる) -->
          </v-carousel-item>
        </v-carousel>
        <!-- </v-col>
      </v-row>
    </v-container> -->
    <!-- ここまでVue-carousel -->
    <div class="d-flex justify-center">
      <div class="pa-4 d-flex flex-column justify-center align-center" id="home_title">
        <h2>～邦ログ～</h2>
        <p>J-Rockのあらゆる「困った」を即解決！</p>
      </div>
      <div class="text-center mb-10" id="home_search">
        <v-btn text to="/search" height="70px" block>
          <v-icon class="mr-2">fas fa-search</v-icon>
          ギモンを解決しに行く
        </v-btn>
      </div>
    </div>
    <div class="mt-8 mb-8">
      <v-container>
        <v-row class="mb-3">
          <v-col
            cols="12"
            md="8"
            sm="8"
            >
            <div class="c_about">
            <!-- <div class="c_about" id="about"> -->
              What is "邦ログ"？
            </div>
            <v-card
              class="pa-1"
              elevation="0"
            >
              <v-card-text>
                ・「邦ロックって興味あるけど自分の周りに関心のある人がいない…」
                <br>
                ・「ロックバンドってちょっと怖そう…」
                <br>
                ・「フェス／ライブ行くことになったけど、どの曲を聞けばいいかわからない…」
                <br>
                <br>
                こんな邦ロックに間する悩みを<strong>サクッと解決</strong>！
                <br>
                記事は随時更新中！
                <br>
                <br>
                InstagramやTikTokでも邦ロック初心者向けの情報発信中！
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="4"
          >
            <v-card
              class="pa-2"
              outlined
            >
              <v-card-title>
                SNS
              </v-card-title>
              <v-card-subtitle>
                Tiktok
              </v-card-subtitle>
              <v-card-text>
                <v-card
              class="pa-2"
              outlined
            >投稿画面貼り付け
                <a href="https://www.tiktok.com/@j_rock_kuma?lang=ja-JP">TikTok</a>
                </v-card>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-subtitle>
                Instagram
              </v-card-subtitle>
              <v-card-text>
                <v-card
              class="pa-2"
              outlined
            >投稿画面貼り付け
                <a href="https://www.instagram.com/kuma_kuma_0121/">Instagram</a>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-3">
          <v-col
            cols="12"
            md="12"
            sm="12"
            >
          <div class="c_contents">CONTENTS</div>
          <v-layout wrap justify-space-around>
            <router-link to="/about" class="text-decoration-none">
              <v-card max-width="250" class="ma-3">
                <v-img src="../assets/images/top_image3.jpg" height="200" class="white--text align-end">
                  <v-card-title class="headline">CONTACT</v-card-title>
                </v-img>
                <v-card-subtitle>ご意見お待ちしています。</v-card-subtitle>
              </v-card>
            </router-link>
          <!-- </v-layout> -->
          <!-- <div class="d-flex justify-space-between"> -->
            <router-link to="/about" class="text-decoration-none">
            <v-card max-width="250" class="ma-3">
              <v-img src="../assets/images/top_image3.jpg" height="200" class="white--text align-end">
                <v-card-title class="headline">COMMUNITY</v-card-title>
              </v-img>
              <v-card-subtitle>邦ロック初心者向けコミュニティ</v-card-subtitle>
            </v-card>
            </router-link>
            <router-link to="/about" class="text-decoration-none">
              <v-card max-width="250" class="ma-3 " >
                <v-img src="../assets/images/top_image3.jpg" height="200" class="white--text align-end">
                  <v-card-title class="headline">CARENDAR</v-card-title>
                </v-img>
                <v-card-subtitle>フェスカレンダー</v-card-subtitle>
              </v-card>
            </router-link>
          </v-layout>
          </v-col>
        </v-row>
      </v-container>
        <!-- <div class="contents_box">
          <div class="d-flex justify-space-between" >
            <v-btn text to="/about" elevation="2" outlined color="#E3F2FD" width="200px" height="100px">
            <v-icon class="mr-2">fas fa-microphone</v-icon>ABOUT
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
        </div> -->
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
.container{
  max-width: 1000px;
}
.contain{
  position: relative;
}
#home_title{
  position: absolute;
  width: 100%;
  top: 15%;
  left: 50%;
  transform: translateY(-85%) translateX(-50%);
  /* -webkit- transform: translateY(-50%) translateX(-50%); */
  line-height: 1.8;
  background-color:rgba(255,255,255,0.7);
}
#home_search{
  position: absolute;
  width:60%;
  top: 20%;
  left: 50%;
  transform: translateY(-30%) translateX(-50%);
  /* -webkit- transform: translateY(-50%) translateX(-50%); */
  background-color:rgba(255,255,255,0.7);
}
.c_about{
  font-size: 22px;
}
.c_about::after{
  content:'／邦ログって何？';
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans", ヒラギノ角ゴシック, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
.c_contents{
  font-size: 22px;
}
.c_contents::after{
  content:'   ／コンテンツ';
  font-size: 12px;
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
  /* text-decoration: none; */
  font-weight: bold;
  color: #fff;
}
</style>