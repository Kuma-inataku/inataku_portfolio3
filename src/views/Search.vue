<template>
  <div>
    <div v-show="loading">
      <div class="fullview">
        <div class="loading-spacer"></div>
        <vue-loading 
          type="spiningDubbles"
          color="#64B5F6"
          :size="{ width: '100px', height: '100px' }"
          >
        </vue-loading>
        <Loading v-show="loading"></Loading>
      </div>
    </div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="12"
          md="8"
          sm="12"
        >
          <v-card
            class="pa-2"
            tile
          >
          <div>
            <h2>フリーワード検索</h2>
              <v-col cols="12">
                <v-text-field
                  v-model="keyword"
                  label="キーワードを入力"
                  placeholder=""
                  filled
                  rounded
                  type="text"
                ></v-text-field>
              </v-col>
            <v-divider></v-divider>
            <h2 class="mt-4 mb-4">検索結果</h2>
              <v-card :loading="loading" class="mx-auto mt-2 mb-4" v-for="(result, key) in searchResult" :key="key">
            <router-link text :to="result.url" id="active" class="text-decoration-none">
                <div class="d-flex">
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="result.imageUrl2"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title v-html="highLight(result.title)"></v-card-title>
                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413)
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div v-html="highLight(result.content)"></div>
                    </v-card-text>
                  </div>
                </div>
            </router-link>

              </v-card>
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="3"
                circle
              ></v-pagination>
            </div>
          </div>
          </v-card>
        </v-col>
                <v-col
          cols="12"
          md="4"
          sm="12"
        >
          <v-card
            class="pa-2"
            tile
          >

            <!-- <v-row justify="center">
              <v-col>
                <v-sheet
                  elevation="5"
                  rounded="xl"
                >
                  <v-sheet
                    class="pa-3"
                    dark
                    rounded="t-xl"
                    color="#64B5F6"
                  >
                    <h3>キーワード検索</h3>
                  </v-sheet>
                  <div class="pa-4">
                    <v-chip-group
                      active-class="primary--text"
                      column
                    >
                      <v-chip
                        v-for="tag in tags"
                        :key="tag"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-sheet>
              </v-col>
            </v-row> -->

            <v-row justify="center">
              <v-col>
                <v-sheet
                  elevation="5"
                  rounded="xl"
                >
                  <v-sheet
                    class="pa-3"
                    dark
                    rounded="t-xl"
                    color="#64B5F6"
                  >
                    <h3>ランキング検索</h3>
                  </v-sheet>
                  <v-col
                      class="mx-auto"
                      max-width="300"
                    >
                    <v-list subheader>
                      <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                      >
                        <v-list-item
                          v-for="(ranking, i) in rankings"
                          :key="i"
                        >
                        <div v-text="ranking.number" class="mr-2"></div>
                          <v-list-item-content>
                            <v-list-item-title>
                              <div v-text="ranking.title"></div>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              <div v-text="ranking.content"></div>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  data:() => ({
    // 「キーワード検索」ここから
    // tags: [
    //   'フェス 初心者',
    //   'ライブハウス 初心者',
    //   'フェス 注意点',
    //   'ツーステ',
    //   "ROCKIN'ON JAPAN",
    //   '日本の米は世界一',
    //     ],
    // 「キーワード検索」ここまで
    selectedItem: 1,

    keyword: '',

    rankings: [
        { number: '1位',
          title: '【失敗しない！】',
          content: '初心者必見！フェスに持っていくもの10選！',
          imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
          },
        { number: '2位',
          title: '【これだけ気を付けよう！】',
          content: 'フェスを楽しむための注意点3選！',
          imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { number: '3位',
          title: '【夏フェス必須！】',
          content: 'あると便利なグッズを紹介！',
          imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        ],
        // 検索結果の内容↓
    results: [
        { title: '【失敗しない！】',
         content: '初心者必見！フェスに持っていくもの10選！',
         imageUrl2: require('../assets/images/top_image4.jpg'),
         url: '/page1'
          },
        { title: '【これだけ気を付けよう！】',
         content: 'フェスを楽しむための注意点3選！',
         imageUrl2: require('../assets/images/top_image4.jpg'),
         url: '/page2'
          },
        { title: '【夏フェス必須！】',
         content: 'あると便利なグッズを紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page3'
          },
        { title: '【そもそも「邦ロック」とは？】',
         content: '「邦ロックとはどんなジャンル？」について運営者個人的見解を述べます！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page4'
          },
        { title: '【これだけ気を付けよう！】',
         content: 'フェスを楽しむための注意点3選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page5'
          },
        { title: '【夏だけじゃない！】',
         content: '寒いからこそフェス！屋内フェスの魅力をご紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page6'
          },
        { title: '【どのフェス・イベントがいいの？】',
         content: '初心者向けフェス・イベントをご紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page7'
          },
        { title: '【完全攻略！】',
         content: '初心者邦ロックロードマップ！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
         url: '/page8'
          }
        ],

    return:{
      // 読み込み時のloading追加
      loading:true,
      page:1
    }
  }),

    mounted() {
      // loadingの時間指定
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
    components: {
      Loading,
    },
    computed: {
       searchResult(){
        // 空白入力を削除↓
        let searchWord = this.keyword.trim()
        if (searchWord === '') return this.results;
        // 検索結果をフィルタリング
        return this.results.filter(result => {
            return result.title.includes(searchWord) ||
            result.content.includes(searchWord) 
          })
        }
      },

      methods:{
        // 入力されたキーワードをハイライト化
        highLight(text){
          let searchWord = this.keyword.trim()
          if (searchWord === '') return text
          if(!text.includes(searchWord)) return text
          const re = new RegExp(searchWord, 'ig');
          return text.replace(re,function(search){
            return '<span style="background-color:yellow; fontweight;bold">'+search + '</span>'
          })
        }
      },
};

// loading機能↓

// export default {
  //   data(){
    //     return{
      //       loading:true
//     }
//   },
//     mounted() {
  //     setTimeout(() => {
    //       this.loading = false;
//     }, 1000);
//   },
//   components: {
  //     Loading,
//     // Home,
//   },
// };

// ここまでloading機能(完)
  
</script>

<style>
.v-application a{
  /* text-decoration: none; */
  /* font-weight: bold; */
  color: #fff;
}
#active{
  color: #333;
  
}
</style>