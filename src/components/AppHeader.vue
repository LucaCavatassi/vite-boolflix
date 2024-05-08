<script>
import { store } from "/src/store.js";

export default {
    data(){
        return {
            store,
        }
    }
}

</script>

<template>
    <div>
        <input type="text" id="searchQuery" aria-label="searchQuery" v-model="this.store.searchQuery">
        <button @click="$emit('search')" type="button">Cerca</button>
    </div>

</template>

<style>

</style>
