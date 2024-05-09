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
    <div class="my-pad">
        <MovieCard />
        <SeriesCard />
    </div>

</template>

<style scoped lang="scss">
div{
    height: 100%;
    position: relative;
}
    div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://i.redd.it/4fxxbm4opjd31.jpg) ;
    background-repeat: repeat-y;
    background-position: center;
    background-size: contain;
    filter: grayscale(100%);
    filter: blur(8px);
    z-index: -30;
}


.my-pad{
    padding-top: 80px;
}
</style>
