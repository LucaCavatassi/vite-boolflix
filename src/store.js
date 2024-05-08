import { reactive } from "vue";

export const store = reactive({
    searchQuery: "",
    moviesArray: [],
    seriesArray: []
});

// converto element.vote_average diviso due, poi gli dico se element.vote ha 1 stella mostra 1 senno 2 senno 3 etc...