
const url = 'https://api.github.com/users/bolzon';

async function mixedFetch() {
    const json = await fetch(url).then(res => res.json());
    console.log(json);
}

mixedFetch();
