function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){t[e]=o},o.parcelRequired7c6=n);var u=n("eWCmQ");const i=document.querySelector(".form"),l=(document.querySelector('[type="submit"]'),document.querySelector('[name="delay"]')),d=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]');function m(e,o){const r=Math.random()>.3;return new Promise(((t,n)=>{setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.addEventListener("submit",(o=>{o.preventDefault(),function(o){let r=Number(l.value);for(let t=0;t<s.value;t+=1)m(t,r=Number(d.value)*t).then((({position:r,delay:t})=>{console.log(`✅ Fulfilled promise ${r} in ${Number(t)+Number(o)}ms`),e(u).Notify.success(`✅ Fulfilled promise ${r} in ${Number(t)+Number(o)}ms`)})).catch((({position:r,delay:t})=>{console.log(`❌ Rejected promise ${r} in ${Number(t)+Number(o)}ms`),e(u).Notify.failure(`❌ Rejected promise ${r} in ${Number(t)+Number(o)}ms`)}))}(l.value)}));
//# sourceMappingURL=03-promises.9766a37d.js.map