(function(){"use strict";var t,i="function"==typeof Object.defineProperties?Object.defineProperty:function(t,i,n){t!=Array.prototype&&t!=Object.prototype&&(t[i]=n.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var r;t:{var e={};try{e.__proto__={Ya:!0},r=e.Ya;break t}catch(t){}r=!1}t=r?function(t,i){if(t.__proto__=i,t.__proto__!==i)throw new TypeError(t+" is not extensible");return t}:null}var h=t;!function(t,r){if(r){var e=n;t=t.split(".");for(var h=0;h<t.length-1;h++){var o=t[h];o in e||(e[o]={}),e=e[o]}(r=r(h=e[t=t[t.length-1]]))!=h&&null!=r&&i(e,t,{configurable:!0,writable:!0,value:r})}}("Object.setPrototypeOf",function(t){return t||h}),function(t){function i(r){if(n[r])return n[r].exports;var e=n[r]={Mb:r,pb:!1,exports:{}};return t[r].call(e.exports,e,e.exports,i),e.pb=!0,e.exports}var n={};i.Ba=t,i.pa=n,i.Y=function(t,n,r){i.ma(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},i.la=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.Aa=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.J)return t;var r=Object.create(null);if(i.la(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.Y(r,e,function(i){return t[i]}.bind(null,e));return r},i.ya=function(t){var n=t&&t.J?function(){return t.default}:function(){return t};return i.Y(n,"a",n),n},i.ma=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.za="",i(i.Ca=1)}([function(t,i){function n(t){return t.trim().replace(/-/gi,"")}i.J=!0,i.ja={2:"1",3:"2",4:"3",5:"4",6:"5",7:"6",8:"7",9:"8",10:"9",11:"0",16:"q",17:"w",18:"e",19:"r",20:"t",21:"y",22:"u",23:"i",24:"o",25:"p",30:"a",31:"s",32:"d",33:"f",34:"g",35:"h",36:"j",37:"k",38:"l",44:"z",45:"x",46:"c",47:"v",48:"b",49:"n",50:"m"},i.La=function(){var t,n={};for(t in i.ja)i.ja.hasOwnProperty(t)&&(n[i.ja[t]]=parseInt(t,10));return n}(),i.ta=function(t){for(var n="",r=0;r<t.length;r++){var e=t[r];if(0===e)break;if(!(e in i.ja))return"";n+=i.ja[e]}return n},i.$a=function(t){return t.split("").map(function(t){if(void 0===(t=i.La[t]))throw Error("Undefined scan code");return t})},i.R=function(t){function i(n){return n=i.ga(n),t.O(n)?t.N(n):[]}return i.oa=t.name,i.na=t.O,t.ga?i.ga=t.ga:i.ga=n,i.ua=t.N,t.L&&(i.L=t.L),t.description&&(i.description=t.description),i}},function(t,i,n){i.J=!0;var r=n(2),e=n(3),h=document.getElementById("serial_id"),o=document.getElementById("try_this"),s=document.getElementById("dell_note"),a=document.getElementById("answer");document.getElementById("form_id").addEventListener("submit",function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.innerHTML="",0<(t=function(t){t=e.ua(t);var i={};return e.Ma.forEach(function(t){i[t.oa]=!1}),t.forEach(function(t){var n=t[0];t=t[2],i[n.oa]=!0,r.ia("event","timing_complete",{name:"bios_keygen",value:Math.round(t),event_category:n.oa})}),r.ia("event","bios_keygen",i),t}(h.value)).length?(o.style.display="",s.style.display="",function(t){var i=document.createElement("table");i.classList.add("answer_table"),t.forEach(function(t){var n=t[1],r=document.createElement("tr"),e=document.createElement("td");e.appendChild(document.createTextNode(t[0].description)),r.appendChild(e);var h=document.createElement("td");n.forEach(function(t,i){0<i&&h.appendChild(document.createElement("br")),h.appendChild(document.createTextNode(t))}),r.appendChild(h),i.appendChild(r)}),a.appendChild(i)}(t)):(o.style.display="none",s.style.display="none")},!0)},function(t,i){i.J=!0,i.ia=function(){},(t=document.createElement("script")).async=!0,t.src="https://www.googletagmanager.com/gtag/js?id=UA-116122089-1";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),window.dataLayer=window.dataLayer||[],i.ia=function(){window.dataLayer.push(arguments)},i.ia("js",new Date),i.ia("config","UA-116122089-1",{custom_map:{dimension1:"siteVersion"},transport_type:"beacon"})},function(t,i,n){i.J=!0;var r=n(4);t=n(5);var e=n(6),h=n(9),o=n(10),s=n(11),a=n(12),u=n(13),f=n(14);n=n(15),i.Ma=[t.ab,f.zb,n.yb,u.xb,e.mb,e.hb,e.gb,h.lb,h.jb,h.kb,o.nb,s.ob,a.wb,a.vb,a.tb,a.qb,a.rb,a.sb,a.ub],i.ua=function(t){return i.Ma.map(function(i){var n=r.Ka(),e=i(t);return[i,e,n=r.Ka()-n]}).filter(function(t){return void 0!==(t=t[1])&&1<=t.length})}},function(t,i){i.J=!0,t="undefined"!=typeof performance&&performance&&(t=performance.now||performance.webkitNow||performance.mozNow||performance.oNow||performance.msNow)?t.bind(performance):Date.now,i.Ka=t},function(t,i,n){function r(t,i,n){void 0===n&&(n=" "),i-=t.length;for(var r=0;r<i;r++)t=n+t;return t}function e(t,i,n){for(t=r(t.toString(),4,"0")+r(i.toString(),2,"0")+r(n.toString(),2,"0"),t=parseInt(t,16),i="",n=0;8>n;n++){var e=h[(t=33676*t+12345>>>0)>>16&31]%36;i=9<e?i+String.fromCharCode(e+55):i+String.fromCharCode(e+48)}return i}i.J=!0,t=n(0);var h=function(t,i,n){void 0===t&&(t=11),void 0===i&&(i=19),void 0===n&&(n=6);var r=[];r[0]=t+48,r[1]=i+48,r[2]=n+48,r[3]=54,r[4]=55,r[5]=56,r[6]=57;for(var e=r.reduce(function(t,i){return t+i},0),h=7;32>h;h++)e=33676*e+12345>>>0,r[h]=(e>>16&32767)%43+48;var o=t*i,s=function(t,i){for(var n,r=2,e=0;e<i;e++){n=r;for(var h=t;0<h;)h<n&&(h=(n=[n,h])[0],n=n[1]),h%=n;1!==n&&r++}return r}((t-1)*(i-1),n);return r.map(function(t){(t-=48)>=o&&(t%=o);var i=t;if(1!==s)for(var n=0;n<s-1;n++)i=t*i%o;return i})}(),o=(n=function(){for(var t=[],i=[],n=[],e=1990;2100>=e;e++)t.push(r(e.toString(),4,"0"));for(e=1;12>=e;e++)i.push(r(e.toString(),2,"0"));for(e=1;31>=e;e++)n.push(r(e.toString(),2,"0"));return[new RegExp("("+t.join("|")+")("+i.join("|")+")("+n.join("|")+")"),new RegExp("("+n.join("|")+")("+i.join("|")+")("+t.join("|")+")")]}())[0],s=n[1];i.Gb=e,i.ab=t.R({name:"asusDate",description:"ASUS (Using date)",L:["2010-02-03"],O:function(t){return 8===t.length},N:function(t){var i=[];if(o.test(t)){var n=parseInt(t.slice(0,4),10),r=parseInt(t.slice(4,6),10),h=parseInt(t.slice(6,8),10);i.push(e(n,r,h))}return s.test(t)&&(h=parseInt(t.slice(0,2),10),r=parseInt(t.slice(2,4),10),n=parseInt(t.slice(4,8),10),i.push(e(n,r,h))),i}})},function(t,i,n){function r(t){t=t.split("").map(function(t){return t.charCodeAt(0)});var i=[49,49,49,49,49];i.push(t[1]>>1),i.push(t[1]>>6|t[0]<<2),i.push(t[0]>>3);for(var n=0;8>n;n++){var r=170;8&i[n]&&(r^=t[1]),16&i[n]&&(r^=t[0]),i[n]=u[r%u.length]}return i.map(function(t){return"\01234567890-=\b\tqwertyuiop[]\rÃ¿asdfghjkl;'`Ã¿\\zxcvbnm,./".charAt(t)}).join("")}function e(t,i,n){var r,e=[];if(n===a.Z.Da){var h=[1,2,3,4];n=[4,3,2]}else h=[1,10,9,8],n=[8,9,10];for(e[0]=t[h[3]],e[1]=t[h[3]]>>5|241&(t[h[2]]>>5|t[h[2]]<<3),e[2]=t[h[2]]>>2,e[3]=t[h[2]]>>7|t[h[1]]<<1,e[4]=t[h[1]]>>4|t[h[0]]<<4,e[5]=t[1]>>1,e[6]=t[1]>>6|t[0]<<2,e[7]=t[0]>>3,e.forEach(function(t,i){e[i]=255&t}),r=void 0!==(i=f[i])?i.split("").map(function(t){return t.charCodeAt(0)}):u,i=0;8>i;i++)h=170,1&e[i]&&(h^=t[n[0]]),2&e[i]&&(h^=t[n[1]]),4&e[i]&&(h^=t[n[2]]),8&e[i]&&(h^=t[1]),16&e[i]&&(h^=t[0]),e[i]=r[h%r.length];return e}function h(t,i,n){var r;r=i===a.W.Eb?n===a.Z.Da?t+a.W.Ra:t.slice(3)+"\0\0\0"+a.W.Ra:t+i;var h,o,c=[];for(t=0;t<r.length;t++)c.push(r.charCodeAt(t));for((c=c.concat(e(c,i,n)))[23]=128,n=function(t){for(var i=t.length>>2,n=[],r=0;r<=i;r++)n[r]=t[4*r]|t[4*r+1]<<8|t[4*r+2]<<16|t[4*r+3]<<24|0;return n}(c),t=0;16>t;t++)void 0===n[t]&&(n[t]=0);return n[14]=184,h=s.cb(n,i),o=[],h.forEach(function(t){o.push(255&t),o.push(t>>8&255),o.push(t>>16&255),o.push(t>>24&255)}),function(t,i){var n=t[0]%9,r="";i=f[i];for(var e=0;16>e;e++)void 0!==i?r+=i.charAt(t[e]%i.length):n<=e&&8>r.length&&(r+="\01234567890-=\b\tqwertyuiop[]\rÃ¿asdfghjkl;'`Ã¿\\zxcvbnm,./".charAt(u[t[e]%u.length]));return r}(n=o,i)}function o(t){for(var i in t=t.toUpperCase(),a.W)if(t===a.W[i])return!0;return!1}i.J=!0,t=n(0);var s=n(7),a=n(8);i.W=a.W,i.Z=a.Z;var u=[5,16,19,9,50,3,37,17,31,23,6,21,48,25,38,34,10,2,44,47,22,20,7,24,36,35,49,32,30,8,45,33,4,11,18,46],f={"2A7B":"012345679abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0","1F5A":"012345679abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0","1D3B":"0BfIUG1kuPvc8A9Nl5DLZYSno7Ka6HMgqsJWm65yCQR94b21OTp7VFX2z0jihE33d4xtrew0","1F66":"0ewr3d4xtUG1ku0BfIp7VFb21OTSno7KDLZYqsJWa6HMgCQR94m65y9Nl5Pvc8AjihE3X2z0","6FF1":"08rptBxfbGVMz38IiSoeb360MKcLf4QtBCbWVzmH5wmZUcRR5DZG2xNCEv1nFtzsZB2bw1X0",BF97:"0Q2drGk99rkQFMxN[Z5y3DGr16h638myIL2rzz2pzcU7JWLJ1EGnqRN4seZPRM2aBXIjbkGZ"};i.Hb=e,i.Qb=h,i.mb=t.R({name:"dellHDDOld",description:"Dell HDD Serial Number (old)",L:["12345678901"],O:function(t){return 11===t.length},N:function(t){return[r(t)]}}),i.hb=t.R({name:"dellTag",description:"Dell from serial number",L:["1234567-595B","1234567-1D3B"],O:function(t){return 11===t.length&&o(t.slice(7,11))},N:function(t){return[h(t.slice(0,7),t.slice(7,11).toUpperCase(),a.Z.Da)]}}),i.gb=t.R({name:"dellHddNew",description:"Dell from hdd serial number",L:["1234567890A-595B"],O:function(t){return 15===t.length&&o(t.slice(11,15))},N:function(t){return[h(t.slice(0,11),t.slice(11,15).toUpperCase(),a.Z.Cb)]}})},function(t,i){function n(t,i){return(t>>>0)/Math.pow(2,32-i)|t>>>0<<i|0}function r(t,i,n){return(n^i)&t^n}function e(t,i,n){return(t^i)&n^i}function h(t,i,n){return i^t^n}function o(t,i,n){return(t|~n)^i}function s(t,i){return t+i|0}function a(t,i){return t-i|0}function u(t,i,n){return r(t,i,~n)}function f(t,i,n){return~i^t^n}function c(t,i,n){return(~t|~n)^i}var l=this&&this.Fb||function(){function t(i,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})(i,n)}return function(i,n){function r(){this.constructor=i}t(i,n),i.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();i.J=!0;var p=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745].map(function(t){return 0|t}),d=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,3654602809,3873151461,530742520,3299628645,681279174,3936430074,3572445317,76029189,2763975236,1272893353,4139469664,3200236656,4294588738,2272392833,1839030562,4259657740,4149444226,3174756917,718787259,3951481745,1873313359,4264355552,2734768916,1309151649,1700485571,2399980690,4293915773,2240044497,4096336452,1126891415,2878612391,4237533241].map(function(t){return 0|t}),g=[[7,12,17,22],[5,9,14,20],[4,11,16,23],[6,10,15,21]],v=[1732584193,-271733879,-1732584194,271733878],b=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ra=s,i.$=r,i.aa=e,i.ba=h,i.ca=o,i}return l(i,t),i}(t=function(){function t(t){this.ra=a,this.$=u,this.aa=e,this.ba=f,this.ca=c,this.ka=p,this.Fa=t,this.G=v.slice(),this.H=this.G[0],this.B=this.G[1],this.C=this.G[2],this.D=this.G[3]}return t.prototype.F=function(t,i,n){return t=t(this.B,this.C,this.D),this.H+this.ra(t,this.ka[n]+this.Fa[i])|0},t.prototype.da=function(){var t=this;this.G[0]+=this.H,this.G[1]+=this.B,this.G[2]+=this.C,this.G[3]+=this.D,this.G.forEach(function(i,n){t.G[n]=0|i})},t.prototype.ha=function(){for(var t=0,i=0;64>i;i++){switch(i>>4){case 0:t=this.F(this.$,15&i,i);break;case 1:t=this.F(this.aa,5*i+1&15,i);break;case 2:t=this.F(this.ba,3*i+5&15,i);break;case 3:t=this.F(this.ca,7*i&15,i)}this.H=this.D,this.D=this.C,this.C=this.B,this.B=n(t,g[i>>4][3&i])+this.B|0}this.da()},t.prototype.result=function(){return this.G.map(function(t){return(0|t)>>>0})},t.encode=function(t){return(t=new this(t)).ha(),t.result()},t}()),m=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return l(i,t),i.prototype.ha=function(){for(var i=0;21>i;i++)this.H|=151,this.B^=8,this.C|=1616929121-i,this.D^=1347424272+i,t.prototype.ha.call(this)},i}(t),w=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ka=d,i}return l(i,t),i.prototype.ha=function(){for(var t=0,i=0;17>i;i++){this.H|=1048727,this.B^=655368,this.C|=1616929121-i,this.D^=1347424272+i;for(var r=0;64>r;r++){switch(r>>4){case 0:t=this.F(this.$,15&r,r+16|0);break;case 1:t=this.F(this.aa,5*r+1&15,r+32|0);break;case 2:t=this.F(this.ba,3*r+5&15,r-2*(12&r)+12);break;case 3:t=this.F(this.ca,7*r&15,2*(3&r)-(15&r)+12)}this.H=this.D,this.D=this.C,this.C=this.B,this.B=n(t,g[r>>4][3&r])+this.B|0}this.da()}for(i=0;21>i;i++){for(this.H|=151,this.B^=8,this.C|=1347424272-i,this.D^=1616929121+i,r=0;64>r;r++){switch(r>>4){case 0:t=this.F(this.ba,3*r+5&15,2*(3&r)-r+44);break;case 1:t=this.F(this.ca,7*r&15,2*(3&r)-r+76);break;case 2:t=this.F(this.$,15&r,15&r|0);break;case 3:t=this.F(this.aa,5*r+1&15,r-32|0)}var e=2+(r>>4);this.H=this.D,this.D=this.C,this.C=this.B,this.B=n(t,g[3&e][3&r])+this.B|0}this.da()}},i}(t),y=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ka=d,i.Ea=23,i}return l(i,t),i.prototype.ha=function(){for(var t=0,i=0;i<this.Ea;i++){this.H|=10518679,this.B^=167840008,this.C|=1616929121-i,this.D^=1347424272+i;for(var r=0;64>r;r++){var e=(15&r)-((12&r)<<1)+12;switch(r>>4){case 0:t=this.F(this.$,15&r,r+32|0);break;case 1:t=this.F(this.aa,5*r+1&15,15&r|0);break;case 2:t=this.F(this.ba,3*r+5&15,e+16|0);break;case 3:t=this.F(this.ca,7*r&15,e+48|0)}this.H=this.D,this.D=this.C,this.C=this.B,this.B=n(t,g[r>>4][3&r])+this.B|0}this.da()}for(i=0;17>i;i++){for(this.H|=1048727,this.B^=655368,this.C|=1347424272-i,this.D^=1616929121+i,r=0;64>r;r++){switch(e=(15&r)-((12&r)<<1)+12,r>>4){case 0:t=this.F(this.ba,3*(15&r)+5&15,e+16);break;case 1:t=this.F(this.ca,7*(3&r)+(12&r)+4&15,32+(15&r));break;case 2:t=this.F(this.$,15&e,e);break;case 3:t=this.F(this.aa,5*(15&r)+1&15,48+(15&r))}e=2+(r>>4),this.H=this.D,this.D=this.C,this.C=this.B,this.B=n(t,g[3&e][3&r])+this.B|0}this.da()}},i}(t),A={"595B":t,"2A7B":t,A95B:t,"1D3B":m,D35B:b,"1F66":w,"6FF1":y,"1F5A":function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ka=d,i}return l(i,t),i.prototype.da=function(){var t=this;this.G[0]+=this.B,this.G[1]+=this.C,this.G[2]+=this.H,this.G[3]+=this.D,this.G.forEach(function(i,n){t.G[n]=0|i})},i.prototype.F=function(t,i,n){return t=t(this.C,this.H,this.D),this.B+this.ra(t,this.ka[n]+this.Fa[i])|0},i.prototype.ha=function(){for(var t=0,i=0;5>i;i++){for(var r=0;64>r;r++){var e=12+(3&r)-(12&r);switch(r>>4){case 0:t=this.F(this.$,15&r,r);break;case 1:t=this.F(this.aa,5*r+1&15,r);break;case 2:t=this.F(this.ba,3*r+5&15,e+32);break;case 3:t=this.F(this.ca,7*r&15,e+48)}this.B=this.D,this.D=this.H,this.H=this.C,this.C=n(t,g[r>>4][3&r])+this.C|0}this.da()}},i}(t),BF97:function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.Ea=31,i}return l(i,t),i}(y)};i.cb=function(t,i){return A[i].encode(t)}},function(t,i){var n;i.J=!0,(n=i.W||(i.W={})).Tag595B="595B",n.TagD35B="D35B",n.Tag2A7B="2A7B",n.TagA95B="A95B",n.Tag1D3B="1D3B",n.Tag6FF1="6FF1",n.Tag1F66="1F66",n.Tag1F5A="1F5A",n.TagBF97="BF97",function(t){t[t.ServiceTag=0]="ServiceTag",t[t.HDD=1]="HDD"}(i.Z||(i.Z={}))},function(t,i,n){function r(t){function i(t){return[12,8,4,0].reduce(function(i,n){return i+String.fromCharCode(48+(t>>n)%16%10)},"")}function n(t,i){for(var n=0,r=0;r<t.length;r++)n=65535&(n<<8^i[(t.charCodeAt(r)^n>>8)%256]);return n}return 20===t.length&&(t=t.slice(12,20)),i(n(t.slice(0,4),o))+i(n(t.slice(4,8),o))}function e(t){function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i,n){var r=t.slice(0);return r[i[0]]=255&(t[n[0]]>>4|t[n[3]]<<4),r[i[1]]=15&t[n[0]]|240&t[n[3]],r[i[2]]=t[n[1]]>>4|t[n[2]]<<4&255,r[i[3]]=15&t[n[1]]|240&t[n[2]],r}return function(t){return t.forEach(function(t,i,n){n[i]=t^":3-v@e4i".charCodeAt(i)}),i(t,2,6),i(t,3,7),t=n(t,[0,1,2,3],[0,1,2,3]),(t=n(t,[4,5,6,7],[6,7,4,5]))[0]=t[0]<<3&255|t[0]>>5,t[1]=t[1]<<5&255|t[1]>>3,t[2]=t[2]<<7&255|t[2]>>1,t[3]=t[3]<<4&255|t[3]>>4,t[5]=t[5]<<6&255|t[5]>>2,t[6]=t[6]<<1&255|t[6]>>7,t[7]=t[7]<<2&255|t[7]>>6,(t=t.map(function(t){return t%36})).map(function(t){return 9<t?String.fromCharCode(97+t-10):String.fromCharCode(48+t)}).join("")}(function(t){var i=[],n=0;for(t=[parseInt(t.slice(0,5),10),parseInt(t.slice(5,10),10),parseInt(t.slice(10,15),10),parseInt(t.slice(15,20),10)];n<t.length;n++){var r=t[n];i.push(r%256),i.push(Math.floor(r/256))}return i}(t))}function h(t){var i="4798156302 7201593846 5412367098 6587249310 9137605284 3974018625 8052974163".split(" ");return[0,2,5,11,13,15,16].map(function(n,r){return i[r].charAt(parseInt(t.charAt(n),10))}).join("")}i.J=!0,t=n(0);var o=function(){for(var t,i=[],n=0;256>n;n++){t=n<<8;for(var r=0;8>r;r++)65536&(t<<=1)&&(t^=4129);i.push(65535&t)}return i}();i.lb=t.R({name:"fsiHex",description:"Fujitsu-Siemens hexdigits",L:["DEADBEEF","AAAA-BBBB-CCCC-DEAD-BEEF"],O:function(t){return/^([0-9ABCDEF]{20}|[0-9ABCDEF]{8})$/i.test(t)},N:function(t){return[r(t)]}}),i.jb=t.R({name:"fsiDecNew",description:"Fujitsu-Siemens decimal new",L:["1234-4321-1234-4321-1234"],O:function(t){return/^\d{20}$/i.test(t)},N:function(t){return[h(t)]}}),i.kb=t.R({name:"fsiDecOld",description:"Fujitsu-Siemens decimal old",L:["1234-4321-1234-4321-1234"],O:function(t){return/^\d{20}$/i.test(t)},N:function(t){return[e(t)]}})},function(t,i,n){i.J=!0,t=n(0);var r={1:"3",0:"1",3:"F",2:"7",5:"Q",4:"V",7:"X",6:"G",9:"O",8:"U",a:"C",c:"E",b:"P",e:"M",d:"T",g:"H",f:"8",i:"Y",h:"Z",k:"S",j:"W",m:"4",l:"K",o:"J",n:"9",q:"5",p:"2",s:"N",r:"B",u:"L",t:"A",w:"D",v:"6",y:"I",x:"4",z:"0"},e={1:"3",0:"1",3:"F",2:"7",5:"Q",4:"V",7:"X",6:"G",9:"O",8:"U",a:"C",c:"E",b:"P",e:"M",d:"T",g:"H",f:"8",i:"Y",h:"Z",k:"S",j:"W",m:"4",l:"K",o:"J",n:"9",q:"5",p:"2",s:"N",r:"B",u:"L",t:"A",w:"D",v:"6",y:"I",x:"R",z:"0"};i.nb=t.R({name:"hpMini",description:"HP/Compaq Mini Netbooks",L:["CNU1234ABC"],O:function(t){return/^[0-9A-Z]{10}$/i.test(t)},N:function(t){var i="",n="";t=t.toLowerCase();for(var h=0;h<t.length;h++)i+=r[t.charAt(h)],n+=e[t.charAt(h)];return i===n?[i.toLowerCase()]:[i.toLowerCase(),n.toLowerCase()]}})},function(t,i,n){i.J=!0,t=n(0),i.ob=t.R({name:"insydeH2O",description:"Insyde H2O BIOS (Acer, HP)",L:["03133610"],O:function(t){return/^\d{8}$/i.test(t)},N:function(t){for(var i,n,r="",e=0;8>e;e++)n=i="Iou|hj&Z".charCodeAt(e)^t.charCodeAt(e),n*=1717986919,2147483648&(n=(n=Math.floor(n/Math.pow(2,32)))>>2|192&n)&&n++,r+=(i-(n*=10)).toString();return[r]}})},function(t,i,n){function r(t){function i(t){return n(t=r(t))?h(t):[]}function n(t){return/^[0-9]{5}$/i.test(t)}function r(t){return t.trim().replace(/[-\s]/gi,"")}function h(t){t:{t=parseInt(t,10)+f.shift;var i=f.S,n=f.X,r=f.wa,h=f.va;void 0===i&&(i=0),void 0===n&&(n=s),void 0===r&&(r=3),void 0===h&&(h=7);for(var a=[],u=0;u<h;u++)a.push(0);if(16383<t)t=e.Bb;else for(h=0;;){if(7e6<++h){t=e.Db;break t}u=a;var c=n;void 0===c&&(c=s);for(var l=Math.random()*c.length,p=0;p<u.length;p++)u[p]=o.La[c[Math.floor(l%c.length)]],l*=u.length;i:{for(u=r,u--,c=i,l=0;l<a.length;l++){for(c^=a[l],p=8;p--;)c=1&c?c>>1^8193:c>>1;if(l>=u&&c===t){u=l+1;break i}}u=-1}if(-1!==u){t=o.ta(a.slice(0,u));break t}}}return"string"==typeof t?[t]:[]}for(var u in void 0===t&&(t={}),a)void 0===t[u]&&(t[u]=a[u]);var f={shift:t.shift,S:t.S,X:t.X,wa:t.wa,va:t.va};return i.oa=t.name,i.na=n,i.ga=r,i.ua=h,i.L=["12345"],i.xa=f,i.qa=function(t){t=o.$a(t);var i=f.S;void 0===i&&(i=0);for(var n=0;n<t.length;n++){i^=t[n];for(var r=8;r--;)i=1&i?i>>1^8193:i>>1}return i-f.shift},t.description&&(i.description=t.description),i}i.J=!0;var e,h,o=n(0);(h=e=i.Oa||(i.Oa={}))[h.BadHash=0]="BadHash",h[h.NotFound=1]="NotFound",t="123456789".split("");var s="abcdefghijklmnopqrstuvwxyz".split(""),a={shift:0,S:0,X:s,wa:3,va:7};i.wb=r({name:"phoenix",description:"Generic Phoenix"}),i.vb=r({name:"phoenixHP",description:"HP/Compaq Phoenix BIOS",S:17232}),i.tb=r({name:"phoenixFSI",description:"Fujitsu-Siemens Phoenix",S:65,X:t}),i.qb=r({name:"phoenixFSIModelL",description:"Fujitsu-Siemens (model L) Phoenix",shift:1,S:76,X:t}),i.rb=r({name:"phoenixFSIModelP",description:"Fujitsu-Siemens (model P) Phoenix",shift:1,S:80,X:t}),i.sb=r({name:"phoenixFSIModelS",description:"Fujitsu-Siemens (model S) Phoenix",shift:1,S:83,X:t}),i.ub=r({name:"phoenixFSIModelX",description:"Fujitsu-Siemens (model X) Phoenix",shift:1,S:88,X:t})},function(t,i,n){function r(t){for(var i="",n=0;n<t.length;n++){var r=t[n];if(0===r)break;if(32>r||127<r)return;i+=String.fromCharCode(r)}return i}function e(t,i,n){for(var r=[],e=0;e<t.length;e++)r.push(t[e]<<n[7*i+e]&255|t[e]>>8-n[7*i+e]);return r}i.J=!0,t=n(0);var h=n(0),o=[7,1,5,3,0,6,2,5,2,3,0,6,1,7,6,1,5,2,7,1,0,3,7,6,1,0,5,2,1,5,7,3,2,0,6],s=[1,6,2,5,7,3,0,7,1,6,2,5,0,3,0,6,5,1,1,7,2,5,2,3,7,6,2,1,3,7,6,5,0,1,7];i.xb=t.R({name:"samsung",description:"Samsung",L:["07088120410C0000"],O:function(t){return/^[0-9ABCDEF]+$/i.test(t)&&(12===t.length||14===t.length||16===t.length||18===t.length)},N:function(t){for(var i=[],n=1;n<Math.floor(t.length/2);n++)i.push(parseInt(t.charAt(2*n)+t.charAt(2*n+1),16));var a=parseInt(t.substring(0,2),16)%5;return""===(t=h.ta(e(i,a,o)))&&(t=h.ta(e(i,a,s))),[t,n=r(e(i,a,o)),i=r(e(i,a,s))].filter(function(t){return!!t})}})},function(t,i,n){i.J=!0,t=n(0),i.zb=t.R({name:"sony",description:"Old Sony",L:["1234567"],O:function(t){return/^\d{7}$/i.test(t)},N:function(t){for(var i="",n=0;n<t.length;n++)i+="0987654321876543210976543210982109876543109876543221098765436543210987".charAt(parseInt(t.charAt(n),10)+10*n);return(t=i)?[t]:[]}})},function(t,i,n){function r(t){return(t[3]<<24|t[2]<<16|t[1]<<8|t[0])>>>0}function e(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function h(t,i){var n=(t=function t(i,n){if(n.U())return[new a(1),new a(0),i];var r=t(n,i.V(n)),e=r[1],h=r[2];return[e,r[0].sub(e.I(i.T(n))),h]}(t,i))[0];if(t[2].M(1))return(t=n.V(i)).Ha(0)?t:t.add(i)}function o(t,i,n){var r=new a(1,0,!0);if(1===n)return 0;for(t=t.V(n);0<i;)1==(1&i)&&(r=r.I(t).V(n)),i>>=1,t=t.I(t).V(n);return r.fa()}function s(t){for(var i=[],n=0;n<t.length;n+=2)i.unshift(16*"9DPK7V2F3RT6HX8J".indexOf(t[n])+"9DPK7V2F3RT6HX8J".indexOf(t[n+1]));t=r(i.slice(0,4)),i=r(i.slice(4,8)),i=a.ib(t,i,!0),t=new a(2795287378,0,!0).I(3544934710),n=(t=h(new a(41,0,!0),t)).V(2795287378);var s=t.V(3544934710);for(t=h(new a(3544934711),new a(2795287379)),i=r(i=e((i=((n=o(i,n.fa(),2795287379))<(i=o(i,s.fa(),3544934711))?a.Ga(n-i).add(2795287379).I(t).V(2795287379):a.Ga(n-i).I(t).V(2795287379)).I(3544934711).add(i)).low).concat(e(i.high))),t="",n=0;8>n;n++)t+="47592836".charAt(i>>21-3*n&7);return t}i.J=!0;var a=n(16);t=n(0);var u=/^[9DPK7V2F3RT6HX8J]{16}$/;i.Tb=o,i.$b=s,i.yb=t.R({name:"sony4x4",description:"Sony 4x4",L:["73KR-3FP9-PVKH-K29R"],ga:function(t){return t.trim().replace(/[-\s]/gi,"").toUpperCase()},O:function(t){return u.test(t)},N:function(t){return(t=s(t))?[t]:[]}})},function(t){function i(t,i,n){this.low=0|t,this.high=0|i,this.A=!!n}function n(t){return!0===(t&&t.__isLong__)}function r(t,i){var n;if(i){if((i=0<=(t>>>=0)&&256>t)&&(n=u[t]))return n;n=h(t,0>(0|t)?-1:0,!0),i&&(u[t]=n)}else{if((i=-128<=(t|=0)&&128>t)&&(n=a[t]))return n;n=h(t,0>t?-1:0,!1),i&&(a[t]=n)}return n}function e(t,i){if(isNaN(t))return i?g:d;if(i){if(0>t)return g;if(t>=c)return y}else{if(t<=-l)return A;if(t+1>=l)return w}return 0>t?e(-t,i).K():h(t%4294967296|0,t/4294967296|0,i)}function h(t,n,r){return new i(t,n,r)}function o(t,i){return"number"==typeof t?e(t,i):"string"==typeof t?function t(i,n,r){if(0===i.length)throw Error("empty string");if("NaN"===i||"Infinity"===i||"+Infinity"===i||"-Infinity"===i)return d;if("number"==typeof n?(r=n,n=!1):n=!!n,2>(r=r||10)||36<r)throw RangeError("radix");var h;if(0<(h=i.indexOf("-")))throw Error("interior hyphen");if(0===h)return t(i.substring(1),n,r).K();h=e(f(r,8));for(var o=d,s=0;s<i.length;s+=8){var a=Math.min(8,i.length-s),u=parseInt(i.substring(s,s+a),r);8>a?(a=e(f(r,a)),o=o.I(a).add(e(u))):o=(o=o.I(h)).add(e(u))}return o.A=n,o}(t,i):h(t.low,t.high,"boolean"==typeof i?i:t.A)}t.exports=i;var s=null;try{s=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}Object.defineProperty(i.prototype,"__isLong__",{value:!0});var a={},u={};i.ib=h;var f=Math.pow;i.Ga=o;var c=0x10000000000000000,l=c/2,p=r(16777216),d=r(0),g=r(0,!0),v=r(1),b=r(1,!0),m=r(-1),w=h(-1,2147483647,!1),y=h(-1,-1,!0),A=h(0,-2147483648,!1);(t=i.prototype).ea=function(){return this.A?this.low>>>0:this.low},t.fa=function(){return this.A?4294967296*(this.high>>>0)+(this.low>>>0):4294967296*this.high+(this.low>>>0)},t.toString=function(t){if(2>(t=t||10)||36<t)throw RangeError("radix");if(this.U())return"0";if(this.P()){if(this.M(A)){var i=e(t),n=this.T(i);return i=n.I(i).sub(this),n.toString(t)+i.ea().toString(t)}return"-"+this.K().toString(t)}n=e(f(t,6),this.A),i=this;for(var r="";;){var h=i.T(n),o=(i.sub(h.I(n)).ea()>>>0).toString(t);if((i=h).U())return o+r;for(;6>o.length;)o="0"+o;r=o+r}},t.Kb=function(){return this.high},t.Lb=function(){return this.high>>>0},t.Nb=function(){return this.low},t.Ob=function(){return this.low>>>0},t.Ca=function(){if(this.P())return this.M(A)?64:this.K().Ca();for(var t=0!=this.high?this.high:this.low,i=31;0<i&&0==(t&1<<i);i--);return 0!=this.high?i+33:i+1},t.U=function(){return 0===this.high&&0===this.low},t.Ib=t.U,t.P=function(){return!this.A&&0>this.high},t.Rb=function(){return this.A||0<=this.high},t.Ia=function(){return 1==(1&this.low)},t.Pb=function(){return 0==(1&this.low)},t.Ba=function(t){return n(t)||(t=o(t)),(this.A===t.A||1!=this.high>>>31||1!=t.high>>>31)&&(this.high===t.high&&this.low===t.low)},t.M=t.Ba,t.pa=function(t){return!this.M(t)},t.Wb=t.pa,t.Vb=t.pa,t.Qa=function(t){return 0>this.Y(t)},t.Ja=t.Qa,t.ma=function(t){return 0>=this.Y(t)},t.Ub=t.ma,t.Sb=t.ma,t.Pa=function(t){return 0<this.Y(t)},t.sa=t.Pa,t.la=function(t){return 0<=this.Y(t)},t.Ha=t.la,t.Jb=t.la,t.xa=function(t){if(n(t)||(t=o(t)),this.M(t))return 0;var i=this.P(),r=t.P();return i&&!r?-1:!i&&r?1:this.A?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).P()?-1:1},t.Y=t.xa,t.Sa=function(){return!this.A&&this.M(A)?A:this.Ta().add(v)},t.K=t.Sa,t.add=function(t){n(t)||(t=o(t));var i=this.high>>>16,r=65535&this.high,e=this.low>>>16,s=t.high>>>16,a=65535&t.high,u=t.low>>>16;return e=(u=((t=(65535&this.low)+(65535&t.low))>>>16)+(e+u))>>>16,h((65535&u)<<16|65535&t,(i=((e+=r+a)>>>16)+(i+s)&65535)<<16|65535&e,this.A)},t.bb=function(t){return n(t)||(t=o(t)),this.add(t.K())},t.sub=t.bb,t.ya=function(t){if(this.U())return d;if(n(t)||(t=o(t)),s){var i=s.mul(this.low,this.high,t.low,t.high);return h(i,s.get_high(),this.A)}if(t.U())return d;if(this.M(A))return t.Ia()?A:d;if(t.M(A))return this.Ia()?A:d;if(this.P())return t.P()?this.K().I(t.K()):this.K().I(t).K();if(t.P())return this.I(t.K()).K();if(this.Ja(p)&&t.Ja(p))return e(this.fa()*t.fa(),this.A);i=this.high>>>16;var r=65535&this.high,a=this.low>>>16,u=65535&this.low,f=t.high>>>16,c=65535&t.high,l=t.low>>>16,g=u*(t=65535&t.low),v=(g>>>16)+a*t,b=v>>>16;b+=(v=(65535&v)+u*l)>>>16;var m=(b+=r*t)>>>16;return h((65535&v)<<16|65535&g,(m=(m+=(b=(65535&b)+a*l)>>>16)+((b=(65535&b)+u*c)>>>16)+(i*t+r*l+a*c+u*f)&65535)<<16|65535&b,this.A)},t.I=t.ya,t.Aa=function(t){if(n(t)||(t=o(t)),t.U())throw Error("division by zero");if(s)return this.A||-2147483648!==this.high||-1!==t.low||-1!==t.high?h(t=(this.A?s.div_u:s.div_s)(this.low,this.high,t.low,t.high),s.get_high(),this.A):this;if(this.U())return this.A?g:d;if(this.A){if(t.A||(t=t.Ab()),t.sa(this))return g;if(t.sa(this.Za(1)))return b;var i=g}else{if(this.M(A)){if(t.M(v)||t.M(m))return A;if(t.M(A))return v;var r=this.Na(1).T(t).Xa(1);if(r.M(d))return t.P()?v:m;var a=this.sub(t.I(r));return r.add(a.T(t))}if(t.M(A))return this.A?g:d;if(this.P())return t.P()?this.K().T(t.K()):this.K().T(t).K();if(t.P())return this.T(t.K()).K();i=d}for(a=this;a.Ha(t);){r=Math.max(1,Math.floor(a.fa()/t.fa()));var u=Math.ceil(Math.log(r)/Math.LN2);u=48>=u?1:f(2,u-48);for(var c=e(r),l=c.I(t);l.P()||l.sa(a);)l=(c=e(r-=u,this.A)).I(t);c.U()&&(c=v),i=i.add(c),a=a.sub(l)}return i},t.T=t.Aa,t.na=function(t){return n(t)||(t=o(t)),s?h(t=(this.A?s.rem_u:s.rem_s)(this.low,this.high,t.low,t.high),s.get_high(),this.A):this.sub(this.T(t).I(t))},t.V=t.na,t.Xb=t.na,t.Ta=function(){return h(~this.low,~this.high,this.A)},t.and=function(t){return n(t)||(t=o(t)),h(this.low&t.low,this.high&t.high,this.A)},t.or=function(t){return n(t)||(t=o(t)),h(this.low|t.low,this.high|t.high,this.A)},t.xor=function(t){return n(t)||(t=o(t)),h(this.low^t.low,this.high^t.high,this.A)},t.za=function(t){return n(t)&&(t=t.ea()),0==(t&=63)?this:32>t?h(this.low<<t,this.high<<t|this.low>>>32-t,this.A):h(0,this.low<<t-32,this.A)},t.Xa=t.za,t.Wa=function(t){return n(t)&&(t=t.ea()),0==(t&=63)?this:32>t?h(this.low>>>t|this.high<<32-t,this.high>>t,this.A):h(this.high>>t-32,0<=this.high?0:-1,this.A)},t.Na=t.Wa,t.qa=function(t){return n(t)&&(t=t.ea()),0==(t&=63)?this:32>t?h(this.low>>>t|this.high<<32-t,this.high>>>t,this.A):h(32===t?this.high:this.high>>>t-32,0,this.A)},t.Za=t.qa,t.ac=t.qa,t.Ua=function(t){if(n(t)&&(t=t.ea()),0==(t&=63))return this;if(32===t)return h(this.high,this.low,this.A);if(32>t){var i=32-t;return h(this.low<<t|this.high>>>i,this.high<<t|this.low>>>i,this.A)}return i=32-(t-=32),h(this.high<<t|this.low>>>i,this.low<<t|this.high>>>i,this.A)},t.Yb=t.Ua,t.Va=function(t){if(n(t)&&(t=t.ea()),0==(t&=63))return this;if(32===t)return h(this.high,this.low,this.A);if(32>t){var i=32-t;return h(this.high<<i|this.low>>>t,this.low<<i|this.high>>>t,this.A)}return i=32-(t-=32),h(this.low<<i|this.high>>>t,this.high<<i|this.low>>>t,this.A)},t.Zb=t.Va,t.cc=function(){return this.A?h(this.low,this.high,!1):this},t.Ab=function(){return this.A?this:h(this.low,this.high,!0)},t.bc=function(t){return t?this.fb():this.eb()},t.fb=function(){var t=this.high,i=this.low;return[255&i,i>>>8&255,i>>>16&255,i>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},t.eb=function(){var t=this.high,i=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,i>>>24,i>>>16&255,i>>>8&255,255&i]}}])}).call(this||window);