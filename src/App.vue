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

    }
  }
}

</script>

<template>
  <AppHeader @search="[searchMovies(), searchSeries()]" @keyup.enter="[searchMovies(), searchSeries()]" />
  <AppMain />
</template>

<style></style>
