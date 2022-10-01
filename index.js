// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).mapValues=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function w(e,t){return null!=e&&v.call(e,t)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(e){var t,r,n;if(null==e)return d.call(e);r=e[_],t=w(e,_);try{e[_]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[_]=r:delete e[_],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var j=b();function h(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function S(e){return y(e)||h(e)}function E(){return new Function("return this;")()}p(S,"isPrimitive",y),p(S,"isObject",h);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof A?A:null;var P=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(O)return O;if(T)return T;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),k=P.document&&P.document.childNodes,x=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(V,"REGEXP",C);var G=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};function L(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=m(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!G(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(L));var I="function"==typeof e||"object"==typeof x||"function"==typeof k?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function M(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t){var r,n;if("object"!=typeof e||null===e)throw new TypeError(M("0kZ3X",e));if("function"!==I(t))throw new TypeError(M("0kZ2S",t));for(n in r={},e)w(e,n)&&(r[n]=t(e[n],n,e));return r}}));
//# sourceMappingURL=index.js.map
