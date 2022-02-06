import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

class IndexStore {
    constructor (
        public fruitListQuery = writable()
    ){};

    refetchQuery(store: Writable<any>, gql: any){
        // store.set();
    };
};

export const indexStore = new IndexStore();