(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{118:function(t,e,n){var i=n(29),o=n(58);n(129)("keys",function(){return function(t){return o(i(t))}})},119:function(t,e,n){"use strict";var i=n(22),o=n(47),s=n(64),c=n(65);n(66)("match",1,function(t,e,n,r){return[function(n){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=r(n,t,this);if(e.done)return e.value;var a=i(t),l=String(this);if(!a.global)return c(a,l);var u=a.unicode;a.lastIndex=0;for(var d,h=[],f=0;null!==(d=c(a,l));){var v=String(d[0]);h[f]=v,""===v&&(a.lastIndex=s(l,o(a.lastIndex),u)),f++}return 0===f?null:h}]})},129:function(t,e,n){var i=n(26),o=n(62),s=n(27);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",c)}},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s});var i=function(){var t=window;if(null!=t.pageXOffset)return t.pageYOffset;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.scrollTop:e.body.scrollTop},o=function(){var t=window;if(null!=t.innerWidth)return t.innerHeight;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.clientHeight:e.body.clientHeight},s=function(t,e){if(t.indexOf(e))return t.indexOf(e);for(var n=-1,i=0;i<t.length;i++)if(t[i]===e){n=i;break}return n}},216:function(t,e,n){},32:function(t,e,n){"use strict";var i=n(37),o=n(43),s=n(13),c={name:"FlyInitDocs",components:{"f-progress-indicator":i.a,"f-back-top":o.a,"f-icon":s.a}},r=n(1),a=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("f-progress-indicator"),this._v(" "),e("f-back-top",{attrs:{right:100,bottom:100}})],1)},[],!1,null,"1babad99",null);e.a=a.exports},33:function(t,e,n){"use strict";n(12);var i=n(21),o={name:"FlySticky",props:{distance:{type:Number,default:0},position:{type:String,default:"top",validator:function(t){return["top","bottom"].indexOf(t)>-1}},eventBus:Object},data:function(){return{sticky:!1,width:void 0,left:void 0,height:void 0,top:void 0,bottom:void 0,viewportHeight:void 0}},created:function(){this.eventBus&&this.eventBus.$on("forceUpdate",this.forceUpdate)},mounted:function(){this.setViewPortHeight(),this.windowScrollHandler=this._windowScrollHandler.bind(this),window.addEventListener("scroll",this.windowScrollHandler),window.addEventListener("resize",this.setViewPortHeight)},beforeDestroy:function(){window.removeEventListener("scroll",this.windowScrollHandler),window.removeEventListener("resize",this.setViewPortHeight)},methods:{setViewPortHeight:function(){this.viewportHeight=Object(i.b)()},forceUpdate:function(){this.$refs.wrapper&&this._windowScrollHandler()},topAndHeight:function(){var t=this.$refs.wrapper.getBoundingClientRect(),e=t.top,n=t.height;return{top:e+window.scrollY,height:n}},computedTopDistance:function(t){if(window.scrollY>t-this.distance){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,o=e.width;this.height=n+"px",this.left=i+"px",this.width=o+"px",this.top=this.distance+"px",this.sticky=!0}else this.height=void 0,this.left=void 0,this.top=void 0,this.width=void 0,this.sticky=!1},computedBottomDistance:function(t){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,o=e.width;window.scrollY<t-this.viewportHeight+n+this.distance?(this.height=n+"px",this.left=i+"px",this.width=o+"px",this.bottom=this.distance+"px",this.sticky=!0):(this.height=void 0,this.left=void 0,this.bottom=void 0,this.width=void 0,this.sticky=!1)},_windowScrollHandler:function(){var t=this.topAndHeight().top;"top"===this.position?this.computedTopDistance(t):this.computedBottomDistance(t)}},computed:{classes:function(){return{sticky:this.sticky}}}},s=(n(36),n(1)),c=Object(s.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"f-sticky-wrapper",style:{height:this.height}},[e("div",{staticClass:"f-sticky",class:this.classes,style:{left:this.left,width:this.width,top:this.top,bottom:this.bottom}},[this._t("default")],2)])},[],!1,null,"24f86917",null);e.a=c.exports},35:function(t,e,n){"use strict";var i=n(14);n.n(i).a},36:function(t,e,n){"use strict";var i=n(15);n.n(i).a},37:function(t,e,n){"use strict";n(12);var i=n(21),o={name:"FlyProgressIndicator",data:function(){return{docHeight:0,viewPortHeight:0,sHeight:0,width:0}},props:{color:{type:String,default:"#137cbd"},zIndex:{type:Number,default:999}},mounted:function(){this.init()},computed:{getPercentWidthStyle:function(){return{width:100*this.width+"%",background:this.color,"z-index":this.zIndex}}},methods:{init:function(){this.width=this.calcWidthPercent(),window.addEventListener("scroll",this.bindScrollEvent)},calcWidthPercent:function(){this.docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),this.viewPortHeight=i.b(),this.sHeight=Math.max(this.docHeight-this.viewPortHeight,0);var t=i.a();return this.sHeight?t/this.sHeight:0},bindScrollEvent:function(){var t=this;window.requestAnimationFrame(function(){t.calcWidthPercent(),t.width=Math.min(i.a()/t.sHeight,1),1===t.width&&t.$emit("end")})}},beforeDestory:function(){window.removeEventListener("scroll",this.bindScrollEvent)}},s=(n(35),n(1)),c=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"f-progress-indicator",style:this.getPercentWidthStyle})},[],!1,null,"d62504e8",null);e.a=c.exports},38:function(t,e,n){"use strict";var i=n(13),o=n(33),s=n(0),c=(n(68),n(69)),r=n.n(c);s.a.use(r.a);var a={name:"FlyExampleCard",components:{"f-icon":i.a,"f-sticky":o.a},props:{source:Object},data:function(){return{codeVisible:!1,eventBus:new s.a,code:'\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n      '}},methods:{handerClick:function(){this.codeVisible=!this.codeVisible},enter:function(t,e){var n=this;t.style.height="auto";var i=t.getBoundingClientRect().height;t.style.height="0px",t.getBoundingClientRect(),t.style.height="".concat(i,"px"),t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})},leave:function(t,e){var n=this,i=t.getBoundingClientRect().height;t.style.height="".concat(i,"px"),t.getBoundingClientRect(),t.style.height="0px",t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})}}},l=(n(41),n(1)),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-card"},[n("div",{staticClass:"docs-source"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"expandHeight"},on:{enter:t.enter,leave:t.leave}},[t.codeVisible?n("div",{staticClass:"docs-expand"},[t.source.desc?n("div",{staticClass:"docs-description",domProps:{innerHTML:t._s(t.source.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"docs-code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.source.code,expression:"source.code"}]},[t._v("          "),n("code",{staticClass:"html"},[t._v("\n          ")]),t._v("\n        ")])])]):t._e()]),t._v(" "),t.codeVisible?[n("f-sticky",{attrs:{position:"bottom",eventBus:t.eventBus}},[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)])]:[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)]],2)},[],!1,null,"32279fa2",null);e.a=u.exports},41:function(t,e,n){"use strict";var i=n(17);n.n(i).a},42:function(t,e,n){"use strict";var i=n(18);n.n(i).a},43:function(t,e,n){"use strict";n(12);var i=n(13),o={slow:10,middle:8,quick:6},s={name:"FlyBackTop",props:{target:{type:String,default:"body"},visibilityHeight:{type:Number,default:200},right:{type:Number,default:40},bottom:{type:Number,default:40},speed:{type:String,default:"middle",validator:function(t){return["slow","middle","quick"].indexOf(t)>-1}}},components:{"f-icon":i.a},created:function(){this.bindEvent()},mounted:function(){this.onScrollEvent()},beforeDestroy:function(){document.removeEventListener("scroll",this.onScrollEvent)},data:function(){return{targetVisible:!1}},computed:{getStyle:function(){return{right:this.right+"px",bottom:this.bottom+"px"}}},methods:{bindEvent:function(){document.addEventListener("scroll",this.onScrollEvent)},onScrollEvent:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;this.targetVisible=Math.abs(t)>this.visibilityHeight},clickBackTop:function(){this.$emit("click"),this.onBackTop()},onBackTop:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;(t=Math.abs(t))>0&&(window.requestAnimationFrame(this.onBackTop),window.scrollTo(0,t-t/o[this.speed]))}}},c=(n(42),n(1)),r=Object(c.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.targetVisible,expression:"targetVisible"}],staticClass:"f-back-top",style:this.getStyle,on:{click:this.clickBackTop}},[this.$slots.default?[this._t("default")]:[e("div",{staticClass:"caret-up-wrapper"},[e("f-icon",{attrs:{name:"caret-up"}})],1)]],2)},[],!1,null,"c0d4403c",null);e.a=r.exports},508:function(t,e,n){"use strict";var i=n(26),o=n(117)(!0);i(i.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(46)("includes")},509:function(t,e,n){"use strict";var i=n(26),o=n(510);i(i.P+i.F*n(511)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},510:function(t,e,n){var i=n(77),o=n(25);t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},511:function(t,e,n){var i=n(11)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}},512:function(t,e,n){"use strict";var i=n(216);n.n(i).a},579:function(t,e,n){"use strict";n.r(e);var i=n(32),o=n(38),s=n(251),c=(n(31),n(118),n(119),n(12),n(508),n(509),{distance:{type:Number,default:0},delay:{type:Number,default:200}}),r=function(t){return function(t,e){try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n[e]}catch(n){return t.style[e]}}(t,"overflow").match(/(scroll|auto)/)},a=function(){l.forEach(function(t){var e=t.el,n=function(t){return Object.keys(c||{}).map(function(t){return[t,c[t]]}).reduce(function(e,n){var i=Object(s.a)(n,2),o=i[0],c=i[1],r=c.type,a=c.default,l=t.getAttribute("infinite-scroll-".concat(o));switch(r){case Number:l=l||a}return e[o]=l,e},{})}(e),i=n.distance,o=n.delay,r=e.getBoundingClientRect().height+e.scrollTop;Number(r)+Number(i)>=e.scrollHeight&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=!0;return function(){n&&(t.apply(this,arguments),n=!1),setTimeout(function(){return n=!0},e)}}(t.callback,o)()})},l=[],u={bind:function(t,e,n){var i=function(t){for(var e=t;e;){if([window,document,document.documentElement].includes(e))return window;if(r(e))return e;e=e.parentNode}return e}(t);l.push({el:i,callback:e.value}),i.addEventListener("scroll",a)}},d={desc:"通过设置 <code>infinite-scroll-distance</code>属性可以控制触发加载的距离阈值。",code:'\n<template>\n  <ul class="infinite-list" v-infinite-scroll="load" :infinite-scroll-distance="10" style="overflow: auto;">\n    <li v-for="i in count" :key="i">{{i}}</li>\n  </ul>\n</template>       \n\n<script>\n  export default {\n    data(){\n      count: 8\n    },\n    methods: {\n      load(){\n        this.count += 2;\n      }\n    }\n  }\n<\/script>\n\n<style lang="scss" scoped>\n.infinite-list {\n  padding: 0;\n  margin: 0;\n  height: 300px;\n  list-style: none;\n  li {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n    background: #e8f3fe;\n    margin: 10px;\n    color: #7dbcfc;\n  }\n}\n</style>\n'},h={name:"InfiniteScrollDemos",components:{"f-init-docs":i.a,"f-card":o.a},directives:{"infinite-scroll":u},data:function(){return{count:8,basicInfiniteScrollSource:d}},methods:{load:function(){this.count+=2}}},f=(n(512),n(1)),v=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-infinite-scroll"},[n("f-init-docs"),t._v(" "),n("h4",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),n("f-card",{attrs:{source:t.basicInfiniteScrollSource}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{overflow:"auto"},attrs:{"infinite-scroll-distance":10}},t._l(t.count,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在要实现滚动加载的列表上上添加"),e("code",[this._v("v-infinite-scroll")]),this._v("，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。")])}],!1,null,"f32c31ec",null);e.default=v.exports}}]);