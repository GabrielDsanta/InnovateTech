import { FilterObject } from "types";


export const filterTrueValues = (obj: FilterObject) => {
    const result: any = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = filterTrueValues(obj[key]);
        } else if (obj[key] === true) {
            result[key] = obj[key];
        }
    }
    return result;
}