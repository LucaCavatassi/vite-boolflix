<script>
import { store } from "/src/store.js"

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <h1 v-if="this.store.seriesArray.length > 0">Tv Series</h1>
            <div class="col d-flex justify-content-center mb-4"  v-for="element in this.store.seriesArray">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title fs-3 mb-0" >{{ element.name }}</h5>
                        <span class="my-small-fs"><i>Original Title</i></span>
                        <h6 class="card-subtitle mb-2 text-body-secondary pt-1">{{ element.original_name }}</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{ element.original_language }}</li>
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
