(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e){},118:function(t,e,r){"use strict";r.r(e);var n,o,a,i,c,u,l,s,h,f=r(34),p=r(2),d=r.n(p),m=r(70),y=r.n(m),v=r(71),g=r.n(v),b=r(32),w=b.c.div(n||(n=Object(f.a)(["\n  padding: 40px;\n"]))),x=b.c.img(o||(o=Object(f.a)(["\n  margin-right: 30px;\n  margin-left: 20px;\n"]))),E=b.c.h1(a||(a=Object(f.a)(["\n  display: inline;\n  color: ",";\n"])),function(t){return t.theme.primary}),j=b.c.div(i||(i=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  flex-flow: row wrap;\n  padding-left: 40px;\n  padding-right: 40px;\n"]))),O=b.c.div(c||(c=Object(f.a)(["\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 40px;\n  padding: 20px;\n  padding-bottom: 40px;\n  border: 3px solid ",";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 300px;\n  width: 230px;\n  font-size: 20px;\n"])),function(t){return t.theme.secondary}),L=b.c.p(u||(u=Object(f.a)(["\n  color: ",";\n  font-size: 40px;\n"])),function(t){return t.theme.primary}),S=b.c.div(l||(l=Object(f.a)(["\n  /* display: inline-block; */\n  border: 3px solid ",";\n  border-radius: 3px;\n  float: right;\n  /* margin: 10px; */\n  padding: 10px;\n"])),function(t){return t.theme.secondary}),k=b.c.div(s||(s=Object(f.a)(["\n  border-radius: 50%;\n  background-color: red;\n  background-color: ",";\n  height: 15px;\n  width: 15px;\n  display: inline-block;\n  margin-right: 10px\n"])),function(t){return t.connected?"green":"red"}),_=b.c.h1(h||(h=Object(f.a)(["\n  color: ",";\n  width: 100%;\n  margin-bottom: 20px;\n"])),function(t){return t.theme.secondary}),N=r(0),G=r(8),A=function(t){var e=t.sensorData,r=e.typeID,n=e.data;return d.a.createElement(O,null,d.a.createElement("p",null,r),d.a.createElement("img",{src:"".concat(r,".svg"),alt:r,width:"75",height:"75"}),d.a.createElement(L,null,n.value," ",n.unit))},D=r(121);function F(){F=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&r.call(y,o)&&(d=y);var v=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(v,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(v),c(v,i,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var I;!function(t){t.light="Light Sensor",t.lightSimulator="light-virtual",t.humidity="Humidity Sensor",t.humiditySimulator="humidity-virtual",t.temperature="Temperature Sensor",t.temperatureSimulator="temperature-virtual",t.co2Simulator="co2-virtual",t.lamp="Lamp",t.lampSimulator="lamp-virtual",t.heater="Heater",t.heaterSimulator="heater-virtual",t.humidifier="Humidifier",t.humidifierSimulator="humidifier-virtual",t.fan="Fan",t.fanSimulator="fan-virtual",t.nothingReceivedYet="No Data"}(I||(I={}));var T=function(t){var e=t.connected;return d.a.createElement(S,null,d.a.createElement(k,{connected:e}),"Device ",e||d.a.createElement(d.a.Fragment,null,"not")," connected")};function P(){P=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&r.call(y,o)&&(d=y);var v=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(v,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(v),c(v,i,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var R={typeID:I.nothingReceivedYet,instanceID:"",location:"",timestamp:"",data:{value:0,unit:""}},Y=function(){var t=Object(p.useState)(R),e=Object(G.a)(t,2),r=e[0],n=e[1],o=Object(p.useState)(R),a=Object(G.a)(o,2),i=a[0],c=a[1],u=Object(p.useState)(R),l=Object(G.a)(u,2),s=l[0],h=l[1],f=Object(p.useState)(R),m=Object(G.a)(f,2),y=m[0],v=m[1],g=Object(p.useState)(R),b=Object(G.a)(g,2),w=b[0],x=b[1],E=Object(p.useState)(R),O=Object(G.a)(E,2),L=O[0],S=O[1],k=Object(p.useState)(R),Y=Object(G.a)(k,2),z=Y[0],B=Y[1],H=Object(p.useState)(R),M=Object(G.a)(H,2),U=M[0],q=M[1],C=Object(p.useState)({connected:!1,heartBeatReceived:!1}),J=Object(G.a)(C,2),K=J[0],Q=J[1],W=function(){var t=Object(N.a)(P().mark(function t(e){return P().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.body),Q({connected:!0,heartBeatReceived:!0}),t.t0=e.body.typeID,t.next=t.t0===I.light?5:t.t0===I.lightSimulator?5:t.t0===I.temperature?7:t.t0===I.temperatureSimulator?7:t.t0===I.humidity?9:t.t0===I.humiditySimulator?9:t.t0===I.co2Simulator?11:t.t0===I.lamp?13:t.t0===I.lampSimulator?13:t.t0===I.heater?15:t.t0===I.heaterSimulator?15:t.t0===I.humidifier?17:t.t0===I.humidifierSimulator?17:t.t0===I.fan?19:t.t0===I.fanSimulator?19:20;break;case 5:return n(e.body),t.abrupt("break",20);case 7:return c(e.body),t.abrupt("break",20);case 9:return h(e.body),t.abrupt("break",20);case 11:return v(e.body),t.abrupt("break",20);case 13:return x(e.body),t.abrupt("break",20);case 15:return S(e.body),t.abrupt("break",20);case 17:return B(e.body),t.abrupt("break",20);case 19:q(e.body);case 20:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return Object(p.useEffect)(function(){return function(t){var e=new D.a("Endpoint=sb://greenhouse-iot.servicebus.windows.net/;SharedAccessKeyName=smart-greenhouse;SharedAccessKey=wq9l2WnId9+TQIiNsoH81x4Gn9k4sRsjCtC/H4AqyhA="),r=e.createReceiver("sensor-data","UISubscription"),n=e.createReceiver("actuator-state","UISubscription"),o=function(){var t=Object(N.a)(F().mark(function t(e){return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();r.subscribe({processMessage:t,processError:o}),n.subscribe({processMessage:t,processError:o})}(W)},[]),Object(p.useEffect)(function(){fetch("https://smart-greenhouse-cloud-services.azurewebsites.net/api/read-from-database?code=W7qOp0zom2o0i_zDJNtURXSuvkyHVNS-ojTNqAwYnEh8AzFuiYfUAQ==").then(function(t){return t.json()}).then(function(t){t.light&&n(t.light),t.humidity&&h(t.humidity),t.temperature&&c(t.temperature),t.co2&&v(t.co2),t.lamp&&x(t.lamp),t.fan&&q(t.fan)})},[]),Object(p.useEffect)(function(){setInterval(function(){!1===K.heartBeatReceived?Q({connected:!1,heartBeatReceived:!1}):Q({connected:!0,heartBeatReceived:!1})},3e4)},[]),d.a.createElement(d.a.Fragment,null,d.a.createElement(T,{connected:K.connected}),d.a.createElement(j,null,d.a.createElement(_,null,"Sensors"),d.a.createElement(A,{sensorData:r}),d.a.createElement(A,{sensorData:i}),d.a.createElement(A,{sensorData:s}),d.a.createElement(A,{sensorData:y})),d.a.createElement(j,null,d.a.createElement(_,null,"Actuators"),d.a.createElement(A,{sensorData:w}),d.a.createElement(A,{sensorData:L}),d.a.createElement(A,{sensorData:z}),d.a.createElement(A,{sensorData:U})))};var z,B=function(){return d.a.createElement(w,null,d.a.createElement(x,{src:g.a,alt:"logo",width:"75",height:"75"}),d.a.createElement(E,null,"SMART PLANTHOUSE"),d.a.createElement(Y,null))},H=Object(b.b)(z||(z=Object(f.a)(['\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Montserrat", sans-serif;\n    background-color: #ECF8F2\n}\n'])));y.a.createRoot(document.getElementById("root")).render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(b.a,{theme:{primary:"#5ABA63",secondary:"#252626"}},d.a.createElement(H,null),d.a.createElement(B,null))))},62:function(t,e){},63:function(t,e){},71:function(t,e,r){t.exports=r.p+"static/media/logo.7a907a46.svg"},77:function(t,e,r){t.exports=r(118)}},[[77,2,1]]]);
//# sourceMappingURL=main.0aaa6337.chunk.js.map