!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.rjcv=e():t.rjcv=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){t.exports=function(t,e,n,r,i,o){var u,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(u=t,a=t.default);var s="function"==typeof a?a.options:a;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId=i);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},s._ssrRegister=l):r&&(l=r),l){var f=s.functional,d=f?s.render:s.beforeCreate;f?(s._injectStyles=l,s.render=function(t,e){return l.call(e),d(t,e)}):s.beforeCreate=d?[].concat(d,l):[l]}return{esModule:u,exports:a,options:s}}},function(t,e,n){"use strict";var r=n(6);e.a={name:"rjcv-card",components:{"rjcv-image":r.a},props:{lazyUpdate:{type:[Boolean,Number,String],default:""},src:{type:String,default:""},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""},type:{type:String,default:""},way:{type:[Number,String],default:1},quality:{type:[Number,String],default:85},useWebp:{type:Boolean,default:!0},lazyEl:{type:[Boolean,String],default:!1},defaultSrc:{type:[Boolean,String],default:!1},title:{type:String,default:"商品名称"},desc:{type:String,default:"商品描述"},price:{type:String,default:"商品价格"}},data:function(){return{product:n(22)}}}},function(t,e,n){"use strict";var r=n(9),i=n(17);e.a={name:"rjcv-image",props:{lazyUpdate:{type:[Boolean,Number,String],default:""},src:{type:String,default:""},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""},type:{type:String,default:""},way:{type:[Number,String],default:1},quality:{type:[Number,String],default:85},useWebp:{type:Boolean,default:!0},lazyEl:{type:[Boolean,String],default:!1},defaultSrc:{type:[Boolean,String],default:!1}},filters:{imageview:r.a},directives:{lazyloading:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);n.d(e,"default",function(){return r.a})},function(t,e,n){"use strict";function r(t){n(5)}var i=n(1),o=n(23),u=n(0),a=r,c=u(i.a,o.a,!1,a,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var r=n(7);n.d(e,"a",function(){return r.a})},function(t,e,n){"use strict";function r(t){n(8)}var i=n(2),o=n(21),u=n(0),a=r,c=u(i.a,o.a,!1,a,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var r=n(10),i=(n.n(r),n(11)),o=n(13),u=n(15),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n=arguments[2],r=arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:85,s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];try{return"string"!=typeof t?t:t?(t=Object(i.a)(t),r=Object(o.a)()&&s?"webp":r,Object(u.a)(t,e,n,r,a,c)):""}catch(e){return console.log(e),t}};e.a=a},function(t,e){},function(t,e,n){"use strict";var r=n(12),i=(n.n(r),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return"string"!=typeof t?t:t?t.replace(/^http(s?):/,""):""}catch(e){return console.log(e),t}});e.a=i},function(t,e){},function(t,e,n){"use strict";var r=n(14),i=(n.n(r),function(){try{return"undefined"!=typeof window&&0===document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(t){return console.log(t),!1}});e.a=i},function(t,e){},function(t,e,n){"use strict";var r=n(16),i=(n.n(r),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n=arguments[2],r=arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:85;try{return"string"!=typeof t?t:t?/image\.myqcloud\.com/.test(t)?(t=t.split("?")[0],i>=0&&i<=5?(t=t+"?imageView2/"+i,e&&(t=t+"/w/"+e),n&&(t=t+"/h/"+n),t=r?t+"/q/"+o+"/format/"+r:t+"/q/"+o):t=t+"?imageMogr2/"+i,t):t:""}catch(e){return console.log(e),t}});e.a=i},function(t,e){},function(t,e,n){"use strict";function r(t){setTimeout(function(){if(u.a.is(t))return void(t.getAttribute("lazy-src")&&t.setAttribute("src",t.getAttribute("lazy-src")));t.vm.action||(t.vm.action=function(){u.a.is(t)&&t.getAttribute("lazy-src")&&t.setAttribute("src",t.getAttribute("lazy-src"))},t.vm.lazyEl.addEventListener("scroll",t.vm.action))},0)}var i=n(18),o=(n.n(i),n(19)),u=n.n(o),a=n(20),c=n.n(a),s={bind:function(t){t.vm={src:t.getAttribute("lazy-src"),lazyEl:document.querySelector(t.getAttribute("lazy-el"))||window,lazyDefaultSrc:t.getAttribute("lazy-defaultSrc"),action:null}},inserted:function(t){t.style["background-image"]="url("+(t.vm.lazyDefaultSrc||c.a)+")",t.style["background-size"]="100% 100%",t.onload=function(){t.style["background-image"]="",t.style["background-size"]="",t.vm.action&&(t.vm.lazyEl.removeEventListener("scroll",t.vm.action),t.vm.action=null)},r(t)},update:function(t){r(t)},unbind:function(t){t.vm.action&&(t.vm.lazyEl.removeEventListener("scroll",t.vm.action),t.vm.action=null)}};e.a=s},function(t,e){},function(t,e,n){/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(2),i=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=i.default},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=r(i),u=n(3),a=r(u),c=n(4);e.default=function(){if("undefined"!=typeof window){var t=["scroll","resize","load"],e={history:[]},n={offset:{},threshold:0,test:c.inViewport},r=(0,o.default)(function(){e.history.forEach(function(t){e[t].check()})},100);t.forEach(function(t){return addEventListener(t,r)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(r).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var i=function(t){if("string"==typeof t){var r=[].slice.call(document.querySelectorAll(t));return e.history.indexOf(t)>-1?e[t].elements=r:(e[t]=(0,a.default)(r,n),e.history.push(t)),e[t]}};return i.offset=function(t){if(void 0===t)return n.offset;var e=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(e(t)?function(e){return n.offset[e]=t}:function(r){return e(t[r])?n.offset[r]=t[r]:null}),n.offset},i.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?n.threshold=t:n.threshold},i.test=function(t){return"function"==typeof t?n.test=t:n.test},i.is=function(t){return n.test(t,n)},i.offset(0),i}}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,r){n(this,t),this.options=r,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return r(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),r=t.current.indexOf(e),i=r>-1,o=n&&!i,u=!n&&i;o&&(t.current.push(e),t.emit("enter",e)),u&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e.default=function(t,e){return new i(t,e)}},function(t,e){"use strict";function n(t,e){var n=t.getBoundingClientRect(),r=n.top,i=n.right,o=n.bottom,u=n.left,a=n.width,c=n.height,s={t:o,r:window.innerWidth-u,b:window.innerHeight-r,l:i},l={x:e.threshold*a,y:e.threshold*c};return s.t>e.offset.top+l.y&&s.r>e.offset.right+l.x&&s.b>e.offset.bottom+l.y&&s.l>e.offset.left+l.x}Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=n},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){function r(t,e,n){function r(e){var n=m,r=b;return m=b=void 0,z=e,x=t.apply(r,n)}function l(t){return z=t,C=setTimeout(p,e),A?r(t):x}function f(t){var n=t-E,r=t-z,i=e-n;return q?s(i,S-r):i}function d(t){var n=t-E,r=t-z;return void 0===E||n>=e||n<0||q&&r>=S}function p(){var t=o();return d(t)?v(t):void(C=setTimeout(p,f(t)))}function v(t){return C=void 0,j&&m?r(t):(m=b=void 0,x)}function h(){void 0!==C&&clearTimeout(C),z=0,m=E=b=C=void 0}function y(){return void 0===C?x:v(o())}function g(){var t=o(),n=d(t);if(m=arguments,b=this,E=t,n){if(void 0===C)return l(E);if(q)return C=setTimeout(p,e),r(E)}return void 0===C&&(C=setTimeout(p,e)),x}var m,b,S,x,C,E,z=0,A=!1,q=!1,j=!0;if("function"!=typeof t)throw new TypeError(a);return e=u(e)||0,i(n)&&(A=!!n.leading,q="maxWait"in n,S=q?c(u(n.maxWait)||0,e):S,j="trailing"in n?!!n.trailing:j),g.cancel=h,g.flush=y,g}var i=n(1),o=n(8),u=n(10),a="Expected a function",c=Math.max,s=Math.min;t.exports=r},function(t,e,n){var r=n(6),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){function r(t,e,n){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),i(t,e,{leading:r,maxWait:e,trailing:a})}var i=n(7),o=n(1),u="Expected a function";t.exports=r},function(t,e){function n(t){return t}t.exports=n}])})},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazyloading",rawName:"v-lazyloading",value:t.lazyUpdate,expression:"lazyUpdate"}],staticClass:"rjcv-image",attrs:{"lazy-src":t._f("imageview")(t.src,t.width,t.height,t.type,t.way,t.quality,t.useWebp),"lazy-el":t.lazyEl,"lazy-defaultSrc":t.defaultSrc}})},i=[],o={render:r,staticRenderFns:i};e.a=o},function(t,e,n){t.exports=n.p+"__assets/img/product.a5b940f.png"},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rjcv-card"},[n("div",{staticClass:"rjcv-card-image"},[n("rjcv-image",{attrs:{lazyUpdate:t.lazyUpdate,src:t.src||t.product,width:t.width,height:t.height,type:t.type,way:t.way,quality:t.quality,useWebp:t.useWebp,lazyEl:t.lazyEl,defaultSrc:t.defaultSrc}})],1),t._v(" "),n("div",{staticClass:"rjcv-card-detail"},[t.title?n("div",{staticClass:"rjcv-card-title"},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t.desc?n("div",{staticClass:"rjcv-card-desc"},[t._t("desc",[t._v(t._s(t.desc))])],2):t._e(),t._v(" "),t.price?n("div",{staticClass:"rjcv-card-price"},[t._t("price",[t._v(t._s(t.price))])],2):t._e()])])},i=[],o={render:r,staticRenderFns:i};e.a=o}])});