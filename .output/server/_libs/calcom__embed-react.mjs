import "./react.mjs";
const b = "https://app.cal.com/embed/embed.js";
function m(s = b) {
  (function(r, e, l) {
    let t = function(n, i) {
      n.q.push(i);
    }, o = r.document;
    r.Cal = r.Cal || function() {
      let n = r.Cal, i = arguments;
      if (n.loaded || (n.ns = {}, n.q = n.q || [], o.head.appendChild(o.createElement("script")).src = e, n.loaded = true), i[0] === l) {
        const u = function() {
          t(u, arguments);
        }, c = i[1];
        u.q = u.q || [], typeof c == "string" ? (n.ns[c] = n.ns[c] || u, t(n.ns[c], i), t(n, ["initNamespace", c])) : t(n, i);
        return;
      }
      t(n, i);
    };
  })(
    window,
    //! Replace it with "https://cal.com/embed.js" or the URL where you have embed.js installed
    s,
    "init"
  );
  return window.Cal;
}
function j(s) {
  const r = {}, { namespace: e = "", embedJsUrl: l } = r;
  return new Promise(function t(o) {
    const n = m(l);
    n("init", e);
    const i = e ? n.ns[e] : n;
    if (!i) {
      setTimeout(() => {
        t(o);
      }, 50);
      return;
    }
    o(i);
  });
}
export {
  j
};
