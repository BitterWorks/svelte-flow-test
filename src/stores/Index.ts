import { query } from "svelte-apollo";
import { writable, Writable, get } from "svelte/store";
import { GET_FRUITS } from "../graphql/Queries";
import type { GetFruitsQuery } from "../types/Index";

class IndexStore {
    constructor(
        public fruitListQuery: Writable<GetFruitsQuery> = writable(),
        public timeout: Writable<boolean> = writable(false),
    ){};

    refetchQuery(): void{
        const load = async (flq: Writable<GetFruitsQuery>) => {
            const newFruits: GetFruitsQuery = await query(GET_FRUITS);
            flq.set(newFruits);
        };
        load(this.fruitListQuery);
    };

    getFruitListQuery(): GetFruitsQuery{  
        if (!get(this.timeout)){
            this.refetchQuery()
        };
        return get(this.fruitListQuery);
    };

    

    // async reloadFruits(){
    //     if(!this.timeout){
    //         const newFruits = await query(GET_FRUITS);
    //         this.fruits.set(
    //             (await newFruits.result()).data    
    //         );
    //     };
    // };
};

export const indexStore = new IndexStore();