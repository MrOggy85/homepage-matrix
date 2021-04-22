#!/bin/bash

echo "-----------------------"
echo "---- Build start ------"
echo "-----------------------"

uname -a
pwd
ls -la

echo "installing Deno..."
curl -fsSL https://deno.land/x/install/install.sh | sh

export DENO_INSTALL="/$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

echo "Node version:"
node -v
echo "Deno version:"
deno --version

echo "BASE_URL $BASE_URL"

deno run \
  --allow-read \
  --allow-write \
  --allow-env \
  ./scripts/copySrcToDist.ts

ls -la
