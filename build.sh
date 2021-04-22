#!/bin/bash

echo "-----------------------"
echo "---- Build start ------"
echo "-----------------------"

uname -a
pwd

echo $HOME

# Install Deno
curl -fsSL https://deno.land/x/install/install.sh | sh

export DENO_INSTALL="/$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

echo "Node version:"
node -v
echo "Deno version:"
deno -v

node ./replaceBaseUrl.js
