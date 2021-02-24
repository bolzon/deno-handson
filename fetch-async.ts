
const url = 'https://api.github.com/users/bolzon';

async function asyncFetch() {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
}

asyncFetch();
