!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){const n=r(1),o=r(2),i=r(3),a=r(4);e.exports=Object.assign(n,o,i,a)},function(e,t){e.exports={deleteEmptyProperty(e={}){let t={};return Object.entries(e).map(e=>{(e[1]||0===e[1]||!1===e[1])&&(t[e[0]]=e[1])}),t},filterPropertyByKey(e,t=[]){let r={};return Object.entries(e).map(e=>{-1!==t.indexOf(e[0])&&(r[e[0]]=e[1])}),r},obj2url(e={}){let t="";return Object.keys(e).map(r=>{t+=`${r}=${encodeURIComponent(e[r])}&`}),t.slice(0,t.length-1)},noPoundUrl:(e=location.href)=>-1===e.indexOf("#")?e:e.slice(0,e.indexOf("#")),url2obj(e=location.href){if(-1===e.indexOf("?"))return{};const t=(e=noPoundUrl(e)).slice(e.indexOf("?")+1).split("&");if(!t.length)return{};let r={};return t.map(e=>{let t=e.split("=");r[t[0]]=t[1]}),r}}},function(e,t){e.exports={hasSpecialChar:(e="")=>!/^[^`~!@$%&*?<>/\\|=+^{}\[\]\'\"【】‘’￥——、，。；：？《》！]*$/i.test(e),hasSqlChar:(e="")=>/(\band\b)|(\bor\b)|(\bDELETE\b)|(\bUPDATE\b)|(\bINSERT\b)|(\bEXEC\b)|(\bEXECUTE\b)|(\blike\b)|(\bselect\b)|(\bset\b)|(\bcreate\b)|(\btable\b)|(\bexec\b)|(\bdeclare\b)|(\bmaster\b)|(\bbackup\b)|(\bmid\b)|(\bcount\b)|(\badd\b)|(\balter\b)|(\bdrop\b)|(\bfrom\b)|(\btruncate\b)|(\bunion\b)|(\bjoin\b)|(\script\b)|(\balert\b)|(\blink\b)/gi.test(e),hasCnChar:(e="")=>/[\u4E00-\u9FA5]/g.test(e)}},function(e,t){e.exports={isMobile(){const e=navigator.userAgent,t={mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1};return t.mobile||t.ios||t.android||t.iPhone||t.iPad},isWX(){const e=navigator.userAgent;return-1!==e.indexOf("MicroMessenger")&&-1===e.indexOf("wxwork")},isWXWork(){const e=navigator.userAgent;return-1!==e.indexOf("MicroMessenger")&&-1!==e.indexOf("wxwork")},isChrome:()=>-1!==navigator.userAgent.indexOf("Chrome")}},function(e,t){e.exports={getStorage(e){if(!localStorage||!localStorage.getItem)return!1;{let t=localStorage.getItem(e);if(!t)return"";try{return JSON.parse(t)}catch(e){return t}}},setStorage(e,t){localStorage&&localStorage.setItem&&("String"===checkDataType(t)?localStorage.setItem(e,t):localStorage.setItem(e,JSON.stringify(t)))},downloadBlob(e,t="下载文件"){const r=checkDataType(e);if("Blob"!==r)return Promise.reject({type:r,message:"文件不是blob类型"});try{if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(e,t);else{let r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=t,r.click(),URL.revokeObjectURL(e)}return Promise.resolve()}catch(e){return Promise.reject(e)}}}}])}));