export function filterObj(oldObj: any, newObj: any): any{
    const objArray = Object.entries(newObj)
    return Object.fromEntries(objArray.filter(([key, value])=>{
        return oldObj[key] != newObj[key]
    }));
};