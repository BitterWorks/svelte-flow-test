import { operationStore } from "@urql/svelte";
import { CreateFruitDocument, DeleteFruitDocument, FruitDocument, FruitsDocument, UpdateFruitDocument } from "../graphql/generated/graphql";
import type { FruitsQuery, FruitQuery, Mutation } from "../graphql/generated/graphql";

class IndexStores {
    constructor (
        public fruitListStore = operationStore<FruitsQuery>(FruitsDocument),
        public updateFruitStore = operationStore<Mutation>(UpdateFruitDocument),
        public deleteFruitStore = operationStore<Mutation>(DeleteFruitDocument),
        public createFruitStore = operationStore<Mutation>(CreateFruitDocument),
        public retrieveFruitStore = operationStore<FruitQuery>(FruitDocument)
    ){};
};

export const indexStores = new IndexStores();