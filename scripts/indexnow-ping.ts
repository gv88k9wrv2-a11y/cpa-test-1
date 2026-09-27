// IndexNow ping: submits every URL in the live sitemap to IndexNow
// (shared by Bing, Yandex, Seznam, Naver and AI engines that consume the Bing index).
// Run after publishing:  bun scripts/indexnow-ping.ts   [optional: specific URLs]
const HOST = "www.nimrodi.co.il";
const KEY = "b96942c3f69d63c3ffeb41ddd5525a25";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function sitemapUrls(): Promise<string[]> {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urls = process.argv.slice(2).length ? process.argv.slice(2) : await sitemapUrls();
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status}`);
