type JSONValue3 = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue3> | JSONValue3[]

function isEmpty(obj: Obj): boolean {
    return !Object.keys(obj).length;
};