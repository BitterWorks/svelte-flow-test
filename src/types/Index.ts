import type { ReadableQuery } from "svelte-apollo";

export interface Fruit {
    name:   string,
    color?: string,
    amount: number,
    id?:     number
};
interface FruitsQuery<T> {
    fruits: T
};
export type GetFruitsQuery = ReadableQuery<FruitsQuery<Fruit[]>>;