#!/bin/bash

echo 'start dev'

deno run \
  --allow-read \
  --allow-write \
  --allow-run \
  --allow-env \
  ./scripts/dev.ts
