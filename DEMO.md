# Deno demo 🤟

## Hello world demo

From terminal:

```js
console.log('Hello world!')
```

From URL:

```sh
deno run https://raw.githubusercontent.com/bolzon/deno-handson/main/samples/hello.ts
```

> **Module cache:** modules imported in deno are cached such as `<script>` tag in browser.

## Fetch demo

Access to network needs explicit permission (`--allow-net`).

```sh
deno run --allow-net <script>
```

Demos:
- [promise fetch](./samples/fetch-promise.ts)
- [async/await fetch](./samples/fetch-async.ts)
- [mixed fetch](./samples/fetch-mixed.ts)
