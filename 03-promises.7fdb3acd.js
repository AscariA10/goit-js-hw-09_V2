!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i=document.querySelector(".form"),c=(document.querySelector('[type="submit"]'),document.querySelector('[name="delay"]')),l=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault(),function(n){Number(c.value);for(var o=0;o<a.value;o+=1)d(o,Number(l.value)*o).then((function(o){var t=o.position,r=o.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(Number(r)+Number(n),"ms")),e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(Number(r)+Number(n),"ms"))})).catch((function(o){var t=o.position,r=o.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(Number(r)+Number(n),"ms")),e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(Number(r)+Number(n),"ms"))}))}(c.value)}))}();
//# sourceMappingURL=03-promises.7fdb3acd.js.map