
const composers = await Deno
    .readTextFile('./composers.json')
    .then(content => JSON.parse(content).composers);

console.table(composers);
