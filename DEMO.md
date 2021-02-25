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

Demo:
- [hello.ts](./samples/hello.ts)

## Fetch demo

Access to network needs explicit permission (`--allow-net`).

```sh
deno run --allow-net <script>
```

Demos:
- [fetch-promise.ts](./samples/fetch-promise.ts)
- [fetch-async.ts](./samples/fetch-async.ts)
- [fetch-mixed.ts](./samples/fetch-mixed.ts)

## Http server demo

How to start a simple HTTP server.

No external modules needed; uses the [Deno Standard Library](https://deno.land/std).

Demo:
- [http-server.ts](./samples/http-server.ts)

## File read demo

Read a json file in Deno.

Demo:
- [file-read.ts](./samples/file-read.ts)
