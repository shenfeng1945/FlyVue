(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{11:function(t,e,n){var i=n(56)("wks"),s=n(48),o=n(20).Symbol,r="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=r&&o[t]||(r?o:s)("Symbol."+t))}).store=i},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e){t.exports={}},194:function(t,e,n){},195:function(t,e,n){},196:function(t,e,n){},21:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o});var i=function(){var t=window;if(null!=t.pageXOffset)return t.pageYOffset;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.scrollTop:e.body.scrollTop},s=function(){var t=window;if(null!=t.innerWidth)return t.innerHeight;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.clientHeight:e.body.clientHeight},o=function(t,e){if(t.indexOf(e))return t.indexOf(e);for(var n=-1,i=0;i<t.length;i++)if(t[i]===e){n=i;break}return n}},29:function(t,e,n){var i=n(25);t.exports=function(t){return Object(i(t))}},30:function(t,e,n){var i=n(23).f,s=n(28),o=n(11)("toStringTag");t.exports=function(t,e,n){t&&!s(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},31:function(t,e,n){for(var i=n(55),s=n(58),o=n(24),r=n(20),c=n(16),a=n(19),l=n(11),u=l("iterator"),d=l("toStringTag"),h=a.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=s(f),p=0;p<v.length;p++){var g,m=v[p],b=f[m],x=r[m],y=x&&x.prototype;if(y&&(y[u]||c(y,u,h),y[d]||c(y,d,m),a[m]=h,b))for(g in i)y[g]||o(y,g,i[g],!0)}},32:function(t,e,n){"use strict";var i=n(37),s=n(43),o=n(13),r={name:"FlyInitDocs",components:{"f-progress-indicator":i.a,"f-back-top":s.a,"f-icon":o.a}},c=n(1),a=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("f-progress-indicator"),this._v(" "),e("f-back-top",{attrs:{right:100,bottom:100}})],1)},[],!1,null,"1babad99",null);e.a=a.exports},33:function(t,e,n){"use strict";n(12);var i=n(21),s={name:"FlySticky",props:{distance:{type:Number,default:0},position:{type:String,default:"top",validator:function(t){return["top","bottom"].indexOf(t)>-1}},eventBus:Object},data:function(){return{sticky:!1,width:void 0,left:void 0,height:void 0,top:void 0,bottom:void 0,viewportHeight:void 0}},created:function(){this.eventBus&&this.eventBus.$on("forceUpdate",this.forceUpdate)},mounted:function(){this.setViewPortHeight(),this.windowScrollHandler=this._windowScrollHandler.bind(this),window.addEventListener("scroll",this.windowScrollHandler),window.addEventListener("resize",this.setViewPortHeight)},beforeDestroy:function(){window.removeEventListener("scroll",this.windowScrollHandler),window.removeEventListener("resize",this.setViewPortHeight)},methods:{setViewPortHeight:function(){this.viewportHeight=Object(i.b)()},forceUpdate:function(){this.$refs.wrapper&&this._windowScrollHandler()},topAndHeight:function(){var t=this.$refs.wrapper.getBoundingClientRect(),e=t.top,n=t.height;return{top:e+window.scrollY,height:n}},computedTopDistance:function(t){if(window.scrollY>t-this.distance){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,s=e.width;this.height=n+"px",this.left=i+"px",this.width=s+"px",this.top=this.distance+"px",this.sticky=!0}else this.height=void 0,this.left=void 0,this.top=void 0,this.width=void 0,this.sticky=!1},computedBottomDistance:function(t){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,s=e.width;window.scrollY<t-this.viewportHeight+n+this.distance?(this.height=n+"px",this.left=i+"px",this.width=s+"px",this.bottom=this.distance+"px",this.sticky=!0):(this.height=void 0,this.left=void 0,this.bottom=void 0,this.width=void 0,this.sticky=!1)},_windowScrollHandler:function(){var t=this.topAndHeight().top;"top"===this.position?this.computedTopDistance(t):this.computedBottomDistance(t)}},computed:{classes:function(){return{sticky:this.sticky}}}},o=(n(36),n(1)),r=Object(o.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"f-sticky-wrapper",style:{height:this.height}},[e("div",{staticClass:"f-sticky",class:this.classes,style:{left:this.left,width:this.width,top:this.top,bottom:this.bottom}},[this._t("default")],2)])},[],!1,null,"24f86917",null);e.a=r.exports},35:function(t,e,n){"use strict";var i=n(14);n.n(i).a},36:function(t,e,n){"use strict";var i=n(15);n.n(i).a},37:function(t,e,n){"use strict";n(12);var i=n(21),s={name:"FlyProgressIndicator",data:function(){return{docHeight:0,viewPortHeight:0,sHeight:0,width:0}},props:{color:{type:String,default:"#137cbd"},zIndex:{type:Number,default:999}},mounted:function(){this.init()},computed:{getPercentWidthStyle:function(){return{width:100*this.width+"%",background:this.color,"z-index":this.zIndex}}},methods:{init:function(){this.width=this.calcWidthPercent(),window.addEventListener("scroll",this.bindScrollEvent)},calcWidthPercent:function(){this.docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),this.viewPortHeight=i.b(),this.sHeight=Math.max(this.docHeight-this.viewPortHeight,0);var t=i.a();return this.sHeight?t/this.sHeight:0},bindScrollEvent:function(){var t=this;window.requestAnimationFrame(function(){t.calcWidthPercent(),t.width=Math.min(i.a()/t.sHeight,1),1===t.width&&t.$emit("end")})}},beforeDestory:function(){window.removeEventListener("scroll",this.bindScrollEvent)}},o=(n(35),n(1)),r=Object(o.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"f-progress-indicator",style:this.getPercentWidthStyle})},[],!1,null,"d62504e8",null);e.a=r.exports},38:function(t,e,n){"use strict";var i=n(13),s=n(33),o=n(0),r=(n(68),n(69)),c=n.n(r);o.a.use(c.a);var a={name:"FlyExampleCard",components:{"f-icon":i.a,"f-sticky":s.a},props:{source:Object},data:function(){return{codeVisible:!1,eventBus:new o.a,code:'\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n      '}},methods:{handerClick:function(){this.codeVisible=!this.codeVisible},enter:function(t,e){var n=this;t.style.height="auto";var i=t.getBoundingClientRect().height;t.style.height="0px",t.getBoundingClientRect(),t.style.height="".concat(i,"px"),t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})},leave:function(t,e){var n=this,i=t.getBoundingClientRect().height;t.style.height="".concat(i,"px"),t.getBoundingClientRect(),t.style.height="0px",t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})}}},l=(n(41),n(1)),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-card"},[n("div",{staticClass:"docs-source"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"expandHeight"},on:{enter:t.enter,leave:t.leave}},[t.codeVisible?n("div",{staticClass:"docs-expand"},[t.source.desc?n("div",{staticClass:"docs-description",domProps:{innerHTML:t._s(t.source.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"docs-code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.source.code,expression:"source.code"}]},[t._v("          "),n("code",{staticClass:"html"},[t._v("\n          ")]),t._v("\n        ")])])]):t._e()]),t._v(" "),t.codeVisible?[n("f-sticky",{attrs:{position:"bottom",eventBus:t.eventBus}},[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)])]:[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)]],2)},[],!1,null,"32279fa2",null);e.a=u.exports},40:function(t,e,n){"use strict";var i,s,o=n(71),r=RegExp.prototype.exec,c=String.prototype.replace,a=r,l=(i=/a/,s=/b*/g,r.call(i,"a"),r.call(s,"a"),0!==i.lastIndex||0!==s.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(a=function(t){var e,n,i,s,a=this;return u&&(n=new RegExp("^"+a.source+"$(?!\\s)",o.call(a))),l&&(e=a.lastIndex),i=r.call(a,t),l&&i&&(a.lastIndex=a.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)}),i}),t.exports=a},41:function(t,e,n){"use strict";var i=n(17);n.n(i).a},42:function(t,e,n){"use strict";var i=n(18);n.n(i).a},43:function(t,e,n){"use strict";n(12);var i=n(13),s={slow:10,middle:8,quick:6},o={name:"FlyBackTop",props:{target:{type:String,default:"body"},visibilityHeight:{type:Number,default:200},right:{type:Number,default:40},bottom:{type:Number,default:40},speed:{type:String,default:"middle",validator:function(t){return["slow","middle","quick"].indexOf(t)>-1}}},components:{"f-icon":i.a},created:function(){this.bindEvent()},mounted:function(){this.onScrollEvent()},beforeDestroy:function(){document.removeEventListener("scroll",this.onScrollEvent)},data:function(){return{targetVisible:!1}},computed:{getStyle:function(){return{right:this.right+"px",bottom:this.bottom+"px"}}},methods:{bindEvent:function(){document.addEventListener("scroll",this.onScrollEvent)},onScrollEvent:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;this.targetVisible=Math.abs(t)>this.visibilityHeight},clickBackTop:function(){this.$emit("click"),this.onBackTop()},onBackTop:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;(t=Math.abs(t))>0&&(window.requestAnimationFrame(this.onBackTop),window.scrollTo(0,t-t/s[this.speed]))}}},r=(n(42),n(1)),c=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.targetVisible,expression:"targetVisible"}],staticClass:"f-back-top",style:this.getStyle,on:{click:this.clickBackTop}},[this.$slots.default?[this._t("default")]:[e("div",{staticClass:"caret-up-wrapper"},[e("f-icon",{attrs:{name:"caret-up"}})],1)]],2)},[],!1,null,"c0d4403c",null);e.a=c.exports},45:function(t,e,n){"use strict";var i=n(67),s=n(26),o=n(24),r=n(16),c=n(19),a=n(57),l=n(30),u=n(59),d=n(11)("iterator"),h=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,n,v,p,g,m){a(n,e,v);var b,x,y,w=function(t){if(!h&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",C="values"==p,S=!1,k=t.prototype,E=k[d]||k["@@iterator"]||p&&k[p],L=E||w(p),I=p?C?w("entries"):L:void 0,T="Array"==e&&k.entries||E;if(T&&(y=u(T.call(new t)))!==Object.prototype&&y.next&&(l(y,_,!0),i||"function"==typeof y[d]||r(y,d,f)),C&&E&&"values"!==E.name&&(S=!0,L=function(){return E.call(this)}),i&&!m||!h&&!S&&k[d]||r(k,d,L),c[e]=L,c[_]=f,p)if(b={values:C?L:w("values"),keys:g?L:w("keys"),entries:I},m)for(x in b)x in k||o(k,x,b[x]);else s(s.P+s.F*(h||S),e,b);return b}},46:function(t,e,n){var i=n(11)("unscopables"),s=Array.prototype;null==s[i]&&n(16)(s,i,{}),t.exports=function(t){s[i][t]=!0}},478:function(t,e,n){"use strict";var i=n(194);n.n(i).a},479:function(t,e,n){"use strict";var i=n(195);n.n(i).a},480:function(t,e,n){"use strict";var i=n(196);n.n(i).a},50:function(t,e,n){var i=n(23).f,s=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in s||n(34)&&i(s,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},51:function(t,e,n){},53:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},55:function(t,e,n){"use strict";var i=n(46),s=n(53),o=n(19),r=n(49);t.exports=n(45)(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,s(1)):s(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},567:function(t,e,n){"use strict";n.r(e);var i=n(32),s=n(38),o=(n(31),n(50),n(12),n(13)),r=n(82),c={name:"FlySlides",props:{selected:String,autoPlay:{type:Boolean,default:!0},reverse:{type:Boolean,default:!1},autoPlayDelay:{type:Number,default:3e3},trigger:{type:String,default:"hover"},height:String,direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}}},components:{"f-icon":o.a,"f-button":r.a},data:function(){return{childrenLength:0,lastSelectedIndex:-1,timerId:null,touchPosition:{left:void 0,top:void 0,isTouch:!1},minDetectX:30,minDetectY:20}},computed:{selectedIndex:function(){return this.names.indexOf(this.selected)},names:function(){return this.$children.filter(function(t){return"FlySlidesItem"===t.$options.name}).map(function(t){return t.name})}},mounted:function(){this.updateChildren(),this.autoPlay&&this.playAutomatically(),this.childrenLength=this.names.length},updated:function(){this.updateChildren()},methods:{updateChildren:function(){var t=this,e=this.getSelected();this.$children.forEach(function(n){var i=!(t.selectedIndex>t.lastSelectedIndex);(t.timerId||t.touchPosition.isTouch)&&(t.lastSelectedIndex===t.names.length-1&&0===t.selectedIndex&&(i=!1),0===t.lastSelectedIndex&&t.selectedIndex===t.names.length-1&&(i=!0)),n.reverse=i,t.$nextTick(function(){n.selected=e})})},select:function(t){this.lastSelectedIndex=this.selectedIndex,this.$emit("update:selected",this.names[t])},getSelected:function(){return this.selected||this.$children[0].name},onMouseEnter:function(){this.pause()},onMouseLeave:function(){this.autoPlay&&this.playAutomatically()},onTouchStart:function(t){if(!(t.touches.length>1)){var e=t.touches[0],n=e.clientX,i=e.clientY;this.touchPosition={left:n,top:i,isTouch:!1},this.pause()}},onTouchMove:function(t){if("vertical"!==this.direction){var e=t.touches[0],n=e.clientX,i=e.clientY,s=this.touchPosition,o=s.left,r=s.isTouch,c=s.top;r||(n>o&&Math.abs(n-o)>this.minDetectX&&Math.abs(i-c)<this.minDetectY&&(this.goPrev(),this.touchPosition.isTouch=!0),n<o&&Math.abs(n-o)>this.minDetectX&&Math.abs(i-c)<this.minDetectY&&(this.goNext(),this.touchPosition.isTouch=!0))}},goNext:function(){var t=this.selectedIndex+1;t===this.names.length&&(t=0),this.select(t)},goPrev:function(){var t=this.selectedIndex-1;-1===t&&(t=this.names.length-1),this.select(t)},onTouchEnd:function(){this.autoPlay&&this.playAutomatically()},pause:function(){window.clearTimeout(this.timerId),this.timerId=null},playAutomatically:function(){var t=this;if(!this.timerId){var e=this.names;this.timerId=setTimeout(function n(){var i=e.indexOf(t.getSelected());t.reverse?i--:i++,-1===i&&(i=e.length-1),i===e.length&&(i=0),t.select(i),t.timerId=setTimeout(n,t.autoPlayDelay)},this.autoPlayDelay)}}}},a=(n(478),n(1)),l=Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f-slides",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd}},[n("div",{staticClass:"f-slides-window"},[n("div",{staticClass:"f-slides-wrapper",style:{height:t.height}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots",class:{"f-vertical":"vertical"===t.direction}},t._l(t.childrenLength,function(e){return n("span",{key:e,class:{active:t.selectedIndex===e-1},attrs:{"data-index":e-1},on:{mouseenter:function(n){"hover"===t.trigger&&t.select(e-1)},click:function(n){"click"===t.trigger&&t.select(e-1)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),"horizontal"===t.direction?[n("div",{staticClass:"f-slides-control-left",on:{click:t.goPrev}},[n("f-icon",{attrs:{name:"left"}})],1),t._v(" "),n("div",{staticClass:"f-slides-control-right",on:{click:t.goNext}},[n("f-icon",{attrs:{name:"right"}})],1)]:t._e()],2)])},[],!1,null,"37fcbf86",null).exports,u={name:"FlySlidesItem",props:{name:{type:String,required:!0}},data:function(){return{selected:void 0,reverse:!1,slideName:"slideX"}},computed:{visiable:function(){return this.name===this.selected}},beforeMount:function(){this.slideName="horizontal"===this.$parent.direction?"slideX":"slideY"}},d=(n(479),Object(a.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:this.slideName}},[this.visiable?e("div",{staticClass:"f-slides-item",class:{reverse:this.reverse}},[this._t("default")],2):this._e()])},[],!1,null,"00a4525f",null).exports),h={desc:"通过设置 <code>trigger</code>属性来触发指示器, 设置 <code>autoPlay</code>属性设置是否自动播放。",code:'\n<template>\n  <f-slides\n    :selected.sync="selected1"\n    :autoPlay="false"\n    trigger="hover"\n    height="150px">\n      <f-slides-item name="1">\n        <div class="box box1">Content 1</div>\n      </f-slides-item>\n      <f-slides-item name="2">\n        <div class="box box2">Content 2</div>\n      </f-slides-item>\n      <f-slides-item name="3">\n        <div class="box box3">Content 3</div>\n      </f-slides-item>\n  </f-slides>\n  \n  <f-slides\n    :selected.sync="selected2"\n    :autoPlay="true"\n    trigger="click"\n    height="150px">\n      <f-slides-item name="1">\n        <div class="box box1">Content 1</div>\n      </f-slides-item>\n      <f-slides-item name="2">\n        <div class="box box2">Content 2</div>\n      </f-slides-item>\n      <f-slides-item name="3">\n        <div class="box box3">Content 3</div>\n      </f-slides-item>\n  </f-slides>\n</template>\n\n<script>\n  export default {\n    data(){\n      return {\n        selected1: \'1\'\n        selected2: \'1\'\n      }\n    }\n  }\n<\/script>\n\n<style scoped lang="scss">\n.box {display: flex;justify-content: center;align-items: center;font-size: 24px;height: 100%;}\n.box1 {background: #48AFF0;}\n.box2 {background: #3dcc91;}\n.box3 {background: #ffb366;}\n</style>\n  '},f={desc:"",code:'\n<template>\n  <f-slides\n    :selected.sync="selected"\n    :autoPlay="false"\n    trigger="click"\n    direction="vertical"\n    height="150px">\n      <f-slides-item name="1">\n        <div class="box box1">Content 1</div>\n      </f-slides-item>\n      <f-slides-item name="2">\n        <div class="box box2">Content 2</div>\n      </f-slides-item>\n      <f-slides-item name="3">\n        <div class="box box3">Content 3</div>\n      </f-slides-item>\n  </f-slides>\n</template>\n\n<script>\n export default {\n   data(){\n     return {\n       selected: \'1\'\n     }\n   }\n }\n<\/script>\n\n<style scoped lang="scss">\n.box {display: flex;justify-content: center;align-items: center;font-size: 24px;height: 100%;}\n.box1 {background: #48AFF0;}\n.box2 {background: #3dcc91;}\n.box3 {background: #ffb366;}\n</style>\n  '},v={name:"CarouselDemos",components:{"f-init-docs":i.a,"f-card":s.a,"f-slides":l,"f-slides-item":d},data:function(){return{basicCarouselSource:h,directionCarouselSource:f,selected1:"1",selected2:"1",selected3:"1"}}},p=(n(480),Object(a.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-carousel"},[n("f-init-docs"),t._v(" "),n("h4",[t._v("基础用法")]),t._v(" "),n("p",[t._v("适用广泛的基础用法")]),t._v(" "),n("f-card",{attrs:{source:t.basicCarouselSource}},[n("div",{staticClass:"basic-slides"},[n("div",{staticClass:"basic-slide"},[n("p",[t._v("默认 Hover 指示器触发")]),t._v(" "),n("f-slides",{attrs:{selected:t.selected1,autoPlay:!1,trigger:"hover",height:"150px"},on:{"update:selected":function(e){t.selected1=e}}},[n("f-slides-item",{attrs:{name:"1"}},[n("div",{staticClass:"box box1"},[t._v("Content 1")])]),t._v(" "),n("f-slides-item",{attrs:{name:"2"}},[n("div",{staticClass:"box box2"},[t._v("Content 2")])]),t._v(" "),n("f-slides-item",{attrs:{name:"3"}},[n("div",{staticClass:"box box3"},[t._v("Content 3")])])],1)],1),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"basic-slide"},[n("p",[t._v("Click 指示器触发")]),t._v(" "),n("f-slides",{attrs:{selected:t.selected2,autoPlay:!0,trigger:"click",height:"150px"},on:{"update:selected":function(e){t.selected2=e}}},[n("f-slides-item",{attrs:{name:"1"}},[n("div",{staticClass:"box box1"},[t._v("Content 1")])]),t._v(" "),n("f-slides-item",{attrs:{name:"2"}},[n("div",{staticClass:"box box2"},[t._v("Content 2")])]),t._v(" "),n("f-slides-item",{attrs:{name:"3"}},[n("div",{staticClass:"box box3"},[t._v("Content 3")])])],1)],1)])]),t._v(" "),n("h4",[t._v("方向")]),t._v(" "),n("p",[t._v("默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。")]),t._v(" "),n("f-card",{attrs:{source:t.directionCarouselSource}},[n("f-slides",{attrs:{selected:t.selected3,autoPlay:!1,trigger:"click",direction:"vertical",height:"150px"},on:{"update:selected":function(e){t.selected3=e}}},[n("f-slides-item",{attrs:{name:"1"}},[n("div",{staticClass:"box box1"},[t._v("Content 1")])]),t._v(" "),n("f-slides-item",{attrs:{name:"2"}},[n("div",{staticClass:"box box2"},[t._v("Content 2")])]),t._v(" "),n("f-slides-item",{attrs:{name:"3"}},[n("div",{staticClass:"box box3"},[t._v("Content 3")])])],1)],1)],1)},[],!1,null,"73536dbf",null));e.default=p.exports},57:function(t,e,n){"use strict";var i=n(70),s=n(52),o=n(30),r={};n(16)(r,n(11)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(r,{next:s(1,n)}),o(t,e+" Iterator")}},59:function(t,e,n){var i=n(28),s=n(29),o=n(63)("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},60:function(t,e,n){var i=n(54),s=n(25);t.exports=function(t){return function(e,n){var o,r,c=String(s(e)),a=i(n),l=c.length;return a<0||a>=l?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===l||(r=c.charCodeAt(a+1))<56320||r>57343?t?c.charAt(a):o:t?c.slice(a,a+2):r-56320+(o-55296<<10)+65536}}},61:function(t,e,n){var i=n(44),s=n(11)("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?n:o?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},64:function(t,e,n){"use strict";var i=n(60)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},65:function(t,e,n){"use strict";var i=n(61),s=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},66:function(t,e,n){"use strict";n(74);var i=n(24),s=n(16),o=n(27),r=n(25),c=n(11),a=n(40),l=c("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=c(t),f=!o(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),v=f?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e}):void 0;if(!f||!v||"replace"===t&&!u||"split"===t&&!d){var p=/./[h],g=n(r,h,""[t],function(t,e,n,i,s){return e.exec===a?f&&!s?{done:!0,value:p.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],b=g[1];i(String.prototype,t,m),s(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},71:function(t,e,n){"use strict";var i=n(22);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},74:function(t,e,n){"use strict";var i=n(40);n(26)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},77:function(t,e,n){var i=n(39),s=n(44),o=n(11)("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==s(t))}},81:function(t,e,n){"use strict";var i=n(77),s=n(22),o=n(85),r=n(64),c=n(47),a=n(65),l=n(40),u=n(27),d=Math.min,h=[].push,f=!u(function(){RegExp(4294967295,"y")});n(66)("split",2,function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(s,t,e);for(var o,r,c,a=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(o=l.call(v,s))&&!((r=v.lastIndex)>d&&(a.push(s.slice(d,o.index)),o.length>1&&o.index<s.length&&h.apply(a,o.slice(1)),c=o[0].length,d=r,a.length>=f));)v.lastIndex===o.index&&v.lastIndex++;return d===s.length?!c&&v.test("")||a.push(""):a.push(s.slice(d)),a.length>f?a.slice(0,f):a}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var s=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,s,i):v.call(String(s),n,i)},function(t,e){var i=u(v,t,this,e,v!==n);if(i.done)return i.value;var l=s(t),h=String(this),p=o(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(f?"y":"g"),b=new p(f?l:"^(?:"+l.source+")",m),x=void 0===e?4294967295:e>>>0;if(0===x)return[];if(0===h.length)return null===a(b,h)?[h]:[];for(var y=0,w=0,_=[];w<h.length;){b.lastIndex=f?w:0;var C,S=a(b,f?h:h.slice(w));if(null===S||(C=d(c(b.lastIndex+(f?0:w)),h.length))===y)w=r(h,w,g);else{if(_.push(h.slice(y,w)),_.length===x)return _;for(var k=1;k<=S.length-1;k++)if(_.push(S[k]),_.length===x)return _;w=y=C}}return _.push(h.slice(y)),_}]})},82:function(t,e,n){"use strict";n(81);var i=n(13),s={name:"FlyButton",props:{leftIcon:String,rightIcon:String,loading:{type:Boolean,default:!1},intent:{type:String,default:"default",validator:function(t){return["default","primary","warn","success","danger"].indexOf(t)>-1}},circle:{type:Boolean,default:!1},disabled:Boolean,type:{type:String,default:"button",validator:function(t){return["button","submit"].indexOf(t)>-1}},minimal:Boolean},data:function(){return{noMargin:null}},components:{"f-icon":i.a},mounted:function(){this.$el.querySelector(".button-content").textContent||(this.noMargin={marginLeft:0,marginRight:0})},computed:{getLeftIconList:function(){return this.leftIcon.trim().split(" ")},getRightIconList:function(){return this.rightIcon.trim().split(" ")}}},o=(n(86),n(1)),r=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"f-button",class:[""+t.intent,t.circle&&"f-circle",t.loading&&"is-loading",(t.disabled||t.loading)&&"f-disabled",t.minimal&&"f-minimal"],attrs:{type:t.type,disabled:t.disabled||t.loading},on:{click:function(e){return t.$emit("click")}}},[t.leftIcon?[t._l(t.getLeftIconList,function(e){return[n("f-icon",{key:e,staticStyle:{"margin-right":"0.3em"},style:t.noMargin,attrs:{name:e}})]})]:t._e(),t._v(" "),t.loading?n("f-icon",{staticClass:"loading",attrs:{name:"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"button-content"},[t._t("default")],2),t._v(" "),t.rightIcon?[t._l(t.getRightIconList,function(e){return[n("f-icon",{key:e,staticStyle:{"margin-left":"0.3em"},style:t.noMargin,attrs:{name:e}})]})]:t._e()],2)},[],!1,null,"711321a4",null);e.a=r.exports},85:function(t,e,n){var i=n(22),s=n(78),o=n(11)("species");t.exports=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[o])?e:s(n)}},86:function(t,e,n){"use strict";var i=n(51);n.n(i).a}}]);