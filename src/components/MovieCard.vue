<script>
import { store } from "/src/store.js"

export default {
    data() {
        return {
            store,

        }
    },

    methods: {
        getFlag(index) {
            return "https://flagcdn.com/16x12/" + this.store.moviesArray[index].original_language + ".png"
        },

        getImageUrl(name) {
            return new URL(`../src/assets/${name}.png`, import.meta.url).href
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
                            <li class="list-group-item px-0">
                                <img :src="getFlag(index)">
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
