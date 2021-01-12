<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
    <h1>【失敗しない！】フェスの持ち物10選！</h1>
    <v-sheet elevation="3">
      <v-col
      cols="6"
      sm="6"
      md="4"
      >
        <v-img src="../assets/images/top_image3.jpg"></v-img>
          <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>
        Item
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <vue-star animate="animated rubberBand" color="#F05654">
    <a slot="icon" class="fa fa-heart" @click="handleClick">ssa</a>
  </vue-star>
  <vue-star animate="animated shake" color="#5654F0">
    <a slot="icon" class="fa fa-thumbs-up" @click="handleClick"></a>
  </vue-star>
    <!-- <div>
      <v-btn class="ma-2" text icon color="blue lighten-2">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn class="ma-2" text icon color="red lighten-2">
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div> -->

      </v-col>
    </v-sheet>

    <v-btn to="/search" :elevation="2" x-large color="#64B5F6" height="70px" dark>
    <v-icon class="mr-2">fas fa-search</v-icon>
      GO TO SEARCH
    </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueStar from 'vue-star'

  export default {
    components: {
    VueStar
  },
    data () {

},
    mounted() {
    //いいね機能
      this.$refs.ThumbsUp.$data.active = true;
      console.log(this.$refs.ThumbsUp.$data);
      },
    methods:{
      //いいね機能
      handleClick () {
      console.log(this.$refs.ThumbsUp.$data);
      //do something
    }
  }
}
</script>

<style>
#app .VueStar {
      position: relative;
      display: inline-block;
    }
    .VueStar__icon .fa {
      font-size: 2em;
      cursor: pointer;
      /* color: coral; */
    }
</style>