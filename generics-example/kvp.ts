export interface kvp<K, V> {
    key: K,
    value: V;
}

function createkvp<K, V>(key: K, value: V): kvp<K, V>{
    return {key, value};
}

const numberPair: kvp<string, number> = createkvp<string, number>("meaning of life", 42);

const boolPair: kvp<string, Boolean> = createkvp("knows TypeScript", true);

const boolPairs :kvp<string, Boolean>[] = [
    { key: "knows security", value: true}, 
    { key: "knows Python", value: true}, 
    { key: "knows C#", value: true}
];

for(var pair of boolPairs){
    console.log(pair.key + ": " + pair.value);
}