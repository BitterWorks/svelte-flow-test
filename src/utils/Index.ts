import type { Fruit } from "../graphql/generated/graphql"; 

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

export function filterObj(oldObj: any, newObj: any): any{
    const objArray = Object.entries(newObj)
    return Object.fromEntries(objArray.filter(([key, value])=>{
        return oldObj[key] != newObj[key]
    }));
};