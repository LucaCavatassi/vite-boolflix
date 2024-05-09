<script>
import { store } from "/src/store.js"

export default {
    data() {
        return {
            store,
            ukFlag: "uk_emoji",
            jpFlag: "jp_emoji",
            skFlag: "sk_emoji",
            cnFlag: "ch_emoji"
        }
    },

    methods: {
        getFlag(index) {
            return "https://flagcdn.com/20x15/" + this.store.moviesArray[index].original_language + ".png"
        },

        getImageUrl(name) {
            return new URL(`/src/assets/img/${name}.png`, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 v-if="this.store.moviesArray.length > 0">Movies</h1>
            <div class="col d-flex justify-content-center mb-4" v-for="(element, index) in this.store.moviesArray">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title fs-3 mb-0">
                            {{ element.title }}
                        </h5>
                        <span class="my-small-fs">
                            <i>Original Title</i>
                        </span>
                        <h6 class="card-subtitle mb-2 text-body-secondary pt-1">
                            {{ element.original_title }}
                        </h6>
                        <ul class="list-group list-group-flush">
                            <span class="my-small-fs">
                                <i>Original Language</i>
                            </span>
                            <li class="list-group-item px-0 py-0 pb-2">
                                <img v-if="element.original_language === 'en'" :src="getImageUrl(ukFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ja'" :src="getImageUrl(jpFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'ko'" :src="getImageUrl(skFlag)" alt="{{ element.original_language }}">
                                <img v-else-if="element.original_language === 'zh'" :src="getImageUrl(cnFlag)" alt="{{ element.original_language }}">                
                                <img v-else :src="getFlag(index)">
                            </li>
                            <li class="list-group-item px-0">
                                {{ element.vote_average }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-small-fs {
    font-size: 0.7rem;
}
</style>
