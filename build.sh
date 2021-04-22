#!/bin/bash

echo "Node version:"
node -v
echo "Deno version:"
deno -v

node ./replaceBaseUrl.js
