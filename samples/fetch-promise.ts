
const url = 'https://api.github.com/users/bolzon';

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
