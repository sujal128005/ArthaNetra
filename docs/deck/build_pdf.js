// Renders deck.html to ../ArthaNetra_Pitch_Deck.pdf
// Usage: npm i playwright && npx playwright install chromium && node build_pdf.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.join(__dirname, 'deck.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, '..', 'ArthaNetra_Pitch_Deck.pdf'),
    width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true,
  });
  await browser.close();
})();
