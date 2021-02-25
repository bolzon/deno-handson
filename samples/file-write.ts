
const file = './deno.txt';

await Deno.writeTextFile(file, 'Hello Deno!');

console.log(`File created: ${file}`);
