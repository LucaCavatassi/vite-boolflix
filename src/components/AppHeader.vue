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
        <input type="text" id="searchQuery" v-model="this.store.searchQuery">
        <label for="searchQuery"></label>
        <button @click="$emit('search')" type="button">Cerca</button>
    </div>

</template>

<style>

</style>
