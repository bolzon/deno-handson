# Deno demo 🤟

## Hello world demo

Prints "Hello world!".

From terminal:

```js
console.log('Hello world!')
```

From URL:

```sh
deno run https://raw.githubusercontent.com/bolzon/deno-handson/main/samples/hello.ts
```

Demo:
- [hello.ts](./samples/hello.ts)

> **Module cache:** modules imported in deno are cached such as `<script>` tag in browser.

## Fetch demo

Fetch remote content in different ways.

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

Read a text file.

Access to read files needs explicit permission (`--allow-read`).

```sh
deno run --allow-read <script>
```

Demo:
- [file-read.ts](./samples/file-read.ts)

## File write demo

Write a text file.

Access to write files needs explicit permission (`--allow-write`).

```sh
deno run --allow-write <script>
```

Demo:
- [file-write.ts](./samples/file-write.ts)

## Compile scripts

Scripts can be compiled into a single executable file.

```sh
deno compile --unstable <OUT>
```

## Watch scripts

Deno has a built-in file watcher (like `nodemon`) to restart a script that was changed on disk.

```sh
deno run --watch --unstable --allow-net http-server.ts
```
