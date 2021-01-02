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
            <!-- <v-list-item-content>
              <v-list-item-title v-for="title in titles" :key="title">{{ title }}</v-list-item-title>
              <v-list-item-subtitle v-for="content in contents" :key="content">{{ content }}></v-list-item-subtitle>
            </v-list-item-content> -->

              <!-- <v-chip-group
            active-class="primary--text"
            column
          >
            <v-chip
              v-for="ranking in rankings"
              :key="ranking"
            >
              {{ ranking }}
            </v-chip>
          </v-chip-group> -->
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
          <div class="container">
            <h2>フリーワード検索</h2>
            <div class="t-c-search">
              <v-col cols="12">
                <v-text-field
                  label="キーワードを入力"
                  placeholder=""
                  filled
                  rounded
                ></v-text-field>
              </v-col>
            </div>
          </div>
          <v-divider></v-divider>
          <h2 class="mt-4 mb-4">検索結果</h2>
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
          </a>
          <p class="l-page">前 | 1 | 2 | 3 | 4 | 5 | 次</p>
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
      'Art',
        ],
    selectedItem: 1,
    rankings: [
        { title: '【失敗しない！】', content: '初心者必見！フェスに持っていくもの10選！' },
        { title: '【これだけ気を付けよう！】', content: 'フェスを楽しむための注意点3選！' },
        { title: '【完全攻略！】', content: '初心者邦ロックロードマップ！' },
        ],
    items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        ],
    return:{
      loading:true
    }
  }),
    mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    Loading,
    // Home,
  },
};
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
</script>

<style>
a{
  text-decoration: none;
}
</style>