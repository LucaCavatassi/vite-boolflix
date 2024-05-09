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
            return "https://flagcdn.com/w20/" + this.store.seriesArray[index].original_language + ".png"
        },

        getImageUrl(name) {
            return new URL(`/src/assets/img/${name}.png`, import.meta.url).href
        },

        getPosters(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.seriesArray[index].poster_path
        },

        getBackdrop(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.seriesArray[index].backdrop_path
        },

        convVote(index) {
            let vote = parseFloat(this.store.moviesArray[index].vote_average)
            let splitVote = Math.round(Math.round(vote * 2) / 2) / 2
            return splitVote
        }
    }
}
</script>

<template>
    <div class="container">
        <!-- SECTION_TITLE -->
        <h1 class="ms_title" v-if="this.store.seriesArray.length > 0">Tv Series</h1>
        <!-- /SECTION_TITLE -->
        <div class="row">
            
            
            <div class="col-xs-12 col-lg-4 col-xl-3  d-flex justify-content-center mb-4"  v-for="(element, index) in this.store.seriesArray">
                <!-- CARD -->
                <div class="card">
                    <div class="my-img-card">
                        <!-- POSTER -->
                        <img v-if="this.store.seriesArray[index].poster_path !== null" :src="getPosters(index)" class="card-img-top my_img_size" :alt="element.name">
                        <img v-else :src="getImageUrl(noImage)" :alt="element.name" class="my_img_size">
                        <!-- /POSTER -->
                    </div>
                    
                    <!-- BODY -->
                    <div class="card-body">
                        <!-- NAME -->
                        <h5 class="card-title fs-3 mb-0" >{{ element.name }}</h5>
                        <span class="my-small-fs"><i>Original Title</i></span>
                        <h6 class="card-subtitle mb-2 text-body-secondary pt-1">{{ element.original_name }}</h6>
                        <!-- /NAME -->

                        <!-- INFO -->
                        <ul class="list-group list-group-flush">
                            <!-- LANG_FLAG -->
                            <span class="my-small-fs">
                                <i>Original Language</i>
                            </span>
                                <!-- EMOJI -->
                                <li class="list-group-item px-0">
                                    <img v-if="element.original_language === 'en'" :src="getImageUrl(ukFlag)" alt="{{ element.original_language }}">
                                    <img v-else-if="element.original_language === 'ja'" :src="getImageUrl(jpFlag)" alt="{{ element.original_language }}">
                                    <img v-else-if="element.original_language === 'ko'" :src="getImageUrl(skFlag)" alt="{{ element.original_language }}">
                                    <img v-else-if="element.original_language === 'zh'" :src="getImageUrl(cnFlag)" alt="{{ element.original_language }}">                
                                    <img v-else :src="getFlag(index)">
                                </li>
                                <!-- /EMOJI -->
                            <!-- /LANG_FLAG -->

                            <!-- VOTE -->
                            <span class="my-small-fs">
                            <i>Rating</i>
                            </span>
                            <!-- STARS -->
                                <li class="list-group-item px-0 py-0">
                                    <!-- STARS -->
                                    <span v-if="convVote(index) ===  0 || convVote(index) ===  0.5">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>

                                    <span v-else-if="convVote(index) ===  1 || convVote(index) ===  1.5">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>

                                    <span v-else-if="convVote(index) ===  2 || convVote(index) ===  2.5">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>

                                    <span v-else-if="convVote(index) ===  3 || convVote(index) ===  3.5">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>

                                    <span v-else-if="convVote(index) ===  4 || convVote(index) ===  4.5">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>

                                    <span v-else-if="convVote(index) ===  5">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                    <!-- /STARS -->
                                    
                                </li>
                            <!-- /STARS -->
                            <!-- VOTE -->
                            <!-- OVERVIEW -->
                            <span class="my-small-fs pt-2">
                            <i>Overview</i>
                            </span>
                            <li class="my-overview list-group-item fs-6 px-0 py-0">
                                <span v-if="element.overview !== ''">{{ element.overview }}</span>
                                <span v-else>Overview not found.</span>
                            </li>
                            <!-- /OVERVIEW -->
                        </ul>
                        <!-- INFO -->
                    </div>
                    <!-- /BODY -->
                </div>
                <!-- /CARD -->
            </div>
        </div>
    </div>
</template>

<style>
.my-small-fs {
    font-size: 0.7rem;
}

.my_img_size{
    height: 429px;
    width: 100%;
    object-fit: cover;
}

.ms_title{
    color: #E50914;
    font-weight: bold;
    text-shadow: black 1px 1px 30px;
}

.card{
    width: 18rem;
    border: 0px solid;
}
.card-body {
    display: none;
    height: 429px;
    width: 100%;
    overflow: scroll;
}

.card:hover{
    box-shadow: #E50914 1px 1px 30px;
}

.card:hover .card-body{
    display: block;
}
.card:hover .my-img-card{
    display: none;
}
</style>
