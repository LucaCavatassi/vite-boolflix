<script>
import { store } from "/src/store.js";

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <nav class="navbar bg-black fixed-top">
        <div class="container justify-content-between">
            <a class="navbar-brand fs-3" href="#">BOOLFLIX</a>
            <div class="d-flex" role="search">
                <input type="text" placeholder="Search" class="form-control me-2" id="searchQuery" aria-label="searchQuery" v-model="this.store.searchQuery">
                <button @click="$emit('search')" type="button" class="btn btn-outline-danger">Search</button>
            </div>
        </div>
    </nav>

</template>

<style scoped lang="scss">
a{
    color: #E50914;
}

.form-control:focus {
    border-color: #E50914;
    box-shadow: 0 0 10px #E50914;
}

.btn-outline-danger {
    color: #E50914;
}

.btn:hover {
    color: black;
    background-color: #E50914;
}

.navbar-brand:hover {
    text-shadow: 0 0 10px #E50914;
    transform: scale(1.1);
    transition-duration: 1s;
    color: #E50914;
}

.navbar-brand{
    font-weight: bold;
}
</style>
