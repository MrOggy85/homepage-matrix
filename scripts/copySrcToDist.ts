
function replaceBaseUrl() {
  const BASE_URL = Deno.env.get('BASE_URL') || '';
  console.log(`replace all %BASEURL% with ${BASE_URL}`);
  let content = Deno.readTextFileSync('dist/index.html')
  content = content.replaceAll('%BASEURL%', BASE_URL)
  Deno.writeTextFileSync('dist/index.html', content)
}

function copySrcToDist() {
  console.log('copy /src to /dist...')
  try {
    Deno.removeSync('dist', { recursive: true });
  } catch (error) {
    console.log('dist folder does not exists. Resuming...')
  }

  Deno.mkdirSync('dist');
  const srcFolder = Deno.readDirSync('src')

  for (const file of srcFolder) {
    console.log('copy', file.name)
    Deno.copyFileSync(`src/${file.name}`, `dist/${file.name}`);
  }

  replaceBaseUrl()
}

export default copySrcToDist;
