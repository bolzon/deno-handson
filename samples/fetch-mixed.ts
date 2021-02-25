
const url = 'https://api.github.com/users/bolzon';

const json = await fetch(url).then(res => res.json());

console.log(json);
