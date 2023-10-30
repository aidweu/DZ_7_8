function ProArray(arr, opera) {
    if (typeof opera === 'function') {
        const res = arr.map(element => opera(element));
        return res;
    } else {
        throw new Error();
    }
}
const ownArray = [945, 1065, 1134, 1234, 131];
function double(element) {
    return element * 2;
}
const resArray = ProArray(ownArray, double);
console.log(resArray);