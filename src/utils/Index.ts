import type { Fruit } from "../types/Index";

function toFruitFormat(item: any): Fruit{
    return {
        name: item.name,
        id: item.id,
        amount: item.amount,
        color: item.color.name
    }
};
export function toFruitArray(JSONData: any[]): Fruit[]{
    return JSONData.map((item) => toFruitFormat(item));
};