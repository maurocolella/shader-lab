!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r;e.exports=function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var f="function"==typeof r&&r;if(!s&&f)return r(a,!0);if(u)return u(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n||e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var u="function"==typeof r&&r,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){(function(r,o,i,u,a,s,f,c,l){"use strict";function d(e,t){return t=h(e,t),function(e,t){var n;if(void 0===(n="passthrough"!==t.algorithm?w.createHash(t.algorithm):new y).write&&(n.write=n.update,n.end=n.update),g(t,n).dispatch(e),n.update||n.end(""),n.digest)return n.digest("buffer"===t.encoding?void 0:t.encoding);var r=n.read();return"buffer"===t.encoding?r:r.toString(t.encoding)}(e,t)}function h(e,t){if((t=t||{}).algorithm=t.algorithm||"sha1",t.encoding=t.encoding||"hex",t.excludeValues=!!t.excludeValues,t.algorithm=t.algorithm.toLowerCase(),t.encoding=t.encoding.toLowerCase(),t.ignoreUnknown=!0===t.ignoreUnknown,t.respectType=!1!==t.respectType,t.respectFunctionNames=!1!==t.respectFunctionNames,t.respectFunctionProperties=!1!==t.respectFunctionProperties,t.unorderedArrays=!0===t.unorderedArrays,t.unorderedSets=!1!==t.unorderedSets,t.unorderedObjects=!1!==t.unorderedObjects,t.replacer=t.replacer||void 0,t.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var n=0;n<b.length;++n)b[n].toLowerCase()===t.algorithm.toLowerCase()&&(t.algorithm=b[n]);if(-1===b.indexOf(t.algorithm))throw new Error('Algorithm "'+t.algorithm+'"  not supported. supported values: '+b.join(", "));if(-1===v.indexOf(t.encoding)&&"passthrough"!==t.algorithm)throw new Error('Encoding "'+t.encoding+'"  not supported. supported values: '+v.join(", "));return t}function p(e){return"function"==typeof e&&null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function g(e,t,n){n=n||[];var r=function(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")};return{dispatch:function(t){e.replacer&&(t=e.replacer(t));var n=typeof t;return null===t&&(n="null"),this["_"+n](t)},_object:function(t){var o=Object.prototype.toString.call(t),u=/\[object (.*)\]/i.exec(o);u=(u=u?u[1]:"unknown:["+o+"]").toLowerCase();var a=null;if((a=n.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+a+"]");if(n.push(t),void 0!==i&&i.isBuffer&&i.isBuffer(t))return r("buffer:"),r(t);if("object"===u||"function"===u){var s=Object.keys(t);e.unorderedObjects&&(s=s.sort()),!1===e.respectType||p(t)||s.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(s=s.filter(function(t){return!e.excludeKeys(t)})),r("object:"+s.length+":");var f=this;return s.forEach(function(n){f.dispatch(n),r(":"),e.excludeValues||f.dispatch(t[n]),r(",")})}if(!this["_"+u]){if(e.ignoreUnknown)return r("["+u+"]");throw new Error('Unknown object type "'+u+'"')}this["_"+u](t)},_array:function(t,o){o=void 0!==o?o:!1!==e.unorderedArrays;var i=this;if(r("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var u=[],a=t.map(function(t){var r=new y,o=n.slice(),i=g(e,r,o);return i.dispatch(t),u=u.concat(o.slice(n.length)),r.read().toString()});return n=n.concat(u),a.sort(),this._array(a,!1)},_date:function(e){return r("date:"+e.toJSON())},_symbol:function(e){return r("symbol:"+e.toString())},_error:function(e){return r("error:"+e.toString())},_boolean:function(e){return r("bool:"+e.toString())},_string:function(e){r("string:"+e.length+":"),r(e)},_function:function(t){r("fn:"),p(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r("number:"+e.toString())},_xml:function(e){return r("xml:"+e.toString())},_null:function(){return r("Null")},_undefined:function(){return r("Undefined")},_regexp:function(e){return r("regex:"+e.toString())},_uint8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return r("url:"+e.toString())},_map:function(t){r("map:");var n=Array.from(t);return this._array(n,!1!==e.unorderedSets)},_set:function(t){r("set:");var n=Array.from(t);return this._array(n,!1!==e.unorderedSets)},_blob:function(){if(e.ignoreUnknown)return r("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return r("domwindow")},_process:function(){return r("process")},_timer:function(){return r("timer")},_pipe:function(){return r("pipe")},_tcp:function(){return r("tcp")},_udp:function(){return r("udp")},_tty:function(){return r("tty")},_statwatcher:function(){return r("statwatcher")},_securecontext:function(){return r("securecontext")},_connection:function(){return r("connection")},_zlib:function(){return r("zlib")},_context:function(){return r("context")},_nodescript:function(){return r("nodescript")},_httpparser:function(){return r("httpparser")},_dataview:function(){return r("dataview")},_signal:function(){return r("signal")},_fsevent:function(){return r("fsevent")},_tlswrap:function(){return r("tlswrap")}}}function y(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}var w=e("crypto");(n=t.exports=d).sha1=function(e){return d(e)},n.keys=function(e){return d(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(e){return d(e,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(e){return d(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var b=w.getHashes?w.getHashes().slice():["sha1","md5"];b.push("passthrough");var v=["buffer","hex","binary","base64"];n.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),g(t=h(e,t),n).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_5f1a2fc7.js","/")},{buffer:3,crypto:5,lYpoI2:10}],2:[function(e,t,n){(function(e,t,r,o,i,u,a,s,f){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===r||t===s?62:t===o||t===f?63:t<i?-1:t<i+10?t-i+26+26:t<a+26?t-a:t<u+26?t-u+26:void 0}var n="undefined"!=typeof Uint8Array?Uint8Array:Array,r="+".charCodeAt(0),o="/".charCodeAt(0),i="0".charCodeAt(0),u="a".charCodeAt(0),a="A".charCodeAt(0),s="-".charCodeAt(0),f="_".charCodeAt(0);e.toByteArray=function(e){function r(e){f[l++]=e}var o,i,u,a,s,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=e.length;s="="===e.charAt(c-2)?2:"="===e.charAt(c-1)?1:0,f=new n(3*e.length/4-s),u=s>0?e.length-4:e.length;var l=0;for(o=0,i=0;o<u;o+=4,i+=3)r((16711680&(a=t(e.charAt(o))<<18|t(e.charAt(o+1))<<12|t(e.charAt(o+2))<<6|t(e.charAt(o+3))))>>16),r((65280&a)>>8),r(255&a);return 2===s?r(255&(a=t(e.charAt(o))<<2|t(e.charAt(o+1))>>4)):1===s&&(r((a=t(e.charAt(o))<<10|t(e.charAt(o+1))<<4|t(e.charAt(o+2))>>2)>>8&255),r(255&a)),f},e.fromByteArray=function(e){function t(e){return c.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,u=e.length%3,a="";for(r=0,i=e.length-u;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(u){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}}(void 0===n?this.base64js={}:n)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:10}],3:[function(e,t,n){(function(t,r,o,i,u,a,s,f,c){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r,i,u,a=typeof e;if("base64"===t&&"string"===a)for(e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e);e.length%4!=0;)e+="=";if("number"===a)r=j(e);else if("string"===a)r=o.byteLength(e,t);else{if("object"!==a)throw new Error("First argument needs to be a number, array or string.");r=j(e.length)}if(o._useTypedArrays?i=o._augment(new Uint8Array(r)):((i=this).length=r,i._isBuffer=!0),o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(function(e){return C(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}(e))for(u=0;u<r;u++)o.isBuffer(e)?i[u]=e.readUInt8(u):i[u]=e[u];else if("string"===a)i.write(e,0,t);else if("number"===a&&!o._useTypedArrays&&!n)for(u=0;u<r;u++)i[u]=0;return i}function l(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var u=t.length;D(u%2==0,"Invalid hex string"),r>u/2&&(r=u/2);for(var a=0;a<r;a++){var s=parseInt(t.substr(2*a,2),16);D(!isNaN(s),"Invalid hex string"),e[n+a]=s}return o._charsWritten=2*a,a}function d(e,t,n,r){var i=o._charsWritten=N(M(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=N(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r);return i}function p(e,t,n,r){var i=o._charsWritten=N(T(t),e,n,r);return i}function g(e,t,n,r){var i=o._charsWritten=N(function(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}(t),e,n,r);return i}function y(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function w(e,t,n,r){r||(D("boolean"==typeof n,"missing or invalid endian"),D(void 0!==t&&null!==t,"missing offset"),D(t+1<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(t>=i))return n?(o=e[t],t+1<i&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<i&&(o|=e[t+1])),o}function b(e,t,n,r){r||(D("boolean"==typeof n,"missing or invalid endian"),D(void 0!==t&&null!==t,"missing offset"),D(t+3<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(t>=i))return n?(t+2<i&&(o=e[t+2]<<16),t+1<i&&(o|=e[t+1]<<8),o|=e[t],t+3<i&&(o+=e[t+3]<<24>>>0)):(t+1<i&&(o=e[t+1]<<16),t+2<i&&(o|=e[t+2]<<8),t+3<i&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function v(e,t,n,r){r||(D("boolean"==typeof n,"missing or invalid endian"),D(void 0!==t&&null!==t,"missing offset"),D(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=w(e,t,n,!0),u=32768&i;return u?-1*(65535-i+1):i}}function m(e,t,n,r){r||(D("boolean"==typeof n,"missing or invalid endian"),D(void 0!==t&&null!==t,"missing offset"),D(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=b(e,t,n,!0),u=2147483648&i;return u?-1*(4294967295-i+1):i}}function _(e,t,n,r){return r||(D("boolean"==typeof n,"missing or invalid endian"),D(t+3<e.length,"Trying to read beyond buffer length")),X.read(e,t,n,23,4)}function I(e,t,n,r){return r||(D("boolean"==typeof n,"missing or invalid endian"),D(t+7<e.length,"Trying to read beyond buffer length")),X.read(e,t,n,52,8)}function E(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,2);u<a;u++)e[n+u]=(t&255<<8*(r?u:1-u))>>>8*(r?u:1-u)}function A(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,4);u<a;u++)e[n+u]=t>>>8*(r?u:3-u)&255}function B(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+1<e.length,"Trying to write beyond buffer length"),O(t,32767,-32768));var i=e.length;n>=i||E(e,t>=0?t:65535+t+1,n,r,o)}function x(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+3<e.length,"Trying to write beyond buffer length"),O(t,2147483647,-2147483648));var i=e.length;n>=i||A(e,t>=0?t:4294967295+t+1,n,r,o)}function L(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+3<e.length,"Trying to write beyond buffer length"),P(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||X.write(e,t,n,r,23,4)}function S(e,t,n,r,o){o||(D(void 0!==t&&null!==t,"missing value"),D("boolean"==typeof r,"missing or invalid endian"),D(void 0!==n&&null!==n,"missing offset"),D(n+7<e.length,"Trying to write beyond buffer length"),P(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||X.write(e,t,n,r,52,8)}function U(e,t,n){return"number"!=typeof e?n:(e=~~e)>=t?t:e>=0?e:(e+=t)>=0?e:0}function j(e){return(e=~~Math.ceil(+e))<0?0:e}function C(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function M(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}}return t}function T(e){return K.toByteArray(e)}function N(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function F(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){D("number"==typeof e,"cannot write a non-number as a number"),D(e>=0,"specified a negative value for writing an unsigned value"),D(e<=t,"value is larger than maximum value for type"),D(Math.floor(e)===e,"value has a fractional component")}function O(e,t,n){D("number"==typeof e,"cannot write a non-number as a number"),D(e<=t,"value larger than maximum allowed value"),D(e>=n,"value smaller than minimum allowed value"),D(Math.floor(e)===e,"value has a fractional component")}function P(e,t,n){D("number"==typeof e,"cannot write a non-number as a number"),D(e<=t,"value larger than maximum allowed value"),D(e>=n,"value smaller than minimum allowed value")}function D(e,t){if(!e)throw new Error(t||"Failed assertion")}var K=e("base64-js"),X=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=M(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=T(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(D(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var u=e[n];u.copy(r,i),i+=u.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i,u=this.length-t;switch(n?(n=Number(n))>u&&(n=u):n=u,r=String(r||"utf8").toLowerCase()){case"hex":i=l(this,e,t,n);break;case"utf8":case"utf-8":i=d(this,e,t,n);break;case"ascii":i=h(this,e,t,n);break;case"binary":i=function(e,t,n,r){return h(e,t,n,r)}(this,e,t,n);break;case"base64":i=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=g(this,e,t,n);break;default:throw new Error("Unknown encoding")}return i},o.prototype.toString=function(e,t,n){var r,o=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=o.length)===t)return"";switch(e){case"hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=k(e[i]);return o}(o,t,n);break;case"utf8":case"utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=F(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+F(o)}(o,t,n);break;case"ascii":r=y(o,t,n);break;case"binary":r=function(e,t,n){return y(e,t,n)}(o,t,n);break;case"base64":r=function(e,t,n){return 0===t&&n===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,n))}(o,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(o,t,n);break;default:throw new Error("Unknown encoding")}return r},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){D(r>=n,"sourceEnd < sourceStart"),D(t>=0&&t<e.length,"targetStart out of bounds"),D(n>=0&&n<i.length,"sourceStart out of bounds"),D(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var u=r-n;if(u<100||!o._useTypedArrays)for(var a=0;a<u;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+u),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=U(e,n,0),t=U(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),u=0;u<r;u++)i[u]=this[u+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(D(void 0!==e&&null!==e,"missing offset"),D(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return w(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return w(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return b(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return b(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(D(void 0!==e&&null!==e,"missing offset"),D(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return m(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return m(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return _(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return _(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return I(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return I(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(D(void 0!==e&&null!==e,"missing value"),D(void 0!==t&&null!==t,"missing offset"),D(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){E(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){E(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){A(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){A(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(D(void 0!==e&&null!==e,"missing value"),D(void 0!==t&&null!==t,"missing offset"),D(t<this.length,"Trying to write beyond buffer length"),O(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){B(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){B(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){L(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){L(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),D("number"==typeof e&&!isNaN(e),"value is not a number"),D(n>=t,"end < start"),n!==t&&0!==this.length){D(t>=0&&t<this.length,"start out of bounds"),D(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=k(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var H=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=H.get,e.set=H.set,e.write=H.write,e.toString=H.toString,e.toLocaleString=H.toString,e.toJSON=H.toJSON,e.copy=H.copy,e.slice=H.slice,e.readUInt8=H.readUInt8,e.readUInt16LE=H.readUInt16LE,e.readUInt16BE=H.readUInt16BE,e.readUInt32LE=H.readUInt32LE,e.readUInt32BE=H.readUInt32BE,e.readInt8=H.readInt8,e.readInt16LE=H.readInt16LE,e.readInt16BE=H.readInt16BE,e.readInt32LE=H.readInt32LE,e.readInt32BE=H.readInt32BE,e.readFloatLE=H.readFloatLE,e.readFloatBE=H.readFloatBE,e.readDoubleLE=H.readDoubleLE,e.readDoubleBE=H.readDoubleBE,e.writeUInt8=H.writeUInt8,e.writeUInt16LE=H.writeUInt16LE,e.writeUInt16BE=H.writeUInt16BE,e.writeUInt32LE=H.writeUInt32LE,e.writeUInt32BE=H.writeUInt32BE,e.writeInt8=H.writeInt8,e.writeInt16LE=H.writeInt16LE,e.writeInt16BE=H.writeInt16BE,e.writeInt32LE=H.writeInt32LE,e.writeInt32BE=H.writeInt32BE,e.writeFloatLE=H.writeFloatLE,e.writeFloatBE=H.writeFloatBE,e.writeDoubleLE=H.writeDoubleLE,e.writeDoubleBE=H.writeDoubleBE,e.fill=H.fill,e.inspect=H.inspect,e.toArrayBuffer=H.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:11,lYpoI2:10}],4:[function(e,t,n){(function(n,r,o,i,u,a,s,f,c){var o=e("buffer").Buffer,l=4,d=new o(l);d.fill(0);var h=8;t.exports={hash:function(e,t,n,r){return o.isBuffer(e)||(e=new o(e)),function(e,t,n){for(var r=new o(t),i=n?r.writeInt32BE:r.writeInt32LE,u=0;u<e.length;u++)i.call(r,e[u],4*u,!0);return r}(t(function(e,t){if(e.length%l!=0){var n=e.length+(l-e.length%l);e=o.concat([e,d],n)}for(var r=[],i=t?e.readInt32BE:e.readInt32LE,u=0;u<e.length;u+=l)r.push(i.call(e,u));return r}(e,r),e.length*h),n,r)}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],5:[function(e,t,n){(function(t,r,o,i,u,a,s,f,c){function l(e,t){var n=w[e=e||"sha1"],r=[];return n||d("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),r.push(e),e.length,this},digest:function(e){var i=o.concat(r),u=t?function(e,t,n){o.isBuffer(t)||(t=new o(t)),o.isBuffer(n)||(n=new o(n)),t.length>b?t=e(t):t.length<b&&(t=o.concat([t,v],b));for(var r=new o(b),i=new o(b),u=0;u<b;u++)r[u]=54^t[u],i[u]=92^t[u];var a=e(o.concat([r,n]));return e(o.concat([i,a]))}(n,t,i):n(i);return r=null,e?u.toString(e):u}}}function d(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}var o=e("buffer").Buffer,h=e("./sha"),p=e("./sha256"),g=e("./rng"),y=e("./md5"),w={sha1:h,sha256:p,md5:y},b=64,v=new o(b);v.fill(0),n.createHash=function(e){return l(e)},n.createHmac=function(e,t){return l(e,t)},n.randomBytes=function(e,t){if(!t||!t.call)return new o(g(e));try{t.call(this,void 0,new o(g(e)))}catch(e){t(e)}},function(e,t){for(var n in e)t(e[n],n)}(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(e){n[e]=function(){d("sorry,",e,"is not implemented yet")}})}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:10}],6:[function(e,t,n){(function(n,r,o,i,u,a,s,f,c){function l(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var a=n,s=r,f=o,c=i;n=h(n,r,o,i,e[u+0],7,-680876936),i=h(i,n,r,o,e[u+1],12,-389564586),o=h(o,i,n,r,e[u+2],17,606105819),r=h(r,o,i,n,e[u+3],22,-1044525330),n=h(n,r,o,i,e[u+4],7,-176418897),i=h(i,n,r,o,e[u+5],12,1200080426),o=h(o,i,n,r,e[u+6],17,-1473231341),r=h(r,o,i,n,e[u+7],22,-45705983),n=h(n,r,o,i,e[u+8],7,1770035416),i=h(i,n,r,o,e[u+9],12,-1958414417),o=h(o,i,n,r,e[u+10],17,-42063),r=h(r,o,i,n,e[u+11],22,-1990404162),n=h(n,r,o,i,e[u+12],7,1804603682),i=h(i,n,r,o,e[u+13],12,-40341101),o=h(o,i,n,r,e[u+14],17,-1502002290),r=h(r,o,i,n,e[u+15],22,1236535329),n=p(n,r,o,i,e[u+1],5,-165796510),i=p(i,n,r,o,e[u+6],9,-1069501632),o=p(o,i,n,r,e[u+11],14,643717713),r=p(r,o,i,n,e[u+0],20,-373897302),n=p(n,r,o,i,e[u+5],5,-701558691),i=p(i,n,r,o,e[u+10],9,38016083),o=p(o,i,n,r,e[u+15],14,-660478335),r=p(r,o,i,n,e[u+4],20,-405537848),n=p(n,r,o,i,e[u+9],5,568446438),i=p(i,n,r,o,e[u+14],9,-1019803690),o=p(o,i,n,r,e[u+3],14,-187363961),r=p(r,o,i,n,e[u+8],20,1163531501),n=p(n,r,o,i,e[u+13],5,-1444681467),i=p(i,n,r,o,e[u+2],9,-51403784),o=p(o,i,n,r,e[u+7],14,1735328473),r=p(r,o,i,n,e[u+12],20,-1926607734),n=g(n,r,o,i,e[u+5],4,-378558),i=g(i,n,r,o,e[u+8],11,-2022574463),o=g(o,i,n,r,e[u+11],16,1839030562),r=g(r,o,i,n,e[u+14],23,-35309556),n=g(n,r,o,i,e[u+1],4,-1530992060),i=g(i,n,r,o,e[u+4],11,1272893353),o=g(o,i,n,r,e[u+7],16,-155497632),r=g(r,o,i,n,e[u+10],23,-1094730640),n=g(n,r,o,i,e[u+13],4,681279174),i=g(i,n,r,o,e[u+0],11,-358537222),o=g(o,i,n,r,e[u+3],16,-722521979),r=g(r,o,i,n,e[u+6],23,76029189),n=g(n,r,o,i,e[u+9],4,-640364487),i=g(i,n,r,o,e[u+12],11,-421815835),o=g(o,i,n,r,e[u+15],16,530742520),r=g(r,o,i,n,e[u+2],23,-995338651),n=y(n,r,o,i,e[u+0],6,-198630844),i=y(i,n,r,o,e[u+7],10,1126891415),o=y(o,i,n,r,e[u+14],15,-1416354905),r=y(r,o,i,n,e[u+5],21,-57434055),n=y(n,r,o,i,e[u+12],6,1700485571),i=y(i,n,r,o,e[u+3],10,-1894986606),o=y(o,i,n,r,e[u+10],15,-1051523),r=y(r,o,i,n,e[u+1],21,-2054922799),n=y(n,r,o,i,e[u+8],6,1873313359),i=y(i,n,r,o,e[u+15],10,-30611744),o=y(o,i,n,r,e[u+6],15,-1560198380),r=y(r,o,i,n,e[u+13],21,1309151649),n=y(n,r,o,i,e[u+4],6,-145523070),i=y(i,n,r,o,e[u+11],10,-1120210379),o=y(o,i,n,r,e[u+2],15,718787259),r=y(r,o,i,n,e[u+9],21,-343485551),n=w(n,a),r=w(r,s),o=w(o,f),i=w(i,c)}return Array(n,r,o,i)}function d(e,t,n,r,o,i){return w(function(e,t){return e<<t|e>>>32-t}(w(w(t,e),w(r,i)),o),n)}function h(e,t,n,r,o,i,u){return d(t&n|~t&r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return d(t&r|n&~r,e,t,o,i,u)}function g(e,t,n,r,o,i,u){return d(t^n^r,e,t,o,i,u)}function y(e,t,n,r,o,i,u){return d(n^(t|~r),e,t,o,i,u)}function w(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}var b=e("./helpers");t.exports=function(e){return b.hash(e,l,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],7:[function(e,t,n){(function(e,n,r,o,i,u,a,s,f){!function(){var e,n;e=function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n},this.crypto&&crypto.getRandomValues&&(n=function(e){var t=new Uint8Array(e);return crypto.getRandomValues(t),t}),t.exports=n||e}()}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],8:[function(e,t,n){(function(n,r,o,i,u,a,s,f,c){function l(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n=Array(80),r=1732584193,o=-271733879,i=-1732584194,u=271733878,a=-1009589776,s=0;s<e.length;s+=16){for(var f=r,c=o,l=i,y=u,w=a,b=0;b<80;b++){n[b]=b<16?e[s+b]:g(n[b-3]^n[b-8]^n[b-14]^n[b-16],1);var v=p(p(g(r,5),d(b,o,i,u)),p(p(a,n[b]),h(b)));a=u,u=i,i=g(o,30),o=r,r=v}r=p(r,f),o=p(o,c),i=p(i,l),u=p(u,y),a=p(a,w)}return Array(r,o,i,u,a)}function d(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function h(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function p(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function g(e,t){return e<<t|e>>>32-t}var y=e("./helpers");t.exports=function(e){return y.hash(e,l,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],9:[function(e,t,n){(function(n,r,o,i,u,a,s,f,c){var l=e("./helpers"),d=function(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n},h=function(e,t){return e>>>t|e<<32-t},p=function(e,t){return e>>>t},g=function(e,t,n){return e&t^~e&n},y=function(e,t,n){return e&t^e&n^t&n},w=function(e){return h(e,2)^h(e,13)^h(e,22)},b=function(e){return h(e,6)^h(e,11)^h(e,25)},v=function(e){return h(e,7)^h(e,18)^p(e,3)},m=function(e){return h(e,17)^h(e,19)^p(e,10)},_=function(e,t){var n,r,o,i,u,a,s,f,c,l,h=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),p=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),_=new Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var I=0;I<e.length;I+=16){n=p[0],r=p[1],o=p[2],i=p[3],u=p[4],a=p[5],s=p[6],f=p[7];for(var E=0;E<64;E++)_[E]=E<16?e[E+I]:d(d(d(m(_[E-2]),_[E-7]),v(_[E-15])),_[E-16]),c=d(d(d(d(f,b(u)),g(u,a,s)),h[E]),_[E]),l=d(w(n),y(n,r,o)),f=s,s=a,a=u,u=d(i,c),i=o,o=r,r=n,n=d(c,l);p[0]=d(n,p[0]),p[1]=d(r,p[1]),p[2]=d(o,p[2]),p[3]=d(i,p[3]),p[4]=d(u,p[4]),p[5]=d(a,p[5]),p[6]=d(s,p[6]),p[7]=d(f,p[7])}return p};t.exports=function(e){return l.hash(e,_,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],10:[function(e,t,n){(function(e,n,r,o,i,u,a,s,f){function c(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=c,e.addListener=c,e.once=c,e.off=c,e.removeListener=c,e.removeAllListeners=c,e.emit=c,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:10}],11:[function(e,t,n){(function(e,t,r,o,i,u,a,s,f){n.read=function(e,t,n,r,o){var i,u,a=8*o-r-1,s=(1<<a)-1,f=s>>1,c=-7,l=n?o-1:0,d=n?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+l],l+=d,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=r;c>0;u=256*u+e[t+l],l+=d,c-=8);if(0===i)i=1-f;else{if(i===s)return u?NaN:1/0*(h?-1:1);u+=Math.pow(2,r),i-=f}return(h?-1:1)*u*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var u,a,s,f=8*i-o-1,c=(1<<f)-1,l=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,u=c):(u=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-u))<1&&(u--,s*=2),(t+=u+l>=1?d/s:d*Math.pow(2,1-l))*s>=2&&(u++,s/=2),u+l>=c?(a=0,u=c):u+l>=1?(a=(t*s-1)*Math.pow(2,o),u+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),u=0));o>=8;e[n+h]=255&a,h+=p,a/=256,o-=8);for(u=u<<o|a,f+=o;f>0;e[n+h]=255&u,h+=p,u/=256,f-=8);e[n+h-p]|=128*g}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{buffer:3,lYpoI2:10}]},{},[1])(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t){var n=new PIXI.WebGLRenderer(1680,1050,{view:e}),r=new PIXI.Container,o=new PIXI.Container,u=new PIXI.Container,a=new PIXI.loaders.Loader,s=[],f=[],c=[],l=0,d=[];r.addChild(o),r.addChild(u);var h=function e(){n.render(r),requestAnimationFrame(e)},p=function(){var e=window.innerWidth,t=window.innerHeight,o=Math.max(e/1680,t/1050);r.scale.set(o,o),r.position.x=e-1680*o>>1,r.position.y=t-1050*o>>1,n.resize(e,t)},g=function(){l++,l%=t.length;for(var e=0;e<t.length;e++)s[e].renderable=e===l},y=function(){c[l]&&c[l].scale&&(c[l].scale.x=.16*(window.innerWidth/2-(event.x?event.x:event.clientX)),c[l].scale.y=.16*(window.innerHeight/2-(event.y?event.y:event.clientY)))},w=function(e){c[l]&&c[l].scale&&(c[l].scale.x=1*-e.beta,c[l].scale.y=1*-e.gamma)};return{init:function(){window.addEventListener("resize",p,!0),window.addEventListener("deviceorientation",w,!0),document.addEventListener("mousemove",y,!0),document.addEventListener("click",g,!0);for(var e=0;e<t.length;e++)d.push({textureKey:(0,i.default)(t[e].texture),dmapKey:(0,i.default)(t[e].dmap)}),a.add(d[e].textureKey,t[e].texture),a.add(d[e].dmapKey,t[e].dmap);a.on("progress",function(e,t){console.log(e.progress)}),a.once("complete",this.start),a.load()},start:function(){for(var n=0,r=void 0,o=void 0,i=void 0,l=void 0,g=void 0;n<t.length;n++)r=d[n],o=a.resources[r.textureKey].texture.baseTexture,i=a.resources[r.dmapKey].texture.baseTexture,l=e.width,g=e.height,s[n]=new PIXI.Sprite(a.resources[r.textureKey].texture),s[n].blendMode=PIXI.BLEND_MODES.SCREEN,s[n].scale.x=l/o.realWidth,s[n].scale.y=g/o.realHeight,u.addChild(s[n]),f[n]=new PIXI.Sprite(a.resources[r.dmapKey].texture),f[n].scale.x=l/i.realWidth,f[n].scale.y=g/i.realHeight,c[n]=new PIXI.filters.DisplacementFilter(f[n],0),s[n].filters=[c[n]],s[n].addChild(f[n]),f[n].renderable=!1;p(),requestAnimationFrame(h)},destroy:function(){window.removeEventListener("resize",p,!0),window.removeEventListener("deviceorientation",w,!0),document.removeEventListener("mousemove",y,!0),document.removeEventListener("click",g,!0),a.destroy(),u.destroy(),r.destroy(),n.destroy()}}}},function(e,t,n){"use strict";var r,o=n(1);new((r=o)&&r.__esModule?r:{default:r}).default(document.getElementById("viewport"),[{texture:"static/images/on-the-clouds.jpg",dmap:"static/images/cloud-dm.jpg"},{texture:"static/images/surf.jpg",dmap:"static/images/surf-dm.jpg"}]).init()},function(e,t,n){e.exports=n(2)}]);