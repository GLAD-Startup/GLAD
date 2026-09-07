globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"1748-XT/jTFv4rG4thtFgvDHHC4ryyjw"',
    "mtime": "2026-08-19T11:33:38.368Z",
    "size": 5960,
    "path": "../public/llms.txt"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"46-JOPc60eGiSAZf6rJ9iaOY6gLynU"',
    "mtime": "2026-07-16T06:10:09.848Z",
    "size": 70,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"12e8-lTCb4jmC/EyFyFs7mTEcTqbYpH4"',
    "mtime": "2026-08-19T11:33:29.649Z",
    "size": 4840,
    "path": "../public/sitemap.xml"
  },
  "/assets/about-BycVrSUV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ba2-0cBDN4znnCR9ZY4vEweC0ZzESWc"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 7074,
    "path": "../public/assets/about-BycVrSUV.js"
  },
  "/assets/activity-C79O75el.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"eb-bdago8CDb6kdiyEhaH8p6WA4teY"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 235,
    "path": "../public/assets/activity-C79O75el.js"
  },
  "/OG-IMAGE-README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": '"325-flnPKnoF5CWieDrCRH7MC5PtEVk"',
    "mtime": "2026-07-27T07:19:24.283Z",
    "size": 805,
    "path": "../public/OG-IMAGE-README.md"
  },
  "/assets/69e06961fb9d36867dfcedd7_Lead enrichment_2-x_yqjVBt.png": {
    "type": "image/png",
    "etag": '"2fcb7-OzMHV8KDznF+A571HReiP0pBqGU"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 195767,
    "path": "../public/assets/69e06961fb9d36867dfcedd7_Lead enrichment_2-x_yqjVBt.png"
  },
  "/assets/arrow-right-8j_O0Lam.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-OOR32VTQcweJUaax7exCEc6y2Us"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 166,
    "path": "../public/assets/arrow-right-8j_O0Lam.js"
  },
  "/assets/Background-qgmnwmVv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"127-JY8UIMM/+PTylsLWZ6qnFxEMUt8"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 295,
    "path": "../public/assets/Background-qgmnwmVv.js"
  },
  "/assets/bot-oba_dLrw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"149-iwhTR4Faqrp9V500wH6lTaaTXwE"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 329,
    "path": "../public/assets/bot-oba_dLrw.js"
  },
  "/assets/boolean-CQ8vrikg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ba6a-1arC6ClXhHI5AMmAsXvTtbEiwng"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 47722,
    "path": "../public/assets/boolean-CQ8vrikg.js"
  },
  "/assets/arjun-BFzGCJqP.jpg": {
    "type": "image/jpeg",
    "etag": '"3293c-SwRjUCSbk7aQexpB3d9cbk2KpTw"',
    "mtime": "2026-08-19T12:03:25.497Z",
    "size": 207164,
    "path": "../public/assets/arjun-BFzGCJqP.jpg"
  },
  "/assets/brain-circuit-B1fEayQ2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"31c-q0WI9dV6T/lrw0OywfyZoMj1vlE"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 796,
    "path": "../public/assets/brain-circuit-B1fEayQ2.js"
  },
  "/assets/chevron-right-DWKimMGv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-E8zpRgnlKmilJy6zaUgPFc5GpaQ"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 131,
    "path": "../public/assets/chevron-right-DWKimMGv.js"
  },
  "/assets/circle-alert-DV78lPCp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1cc-SV/wfEhdH1rMZZG+gz3ZnODPvlc"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 460,
    "path": "../public/assets/circle-alert-DV78lPCp.js"
  },
  "/assets/circle-check-B_VBRbia.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-sYHOQX4I0zTGQa/tdzwqWLepRG4"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 174,
    "path": "../public/assets/circle-check-B_VBRbia.js"
  },
  "/assets/clock-Dd0AnE5d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-Y1VjtDKCkIuWVen+UVKPVJNTkug"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 165,
    "path": "../public/assets/clock-Dd0AnE5d.js"
  },
  "/assets/contact-CfY6aCsQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2176-DIBXbffJ5UxgUyq3ZFVWJ/DbjuI"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 8566,
    "path": "../public/assets/contact-CfY6aCsQ.js"
  },
  "/assets/broker-deal-DPRxkxSs.png": {
    "type": "image/png",
    "etag": '"b1813-+QdbB5RN0XL+jeUgLDU1IjbFNq0"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 727059,
    "path": "../public/assets/broker-deal-DPRxkxSs.png"
  },
  "/assets/broker-office-DImFY2A3.png": {
    "type": "image/png",
    "etag": '"b5b86-DckCg7RcurJCiefXnjMhcy4LMk0"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 744326,
    "path": "../public/assets/broker-office-DImFY2A3.png"
  },
  "/assets/commission-3d-ZUpOZV7W.png": {
    "type": "image/png",
    "etag": '"bacc1-PKTqkWkOAWM7OAmBFxjd0dOObTk"',
    "mtime": "2026-08-19T12:03:25.528Z",
    "size": 765121,
    "path": "../public/assets/commission-3d-ZUpOZV7W.png"
  },
  "/assets/Commission Plans_ Built Your Way-D_Ns3U6f.mp4": {
    "type": "video/mp4",
    "etag": '"f130e-2lOoyWbNoHpn7nrhViKQBlkcB8g"',
    "mtime": "2026-08-19T12:03:25.528Z",
    "size": 987918,
    "path": "../public/assets/Commission Plans_ Built Your Way-D_Ns3U6f.mp4"
  },
  "/assets/AI mock interview-DHQBk4T4.png": {
    "type": "image/png",
    "etag": '"1d7715-OZRe2ZHXnvXVn8bz+u/ZaxmZ5aM"',
    "mtime": "2026-08-19T12:03:25.540Z",
    "size": 1931029,
    "path": "../public/assets/AI mock interview-DHQBk4T4.png"
  },
  "/assets/cpu-C1JmkbCi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"283-dSE+jxqMGxzX04M16c8G6KISRgQ"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 643,
    "path": "../public/assets/cpu-C1JmkbCi.js"
  },
  "/assets/eye-B4kY3mLn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-tU+Mc5VjCjEiix4VETTkltW2BbU"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 252,
    "path": "../public/assets/eye-B4kY3mLn.js"
  },
  "/assets/earth travels-B5fc4b3f.png": {
    "type": "image/png",
    "etag": '"1eaa7-kXJgx8t1kFqPKEvzVkL6k3qlaJg"',
    "mtime": "2026-08-19T12:03:25.503Z",
    "size": 125607,
    "path": "../public/assets/earth travels-B5fc4b3f.png"
  },
  "/assets/data-enrichment-to-enhance-your-decision-making-DxW_UL0g.jpg": {
    "type": "image/jpeg",
    "etag": '"aa42-2qMkXY7IyaqRfGg1LyUS2Mfr7qw"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 43586,
    "path": "../public/assets/data-enrichment-to-enhance-your-decision-making-DxW_UL0g.jpg"
  },
  "/assets/database-TodO4IEi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f4-PHS7VdSxXfEyB/ehv20JJ9unpEc"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 244,
    "path": "../public/assets/database-TodO4IEi.js"
  },
  "/assets/Fluxor thumbnail-Bj0BfSWR.jpeg": {
    "type": "image/jpeg",
    "etag": '"8a16-QJDk9eN7npane3kQx0dmSNwAJ4Q"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 35350,
    "path": "../public/assets/Fluxor thumbnail-Bj0BfSWR.jpeg"
  },
  "/assets/fluxor description page-kcaxZI7E.jpeg": {
    "type": "image/jpeg",
    "etag": '"4ea7c-zsqxy04Znz6Hnx6yDKpsDgQDhSk"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 322172,
    "path": "../public/assets/fluxor description page-kcaxZI7E.jpeg"
  },
  "/assets/Footer-MQDiLiET.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"627e-f6p0UccHif/kr1HVCzow0yogl1I"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 25214,
    "path": "../public/assets/Footer-MQDiLiET.js"
  },
  "/assets/gaussian-splat-compression-CH16aANn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14262-kYEc6jswHQTVhs9Rmxx1xW57fG4"',
    "mtime": "2026-08-19T12:03:25.526Z",
    "size": 82530,
    "path": "../public/assets/gaussian-splat-compression-CH16aANn.js"
  },
  "/assets/HandDrawnHighlights-ChsGgGVQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"893-vShPUTqLeurEnZjt26S7c30bUBo"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 2195,
    "path": "../public/assets/HandDrawnHighlights-ChsGgGVQ.js"
  },
  "/assets/gla canteen-DH4yp7f-.png": {
    "type": "image/png",
    "etag": '"1a53f-VzqvEavWty9mKaYXsrUy6WMpbko"',
    "mtime": "2026-08-19T12:03:25.505Z",
    "size": 107839,
    "path": "../public/assets/gla canteen-DH4yp7f-.png"
  },
  "/assets/graphic-design-building-architecture-creative-city-building-vector copy-gJSqopFM.png": {
    "type": "image/png",
    "etag": '"33744-mlpq3kpQya1uVp+ip9zmWgyi1eU"',
    "mtime": "2026-08-19T12:03:25.499Z",
    "size": 210756,
    "path": "../public/assets/graphic-design-building-architecture-creative-city-building-vector copy-gJSqopFM.png"
  },
  "/assets/ai mock interview features-CH8-CWCB.png": {
    "type": "image/png",
    "etag": '"219e0a-/Axhwwo2JSnqvKlV4xFUglT6cxE"',
    "mtime": "2026-08-19T12:03:25.544Z",
    "size": 2203146,
    "path": "../public/assets/ai mock interview features-CH8-CWCB.png"
  },
  "/assets/corporate-server-K2LnUUom.png": {
    "type": "image/png",
    "etag": '"eb641-E7E22ECNah7aqFri2wfFW+Vsy9U"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 964161,
    "path": "../public/assets/corporate-server-K2LnUUom.png"
  },
  "/assets/howler-DHAH-4g0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"699e-wVD+lqePUe886HjqnMRzR2k+TCM"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 27038,
    "path": "../public/assets/howler-DHAH-4g0.js"
  },
  "/assets/hotel-building-Lw3H1hBm.png": {
    "type": "image/png",
    "etag": '"9d5c0-4xAA1jdGrPRxfewmhC1tfS+kZXE"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 644544,
    "path": "../public/assets/hotel-building-Lw3H1hBm.png"
  },
  "/assets/index-mU_a7zbB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"41f37-VziqeKfGN/gX77RAnOeJKTvHfYQ"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 270135,
    "path": "../public/assets/index-mU_a7zbB.js"
  },
  "/assets/hero-3d-BRE9eg6M.png": {
    "type": "image/png",
    "etag": '"13376c-BxMjwKb5q92KXCnI1s7aAHQLDHY"',
    "mtime": "2026-08-19T12:03:25.536Z",
    "size": 1259372,
    "path": "../public/assets/hero-3d-BRE9eg6M.png"
  },
  "/assets/insights-DYGt3Dn5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-KvY0qzHmvC7LcXZtD41S3S86iu0"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 179,
    "path": "../public/assets/insights-DYGt3Dn5.js"
  },
  "/assets/hotel-building-transparent-_0q7hCej.png": {
    "type": "image/png",
    "etag": '"13fb8f-A9AXTATr4Gz7SV2sI7+ktyT/q4s"',
    "mtime": "2026-08-19T12:03:25.536Z",
    "size": 1309583,
    "path": "../public/assets/hotel-building-transparent-_0q7hCej.png"
  },
  "/assets/insights.ai-agent-vs-chatbot-DWHqjE6C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4fdb-J7M1s7dpkZIppUOdNNaC8KKciz8"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 20443,
    "path": "../public/assets/insights.ai-agent-vs-chatbot-DWHqjE6C.js"
  },
  "/assets/insights.how-to-build-ai-agent-for-business-TnIZqaWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4288-zaNXOPZBrFCDdIYrt9TWEpJV/yU"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 17032,
    "path": "../public/assets/insights.how-to-build-ai-agent-for-business-TnIZqaWH.js"
  },
  "/assets/insights.ai-development-cost-india-CLlgA6h7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5897-/Pcv5gHpRyhTp7+MDvbPnCsk3lQ"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 22679,
    "path": "../public/assets/insights.ai-development-cost-india-CLlgA6h7.js"
  },
  "/assets/insights.index-C2knq2xo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2caa-VIDDSnqnKnOS+AcEyiS72mOPbSc"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 11434,
    "path": "../public/assets/insights.index-C2knq2xo.js"
  },
  "/assets/insights.rag-vs-fine-tuning-DaQ6rh9g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"565e-K5IwCNC8O+EA2iEFrHcGnoy/DvM"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 22110,
    "path": "../public/assets/insights.rag-vs-fine-tuning-DaQ6rh9g.js"
  },
  "/assets/lock-Bp8HsNR6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Hph2NRduyX/MyjJbaO2NYfl+7pk"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 202,
    "path": "../public/assets/lock-Bp8HsNR6.js"
  },
  "/assets/layers-BYc8CT_d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a6-SryVhykgusxu/b7EmMyvyoZdGWc"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 422,
    "path": "../public/assets/layers-BYc8CT_d.js"
  },
  "/assets/insights.what-is-ai-agent-development-BlJrFhGF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4fa6-zfj/3Yd7T43Pv9XJTVwOkmKRU4o"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 20390,
    "path": "../public/assets/insights.what-is-ai-agent-development-BlJrFhGF.js"
  },
  "/assets/jatin-dfrJlNtc.jpg": {
    "type": "image/jpeg",
    "etag": '"e9da-DRVdhCLLIAbsZsEt+mQskbE5o+o"',
    "mtime": "2026-08-19T12:03:25.499Z",
    "size": 59866,
    "path": "../public/assets/jatin-dfrJlNtc.jpg"
  },
  "/assets/logo-3K-a7pwb.png": {
    "type": "image/png",
    "etag": '"1054d-qWg71FUBWtB6yObEQjhwu4e5A2g"',
    "mtime": "2026-08-19T12:03:25.508Z",
    "size": 66893,
    "path": "../public/assets/logo-3K-a7pwb.png"
  },
  "/assets/fluxor-D6FI8UlU.png": {
    "type": "image/png",
    "etag": '"2605e5-Ykr5mOfZ79VzSyvfA5Rje3peeuc"',
    "mtime": "2026-08-19T12:03:25.544Z",
    "size": 2491877,
    "path": "../public/assets/fluxor-D6FI8UlU.png"
  },
  "/assets/message-square-c7yh9UcS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ea-q1t/J87dDM5DY7IbDpOlDXgVTIg"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 234,
    "path": "../public/assets/message-square-c7yh9UcS.js"
  },
  "/assets/every property always up to date-Ddx5LFyG.mp4": {
    "type": "video/mp4",
    "etag": '"2f5cab-h6vdzaQsZUvyuu2PhFKzwDswih4"',
    "mtime": "2026-08-19T12:03:25.546Z",
    "size": 3103915,
    "path": "../public/assets/every property always up to date-Ddx5LFyG.mp4"
  },
  "/assets/main logo-Be0UhGNI.png": {
    "type": "image/png",
    "etag": '"3b2ec-YKei8Iy9fAmr46/bJE2tbSH+49Q"',
    "mtime": "2026-08-19T12:03:25.499Z",
    "size": 242412,
    "path": "../public/assets/main logo-Be0UhGNI.png"
  },
  "/assets/luxury-villa-D0fnCdM2.png": {
    "type": "image/png",
    "etag": '"bfc44-/bbmQrzi2Elg66o9a8P5Hu7+MmI"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 785476,
    "path": "../public/assets/luxury-villa-D0fnCdM2.png"
  },
  "/assets/index-C1xfeU6C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20063b-tVktjdVqvEx9nJgZl8CRQBDLUpc"',
    "mtime": "2026-08-19T12:03:25.546Z",
    "size": 2098747,
    "path": "../public/assets/index-C1xfeU6C.js"
  },
  "/assets/navmesh-B1pUQaZh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d734-5YJAKhCl+xQvyvFhoto8rpuMCas"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 55092,
    "path": "../public/assets/navmesh-B1pUQaZh.js"
  },
  "/assets/inventory management-CPHe_RYF.png": {
    "type": "image/png",
    "etag": '"177a2c-uhlLorDqXRzNw/i0EDE/fVkNK/M"',
    "mtime": "2026-08-19T12:03:25.534Z",
    "size": 1538604,
    "path": "../public/assets/inventory management-CPHe_RYF.png"
  },
  "/assets/modern-office-facade-D8XTQ7N3.png": {
    "type": "image/png",
    "etag": '"f83ca-mv0qPfsNwgrJmaFLsPAYwjbJIfw"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 1016778,
    "path": "../public/assets/modern-office-facade-D8XTQ7N3.png"
  },
  "/assets/opentype-U-0Y99ve.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a5d9-qoLVjvfDPRn8MtmEA3+wf8vjfHs"',
    "mtime": "2026-08-19T12:03:25.526Z",
    "size": 173529,
    "path": "../public/assets/opentype-U-0Y99ve.js"
  },
  "/assets/parth-tENvKlx_.jpeg": {
    "type": "image/jpeg",
    "etag": '"12a29-BN47HpvTbDR1CzJOQWx1XvvXyE8"',
    "mtime": "2026-08-19T12:03:25.499Z",
    "size": 76329,
    "path": "../public/assets/parth-tENvKlx_.jpeg"
  },
  "/assets/portfolio._slug-DfM2xkh4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"209-lCnM7pM2c026R3PZ3TxCwZ7Y1as"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 521,
    "path": "../public/assets/portfolio._slug-DfM2xkh4.js"
  },
  "/assets/portfolio-fQzJ6H4t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-2f+ew3u/KNmn0ES+OLEjSezyy9g"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 179,
    "path": "../public/assets/portfolio-fQzJ6H4t.js"
  },
  "/assets/portfolio.index-UUXYTkiA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"66f-E+pJDj7H1tFlr/U7VcFgLFmZSTc"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 1647,
    "path": "../public/assets/portfolio.index-UUXYTkiA.js"
  },
  "/assets/phone-3d-CKioiVNo.png": {
    "type": "image/png",
    "etag": '"775b3-LeurXPgHOj8Se92oTnsJy9NOswU"',
    "mtime": "2026-08-19T12:03:25.507Z",
    "size": 488883,
    "path": "../public/assets/phone-3d-CKioiVNo.png"
  },
  "/assets/portfolio._slug-BOxXvfI6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14fa-vkMsFlUnYiIEHzOfh6/dXGHyIU8"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 5370,
    "path": "../public/assets/portfolio._slug-BOxXvfI6.js"
  },
  "/assets/prayas app-DcHIGv-3.jpeg": {
    "type": "image/jpeg",
    "etag": '"5bcaa-M9K98H7xyZHmRJ8Qhe/3u/8CYmg"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 375978,
    "path": "../public/assets/prayas app-DcHIGv-3.jpeg"
  },
  "/assets/prayas thumbnail-pDPy7P7L.jpeg": {
    "type": "image/jpeg",
    "etag": '"8fa2-sMkZdA2jH62zB8WnGdDEZBmcKTg"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 36770,
    "path": "../public/assets/prayas thumbnail-pDPy7P7L.jpeg"
  },
  "/assets/prayas-tmiAi3Db.jpg": {
    "type": "image/jpeg",
    "etag": '"4e3b-sj6QCKsDh72gi+8HLZ4omA5dBRw"',
    "mtime": "2026-08-19T12:03:25.505Z",
    "size": 20027,
    "path": "../public/assets/prayas-tmiAi3Db.jpg"
  },
  "/assets/process-CfeF_z8L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128e-U//EaNZKUsG/BzP522Kno1M89DA"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 4750,
    "path": "../public/assets/process-CfeF_z8L.js"
  },
  "/assets/privacy-CuJxx1UN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4416-LAURj5H9W1UfI2RgKSNF35/kCJE"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 17430,
    "path": "../public/assets/privacy-CuJxx1UN.js"
  },
  "/assets/products-CDycm57g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-KvY0qzHmvC7LcXZtD41S3S86iu0"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 179,
    "path": "../public/assets/products-CDycm57g.js"
  },
  "/assets/building-BSYQeUHI.png": {
    "type": "image/png",
    "etag": '"6889ed-ai6HpVFuHxCccAuxSDqsQK1ctyE"',
    "mtime": "2026-08-19T12:03:25.555Z",
    "size": 6851053,
    "path": "../public/assets/building-BSYQeUHI.png"
  },
  "/assets/process-DGQPpdwV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e824-1d0OpVWCbfZNF9PKFEo10laUzKI"',
    "mtime": "2026-08-19T12:03:25.524Z",
    "size": 59428,
    "path": "../public/assets/process-DGQPpdwV.js"
  },
  "/assets/products.glad-hms-CeB0Wnvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1820-kAjG8yaN3ncnDVyKnXazi0m6j/U"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 6176,
    "path": "../public/assets/products.glad-hms-CeB0Wnvb.js"
  },
  "/assets/prayas-CbWxZAML.png": {
    "type": "image/png",
    "etag": '"17f97f-73gr4bHYk4OtrPJGxsv1l+EpyB0"',
    "mtime": "2026-08-19T12:03:25.534Z",
    "size": 1571199,
    "path": "../public/assets/prayas-CbWxZAML.png"
  },
  "/assets/products.index-BVfHFg4N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e6d-/tPGM4c1sdVZr1254uN4lJgXWaQ"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 3693,
    "path": "../public/assets/products.index-BVfHFg4N.js"
  },
  "/assets/products.settledesk-iDcds7TV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5836-xyarxDJDE55gpu3E9txT8EdpOUs"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 22582,
    "path": "../public/assets/products.settledesk-iDcds7TV.js"
  },
  "/assets/ProductWorkflowSequence-Cs3jWFOd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8f6b-IZWorc5w4ci94WDW5W/FpHywe7I"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 36715,
    "path": "../public/assets/ProductWorkflowSequence-Cs3jWFOd.js"
  },
  "/assets/physics-ChHD2_fM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e53e8-H1ZzQWxZQ5wTFHGQ8bSQWakvN2g"',
    "mtime": "2026-08-19T12:03:25.544Z",
    "size": 1987560,
    "path": "../public/assets/physics-ChHD2_fM.js"
  },
  "/assets/ProjectCard-w6SIlYdO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"65a-SPU7a8u+8l2uOOJhExNSjTChC3Y"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 1626,
    "path": "../public/assets/ProjectCard-w6SIlYdO.js"
  },
  "/assets/reddit-logo-lIbvNdkx.png": {
    "type": "image/png",
    "etag": '"483f-pTnaU8thNRBE6i1rwiQ4V8+cKAo"',
    "mtime": "2026-08-19T12:03:25.507Z",
    "size": 18495,
    "path": "../public/assets/reddit-logo-lIbvNdkx.png"
  },
  "/assets/rocket-C0zUkezm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c0-1r39fFvh4EcL2dUlqxNj6ZBUjVw"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 448,
    "path": "../public/assets/rocket-C0zUkezm.js"
  },
  "/assets/RetroDecorations-CJXLZg1W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f-Q1quEFsY7CeCKY4fCZzgBhoEF4o"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 2623,
    "path": "../public/assets/RetroDecorations-CJXLZg1W.js"
  },
  "/assets/properties-3d-j-KAGaJN.png": {
    "type": "image/png",
    "etag": '"b469a-zKN2kZcHWRRq2z5ytJy3iRKevc4"',
    "mtime": "2026-08-19T12:03:25.528Z",
    "size": 738970,
    "path": "../public/assets/properties-3d-j-KAGaJN.png"
  },
  "/assets/Reveal-DXK0sh1P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42e-sn0BtxaexssRikGS2HsS2G17oGI"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 1070,
    "path": "../public/assets/Reveal-DXK0sh1P.js"
  },
  "/assets/SectionHeading-CKWgIsKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"250-GG7TW/VfsnxL2ECAa6U+pNsBxuI"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 592,
    "path": "../public/assets/SectionHeading-CKWgIsKK.js"
  },
  "/assets/search-DugOVj7u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-tGN9eiZpGpnf4aSAYeOCNEB+SZo"',
    "mtime": "2026-08-19T12:03:25.520Z",
    "size": 170,
    "path": "../public/assets/search-DugOVj7u.js"
  },
  "/assets/real-estate-app-sPOET7gf.png": {
    "type": "image/png",
    "etag": '"a7770-hLGEBEA/d84Up6SQHe6q7TpuNH0"',
    "mtime": "2026-08-19T12:03:25.528Z",
    "size": 685936,
    "path": "../public/assets/real-estate-app-sPOET7gf.png"
  },
  "/assets/server-BYmwiAYR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-7IbaEw+oBczDwuVGSfJwKiov/mM"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 339,
    "path": "../public/assets/server-BYmwiAYR.js"
  },
  "/assets/services-D4L08MvY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b3-bDAMjXAeARbKYMSoVCa8ByHOw+A"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 179,
    "path": "../public/assets/services-D4L08MvY.js"
  },
  "/assets/real-estate-contract-DMLba1LR.png": {
    "type": "image/png",
    "etag": '"ae1ae-xt2rsDNaoHxx3yePjCE0ogLjULk"',
    "mtime": "2026-08-19T12:03:25.528Z",
    "size": 713134,
    "path": "../public/assets/real-estate-contract-DMLba1LR.png"
  },
  "/assets/services.ai-solutions-CI5zrbty.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"680e-AdmKg6SG8Ac+Y8nPEJwdq6Gvwls"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 26638,
    "path": "../public/assets/services.ai-solutions-CI5zrbty.js"
  },
  "/assets/services.business-automation-YmhePDb_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5836-0RNUUwQ//stkvmjNkowT5sG1jBs"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 22582,
    "path": "../public/assets/services.business-automation-YmhePDb_.js"
  },
  "/assets/services.index-Bas7jPYS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"154a-ZInNsbpbJYB6d+W07W/WNcS1QCU"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 5450,
    "path": "../public/assets/services.index-Bas7jPYS.js"
  },
  "/assets/services.mobile-app-development-CVt2zXnr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5164-HVHDZds3fxRkM4ETkipC7R+88tU"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 20836,
    "path": "../public/assets/services.mobile-app-development-CVt2zXnr.js"
  },
  "/assets/services.mvp-development-BBnOpoza.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fbc-VP9zwv0hNr/QdxiW0/bxNV0sF7E"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 24508,
    "path": "../public/assets/services.mvp-development-BBnOpoza.js"
  },
  "/assets/services.web-application-development-sWyssVrW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"52e1-zVlscOHCJxZDxVWKCjuQIzXzXlI"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 21217,
    "path": "../public/assets/services.web-application-development-sWyssVrW.js"
  },
  "/assets/lead_enrichment thumbnail-wpBN0uQR.png": {
    "type": "image/png",
    "etag": '"51d102-0VEXjGtJWm4hecBWtcAWGbLOUdM"',
    "mtime": "2026-08-19T12:03:25.554Z",
    "size": 5361922,
    "path": "../public/assets/lead_enrichment thumbnail-wpBN0uQR.png"
  },
  "/assets/shield-V0mA-_hJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10c-FttIxLlSVA1dzONL6158izpMDnQ"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 268,
    "path": "../public/assets/shield-V0mA-_hJ.js"
  },
  "/assets/qsafe thumbnail-DachXH5B.png": {
    "type": "image/png",
    "etag": '"1e2e20-CbwwSKfXPCHFmBvTCVMXYGrGyQ8"',
    "mtime": "2026-08-19T12:03:25.540Z",
    "size": 1977888,
    "path": "../public/assets/qsafe thumbnail-DachXH5B.png"
  },
  "/assets/One Source of Truth. Every Device-Dd3_5J_D.mp4": {
    "type": "video/mp4",
    "etag": '"4ba232-RKBLPsLv70ZxPLxfcpkhguBuULw"',
    "mtime": "2026-08-19T12:03:25.552Z",
    "size": 4956722,
    "path": "../public/assets/One Source of Truth. Every Device-Dd3_5J_D.mp4"
  },
  "/assets/smartphone-UZv8lGqA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c6-O3y/f9Fi/6kRQ0O3RyaQaKr2FzA"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 198,
    "path": "../public/assets/smartphone-UZv8lGqA.js"
  },
  "/assets/sparkles-BErL5VZH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-Dm4Zo0JmiWwRimBZd/CRpVKDWKI"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 495,
    "path": "../public/assets/sparkles-BErL5VZH.js"
  },
  "/assets/somesh-C5qpQn3V.jpeg": {
    "type": "image/jpeg",
    "etag": '"f5a2-0rO7RFOfGrxc+zI4kGCEX5PYtfc"',
    "mtime": "2026-08-19T12:03:25.499Z",
    "size": 62882,
    "path": "../public/assets/somesh-C5qpQn3V.jpeg"
  },
  "/assets/StickerBoard-ybVlmYS3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a6-YBy6XPlsyWOB7uQw62gF1RFsnt8"',
    "mtime": "2026-08-19T12:03:25.516Z",
    "size": 6566,
    "path": "../public/assets/StickerBoard-ybVlmYS3.js"
  },
  "/assets/styles-BsS43On_.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2a0e0-bjssoMvkbCgHrW9sbTVZvIIF/hc"',
    "mtime": "2026-08-19T12:03:25.512Z",
    "size": 172256,
    "path": "../public/assets/styles-BsS43On_.css"
  },
  "/assets/terms-vAnXudx6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3b64-Cnd2WaiMo726NWHmDEaZ7yHRcDY"',
    "mtime": "2026-08-19T12:03:25.512Z",
    "size": 15204,
    "path": "../public/assets/terms-vAnXudx6.js"
  },
  "/assets/Top-Must-Have-Features-of-AI-Powered-Interview-Platforms-wj3iomG3.webp": {
    "type": "image/webp",
    "etag": '"1cc58-LBKyPtpk2uVxU1vj9lvkpjjZgB8"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 117848,
    "path": "../public/assets/Top-Must-Have-Features-of-AI-Powered-Interview-Platforms-wj3iomG3.webp"
  },
  "/assets/skyscraper-sunset-CrHOTkVq.png": {
    "type": "image/png",
    "etag": '"f7f85-dYD3lfjWWb6aMPf2x7KNVG/XVng"',
    "mtime": "2026-08-19T12:03:25.530Z",
    "size": 1015685,
    "path": "../public/assets/skyscraper-sunset-CrHOTkVq.png"
  },
  "/assets/Top-Secure-File-Transfer-Software-Solutions-6A438_NR.webp": {
    "type": "image/webp",
    "etag": '"5dee-QlcEsKUE4YE8OQX87dIUbcsoBAw"',
    "mtime": "2026-08-19T12:03:25.503Z",
    "size": 24046,
    "path": "../public/assets/Top-Secure-File-Transfer-Software-Solutions-6A438_NR.webp"
  },
  "/assets/user-check-DnJuliKQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef-tPpxhmmTNlCz3btUen/Fl3o9hoc"',
    "mtime": "2026-08-19T12:03:25.518Z",
    "size": 239,
    "path": "../public/assets/user-check-DnJuliKQ.js"
  },
  "/assets/ui-tt1i-6fZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"160ef-MWqyIhDKZ3F8CfLQ9hE/C22wJg4"',
    "mtime": "2026-08-19T12:03:25.526Z",
    "size": 90351,
    "path": "../public/assets/ui-tt1i-6fZ.js"
  },
  "/assets/unified-inventory-management-9BiLb9tE.webp": {
    "type": "image/webp",
    "etag": '"b1ca-LPCRSvObGT33UF6sexiYkpMsV0w"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 45514,
    "path": "../public/assets/unified-inventory-management-9BiLb9tE.webp"
  },
  "/assets/vendor-motion-DbU40YvZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21343-VdtrPP5I4wmR2lwZAfLcxUN3ics"',
    "mtime": "2026-08-19T12:03:25.512Z",
    "size": 136003,
    "path": "../public/assets/vendor-motion-DbU40YvZ.js"
  },
  "/assets/vendor-radix-B0LXvYrL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"36c1-rZtiPL83cz3Eb4O2sH4KOxAuJS4"',
    "mtime": "2026-08-19T12:03:25.514Z",
    "size": 14017,
    "path": "../public/assets/vendor-radix-B0LXvYrL.js"
  },
  "/assets/vendor-react-CwsuuxOG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f20c-3NexIoKfnJ+Q1YsVSUGdzgBwhM4"',
    "mtime": "2026-08-19T12:03:25.512Z",
    "size": 193036,
    "path": "../public/assets/vendor-react-CwsuuxOG.js"
  },
  "/assets/website logo(black background compatible)-Bq-8sqRq.png": {
    "type": "image/png",
    "etag": '"ce57-ptD5k4EWB3/Qxo0HFBBcT7dpTcc"',
    "mtime": "2026-08-19T12:03:25.505Z",
    "size": 52823,
    "path": "../public/assets/website logo(black background compatible)-Bq-8sqRq.png"
  },
  "/assets/website logo(white background compatible)-yVaQ6gea.png": {
    "type": "image/png",
    "etag": '"161b6-LyHDr1yNEHzhrymsumbZKSWG/Y4"',
    "mtime": "2026-08-19T12:03:25.505Z",
    "size": 90550,
    "path": "../public/assets/website logo(white background compatible)-yVaQ6gea.png"
  },
  "/assets/What_Is_an_Inventory_Management_Dashboard_6db2051190-BbBxOF4H.jpg": {
    "type": "image/jpeg",
    "etag": '"2bffa-vpnNI3qkWwj2SIYANJPGSikyakI"',
    "mtime": "2026-08-19T12:03:25.501Z",
    "size": 180218,
    "path": "../public/assets/What_Is_an_Inventory_Management_Dashboard_6db2051190-BbBxOF4H.jpg"
  },
  "/assets/workflow-sYczmEsk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10a-LfYut6wm5qwGrmqbh98IYnMUvy8"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 266,
    "path": "../public/assets/workflow-sYczmEsk.js"
  },
  "/assets/zap-CKcTjv9A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-0A/UqlPebRtER8tyAnXysxHVhRc"',
    "mtime": "2026-08-19T12:03:25.522Z",
    "size": 263,
    "path": "../public/assets/zap-CKcTjv9A.js"
  },
  "/assets/q safe-DhXUGyv4.png": {
    "type": "image/png",
    "etag": '"416b5a-RWnsL0jobokWq3GUJa4lzpVD6KA"',
    "mtime": "2026-08-19T12:03:25.550Z",
    "size": 4287322,
    "path": "../public/assets/q safe-DhXUGyv4.png"
  },
  "/assets/stock management thumbnail-CG4yAm2_.png": {
    "type": "image/png",
    "etag": '"1edc2e-HKRnaG7eabUnjgb0uL4ShkgS1Hw"',
    "mtime": "2026-08-19T12:03:25.540Z",
    "size": 2022446,
    "path": "../public/assets/stock management thumbnail-CG4yAm2_.png"
  },
  "/assets/Orange Simple People Bridge Logo (3)-BFzEhgdq.mp4": {
    "type": "video/mp4",
    "etag": '"b46212-zTSx9RVwDps7SwqByHXrq5w8WgI"',
    "mtime": "2026-08-19T12:03:25.559Z",
    "size": 11821586,
    "path": "../public/assets/Orange Simple People Bridge Logo (3)-BFzEhgdq.mp4"
  },
  "/assets/From Submitted to Sold_ Automatically-DzR5P17_.mp4": {
    "type": "video/mp4",
    "etag": '"112f8ff-X1om6xIuZkfLZJN/DCJ+bX5AWmA"',
    "mtime": "2026-08-19T12:03:25.568Z",
    "size": 18020607,
    "path": "../public/assets/From Submitted to Sold_ Automatically-DzR5P17_.mp4"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _Yd9JgA = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_bFYmkz = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_bFYmkz };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_Yd9JgA)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 4001 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
