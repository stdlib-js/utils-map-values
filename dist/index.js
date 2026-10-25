"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=s(function(m,i){
var o=require('@stdlib/assert-is-function/dist'),c=require('@stdlib/assert-has-own-property/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function l(e,r){var t,u;if(typeof e!="object"||e===null)throw new TypeError(a('1VR3L',e));if(!o(r))throw new TypeError(a('1VR2H',r));t={};for(u in e)c(e,u)&&(t[u]=r(e[u],u,e));return t}i.exports=l
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
