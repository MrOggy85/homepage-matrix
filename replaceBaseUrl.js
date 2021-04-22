#!/bin/node

const path = require('path');
const { readFileSync, writeFileSync, existsSync } = require('fs');

const indexHtmlPath = path.resolve(__dirname, './index.html');
const result = existsSync(indexHtmlPath);
if (!result) {
  console.log('Please check file path or file exists:', indexHtmlPath);
  process.exit(1);
}

const BASE_URL = Deno.env.BASE_URL

let indexHtmlContent = readFileSync(indexHtmlPath).toString()
indexHtmlContent = indexHtmlContent.replaceAll('%BASEURL%', BASE_URL)
writeFileSync(indexHtmlPath, indexHtmlContent)
