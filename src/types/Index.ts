export interface Fruit {
    name:   string,
    color?: string,
    amount: number,
    id:     number
};
export interface FruitsQuery<T> {
    fruits: T
};