!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";var t="$$$projectId$$$",e=15e3,n="required",o="length",r="type",i="range",s={REQUIRED:"$field$,输入值不可为空",LENGTH:"$field$,输入超长，最大长度为$rule$",TYPE:"$field$,输入的类型不正确，应为$rule$类型",RANGE:"$field$,输入不在范围内，应在$range1$~$range2$之内",LACK:"上送字段缺失，缺少字段$field$"},a="WEBFUNNY_COOKIE";function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function u(t,e){return t(e={exports:{}},e.exports),e.exports}function f(t,e,n){if(window){var o=localStorage,r={data:e,expires:n};if(o.WEBFUNNY_COOKIE){var i=JSON.parse(o.WEBFUNNY_COOKIE);i[t]=r,o.WEBFUNNY_COOKIE=JSON.stringify(i)}else{var s={};s[t]=r,o.WEBFUNNY_COOKIE=JSON.stringify(s)}}else{var c={data:e,expires:n},u=uni.getStorageSync(a);if(u)u[t]=c,uni.setStorageSync(a,u);else{var f={};f[t]=c,uni.setStorageSync(a,f)}}}function l(t){if(window){var e=localStorage,n=null;if(e.WEBFUNNY_COOKIE){var o=(n=JSON.parse(e.WEBFUNNY_COOKIE))[t];if(!o)return"";var r=parseInt(o.expires,10);return(new Date).getTime()>r?(delete n[t],e.WEBFUNNY_COOKIE=JSON.stringify(n),""):o.data}return""}var i=uni.getStorageSync(a);if(i){var s=i[t];if(!s)return"";var c=parseInt(s.expires,10);return(new Date).getTime()>c?(delete i[t],uni.setStorageSync(a,i),""):s.data}return""}function h(){var t=(new Date).Format("yyyyMMddhhmmssS");return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))+"-"+t}function d(){var t=h(),e=l("monitorCustomerKey");e||(f("monitorCustomerKey",t,(new Date).getTime()+31104e7),e=t);return e}function p(t){var n=(new Date).getTime(),o=l("lastHearBeatTime");o&&1!==t||(f("lastHearBeatTime",n,n+e+5e3),o=n);return o}function g(t){var e="";if(window){var n=localStorage;if(!t)return"";e=(n.wmUserInfo?JSON.parse(n.wmUserInfo):{})[t]}else{if(!t)return"";var o=uni.getStorageSync("wmUserInfo");e=(o?JSON.parse(o):{})[t]}return e||""}c(u((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(n)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}))),Date.prototype.Format||(Date.prototype.Format=function(t){var e=t,n={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e});var m={isString:function(t){return"[object String]"===Object.prototype.toString.apply(t)},isNumber:function(t){return"[object Number]"===Object.prototype.toString.apply(t)},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},isObject:function(t){return"[object Object]"===Object.prototype.toString.apply(t)},isDate:function(t){return"[object Date]"===Object.prototype.toString.apply(t)},isBoolean:function(t){return"[object Boolean]"===Object.prototype.toString.apply(t)},getUuid:h,getWfCookie:l,setWfCookie:f,combineObject:function(t,e){return Object.assign(t,e)},getCustomerKey:d,getLastHeartBeatTime:p,getWeUserInfo:g,setFirstActionTime:function(t){for(var e=l("weFunnelConfig").funnelList,n=void 0===e?[]:e,o=0;o<n.length;o++){var r=n[o],i=r.s,s=void 0===i?"":i,a=r.c,c=void 0===a?"":a,u=r.t,h=void 0===u?1:u,d=(new Date).getTime()+24*h*3600*1e3;if(-1!==s.indexOf(1*t)){var p=(new Date).Format("yyyyMMdd");f("".concat(c,"-FirstStepDay"),"".concat(c,"-").concat(p),d)}}},getFirstActionTime:function(t){for(var e=l("weFunnelConfig").funnelList,n=void 0===e?[]:e,o="",r=0;r<n.length;r++){var i=n[r],s=i.s,a=void 0===s?"":s,c=i.c,u=void 0===c?"":c;-1!==a.indexOf(1*t)&&(o+=l("".concat(u,"-FirstStepDay"))+",")}return o}};function w(t,e){var n=!1,o=function(t,e){var n={success:!1,field:""};for(var o in e){if(!Object.prototype.hasOwnProperty.call(t,o))return n.success=!1,n.field=o,n;n.success=!0}return n}(t,e),r=o.success,i=o.field;if(!(n=r)){var a=s.LACK.replace(/\$field\$/g,i);return console.warn(a),n}for(var c in e){if(!(n=v(t[c],c,e[c])))return n}return n}function v(t,e,a){var c=!1;for(var u in a){var f=a[u];if(u===n&&f){if(!(c=void 0!==t)){var l=s.REQUIRED.replace(/\$field\$/g,e).replace(/\$rule\$/g,"");return console.warn(l),c}}else if(u===o&&f){if(!(c=t.toString().length<=f)){var h=s.LENGTH.replace(/\$field\$/g,e).replace(/\$rule\$/g,f);return console.warn(h),c}}else if(u===r&&f){if(!(c=(0,m["is"+f])(t))){var d=s.TYPE.replace(/\$field\$/g,e).replace(/\$rule\$/g,f);return console.warn(d),c}}else if(u===i&&f){var p=t>=f[0]&&t<f[1];if(!p){var g=s.RANGE.replace(/\$field\$/g,e).replace(/\$range1\$/g,f[0]).replace(/\$range2\$/g,f[1]);return console.warn(g),p}}}return c}var y="$$$webfunny-event-domain$$$",b="";b=window&&0===y.length?window.location.origin:y;var x={trackUrl:"".concat(b,"/tracker/upEvent"),eventDomain:b,requestMethod:"POST"};function _(){var t=x.trackUrl;if(window){var e=window.location.protocol;return e=e.replace(/file/g,"http"),t.indexOf("http")>-1?t:e+t}return t}function O(){var t=x.eventDomain;if(window){var e=window.location.protocol;return e=e.replace(/file/g,"http"),t.indexOf("http")>-1?t:e+t}return t}function E(t,e,n){var o=_();try{var r=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open("POST",o,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.onreadystatechange=function(){if(4==r.readyState){var t={};try{t=r.responseText?JSON.parse(r.responseText):{}}catch(e){t={}}"function"==typeof e&&e(t)}},r.onerror=function(){"function"==typeof n&&n()},r.send("data="+JSON.stringify(t))}catch(e){!function(t){var e=_(),n=e+(e.indexOf("?")<0?"?":"&")+t;new Image(1,1).src=n}(t)}}function T(t){if(window&&t)E(t,(function(t){m.setWfCookie("weFunnelConfig",{funnelList:t.data},(new Date).getTime()+864e5)}),(function(t){console.log(t)}));else if(t){var e=x.trackUrl;uni.request({url:e,data:t,method:"POST",header:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(t){t.data&&t.data.data&&m.setWfCookie("weFunnelConfig",{funnelList:t.data.data},(new Date).getTime()+864e5)}})}}!function(){if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?l(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},s._resetCrossOriginUpdater=function(){n=null,o=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,s=null;this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(a(n,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(s=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),s&&s.disconnect()}));var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var f=r(e);f&&this._monitorIntersections(f.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t,i=this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}));if(!i){var s=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),s(),e!=o){var a=r(e);a&&this._unmonitorIntersections(a.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,s=u(r),a=this._rootContainsTarget(r),c=o.entry,f=t&&a&&this._computeTargetAndRootIntersection(r,s,e),l=null;this._rootContainsTarget(r)?n&&!this.root||(l=e):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var h=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:l,intersectionRect:f});c?t&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s,a,c,f,h,p,g,m,w=r,v=d(e),y=!1;!y&&v;){var b=null,x=1==v.nodeType?window.getComputedStyle(v):{};if("none"==x.display)return null;if(v==this.root||9==v.nodeType)if(y=!0,v==this.root||v==t)n&&!this.root?!o||0==o.width&&0==o.height?(v=null,b=null,w=null):b=o:b=i;else{var _=d(v),O=_&&u(_),E=_&&this._computeTargetAndRootIntersection(_,O,i);O&&E?(v=_,b=l(O,E)):(v=null,w=null)}else{var T=v.ownerDocument;v!=T.body&&v!=T.documentElement&&"visible"!=x.overflow&&(b=u(v))}if(b&&(s=b,a=w,c=void 0,f=void 0,h=void 0,p=void 0,g=void 0,m=void 0,c=Math.max(s.top,a.top),f=Math.min(s.bottom,a.bottom),h=Math.max(s.left,a.left),p=Math.min(s.right,a.right),m=f-c,w=(g=p-h)>=0&&m>=0&&{top:c,bottom:f,left:h,right:p,width:g,height:m}||null),!w)break;v=v&&d(v)}return w}},s.prototype._getRootRect=function(){var e;if(this.root&&!p(this.root))e=u(this.root);else{var n=p(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},s.prototype._rootIsInDom=function(){return!this.root||h(t,this.root)},s.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return h(n,e)&&(!this.root||n==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=f(t.rootBounds),this.boundingClientRect=f(t.boundingClientRect),this.intersectionRect=f(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=d(n)}return!1}function d(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function p(t){return t&&9===t.nodeType}}(),window&&null==Element.prototype.getAttributeNames&&(Element.prototype.getAttributeNames=function(){for(var t=this.attributes,e=t.length,n=new Array(e),o=0;o<e;o++)n[o]=t[o].name;return n}),c(u((function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0})));var I=function(){var t=d(),e=g("userId"),n=function(){if(window){var t={},e=navigator.userAgent,n=e.match(/(Android);?[\s\/]+([\d.]+)?/),o=e.match(/(iPad).*OS\s([\d_]+)/),r=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),i=e.match(/Android\s[\S\s]+Build\//),s=window.screen.width,a=window.screen.height;if(t.ios=t.android=t.iphone=t.ipad=t.androidChrome=!1,t.isWeixin=/MicroMessenger/i.test(e),t.os="web",t.deviceName="PC",t.deviceSize=s+"×"+a,t.platform=navigator.platform,n&&(t.os="android",t.osVersion=n[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(o||r)&&(t.os="ios",t.ios=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.iphone=!0),o&&(t.osVersion=o[2].replace(/_/g,"."),t.ipad=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.iphone){var c="".concat(s," x ").concat(a);320===s&&480===a?c="4":320===s&&568===a?c="5/SE":375===s&&667===a?c="6/7/8":414===s&&736===a?c="6/7/8 Plus":375===s&&812===a?c="X/S/Max":414===s&&896===a?c="11/Pro-Max":375===s&&812===a?c="11-Pro/mini":390===s&&844===a?c="12/13/Pro":428===s&&926===a&&(c="12/13/Pro-Max"),t.deviceName="iphone "+c}else if(t.ipad)t.deviceName="ipad";else if(i){for(var u=i[0].split(";"),f="",l=0;l<u.length;l++)-1!=u[l].indexOf("Build")&&(f=u[l].replace(/Build\//g,""));""==f&&(f=u[1]),t.deviceName=f.replace(/(^\s*)|(\s*$)/g,"")}if(-1==e.indexOf("Mobile")){var h=navigator.userAgent.toLowerCase();t.browserName="其他";var d="";h.indexOf("msie")>0?(d=h.match(/msie [\d.]+;/gi)[0],t.browserName="ie",t.browserVersion=d.split("/")[1]):h.indexOf("edg")>0?(d=h.match(/edg\/[\d.]+/gi)[0],t.browserName="edge",t.browserVersion=d.split("/")[1]):h.indexOf("firefox")>0?(d=h.match(/firefox\/[\d.]+/gi)[0],t.browserName="firefox",t.browserVersion=d.split("/")[1]):h.indexOf("safari")>0&&h.indexOf("chrome")<0?(d=h.match(/safari\/[\d.]+/gi)[0],t.browserName="safari",t.browserVersion=d.split("/")[1]):h.indexOf("chrome")>0&&(d=h.match(/chrome\/[\d.]+/gi)[0],t.browserName="chrome",t.browserVersion=d.split("/")[1],h.indexOf("360se")>0&&(t.browserName="360"))}return{deviceName:t.deviceName,system:"".concat(t.os," ").concat(t.osVersion||""),os:t.os,platform:t.platform,browserName:t.browserName}}var p=uni.getSystemInfoSync()||{},g=p.model,m=p.system,w=p.platform,v="",y=m.split(" ");return y.length>1&&(v=y[0]),{deviceName:g,system:m,os:v,platform:w}}(),o=n.deviceName,r=void 0===o?"":o,i=n.system,s=void 0===i?"":i,a=n.os,c=void 0===a?"":a,u=n.platform,f=void 0===u?"":u,h=n.browserName,p=void 0===h?"":h,m=function(){var t="";if(window)t=window?window.location.href.split("?")[0]:"";else if(getCurrentPages){var e=getCurrentPages();e.length>0&&(t=getCurrentPages()[e.length-1].route)}return t}(),w=g("platform");return{weCustomerKey:t,weUserId:e,wePath:m,weDeviceName:r,wePlatform:w||f,weSystem:s,weOs:c,weBrowserName:p,weNewStatus:function(){var t=l("monitorCustomerKey");if(t){var e="",n=t?t.match(/\d{14}/g):[];if(n&&n.length>0){var o=n[0].match(/\d{2}/g);e=o[0]+o[1]+"-"+o[2]+"-"+o[3]===(new Date).Format("yyyy-MM-dd")?1:2}}else e=1;return e}()}},S=null;function $(){S||(S=setInterval((function(){if(!window||!document||!0!==document.hidden){var t=p(),n=(new Date).getTime(),o=n-t;if(!(o<0)&&o+500>=e){var r={stayTime:o/1e3};if(uni.webfunnyEvent){uni.webfunnyEvent("$$$HeartBeatPointId$$$").trackEvent(r);var i=n+e+5e3;m.setWfCookie("lastHearBeatTime",n,i)}}}}),e))}var N=function(e){m.getWfCookie("weFunnelConfig")||(window?function(t,e,n,o,r){if(window)try{var i=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");i.open(t,e,!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){if(4==i.readyState){var t={};try{t=i.responseText?JSON.parse(i.responseText):{}}catch(e){t={}}"function"==typeof o&&o(t)}},i.onerror=function(){"function"==typeof r&&r()};var s="";for(var a in n)s+="".concat(a,"=").concat(n[a]);i.send(s)}catch(t){}}("post",O()+"/tracker/initCf",{projectId:t},(function(t){e(t.data)}),(function(){})):uni.request({url:O()+"/tracker/initCf",data:{projectId:t},dataType:"JSON",method:"POST",success:function(t){e(t.data.data)}}))};!function(t){try{N((function(t){m.setWfCookie("weFunnelConfig",{funnelList:t},(new Date).getTime()+864e5)})),m&&(t.webfunnyEventUtils=m,t.webfunnyEventGetCustomerInfo=I,t.webfunnyEventUtils.getCustomerKey(),t.webfunnyEventUtils.getLastHeartBeatTime(1)),w&&T&&(t.webfunnyEventValidateParams=w,t.webfunnyEventSendRequest=T,t._webfunnyEvent="$$$webfunny-event-code$$$"),$()}catch(t){console.error(t)}}(uni)}));
