// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).mapValues=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function _(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=_(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},j=Boolean.prototype.toString;var w=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return y(t)||h(t)}function E(){return new Function("return this;")()}p(S,"isPrimitive",y),p(S,"isObject",h);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var B=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,k=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",V);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var F="function"==typeof t||"object"==typeof k||"function"==typeof P?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function I(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e){var r,n;if("object"!=typeof t||null===t)throw new TypeError(I("0kZ3X",t));if("function"!==F(e))throw new TypeError(I("0kZ2S",e));for(n in r={},t)_(t,n)&&(r[n]=e(t[n],n,t));return r}}));
//# sourceMappingURL=index.js.map
