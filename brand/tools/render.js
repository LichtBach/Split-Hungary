// usage: node render.js in.html out.png width height
const { chromium } = require('playwright');
(async () => {
  const [,, inp, out, w, h] = process.argv;
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  await p.goto('file://' + require('path').resolve(inp));
  await p.screenshot({ path: out });
  await b.close();
})();
