"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=s(function(p,d){
var l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),n=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-clip-index/dist'),f=require('@stdlib/blas-ext-base-dlast-index-equal/dist').ndarray;function o(a){var r,e,i,t;return i=a[0],t=a[1],r=l(a[2]),e=x(i,0),r=c(r,e),r>=e&&(r=e-1),f(r+1,v(i),u(i,0),n(i),v(t),u(t,0),n(t))}d.exports=o
});var m=q();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
