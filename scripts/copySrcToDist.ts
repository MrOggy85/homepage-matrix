
function replaceBaseUrl() {
  console.log('replaceBaseUrl...')
  const BASE_URL = Deno.env.get('BASE_URL') || ''
  let content = Deno.readTextFileSync('../dist/index.html')
  content = content.replaceAll('%BASEURL%', BASE_URL)
  Deno.writeTextFileSync('../dist/index.html', content)
}

function copySrcToDist() {
  console.log('copySrcToDist...')
  Deno.removeSync('../dist', { recursive: true });
  Deno.mkdirSync('../dist');
  const srcFolder = Deno.readDirSync('../src')

  for (const file of srcFolder) {
    console.log('copy', file.name)
    Deno.copyFileSync(`../src/${file.name}`, `../dist/${file.name}`);
  }

  replaceBaseUrl()
}

export default copySrcToDist;
