function solve(array1, array2){
    let store = {};
    for(let i = 0; i < array1.length; i+=2){
        store[array1[i]] = Number(array1[i + 1]);
    }
    for(let i = 0; i < array2.length; i+= 2){
        if(array2[i] in store)
        store[array2[i]] = store[array2[i]] + Number(array2[i+1]);
        else{
            store[array2[i]] = Number(array2[i+1]);
        }
    }
    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}
