<script>
import {store} from "/src/store.js"
import MovieCard from "/src/components/MovieCard.vue";
import SeriesCard from "/src/components/SeriesCard.vue"

export default {
    components: {
        MovieCard,
        SeriesCard
    },

    data(){
        return {
            store,
        }
    }
}

</script>

<template>
<MovieCard />
<SeriesCard />

</template>

<style>

</style>
