// deno-lint-ignore-file

function checkIfHostIsCorrect() {
  const host = document.location.host;
  return host === 'www.oskarlindgren.se'
}

function checkIsBot() {
  const userAgent = navigator.userAgent.toLowerCase()

  const isGoogleBot = userAgent.includes('googlebot')
  const isBingBot = userAgent.includes('bingbot')
  const isYahooBot = userAgent.includes('slurp')
  const isDuckDuckBot = userAgent.includes('duckduckbot')
  const isChineseBot = userAgent.includes('spider')
  const isYandexBot = userAgent.includes('yandexbot')
  const isAlexaBot = userAgent.includes('ia_archiver')
  const isFacebookBot = userAgent.includes('facebot') || userAgent.includes('facebookexternalhit')

  const isBot = isGoogleBot
    || isBingBot
    || isYahooBot
    || isDuckDuckBot
    || isChineseBot
    || isYandexBot
    || isAlexaBot
    || isFacebookBot;

  return isBot;
}

function initFathom(f, a, t, h, o, m) {
  a[h]=a[h]||function(){
    (a[h].q=a[h].q||[]).push(arguments)
  };
  o=f.createElement('script'),
  m=f.getElementsByTagName('script')[0];
  o.async=1; o.src=t; o.id='fathom-script';
  m.parentNode.insertBefore(o,m)
}

function trackPageView() {
  initFathom(document, window, '//monitor.oskarlindgren.se/tracker.js', 'fathom');
  fathom('set', 'siteId', 'NYKME');
  fathom('trackPageview');
}

function init() {
  const hostOk = checkIfHostIsCorrect()
  if (!hostOk) {
    return;
  }

  const isBot = checkIsBot();
  if (isBot) {
    return;
  }

  trackPageView();
}
init();
