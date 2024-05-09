<script>
import axios from "axios";
import { store } from "../src/store.js";
import AppHeader from "../src/components/AppHeader.vue";
import AppMain from "../src/components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,

    }
  },

  created() {


  },

  methods: {
    searchMovies() {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=119bcd8d57bfd115fef5559216eb0836", {
        params: {
          query: this.store.searchQuery
        }
      }).then((resp) => {
        this.store.moviesArray = resp.data.results
        console.log(this.store.moviesArray);
        this.store.searchQuery = ""
      });

    },

    searchSeries() {
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=119bcd8d57bfd115fef5559216eb0836", {
        params: {
          query: this.store.searchQuery
        }
      }).then((resp) => {
        this.store.seriesArray = resp.data.results
        console.log(this.store.seriesArray);
        this.store.searchQuery = ""
      });

    },
  }
}

</script>

<template>
  <AppHeader @search="[searchMovies(), searchSeries()]" @keyup.enter="[searchMovies(), searchSeries()]" />
  <AppMain class="app" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: "Kanit", sans-serif;
    background-image: url(https://i.redd.it/4fxxbm4opjd31.jpg) ;
    background-position: center;
    background-size: cover;
}


</style>
