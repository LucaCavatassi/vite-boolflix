<script>
import { store } from "/src/store.js"

export default {
    data() {
        return {
            store,
            ukFlag: "uk_emoji",
            jpFlag: "jp_emoji",
            skFlag: "sk_emoji",
            cnFlag: "ch_emoji",
            noImage: "no_image"
        }
    },

    methods: {
        getFlag(index) {
            return "https://flagcdn.com/20x15/" + this.store.seriesArray[index].original_language + ".png"
        },

        getImageUrl(name) {
            return new URL(`/src/assets/img/${name}.png`, import.meta.url).href
        },

        getPosters(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.seriesArray[index].poster_path
        },

        getBackdrop(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.seriesArray[index].backdrop_path
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 v-if="this.store.seriesArray.length > 0">Tv Series</h1>
            <div class="col d-flex justify-content-center mb-4"  v-for="(element, index) in this.store.seriesArray">
                <div class="card" style="width: 18rem;">
                    <img v-if="this.store.seriesArray[index].poster_path !== null" :src="getPosters(index)" class="card-img-top" :alt="element.name">
                    <img v-else :src="getImageUrl(noImage)" :alt="element.name">
                
                    <div class="card-body">
                        <h5 class="card-title fs-3 mb-0" >{{ element.name }}</h5>
                        <span class="my-small-fs"><i>Original Title</i></span>
                        <h6 class="card-subtitle mb-2 text-body-secondary pt-1">{{ element.original_name }}</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item px-0">
                                <img v-if="element.original_language === 'en'" :src="getImageUrl(ukFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ja'" :src="getImageUrl(jpFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ko'" :src="getImageUrl(skFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'zh'" :src="getImageUrl(cnFlag)" alt="{{ element.original_language }}">                
                                <img v-else :src="getFlag(index)">
                            </li>
                            <li class="list-group-item">{{ element.vote_average }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.my-small-fs {
    font-size: 0.7rem;
}
</style>
