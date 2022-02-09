import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { operationStore } from "@urql/svelte";
import { FruitsDocument } from "../graphql/generated/graphql";
import type { Query } from "../graphql/generated/graphql";

class IndexStore {
    constructor (
        public fruitList = operationStore<Query>(FruitsDocument)
    ){};
};

export const indexStore = new IndexStore();