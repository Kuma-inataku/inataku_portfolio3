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
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="pa-2"
            tile
          >
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
                      <h3>カテゴリ検索</h3>
                    <!-- <v-btn icon>
                      <v-icon>mdi-content-save-cog-outline</v-icon>
                    </v-btn>

                    <v-btn
                      class="ml-2"
                      icon
                    >
                      <v-icon>mdi-check-bold</v-icon>
                    </v-btn> -->
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
            </v-row>
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
        <v-col
          cols="6"
          md="8"
        >
          <v-card
            class="pa-2"
            tile
          >
          <div>
            <h2>フリーワード検索</h2>
            <div class="t-c-search">
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
            </div>
            <v-divider></v-divider>
            <h2 class="mt-4 mb-4">検索結果</h2>
            <a href="#">
              <v-card :loading="loading" class="mx-auto mt-2 mb-4" v-for="(result, key) in searchResult" :key="key">
                <div class="d-flex">
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="result.imageUrl2"></v-img>
                  </v-avatar>
                  <div>
                    <!-- <v-card-title v-text="result.title"></v-card-title> -->
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
                      <!-- <div v-text="result.content"></div> -->
                      <div v-html="highLight(result.content)"></div>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </a>
            <!-- <a href="#">
              <v-card
              :loading="loading"
              class="mx-auto mt-2 mb-4"
              max-width=""
            >
            <div class="d-flex">
              <v-avatar
              class="ma-3"
              size="125"
              tile>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
              </v-avatar>
              <div>
                <v-card-title>Title Title Title Title</v-card-title>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                      4.5 (413)
                    </div>
                  </v-row>

                  <div class="my-4 subtitle-1">

                  </div>
                  <div>Contents Contents Contents Contents Contents Contents 
                  </div>
                </v-card-text>
                </div>
              </div>
            </v-card>
            </a>
            <a href="#">
              <v-card
              :loading="loading"
              class="mx-auto mt-2 mb-4"
              max-width=""
            >
            <div class="d-flex">
              <v-avatar
              class="ma-3"
              size="125"
              tile>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
              </v-avatar>
              <div>
                <v-card-title>【コロナ禍限定！？】無観客ライブとは？</v-card-title>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                      4.5 (413)
                    </div>
                  </v-row>

                  <div class="my-4 subtitle-1">

                  </div>
                  <div>コロナでライブやフェスがなくてガッカリ…。そんなあなたに「無観客ライブ」という選択肢をご紹介します！
                  </div>
                </v-card-text>
                </div>
              </div>
            </v-card>
            </a> -->

            <!-- test test test test test test test test test test  -->

            <!-- <div>
              <h2>フリーワード検索</h2>
                <div class="t-c-search">
                  <v-col cols="12">
                    <v-text-field
                      label="キーワードを入力"
                      v-model="keyword"
                      placeholder=""
                      filled
                      rounded
                    ></v-text-field>
                  </v-col>
                </div> -->
            <!-- <table>
                      <tr v-for="(user, key) in filteredUsers" :key="key">
                          <td v-text="user.id"></td>
                          <td v-text="user.name"></td>
                          <td v-text="user.email"></td>
                          <td>
                            <img :src="user.imageUrl">
                          </td>
                      </tr>
                  </table> -->

            <!-- test test test test test test test test test test  -->
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="4"
                circle
              ></v-pagination>
            </div>
          </div>
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
    tags: [
      'フェス 初心者',
      'ライブハウス 初心者',
      'フェス 注意点',
      'ツーステ',
      "ROCKIN'ON JAPAN",
      '日本の米は世界一',
        ],
    selectedItem: 1,

    keyword: '',

    rankings: [
        { title: '【失敗しない！】',
         content: '初心者必見！フェスに持っていくもの10選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
          },
        { title: '【これだけ気を付けよう！】',
         content: 'フェスを楽しむための注意点3選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【夏フェス必須！】',
         content: 'あると便利なグッズを紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        ],
    results: [
        { title: '【失敗しない！】',
         content: '初心者必見！フェスに持っていくもの10選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
          },
        { title: '【これだけ気を付けよう！】',
         content: 'フェスを楽しむための注意点3選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【夏フェス必須！】',
         content: 'あると便利なグッズを紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【そもそも「邦ロック」とは？】',
         content: '「邦ロックとはどんなジャンル？」について運営者個人的見解を述べます！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【これだけ気を付けよう！】',
         content: 'フェスを楽しむための注意点3選！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【夏だけじゃない！】',
         content: '寒いからこそフェス！屋内フェスの魅力をご紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【どのフェス・イベントがいいの？】',
         content: '初心者向けフェス・イベントをご紹介！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        { title: '【完全攻略！】',
         content: '初心者邦ロックロードマップ！',
         imageUrl2: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          }
        ],

    return:{
      loading:true,
      page:1
    }
  }),

    mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
    components: {
      Loading,
    },
    computed: {
      // filteredUsers: function() {
      //   var users = [];
      //   for(var i in this.users) {
      //     var user = this.users[i];
      //     if(user.name.indexOf(this.keyword) !== -1 ||
      //       user.email.indexOf(this.keyword) !== -1) {
      //       users.push(user);
      //     }
      //   }
      //   return users;
      // },
       searchResult(){
        let searchWord = this.keyword.trim()
        if (searchWord === '') return this.results;
        return this.results.filter(result => {
            return result.title.includes(searchWord) ||
            result.content.includes(searchWord) 
          })
        }
      },
      methods:{
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
      // searchWord: function() {
      //   var results = [];
      //   for(var i in this.results) {
      //     var result = this.results[i];
      //     if(result.title.indexOf(this.keyword) !== -1 ||
      //       result.content.indexOf(this.keyword) !== -1) {
      //       results.push(result);
      //     }
      //   }
      //   return results;
      // }
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

  // loading機能(完)
  
</script>

<style>
a{
  text-decoration: none;
}
</style>