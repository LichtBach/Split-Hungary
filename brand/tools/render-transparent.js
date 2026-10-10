// usage: node render-transparent.js in.svg out.png size
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const [,, inp, out, size] = process.argv;
  const html = path.join(path.dirname(path.resolve(inp)), '_icon.html');
  fs.writeFileSync(html, `<html><body style="margin:0;background:transparent"><img src="${path.basename(inp)}" width="${size}" height="${size}" style="display:block"></body></html>`);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: +size, height: +size } });
  await p.goto('file://' + html);
  await p.screenshot({ path: out, omitBackground: true });
  await b.close();
  fs.unlinkSync(html);
})();
