<script>
import { store } from "/src/store.js"
import axios from "axios";

export default {
    data() {
        return {
            store,
            ukFlag: "uk_emoji",
            jpFlag: "jp_emoji",
            skFlag: "sk_emoji",
            cnFlag: "ch_emoji",
            noImage: "no_image",
            activeIndex: 0,
            castShow: false
        }
    },

    methods: {
        getFlag(index) {
            return "https://flagcdn.com/w20/" + this.store.moviesArray[index].original_language + ".png"
        },

        getImageUrl(name) {
            return new URL(`/src/assets/img/${name}.png`, import.meta.url).href
        },

        getPosters(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.moviesArray[index].poster_path
        },

        getBackdrop(index) {
            return "https://image.tmdb.org/t/p/w500" + this.store.moviesArray[index].backdrop_path
        },

        convVote(index) {
            let vote = parseFloat(this.store.moviesArray[index].vote_average)
            let splitVote = Math.round(Math.round(vote * 2) / 2) / 2
            return splitVote
        },

        getCast(id, index) {
            
            axios.get("https://api.themoviedb.org/3/movie/" + id + "/credits", {
                params: {
                    api_key: "119bcd8d57bfd115fef5559216eb0836"
                }
            }).then((resp) => {
                // console.log(this.store.seriesArray[index].id);
                this.store.castArray = resp.data.cast[0].name
                // this.store.castArray.push(resp.data.cast[0].name);
                console.log(resp.data.cast[0].name);
            });

            this.castShow = !this.castShow
            return this.store.castArray
        }

    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- SECTION_TITLE -->
            <h1 class="ms_title" v-if="this.store.moviesArray.length > 0">Movies</h1>
            <!--/SECTION_TITLE -->

            <div class="col col-lg-4 col-xl-3 d-flex justify-content-center mb-4"
                v-for="(element, index) in this.store.moviesArray">
                <!-- CARD -->
                <div class="card">
                    <div class="my-img-card">
                        <!-- POSTER -->
                        <img v-if="this.store.moviesArray[index].poster_path !== null" :src="getPosters(index)"
                            class="card-img-top my_img_size" :alt="element.title">
                        <img v-else :src="getImageUrl(noImage)" :alt="element.name" class="my_img_size">
                        <!-- /POSTER -->
                    </div>

                    <!-- BODY -->
                    <div class="card-body">
                        <!-- NAME -->
                        <h5 class="card-title fs-3 mb-0">{{ element.title }}</h5>
                        <span class="my-small-fs"><i>Original Title</i></span>
                        <h6 class="card-subtitle mb-2 text-body-secondary pt-1">{{ element.original_title }}</h6>
                        <!-- NAME -->

                        <!-- INFO -->
                        <ul class="list-group list-group-flush">

                            <!-- LANG_FLAG -->
                            <span class="my-small-fs">
                                <i>Original Language</i>
                            </span>
                            <!-- EMOJI -->
                            <li class="list-group-item px-0 py-0 pb-2">
                                <img v-if="element.original_language === 'en'" :src="getImageUrl(ukFlag)"
                                    alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ja'" :src="getImageUrl(jpFlag)"
                                    alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ko'" :src="getImageUrl(skFlag)"
                                    alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'zh'" :src="getImageUrl(cnFlag)"
                                    alt="{{ element.original_language }}">
                                <img v-else :src="getFlag(index)">
                            </li>
                            <!-- /EMOJI -->
                            <!-- LANG_FLAG -->


                            <!-- VOTE -->
                            <span class="my-small-fs">
                                <i>Rating</i>
                            </span>

                            <li class="list-group-item px-0 py-0">
                                <!-- STARS -->
                                <span v-if="convVote(index) === 0 || convVote(index) === 0.5">
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>

                                <span v-else-if="convVote(index) === 1 || convVote(index) === 1.5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>

                                <span v-else-if="convVote(index) === 2 || convVote(index) === 2.5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>

                                <span v-else-if="convVote(index) === 3 || convVote(index) === 3.5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>

                                <span v-else-if="convVote(index) === 4 || convVote(index) === 4.5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>

                                <span v-else-if="convVote(index) === 5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <!-- /STARS -->

                            </li>
                            <!-- VOTE -->


                            <!-- OVERVIEW -->
                            <span class="my-small-fs pt-2">
                                <i>Overview</i>
                            </span>
                            <li class="list-group-item fs-6 px-0 py-0">
                                <span v-if="element.overview !== ''">{{ element.overview }}</span>
                                <span v-else>Overview not found.</span>
                            </li>
                            <!-- /OVERVIEW -->

                            <!-- CAST -->
                            <li class="list-group-item px-0">
                                <button type="button" class="btn btn-danger" @click="getCast(element.id)">Show Cast</button>
                                <span v-if="castShow" v-for="castMem in this.store.castArray">{{ castMem }}</span>
                            </li>
                            <!-- /CAST -->
                        </ul>
                        <!-- /INFO -->
                    </div>
                    <!-- BODY -->
                </div>
                <!-- /CARD -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-small-fs {
    font-size: 0.7rem;
}

.my_img_size {
    height: 429px;
    width: 100%;
    object-fit: cover;
}

.ms_title {
    color: #E50914;
    font-weight: bold;
    text-shadow: black 1px 1px 30px;
}

.card {
    width: 18rem;
    border: 0px solid;
}

.card-body {
    display: none;
    height: 429px;
    width: 100%;
    overflow: scroll;

}

.card:hover {
    box-shadow: #E50914 1px 1px 30px;
}

.card:hover .card-body {
    display: block;
}

.card:hover .my-img-card {
    display: none;
}

.btn-danger {
    background-color: #E50914;
}
</style>
