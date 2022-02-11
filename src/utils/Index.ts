export function filterObj<T extends Record<string, any>>(oldObj: T, newObj: T): T{
    const objArray = Object.entries(newObj);
    return Object.fromEntries(objArray.filter(([key, value])=>{
        return oldObj[key] != newObj[key]
    })) as T;
};