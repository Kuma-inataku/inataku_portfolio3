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
  export default {
    data () {

},
  }
</script>

<style>

</style>