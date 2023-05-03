/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","rxjs"],(function(e,t,n,c,a){return function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return d}));var c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var r=function(){return(r=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}function l(e,t,n,c){return new(n||(n=Promise))((function(a,r){function i(e){try{o(c.next(e))}catch(e){r(e)}}function l(e){try{o(c.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}o((c=c.apply(e,t||[])).next())}))}function o(e,t){var n,c,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,c&&(a=2&r[0]?c.return:r[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,r[1])).done)return a;switch(c=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,c=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],c=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}}Object.create;function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var c,a,r=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(c=r.next()).done;)i.push(c.value)}catch(e){a={error:e}}finally{try{c&&!c.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function u(e,t,n){if(n||2===arguments.length)for(var c,a=0,r=t.length;a<r;a++)!c&&a in t||(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}function d(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}Object.create},function(e,n){e.exports=t},,function(e,t){e.exports=n},function(e,t){e.exports=c},,function(e,t){e.exports=a},,,,function(e,t,n){"use strict";n.r(t);var c,a,r,i,l=n(4),o=n(1),s=n(0),u=n.n(s),d=n(5),f=n(2);!function(e){e.REDIS="redis-datasource"}(c||(c={})),function(e){e.REDIS="Redis"}(a||(a={})),function(e){e.COMMAND="command",e.REDISGEARS="RG.PYEXECUTE",e.REDISTIMESERIES="TS.INFO",e.REDISAI="AI.INFO",e.REDISEARCH="FT.INFO",e.REDISJSON="JSON.GET",e.REDISGRAPH="GRAPH.QUERY",e.REDISBLOOM="BF.INFO"}(r||(r={})),function(e){e.CLUSTER="cluster",e.SENTINEL="sentinel",e.SOCKET="socket",e.STANDALONE="standalone"}(i||(i={}));var p=function(e){function t(n){var c=e.call(this,n)||this;return c.backendSrv=Object(d.getBackendSrv)(),c.goHome=function(){Object(d.getLocationSrv)().update({path:"/a/redis-app",partial:!1})},c.updatePluginSettings=function(e){return c.backendSrv.post("api/plugins/"+c.props.plugin.meta.id+"/settings",e)},c.onDisable=function(){c.updatePluginSettings({enabled:!1,jsonData:{},pinned:!1}).then((function(){t.getLocation().reload()}))},c.onEnable=function(){c.updatePluginSettings({enabled:!0,jsonData:{},pinned:!0}).then((function(){t.getLocation().assign("/a/redis-app")}))},c.state={isEnabled:!1},c}return Object(o.c)(t,e),t.getLocation=function(){return window.location},t.prototype.componentDidMount=function(){var e=this;this.setState((function(){var t;return{isEnabled:!!(null===(t=e.props.plugin.meta)||void 0===t?void 0:t.enabled)}}))},t.prototype.render=function(){var e=this.state.isEnabled;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Redis Application"),u.a.createElement("p",null,"The Redis Application, is a plugin for Grafana that provides custom panels for Redis Data Source."),!e&&u.a.createElement("p",null,"Click below to ",u.a.createElement("b",null,"Enable")," the Application and start monitoring your Redis instances today."),u.a.createElement("div",{className:"gf-form gf-form-button-row"},e?u.a.createElement(f.Button,{variant:"destructive",onClick:this.onDisable},"Disable"):u.a.createElement(f.Button,{onClick:this.onEnable},"Enable")))},t}(s.PureComponent),v=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redis.io",title:"High Availability enabled."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"HighAvailability",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M29.5,0h-9C19.1,0,18,1.1,18,2.5V9h-6.5C10.1,9,9,10.1,9,11.5V18H2.5C1.1,18,0,19.1,0,20.5v9\n\tC0,30.9,1.1,32,2.5,32h9c1.4,0,2.5-1.1,2.5-2.5V23h6.5c1.4,0,2.5-1.1,2.5-2.5V14h6.5c1.4,0,2.5-1.1,2.5-2.5v-9C32,1.1,30.9,0,29.5,0\n\tz M13,29.5c0,0.8-0.7,1.5-1.5,1.5h-9C1.7,31,1,30.3,1,29.5v-9C1,19.7,1.7,19,2.5,19H9v1.5c0,1.4,1.1,2.5,2.5,2.5H13V29.5z M13,22\n\th-1.5c-0.8,0-1.5-0.7-1.5-1.5V19h1.5c0.8,0,1.5,0.7,1.5,1.5V22z M22,20.5c0,0.8-0.7,1.5-1.5,1.5H14v-1.5c0-1.4-1.1-2.5-2.5-2.5H10\n\tv-6.5c0-0.8,0.7-1.5,1.5-1.5H18v1.5c0,1.4,1.1,2.5,2.5,2.5H22V20.5z M22,13h-1.5c-0.8,0-1.5-0.7-1.5-1.5V10h1.5\n\tc0.8,0,1.5,0.7,1.5,1.5V13z M31,11.5c0,0.8-0.7,1.5-1.5,1.5H23v-1.5c0-1.4-1.1-2.5-2.5-2.5H19V2.5C19,1.7,19.7,1,20.5,1h9\n\tC30.3,1,31,1.7,31,2.5V11.5z"})))},m=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redis.io",title:"Multi Layer Security enabled."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"MultiLayerSecurity",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M27,11.1L27,11.1L26.9,9c0-4.7-3.8-8.5-8.5-8.5c-0.8,0-1.7,0.1-2.5,0.4C11.5-0.5,6.8,2,5.4,6.5\n\tC5.2,7.3,5.1,8.2,5.1,9v2.1H0v16.6C0,30.1,1.9,32,4.3,32h23.4c2.4,0,4.3-1.9,4.3-4.3V11.1H27z M18.5,1.5c4.1,0,7.4,3.3,7.5,7.5v2.1\n\th-4V9c0-3.1-1.7-5.9-4.4-7.4C17.9,1.6,18.2,1.5,18.5,1.5z M21,11.1H11V9c0-3.2,2-6,5-7c3,1.1,5,3.9,5,7V11.1L21,11.1z M6.1,9\n\tc0-4.1,3.3-7.4,7.4-7.5c0.3,0,0.6,0,1,0.1C11.7,3.1,10,5.9,10,9v2.1H6L6.1,9L6.1,9z M4.3,31C2.5,31,1,29.5,1,27.7V12.1h4v15.6\n\tC5,29,5.6,30.2,6.5,31H4.3z M9.3,31C7.4,31,6,29.5,6,27.7V12.1h20v15.6c0,1.8-1.5,3.3-3.3,3.3H9.3z M31,27.7c0,1.8-1.5,3.3-3.3,3.3\n\th-2.3c1-0.8,1.6-2,1.6-3.3V12.1h4C31,12.1,31,27.7,31,27.7z M16,15.1c-1.8,0-3.3,1.5-3.3,3.3c0,1.1,0.6,2.2,1.5,2.8v3.4\n\tc0,1,0.8,1.8,1.8,1.9c1,0,1.8-0.8,1.9-1.8v-0.1v-3.4c1.5-1,2-3,1-4.6C18.2,15.7,17.1,15.1,16,15.1z M17.1,20.4l-0.3,0.1v4\n\tc0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8c0,0,0,0,0-0.1v-4l-0.3-0.1c-1.1-0.6-1.6-2-1-3.1s2-1.6,3.1-1s1.6,2,1,3.1\n\tC17.8,19.9,17.5,20.2,17.1,20.4L17.1,20.4z"})))},h=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisai.io",title:"RedisAI is a Redis module for executing Deep Learning/Machine Learning models and managing their data."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisAI",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M31.7,14.3l-2-3.9c-0.1-0.2-0.1-0.4-0.1-0.6l-0.1-1.6c-0.1-1-0.8-1.9-1.8-2.2l-1.9-0.4c-0.6-0.1-1-0.7-1-1.3v-1\n\tc0-0.9-0.5-1.7-1.2-2.1l-1.7-0.9c-0.7-0.4-1.5-0.4-2.2,0l-3.6,2l-3.6-2c-0.7-0.4-1.5-0.4-2.2,0L8.5,1.2C7.8,1.6,7.3,2.4,7.3,3.3v1.2\n\tc0,0.6-0.4,1.2-1,1.3l-2,0.4c-1,0.2-1.8,1.1-1.8,2.2L2.4,9.9c0,0.2-0.1,0.4-0.1,0.5l-2,3.9c-0.4,0.7-0.3,1.5,0,2.2L3,21.3\n\tc0.1,0.2,0.2,0.4,0.2,0.7v1.9C3.1,25,3.9,26,5,26.2l0.8,0.2c0.6,0.1,1,0.6,1.1,1.2L7,28.4c0.1,0.6,0.3,1.2,0.8,1.5l1.7,1.5\n\tc0.4,0.4,1,0.6,1.5,0.6c0.3,0,0.6-0.1,0.9-0.2l4.2-1.7l4.2,1.6c0.8,0.4,1.8,0.2,2.5-0.4l1.7-1.5c0.5-0.4,0.7-1,0.8-1.5l0.1-0.8\n\tc0-0.6,0.5-1.1,1.1-1.2l0.8-0.2c1.1-0.2,1.9-1.2,1.9-2.3V22c0-0.2,0.1-0.5,0.2-0.7l2.6-4.8C32.1,15.9,32.1,15,31.7,14.3z M11.4,30.9\n\tc-0.5,0.2-1,0.1-1.4-0.2l-1.7-1.5C8,29,7.9,28.7,7.8,28.3l-0.1-0.8c-0.1-1-0.8-1.9-1.8-2.1l-0.8-0.2C4.5,25.1,4,24.5,4,23.9v-1.7\n\th2.3c0.2,0,0.4,0,0.6-0.1L9,24.5l0.8-0.7l-2-2.3l0.1-0.1c0.8-0.8,2.7-2.4,2.7-2.4L10,18.2c0,0.3-1.8,1.8-2.7,2.7\n\tc-0.2,0.2-0.6,0.4-0.9,0.4H4c0-0.1-0.1-0.3-0.1-0.4l-2.7-4.8c-0.2-0.4-0.2-0.9,0-1.3L3.1,11h2.7c0.2,0,0.4,0,0.6-0.1l2.1,2.4\n\tl0.8-0.7l-2-2.3l0.1-0.1C8.2,9.5,10.1,8,10.1,8L9.5,7.2C9.4,7.3,7.6,8.8,6.7,9.6C6.5,9.9,6.1,10,5.8,10H3.4V9.9l0.1-1.6\n\tc0-0.6,0.5-1.1,1-1.2l1.9-0.4c1.1-0.2,1.8-1.2,1.8-2.3V3.3c0-0.5,0.3-1,0.7-1.2l1.7-0.9C11,1,11.5,1,11.8,1.2l3.5,2v26.1L11.4,30.9z\n\t M30.8,16.1l-2.6,4.8c-0.1,0.1-0.1,0.2-0.1,0.4h-2.5c-0.3,0-0.7-0.1-0.9-0.4c-0.9-0.9-2.7-2.4-2.8-2.4l-0.6,0.8c0,0,1.9,1.6,2.7,2.4\n\tl0.1,0.1l-2,2.3l0.8,0.7l2.1-2.4c0.2,0.1,0.4,0.1,0.6,0.1h2.3v1.7c0,0.6-0.4,1.2-1.1,1.3L26,25.7c-1,0.2-1.8,1.1-1.8,2.1l-0.1,0.8\n\tc0,0.3-0.2,0.7-0.5,0.9L22,30.7c-0.4,0.3-0.9,0.4-1.4,0.2l-4.1-1.6V3.2l3.5-2c0.4-0.2,0.9-0.2,1.2,0L23,2.1c0.4,0.2,0.7,0.7,0.7,1.2\n\tv1.2c0,1.1,0.8,2,1.8,2.3l1.9,0.4c0.6,0.1,1,0.6,1,1.2l0.1,1.6v0.1h-2.4c-0.3,0-0.7-0.1-0.9-0.4c-0.8-0.8-2.7-2.4-2.8-2.4L21.9,8\n\tc0,0,1.9,1.6,2.7,2.4l0.1,0.1l-2,2.3l0.8,0.7l2.1-2.4C25.8,11,26,11,26.2,11h2.7l1.9,3.8C31.1,15.2,31.1,15.7,30.8,16.1L30.8,16.1z"})))},g=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisbloom.io",title:"RedisBloom module provides four datatypes, a Scalable Bloom Filter and Cuckoo Filter, a Count-Mins-Sketch and a Top-K."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisBloom",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M17.4,24.3c-0.9,0.3-1.8,0.3-2.7,0l-8-3.2L6.3,22l8,3.2c1.1,0.4,2.3,0.4,3.5,0l8-3.2l-0.4-0.9L17.4,24.3z\n\t\t  M17,29.4c-0.7,0.2-1.4,0.2-2,0l-6.2-2.3L8.4,28l6.2,2.3c0.9,0.3,1.8,0.3,2.7,0l6.2-2.3l-0.4-0.9L17,29.4z M17.4,18.9\n\t\t c-0.9,0.4-1.9,0.4-2.9,0L3.9,14.4l-0.4,0.9l10.7,4.4c1.2,0.5,2.5,0.5,3.6,0l10.7-4.4l-0.4-0.9L17.4,18.9z M31.1,6.8l-12.9-5\n\t\t c-1.4-0.5-2.9-0.5-4.3,0l-13,5C0.2,7.1-0.2,7.9,0.1,8.6C0.2,9,0.5,9.3,0.9,9.4l13,5c1.4,0.5,2.9,0.5,4.3,0l12.9-5\n\t\t c0.7-0.3,1.1-1.1,0.8-1.8C31.8,7.3,31.5,7,31.1,6.8z M30.7,8.5l-13,5c-1.2,0.4-2.4,0.4-3.6,0l-13-5C1.1,8.4,0.9,8.2,1,8\n\t\t c0-0.1,0.1-0.2,0.2-0.2l13-5c1.2-0.4,2.4-0.4,3.6,0l13,5C31,7.9,31.1,8.1,31,8.3C30.9,8.4,30.9,8.5,30.7,8.5z"})))},E=function(e){var t=e.size,n=e.fill,c=e.title,a=Object(o.g)(e,["size","fill","title"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redis.io",title:c||"Redis is a in-memory data structure store, used as a database, cache and message broker."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisCube",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},a),u.a.createElement("path",{fill:n||"#DC382D",d:"M31.7,16.3c-0.4-0.1-1.5-0.5-2.7-1c1.3-0.6,2.4-1,2.8-1.3c0.8-0.4,1.6-0.9,1.6-1.6c0-0.7-0.8-1-1.7-1.3\n\tc-0.6-0.2-1.7-0.6-3.1-1.2c1.5-0.6,2.6-1.2,3.2-1.4c0.8-0.4,1.5-0.9,1.5-1.6c0-0.7-0.8-1-1.6-1.3c-0.8-0.3-3.5-1.3-6.1-2.3\n\tc-2.6-1-5.3-2.1-6.1-2.4c-1.8-0.6-2.8-0.7-4.8,0.1c-1.9,0.8-11.5,4.5-13,5.1C1.1,6.4,0.3,6.8,0.3,7.5c0,0.7,0.8,1.2,1.6,1.6\n\tC2.4,9.3,3.6,9.8,5,10.4c-0.6,0.2-1.2,0.5-1.7,0.7c-0.7,0.3-1.2,0.5-1.5,0.6c-0.7,0.3-1.5,0.6-1.5,1.3c0,0.7,0.8,1.2,1.6,1.6\n\tc0.5,0.2,1.5,0.7,2.8,1.2l-0.3,0.1c-1.2,0.5-2.1,0.8-2.6,1c-0.7,0.3-1.5,0.7-1.5,1.3c0,0.6,0.6,1,1.6,1.6c1.3,0.7,6.6,2.8,10.1,4.3\n\tc1.2,0.5,2.2,0.9,2.6,1.1c0.8,0.4,1.4,0.5,2.1,0.5c0.8,0,1.7-0.3,2.8-0.9c0.9-0.5,4-1.8,6.8-3c2.5-1.1,4.8-2.1,5.6-2.5\n\tc0.8-0.4,1.6-0.9,1.6-1.6C33.3,17,32.5,16.6,31.7,16.3z M1.3,7.5C1.3,7.5,1.3,7.5,1.3,7.5c0,0,0.2-0.2,0.9-0.5\n\tc1.5-0.6,11.1-4.3,13-5.1c1.8-0.8,2.5-0.6,4-0.1c0.8,0.3,3.5,1.3,6.1,2.3c2.6,1,5.3,2.1,6.1,2.4C32.1,6.8,32.3,7,32.3,7\n\tc0,0.1-0.2,0.3-1,0.7c-0.8,0.4-3.1,1.4-5.6,2.5c-2.9,1.2-5.9,2.5-6.8,3c-1.9,1-2.7,0.9-4,0.3c-0.7-0.3-3.2-1.4-5.9-2.5\n\tC6.2,9.8,3.2,8.6,2.3,8.1C1.5,7.8,1.3,7.5,1.3,7.5z M1.3,13C1.3,13,1.3,13,1.3,13c0,0,0.2-0.2,0.8-0.5C2.4,12.5,3,12.3,3.7,12\n\tc0.8-0.3,1.7-0.7,2.7-1l0,0c0.8,0.3,1.6,0.6,2.4,1c2.7,1.1,5.2,2.1,5.9,2.4c0.8,0.4,1.4,0.5,2.1,0.5c0.8,0,1.7-0.3,2.8-0.9\n\tc0.9-0.5,4-1.8,6.8-3c0.4-0.2,0.8-0.3,1.2-0.5c1.7,0.7,3.4,1.3,4.1,1.5c0.6,0.2,0.9,0.4,0.9,0.4c-0.1,0.1-0.3,0.3-1,0.6\n\tc-0.8,0.4-3.1,1.4-5.6,2.5c-2.9,1.2-5.9,2.5-6.8,3c-1.9,1-2.7,0.9-4,0.3c-0.7-0.3-3.2-1.4-5.9-2.5c-2.9-1.2-5.9-2.4-6.8-2.8\n\tC1.5,13.3,1.3,13,1.3,13z M31.3,18.4c-0.8,0.4-3.1,1.4-5.6,2.5c-2.9,1.2-5.9,2.5-6.8,3c-1.9,1-2.7,0.9-4,0.3\n\tc-0.4-0.2-1.3-0.6-2.6-1.1c-3.3-1.3-8.7-3.6-10-4.2c-0.7-0.3-0.9-0.5-1-0.6c0.1-0.1,0.3-0.2,0.8-0.4c0.5-0.2,1.4-0.5,2.6-1L6,16.3\n\tc0.9,0.4,1.8,0.7,2.7,1.1c2.6,1.1,5.1,2.1,5.8,2.4c0.8,0.4,1.4,0.5,2.1,0.5c0.8,0,1.7-0.3,2.8-0.9c0.9-0.5,4-1.8,6.8-3\n\tc0.5-0.2,1-0.4,1.5-0.6c1.6,0.6,3.1,1.2,3.7,1.4c0.6,0.2,0.9,0.4,0.9,0.4C32.2,17.8,32,18,31.3,18.4z"})))},b=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisearch.io",title:"RediSearch is a Full-Text and Secondary Index engine over Redis."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RediSearch",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M18.7,5.9c-0.6-0.4-1.2-0.8-1.9-1c-1.5-0.5-3.2-0.5-4.7,0c-0.7,0.2-1.4,0.6-1.9,1c-0.6,0.4-1,0.9-1.4,1.5\n\tC8.1,8.6,8,10.1,8.7,11.3c0.3,0.6,0.8,1.1,1.3,1.6c0.6,0.5,1.3,0.8,2,1c0.8,0.3,1.6,0.4,2.4,0.4c0.8,0,1.6-0.1,2.4-0.4\n\tc0.7-0.2,1.4-0.6,2-1s1-0.9,1.3-1.6c0.7-1.2,0.7-2.7,0-3.9C19.7,6.8,19.2,6.3,18.7,5.9z M19.2,10.8c-0.3,0.5-0.6,0.9-1.1,1.2\n\tc-0.5,0.4-1.1,0.7-1.7,0.9c-1.4,0.4-2.8,0.4-4.2,0c-0.6-0.2-1.2-0.5-1.7-0.9c-0.4-0.3-0.8-0.8-1.1-1.2C9.2,10.4,9,9.9,9,9.4\n\ts0.2-1,0.4-1.4c0.3-0.5,0.7-0.9,1.1-1.2C11,6.4,11.6,6.1,12.2,6c1.3-0.4,2.7-0.4,4.1,0c0.6,0.2,1.1,0.5,1.6,0.8\n\tC18.3,7.1,18.7,7.5,19,8C19.7,8.8,19.7,9.9,19.2,10.8z M30,18.2c-0.1-0.2-0.1-0.4-0.2-0.6s-0.2-0.4-0.4-0.5\n\tc-0.2-0.2-0.3-0.3-0.5-0.5l-3.5-2.7c0.2-0.2,0.3-0.5,0.4-0.8c0.2-0.4,0.4-0.8,0.5-1.2s0.2-0.8,0.3-1.3c0.1-0.4,0.1-0.9,0.1-1.3\n\tc0-1.3-0.4-2.6-1.1-3.7c-0.7-1.2-1.6-2.2-2.7-3c-1.2-0.9-2.5-1.5-3.9-2c-3.1-0.9-6.3-0.9-9.4,0C8.2,1,6.9,1.7,5.7,2.6\n\tc-1.1,0.8-2,1.8-2.8,3c-0.6,1.2-1,2.4-1,3.8c0,1.3,0.3,2.6,0.9,3.8s1.5,2.3,2.6,3.1c1.2,0.9,2.5,1.7,4,2.1c2.1,0.7,4.3,0.9,6.4,0.7\n\tc0.5,0,1-0.1,1.5-0.2s1-0.2,1.5-0.4c0.4-0.1,0.8-0.3,1.1-0.4l3.8,2.9c0.2,0.1,0.4,0.3,0.6,0.4s0.4,0.2,0.7,0.3\n\tc0.2,0.1,0.5,0.1,0.7,0.2c0.5,0.1,1,0.1,1.5,0c0.2,0,0.5-0.1,0.7-0.2s0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.4\n\tc0.2-0.1,0.3-0.3,0.5-0.5c0.1-0.2,0.3-0.3,0.4-0.5s0.2-0.4,0.2-0.6s0.1-0.4,0.1-0.6C30.1,18.6,30.1,18.4,30,18.2z M29.1,19.2\n\tc0,0.1-0.1,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.2\n\tc-0.2,0.1-0.4,0.1-0.5,0.1c-0.4,0.1-0.8,0.1-1.2,0c-0.2,0-0.4-0.1-0.5-0.1c-0.2-0.1-0.3-0.1-0.5-0.2s-0.3-0.2-0.4-0.3L20.1,17\n\tl-0.3,0.1c-0.4,0.2-0.9,0.3-1.3,0.5c-0.4,0.1-0.9,0.3-1.4,0.3s-0.9,0.2-1.4,0.2c-2,0.2-4.1,0-6-0.7c-1.3-0.4-2.6-1.1-3.7-2\n\tc-1-0.8-1.8-1.7-2.4-2.8c-0.5-1-0.8-2.2-0.8-3.3c0-1.2,0.4-2.3,1-3.3s1.5-2,2.5-2.7c1.1-0.8,2.3-1.4,3.6-1.8c2.9-0.9,5.9-0.9,8.8,0\n\tc1.3,0.4,2.5,1,3.6,1.8c1,0.7,1.8,1.6,2.4,2.7c0.6,1,0.9,2.1,1,3.3c0,0.4,0,0.8-0.1,1.1c-0.1,0.4-0.1,0.7-0.3,1.1\n\tc-0.1,0.4-0.3,0.7-0.5,1.1c-0.2,0.4-0.4,0.7-0.6,1L24,14.1l4.3,3.3c0.1,0.1,0.2,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4\n\tc0.1,0.1,0.1,0.2,0.2,0.4c0,0.1,0.1,0.3,0.1,0.4C29.1,19,29.1,19.1,29.1,19.2z M28.7,24.9c-0.1,0.1-0.2,0.2-0.3,0.3\n\tc-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.2c-0.2,0.1-0.4,0.1-0.5,0.1c-0.4,0.1-0.8,0.1-1.2,0c-0.2,0-0.4-0.1-0.5-0.1\n\tc-0.2-0.1-0.3-0.1-0.5-0.2s-0.3-0.2-0.4-0.3L20.1,22l-0.3,0.1c-0.4,0.2-0.9,0.3-1.3,0.5c-0.4,0.1-0.9,0.3-1.4,0.3s-0.9,0.2-1.4,0.2\n\tc-2,0.2-4.1,0-6-0.7c-1.3-0.4-2.6-1.1-3.7-2c-1-0.8-1.8-1.7-2.4-2.8c-0.2-0.3-0.3-0.7-0.4-1L2.3,17c0.1,0.4,0.3,0.8,0.5,1.1\n\tc0.6,1.2,1.5,2.3,2.6,3.1c1.2,0.9,2.5,1.7,4,2.1c2.1,0.7,4.3,0.9,6.4,0.7c0.5,0,1-0.1,1.5-0.2s1-0.2,1.5-0.4\n\tc0.4-0.1,0.8-0.3,1.1-0.4l3.8,2.9c0.2,0.1,0.4,0.3,0.6,0.4s0.4,0.2,0.7,0.3c0.2,0.1,0.5,0.1,0.7,0.2c0.5,0.1,1,0.1,1.5,0\n\tc0.2,0,0.5-0.1,0.7-0.2s0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.4c0.2-0.1,0.3-0.3,0.5-0.5c0.1-0.2,0.3-0.3,0.3-0.5L29,24.5\n\tC28.9,24.7,28.8,24.8,28.7,24.9z M28.7,30c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.2\n\tc-0.2,0.1-0.4,0.1-0.5,0.1c-0.4,0.1-0.8,0.1-1.2,0c-0.2,0-0.4-0.1-0.5-0.1c-0.2-0.1-0.3-0.1-0.5-0.2s-0.3-0.2-0.4-0.3L20.2,27\n\tl-0.3,0.1c-0.4,0.2-0.9,0.3-1.3,0.5c-0.5,0.1-0.9,0.3-1.4,0.3s-0.9,0.2-1.4,0.2c-2,0.2-4.1,0-6-0.7c-1.3-0.4-2.6-1.1-3.7-2\n\tc-1-0.8-1.8-1.7-2.4-2.8c-0.2-0.3-0.3-0.7-0.4-1l-0.9,0.3c0.1,0.4,0.3,0.8,0.5,1.1c0.6,1.2,1.5,2.3,2.6,3.1c1.2,0.9,2.5,1.7,4,2.1\n\tc2.1,0.7,4.3,0.9,6.4,0.7c0.5-0.1,1-0.1,1.5-0.2s1-0.2,1.5-0.4c0.4-0.1,0.8-0.3,1.1-0.4l3.8,2.9c0.2,0.1,0.4,0.3,0.6,0.4\n\ts0.4,0.2,0.7,0.3c0.2,0.1,0.5,0.1,0.7,0.2c0.5,0.1,1,0.1,1.5,0c0.2,0,0.5-0.1,0.7-0.2s0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.4\n\tc0.2-0.1,0.3-0.3,0.5-0.5c0.1-0.2,0.3-0.3,0.3-0.5l-1-0.1C28.9,29.8,28.8,29.9,28.7,30z"})))},C=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisgears.io",title:"RedisGears is a serverless engine for transaction, batch and event-driven data processing in Redis."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisGears",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M23,16c0-3.9-3.1-7-7-7s-7,3.1-7,7s3.1,7,7,7S23,19.9,23,16z M16,22c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6\n        S19.3,22,16,22z M24.5,3.9c-0.6,0.6-1.6,0.8-2.4,0.4c-0.7-0.4-1.4-0.7-2.2-0.9c-0.9-0.3-1.4-1.1-1.4-2V0h-1v1.4c0,1.3,0.9,2.5,2.1,3\n        c0.7,0.2,1.4,0.5,2,0.8C22,5.4,22.5,5.5,23,5.5c0.8,0,1.6-0.3,2.2-0.9l1-1l-0.7-0.7L24.5,3.9z M30.6,13.5c-0.9,0-1.7-0.6-2-1.4\n        c-0.2-0.8-0.5-1.5-0.9-2.2c-0.4-0.8-0.2-1.8,0.4-2.4l1-1l-0.7-0.7l-1,1c-1,0.9-1.2,2.4-0.6,3.6c0.3,0.6,0.6,1.3,0.8,2\n        c0.4,1.3,1.6,2.1,3,2.1H32v-1H30.6L30.6,13.5z M27.6,19.6c-0.2,0.7-0.5,1.4-0.8,2c-0.6,1.2-0.4,2.7,0.6,3.6l1,1l0.7-0.7l-1-1\n        c-0.6-0.6-0.8-1.6-0.4-2.4c0.4-0.7,0.7-1.4,0.9-2.2c0.3-0.9,1.1-1.4,2-1.4H32v-1h-1.4C29.2,17.5,28,18.3,27.6,19.6z M21.6,26.8\n        c-0.6,0.3-1.3,0.6-2,0.8c-1.3,0.4-2.1,1.6-2.1,3V32h1v-1.4c0-0.9,0.6-1.7,1.4-2c0.8-0.2,1.5-0.5,2.2-0.9c0.8-0.4,1.8-0.2,2.4,0.4\n        l1,1l0.7-0.7l-1-1C24.3,26.4,22.8,26.2,21.6,26.8z M12.4,27.6c-0.7-0.2-1.4-0.5-2-0.8c-1.2-0.6-2.7-0.4-3.6,0.6l-1,1l0.7,0.7l1-1\n        c0.6-0.6,1.6-0.8,2.4-0.4c0.7,0.4,1.4,0.7,2.2,0.9c0.9,0.3,1.4,1.1,1.4,2V32h1v-1.4C14.5,29.2,13.7,28,12.4,27.6z M4.4,19.6\n        c-0.4-1.3-1.6-2.1-3-2.1H0v1h1.4c0.9,0,1.7,0.6,2,1.4c0.2,0.8,0.5,1.5,0.9,2.2c0.4,0.8,0.2,1.8-0.4,2.4l-1,1l0.7,0.7l1-1\n        c1-0.9,1.2-2.4,0.6-3.6C4.9,21,4.6,20.3,4.4,19.6z M3.6,5.7L2.9,6.4l1,1C4.5,8,4.7,9,4.3,9.8c-0.4,0.7-0.7,1.4-0.9,2.2\n        c-0.3,0.9-1.1,1.4-2,1.4H0v1h1.4c1.3,0,2.5-0.9,3-2.1c0.2-0.7,0.5-1.4,0.8-2c0.6-1.2,0.4-2.7-0.6-3.6L3.6,5.7z M9,5.6\n        c0.5,0,1-0.1,1.4-0.3c0.6-0.3,1.3-0.6,2-0.8c1.3-0.4,2.1-1.6,2.1-3V0h-1v1.4c0,0.9-0.6,1.7-1.4,2C11.3,3.7,10.6,4,9.9,4.3\n        C9.1,4.7,8.1,4.6,7.5,3.9l-1-1L5.7,3.6l1,1C7.3,5.2,8.1,5.6,9,5.6z"})))},y=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisgraph.io",title:"RedisGraph is the first queryable Property Graph database to use sparse matrices to represent the adjacency matrix in graphs and linear algebra to query the graph."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisGraph",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M0,4.8v22.3C0,29.8,2.2,32,4.8,32v-1C2.7,31,1,29.3,1,27.2V4.8C1,2.7,2.7,1,4.8,1V0C2.2,0,0,2.2,0,4.8z M27.2,0\n\tv1C29.3,1,31,2.7,31,4.8v22.3c0,2.1-1.7,3.8-3.8,3.8v1c2.7,0,4.8-2.2,4.8-4.8V4.8C32,2.2,29.8,0,27.2,0z M8,5c1.7,0,3,1.3,3,3\n\ts-1.3,3-3,3S5,9.7,5,8S6.3,5,8,5z M16,5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,5,16,5z M16,10c-1.1,0-2-0.9-2-2s0.9-2,2-2\n\ts2,0.9,2,2S17.1,10,16,10z M24,5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S25.7,5,24,5z M24,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2\n\tS25.1,10,24,10z M8,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S9.7,13,8,13z M8,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,18,8,18z\n\t M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M24,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S25.7,13,24,13z M24,18\n\tc-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S25.1,18,24,18z M8,21c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S6.3,21,8,21z M16,21\n\tc-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,21,16,21z M16,26c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S17.1,26,16,26z M24,21\n\tc-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S25.7,21,24,21z M24,26c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S25.1,26,24,26z"})))},S=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redisjson.io",title:"RedisJSON is a Redis module that implements ECMA-404 The JSON Data Interchange Standard as a native data type."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisJSON",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M22,1H10.6C8.3,1,7.1,3.9,7.1,6v0.9h1V6c0-1.7,0.9-4,2.5-4h10.8l0.4,4.9c0,2.2,1.8,3.9,3.9,3.9h5.2V27\n\tc0,1.6-1.3,2.9-2.9,2.9H11c-1.6,0-2.9-1.3-2.9-2.9v-1.7h-1V27c0,2.2,1.8,3.9,3.9,3.9h17c2.2,0,3.9-1.8,3.9-3.9V10.1L22,1z M22.8,6.9\n\tl-0.3-4.2l7.7,7.1h-4.5C24.1,9.9,22.8,8.5,22.8,6.9L22.8,6.9z M3.3,8.6C3.1,8.7,2.9,8.8,2.7,8.9C2.6,9.1,2.4,9.3,2.4,9.5\n\tc-0.1,0.3-0.1,0.6-0.1,0.9v2.8c0,0.4-0.1,0.9-0.3,1.3c-0.3,0.3-0.6,0.5-1,0.4v0.9c0.4,0,0.7,0.2,0.9,0.5c0.2,0.4,0.3,0.8,0.3,1.3\n\tv2.8c0,0.3,0,0.6,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6C2.9,22,3,22.2,3.2,22.2c0.2,0.1,0.4,0.1,0.6,0.1h1v-0.8H4.1c-0.2,0-0.3,0-0.5-0.1\n\tc-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.3-0.1-0.4s0-0.3,0-0.5v-2.8c0-0.3,0-0.6-0.2-0.9c0-0.3-0.1-0.5-0.3-0.6\n\tc-0.1-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.2-0.1-0.4-0.1l0,0c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.2-0.2,0.3-0.4,0.4-0.6\n\tc0.1-0.3,0.2-0.6,0.2-0.9v-2.8c0-0.2,0-0.3,0-0.4c0-0.1,0.1-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.3C3.8,9.4,4,9.4,4.1,9.4h0.7V8.5h-1\n\tC3.7,8.5,3.5,8.6,3.3,8.6z M7.5,22l1.3-3.6H7.6l-1,3.6H7.5z M8.6,13.9c0.3-0.3,0.3-0.8,0-1.2c-0.3-0.3-0.9-0.3-1.2,0l0,0\n\tc-0.3,0.3-0.3,0.8,0,1.2C7.7,14.3,8.2,14.3,8.6,13.9C8.6,14,8.6,13.9,8.6,13.9z M13.7,15.5c-0.2,0.1-0.3,0.2-0.5,0.3\n\tc-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.3-0.2,0.6-0.2,0.9v2.8c0,0.2,0,0.3,0,0.5c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.3\n\tc-0.1,0.1-0.3,0.1-0.5,0.1H11v0.8h1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.4-0.2,0.5-0.3c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.3,0.1-0.6,0.1-0.9\n\tv-2.8c0-0.4,0.1-0.9,0.3-1.3c0.2-0.3,0.6-0.5,0.9-0.5v-0.9c-0.4,0-0.7-0.2-0.9-0.4c-0.2-0.4-0.3-0.8-0.3-1.3v-2.8\n\tc0-0.3,0-0.6-0.1-0.9c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.1-0.3-0.3-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.1h-1v0.9h0.7c0.2,0,0.3,0,0.5,0.1\n\tc0.1,0.1,0.2,0.2,0.3,0.3s0.1,0.3,0.1,0.4c0,0.1,0,0.3,0,0.4v2.8c0,0.3,0,0.6,0.2,0.9c0.1,0.2,0.2,0.4,0.4,0.6\n\tc0.1,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.2,0.1,0.4,0.1l0,0C14,15.4,13.8,15.5,13.7,15.5z"})))},z=function(e){var t=e.size,n=e.fill,c=Object(o.g)(e,["size","fill"]);return u.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://redistimeseries.io",title:"RedisTimeSeries is a Redis Module adding a Time Series data structure to Redis."},u.a.createElement("svg",Object(o.a)({version:"1.1",id:"RedisTimeSeries",x:"0px",y:"0px",viewBox:"0 0 32 32",width:t,height:t},c),u.a.createElement("path",{fill:n||"#DC382D",d:"M8.5,16.7l3.1,3.1l7.3-7.3l3.7,3.7l8.6-8.6l-0.7-0.7l-7.8,7.8L19,11l-7.3,7.3L9.2,16L8.5,16.7z M26.9,21.7\n\tl-0.7,0.7l3.8,3.8H9.3c-1.9,0-3.4-1.5-3.4-3.4V2.1l3.8,3.7l0.7-0.7L5.5,0.3L0.6,5.1l0.7,0.7l3.5-3.5v20.4c0,2.4,2,4.4,4.4,4.4h20.4\n\tl-3.5,3.5l0.7,0.7l4.9-4.8L26.9,21.7z"})))},M=function(e){var t=1,n=a.REDIS;if(!e.some((function(e){return e.name===n})))return n;for(;e.some((function(e){return e.name===n+"-"+t}));)t++;return n+"-"+t},O=function(e){var t=e.dataSources,n=Object(s.useCallback)((function(){Object(d.getBackendSrv)().post("/api/datasources",{name:M(t),type:c.REDIS,access:"proxy"}).then((function(e){var t=e.datasource;d.locationService.push("/datasources/edit/"+t.uid)}))}),[t]);return 0===t.length?u.a.createElement("div",null,u.a.createElement("div",{className:"page-action-bar"},u.a.createElement("div",{className:"page-action-bar__spacer"}),u.a.createElement(f.Button,{onClick:n,icon:"plus",variant:"secondary"},"Add Redis Data Source")),u.a.createElement(f.Alert,{title:"Please add Redis Data Sources.",severity:"info"},u.a.createElement("p",null,"You can add as many data sources as you want to support multiple Redis databases."))):u.a.createElement("div",null,u.a.createElement("div",{className:"page-action-bar"},u.a.createElement("div",{className:"page-action-bar__spacer"}),u.a.createElement(f.Button,{onClick:n,icon:"plus",variant:"secondary"},"Add Redis Data Source")),u.a.createElement("section",{className:"card-section card-list-layout-list"},u.a.createElement("ol",{className:"card-list"},t.map((function(e,t){var n,c,a,i,l,o,s,d,p,M,O,x,R,j=(null===(n=e.commands)||void 0===n?void 0:n.length)?"Working as expected":"Can't retrieve a list of commands. Check that user has permissions to see a list of all commands.",L=(null===(c=e.commands)||void 0===c?void 0:c.length)?"#DC382D":"#A7A7A7",D=e.url?e.url:"Not specified";return u.a.createElement("li",{className:"card-item-wrapper",key:t,"aria-label":"check-card"},u.a.createElement("a",{className:"card-item",href:"d/RpSjVqWMz/redis-overview?var-redis="+e.name},u.a.createElement(f.HorizontalGroup,{justify:"space-between"},u.a.createElement(f.HorizontalGroup,{justify:"flex-start"},u.a.createElement(f.Container,{margin:"xs"},u.a.createElement(E,{size:32,fill:L,title:j})),u.a.createElement(f.VerticalGroup,null,u.a.createElement("div",{className:"card-item-name"},e.name),u.a.createElement("div",{className:"card-item-sub-name"},D))),u.a.createElement(f.HorizontalGroup,{justify:"flex-end"},!(null===(a=e.commands)||void 0===a?void 0:a.length)&&u.a.createElement("div",{className:"card-item-header"},u.a.createElement("div",{className:"card-item-type"},j)),(e.jsonData.tlsAuth||e.jsonData.acl)&&u.a.createElement(f.Container,null,u.a.createElement(m,{size:24,fill:L})),(null===(i=e.jsonData.client)||void 0===i?void 0:i.match(/cluster|sentinel/))&&u.a.createElement(f.Container,null,u.a.createElement(v,{size:24,fill:L})),-1!==(null===(l=e.commands)||void 0===l?void 0:l.indexOf(r.REDISGEARS))&&u.a.createElement(f.Container,null,u.a.createElement(C,{size:24,fill:L})),-1!==(null===(o=e.commands)||void 0===o?void 0:o.indexOf(r.REDISTIMESERIES))&&u.a.createElement(f.Container,null,u.a.createElement(z,{size:24,fill:L})),-1!==(null===(s=e.commands)||void 0===s?void 0:s.indexOf(r.REDISAI))&&u.a.createElement(f.Container,null,u.a.createElement(h,{size:24,fill:L})),-1!==(null===(d=e.commands)||void 0===d?void 0:d.indexOf(r.REDISEARCH))&&u.a.createElement(f.Container,null,u.a.createElement(b,{size:24,fill:L})),-1!==(null===(p=e.commands)||void 0===p?void 0:p.indexOf(r.REDISJSON))&&u.a.createElement(f.Container,null,u.a.createElement(S,{size:24,fill:L})),-1!==(null===(M=e.commands)||void 0===M?void 0:M.indexOf(r.REDISGRAPH))&&u.a.createElement(f.Container,null,u.a.createElement(y,{size:24,fill:L})),-1!==(null===(O=e.commands)||void 0===O?void 0:O.indexOf(r.REDISBLOOM))&&u.a.createElement(f.Container,null,u.a.createElement(g,{size:24,fill:L}))),u.a.createElement(f.HorizontalGroup,{justify:"flex-end"},(null===(x=e.commands)||void 0===x?void 0:x.length)&&u.a.createElement(f.Container,null,u.a.createElement(f.LinkButton,{href:"d/_SGxCBNGk/redis-cli?var-redis="+e.name,title:"Redis CLI",icon:"monitor"},"CLI")),-1!==(null===(R=e.commands)||void 0===R?void 0:R.indexOf(r.REDISGEARS))&&u.a.createElement(f.Container,null,u.a.createElement(f.LinkButton,{href:"d/xFPiNzLMz/redis-gears?var-redis="+e.name,title:"RedisGears",icon:"cog"},"RedisGears")),u.a.createElement(f.Container,null,u.a.createElement(f.LinkButton,{variant:"secondary",href:"datasources/edit/"+e.id,title:"Data Source Settings",icon:"sliders-v-alt"},"Settings"))))))})))))},x=n(7),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0,dataSources:[]},t}return Object(o.c)(t,e),t.prototype.componentDidMount=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t=this;return Object(o.d)(this,(function(n){switch(n.label){case 0:return this.updateNav(),[4,Object(d.getBackendSrv)().get("/api/datasources").then((function(e){return e.filter((function(e){return e.type===c.REDIS}))}))];case 1:return e=n.sent(),[4,Object(d.getBackendSrv)().get("/api/frontend/settings").then((function(e){e.datasources&&(d.config.datasources=e.datasources,d.config.defaultDatasource=e.defaultDatasource)}))];case 2:return n.sent(),[4,Promise.all(e.map((function(e){return Object(o.b)(t,void 0,void 0,(function(){var t,n,c;return Object(o.d)(this,(function(a){switch(a.label){case 0:return e.commands=[],[4,Object(d.getDataSourceSrv)().get(e.name)];case 1:return t=a.sent(),n=t.query({targets:[{refId:"A",query:r.COMMAND}]}),(c=Object(x.lastValueFrom)(n))?[4,c.then((function(e){return e.data})).then((function(t){return t.forEach((function(t){t.fields.forEach((function(t){var n;(n=e.commands).push.apply(n,Object(o.h)([],Object(o.f)(t.values.toArray().filter((function(e){return e.match(/\S+\.\S+|INFO/i)})).map((function(e){return e.toUpperCase()}))),!1))}))}))})).catch((function(){}))]:[2];case 2:return a.sent(),[2]}}))}))})))];case 3:return n.sent(),this.setState({dataSources:e,loading:!1}),[2]}}))}))},t.prototype.updateNav=function(){var e=this.props,t=e.path,n=e.onNavChanged,c=e.meta,a=[];a.push({text:"Home",url:t,id:"home",icon:"fa fa-fw fa-home",active:!0});var r={text:"Redis Application",img:c.info.logos.large,subTitle:"Redis Data Source Manager",url:t,children:a};n({node:r,main:r})},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.dataSources;return t?u.a.createElement(f.Alert,{title:"Loading...",severity:"info"},u.a.createElement("p",null,"Loading time depends on the number of configured data sources.")):u.a.createElement(O,{dataSources:n})},t}(s.PureComponent);n.d(t,"plugin",(function(){return j}));var j=(new l.AppPlugin).setRootPage(R).addConfigPage({title:"Config",body:p,id:"config"})}])}));
//# sourceMappingURL=module.js.map