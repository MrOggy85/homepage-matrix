# Matrix style Homepage
Just a simple nice, looking profile page with Matrix style scrolling text in the background.

The script is stolen from a random place online and is not very performant.
I tried to tweak it a bit and ended up just making it a bit slower and smaller,
but at least it wont make your computer too hot and not crash your phone.

You can find it at: https://www.oskarlindgren.se/matrix/

## Screenshot
![Screenshot](./screenshot.png)

## Development

### Requirements
Make sure you have [Deno](https://deno.land/) installed, which is used for the local dev build.
```sh
# Shell (Mac, Linux)
curl -fsSL https://deno.land/x/install/install.sh | sh
export DENO_INSTALL="/$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```
You will also need [Deno file_server](https://deno.land/manual/examples/file_server) for the local dev http server.
```sh
deno install --allow-net --allow-read https://deno.land/std@0.94.0/http/file_server.ts
```
### Usage
```sh
./dev.sh
```

## Deployment / Build
Make sure you set environment variable `BASE_URL` if you are deplying to a subroute.<br />
E.g. If you are supposed to reach this website under: https://www.oskarlindgren.se/matrix/<br />
Then you need to set `BASE_URL=/matrix`

```sh
./build.sh
```
