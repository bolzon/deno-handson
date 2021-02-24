
const url = 'https://api.github.com/users/bolzon';

function promiseFetch() {
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json));
}

promiseFetch();
