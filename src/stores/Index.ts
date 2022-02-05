import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { subscribe } from "svelte-apollo";
import { GET_FRUITS } from "../graphql/operations/Index";

class IndexStore {
    constructor (
        public fruitListQuery = writable()
    ){};

    refetchQuery(store: Writable<any>, gql: any){
        // store.set();
    };
};

export const indexStore = new IndexStore();