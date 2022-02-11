import { operationStore } from "@urql/svelte";
import { DeleteFruitDocument, FruitsDocument, UpdateFruitDocument } from "../graphql/generated/graphql";
import type { Query, Mutation } from "../graphql/generated/graphql";

class IndexStores {
    constructor (
        public fruitListStore = operationStore<Query>(FruitsDocument),
        public updateFruitStore = operationStore<Mutation>(UpdateFruitDocument),
        public deleteFruitStore = operationStore<Mutation>(DeleteFruitDocument)
    ){};
};

export const indexStores = new IndexStores();