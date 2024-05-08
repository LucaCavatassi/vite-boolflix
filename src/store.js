import { reactive } from "vue";

export const store = reactive({
    searchQuery: "",
    moviesArray: [],
    seriesArray: []
});