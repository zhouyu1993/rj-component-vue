!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.rjcv=e():t.rjcv=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){t.exports=function(t,e,r,n,s,o){var c,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(c=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId=s);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):n&&(f=n),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(t,e){return f.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:c,exports:i,options:u}}},function(t,e,r){"use strict";var n=r(6);e.a={name:"rjcv-star",components:{"rjcv-icon":n.a},props:{score:{type:Number,default:10},canClick:{type:Boolean,default:!0}},data:function(){return{scoreArr:[{},{},{},{},{}],avg:this.score}},watch:{score:function(t){this.avg=t}},computed:{scoreClassArr:function(){this.avg>10?this.avg=10:this.avg<0&&(this.avg=0);var t=parseInt(this.avg/2,10);this.scoreArr.forEach(function(t){t.isCur=!1,t.isHalf=!1});for(var e=0;e<t;e+=1)this.scoreArr[e].isCur=!0;return this.avg%2!=0&&this.scoreArr[t]&&(this.scoreArr[t].isHalf=!0),this.scoreArr}},methods:{clickStar:function(t){this.canClick&&(this.avg=2*t,this.$emit("input",2*t))}}}},function(t,e,r){"use strict";e.a={name:"rjcv-icon",props:{name:{type:String,default:""}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4);r.d(e,"default",function(){return n.a})},function(t,e,r){"use strict";function n(t){r(5)}var s=r(1),o=r(10),c=r(0),i=n,a=c(s.a,o.a,!1,i,null,null);e.a=a.exports},function(t,e){},function(t,e,r){"use strict";var n=r(7);r.d(e,"a",function(){return n.a})},function(t,e,r){"use strict";function n(t){r(8)}var s=r(2),o=r(9),c=r(0),i=n,a=c(s.a,o.a,!1,i,null,null);e.a=a.exports},function(t,e){},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{staticClass:"rjcv-icon",class:"icon-"+t.name})},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rjcv-star"},t._l(t.scoreClassArr,function(e,n){return r("div",{key:n,staticClass:"rjcv-star-item",class:{"rjcv-star-hover":e.isCur,"rjcv-star-half":e.isHalf},on:{click:function(e){t.clickStar(n+1)}}},[r("rjcv-icon",{attrs:{name:"starfull"}}),t._v(" "),r("rjcv-icon",{attrs:{name:"starfull"}})],1)}))},s=[],o={render:n,staticRenderFns:s};e.a=o}])});