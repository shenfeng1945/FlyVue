(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(t,e,n){"use strict";var i=n(75);n.n(i).a},11:function(t,e,n){var i=n(56)("wks"),r=n(48),a=n(20).Symbol,s="function"==typeof a;(t.exports=function(t){return i[t]||(i[t]=s&&a[t]||(s?a:r)("Symbol."+t))}).store=i},116:function(t,e,n){"use strict";var i=n(13),r={name:"FlyInput",props:{value:{type:[String,Date]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String,default:""},clearable:{type:Boolean,default:!1},placeholder:{type:String},suffixIcon:{type:String},prefixIcon:{type:String},round:{type:Boolean,default:!1},intent:{type:String,default:"default",validator:function(t){return["default","primary","warn","success","danger"].indexOf(t)>-1}}},components:{"f-icon":i.a},computed:{showClear:function(){return this.clearable&&this.value&&!this.disabled}},methods:{clearValue:function(t){this.$emit("input",""),this.$emit("change","")},setNativeValue:function(t){this.$refs.input.value=t}}},a=(n(107),n(1)),s=Object(a.a)(r,function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"wrapper",class:{error:e.error}},[i("input",{ref:"input",staticClass:"f-input",class:(t={"f-inner":e.clearValue,"f-suffix-icon":!!e.suffixIcon,"f-prefix-icon":!!e.prefixIcon,"f-round":e.round},t[e.intent]=e.intent,t),attrs:{type:"text",disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.$emit("focus",t.target.value)},blur:function(t){return e.$emit("blur",t.target.value)},change:function(t){return e.$emit("change",t.target.value)}}}),e._v(" "),e.error?[i("f-icon",{staticClass:"error-icon",attrs:{name:"error"}}),e._v(" "),i("span",{staticClass:"error-message"},[e._v(e._s(e.error))])]:e._e(),e._v(" "),e.showClear?[i("div",{staticClass:"close-icon",class:{"suffix-close":e.suffixIcon},on:{click:e.clearValue}},[i("f-icon",{attrs:{name:"close"}})],1)]:e._e(),e._v(" "),e.suffixIcon?[i("div",{staticClass:"suffix-icon"},[i("f-icon",{attrs:{name:e.suffixIcon}})],1)]:e._e(),e._v(" "),e.prefixIcon?[i("div",{staticClass:"prefix-icon"},[i("f-icon",{attrs:{name:e.prefixIcon}})],1)]:e._e()],2)},[],!1,null,"2fc6d0db",null);e.a=s.exports},122:function(t,e,n){"use strict";var i=n(22),r=n(29),a=n(47),s=n(54),o=n(64),c=n(65),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(66)("replace",2,function(t,e,n,p){return[function(i,r){var a=t(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,a,r):n.call(String(a),i,r)},function(t,e){var r=p(n,t,this,e);if(r.done)return r.value;var d=i(t),f=String(this),h="function"==typeof e;h||(e=String(e));var m=d.global;if(m){var g=d.unicode;d.lastIndex=0}for(var b=[];;){var y=c(d,f);if(null===y)break;if(b.push(y),!m)break;""===String(y[0])&&(d.lastIndex=o(f,a(d.lastIndex),g))}for(var x,w="",C=0,_=0;_<b.length;_++){y=b[_];for(var S=String(y[0]),k=l(u(s(y.index),f.length),0),E=[],I=1;I<y.length;I++)E.push(void 0===(x=y[I])?x:String(x));var L=y.groups;if(h){var V=[S].concat(E,k,f);void 0!==L&&V.push(L);var H=String(e.apply(void 0,V))}else H=v(S,f,k,E,L,e);k>=C&&(w+=f.slice(C,k)+H,C=k+S.length)}return w+f.slice(C)}];function v(t,e,i,a,s,o){var c=i+t.length,l=a.length,u=h;return void 0!==s&&(s=r(s),u=f),n.call(o,u,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(c);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var f=d(u/10);return 0===f?n:f<=l?void 0===a[f-1]?r.charAt(1):a[f-1]+r.charAt(1):n}o=a[u-1]}return void 0===o?"":o})}})},14:function(t,e,n){},141:function(t,e,n){"use strict";n(31);var i=function(t){r.forEach(function(e){e.el===t.target||e.el.contains(t.target)||e.callbacks()})},r=[];document.addEventListener("click",i),e.a={bind:function(t,e,n){r.push({el:t,callbacks:e.value})}}},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e){t.exports={}},198:function(t,e,n){},199:function(t,e,n){},21:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a});var i=function(){var t=window;if(null!=t.pageXOffset)return t.pageYOffset;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.scrollTop:e.body.scrollTop},r=function(){var t=window;if(null!=t.innerWidth)return t.innerHeight;var e=t.document;return"CSS1Compat"===document.compatMode?e.documentElement.clientHeight:e.body.clientHeight},a=function(t,e){if(t.indexOf(e))return t.indexOf(e);for(var n=-1,i=0;i<t.length;i++)if(t[i]===e){n=i;break}return n}},29:function(t,e,n){var i=n(25);t.exports=function(t){return Object(i(t))}},30:function(t,e,n){var i=n(23).f,r=n(28),a=n(11)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&i(t,a,{configurable:!0,value:e})}},31:function(t,e,n){for(var i=n(55),r=n(58),a=n(24),s=n(20),o=n(16),c=n(19),l=n(11),u=l("iterator"),d=l("toStringTag"),f=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(h),v=0;v<p.length;v++){var m,g=p[v],b=h[g],y=s[g],x=y&&y.prototype;if(x&&(x[u]||o(x,u,f),x[d]||o(x,d,g),c[g]=f,b))for(m in i)x[m]||a(x,m,i[m],!0)}},32:function(t,e,n){"use strict";var i=n(37),r=n(43),a=n(13),s={name:"FlyInitDocs",components:{"f-progress-indicator":i.a,"f-back-top":r.a,"f-icon":a.a}},o=n(1),c=Object(o.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("f-progress-indicator"),this._v(" "),e("f-back-top",{attrs:{right:100,bottom:100}})],1)},[],!1,null,"1babad99",null);e.a=c.exports},33:function(t,e,n){"use strict";n(12);var i=n(21),r={name:"FlySticky",props:{distance:{type:Number,default:0},position:{type:String,default:"top",validator:function(t){return["top","bottom"].indexOf(t)>-1}},eventBus:Object},data:function(){return{sticky:!1,width:void 0,left:void 0,height:void 0,top:void 0,bottom:void 0,viewportHeight:void 0}},created:function(){this.eventBus&&this.eventBus.$on("forceUpdate",this.forceUpdate)},mounted:function(){this.setViewPortHeight(),this.windowScrollHandler=this._windowScrollHandler.bind(this),window.addEventListener("scroll",this.windowScrollHandler),window.addEventListener("resize",this.setViewPortHeight)},beforeDestroy:function(){window.removeEventListener("scroll",this.windowScrollHandler),window.removeEventListener("resize",this.setViewPortHeight)},methods:{setViewPortHeight:function(){this.viewportHeight=Object(i.b)()},forceUpdate:function(){this.$refs.wrapper&&this._windowScrollHandler()},topAndHeight:function(){var t=this.$refs.wrapper.getBoundingClientRect(),e=t.top,n=t.height;return{top:e+window.scrollY,height:n}},computedTopDistance:function(t){if(window.scrollY>t-this.distance){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,r=e.width;this.height=n+"px",this.left=i+"px",this.width=r+"px",this.top=this.distance+"px",this.sticky=!0}else this.height=void 0,this.left=void 0,this.top=void 0,this.width=void 0,this.sticky=!1},computedBottomDistance:function(t){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,i=e.left,r=e.width;window.scrollY<t-this.viewportHeight+n+this.distance?(this.height=n+"px",this.left=i+"px",this.width=r+"px",this.bottom=this.distance+"px",this.sticky=!0):(this.height=void 0,this.left=void 0,this.bottom=void 0,this.width=void 0,this.sticky=!1)},_windowScrollHandler:function(){var t=this.topAndHeight().top;"top"===this.position?this.computedTopDistance(t):this.computedBottomDistance(t)}},computed:{classes:function(){return{sticky:this.sticky}}}},a=(n(36),n(1)),s=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"f-sticky-wrapper",style:{height:this.height}},[e("div",{staticClass:"f-sticky",class:this.classes,style:{left:this.left,width:this.width,top:this.top,bottom:this.bottom}},[this._t("default")],2)])},[],!1,null,"24f86917",null);e.a=s.exports},35:function(t,e,n){"use strict";var i=n(14);n.n(i).a},36:function(t,e,n){"use strict";var i=n(15);n.n(i).a},37:function(t,e,n){"use strict";n(12);var i=n(21),r={name:"FlyProgressIndicator",data:function(){return{docHeight:0,viewPortHeight:0,sHeight:0,width:0}},props:{color:{type:String,default:"#137cbd"},zIndex:{type:Number,default:999}},mounted:function(){this.init()},computed:{getPercentWidthStyle:function(){return{width:100*this.width+"%",background:this.color,"z-index":this.zIndex}}},methods:{init:function(){this.width=this.calcWidthPercent(),window.addEventListener("scroll",this.bindScrollEvent)},calcWidthPercent:function(){this.docHeight=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),this.viewPortHeight=i.b(),this.sHeight=Math.max(this.docHeight-this.viewPortHeight,0);var t=i.a();return this.sHeight?t/this.sHeight:0},bindScrollEvent:function(){var t=this;window.requestAnimationFrame(function(){t.calcWidthPercent(),t.width=Math.min(i.a()/t.sHeight,1),1===t.width&&t.$emit("end")})}},beforeDestory:function(){window.removeEventListener("scroll",this.bindScrollEvent)}},a=(n(35),n(1)),s=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"f-progress-indicator",style:this.getPercentWidthStyle})},[],!1,null,"d62504e8",null);e.a=s.exports},38:function(t,e,n){"use strict";var i=n(13),r=n(33),a=n(0),s=(n(68),n(69)),o=n.n(s);a.a.use(o.a);var c={name:"FlyExampleCard",components:{"f-icon":i.a,"f-sticky":r.a},props:{source:Object},data:function(){return{codeVisible:!1,eventBus:new a.a,code:'\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n        <f-button intent="succuss">按钮</f-button>\n      '}},methods:{handerClick:function(){this.codeVisible=!this.codeVisible},enter:function(t,e){var n=this;t.style.height="auto";var i=t.getBoundingClientRect().height;t.style.height="0px",t.getBoundingClientRect(),t.style.height="".concat(i,"px"),t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})},leave:function(t,e){var n=this,i=t.getBoundingClientRect().height;t.style.height="".concat(i,"px"),t.getBoundingClientRect(),t.style.height="0px",t.addEventListener("transitionend",function(){e(),n.eventBus.$emit("forceUpdate")})}}},l=(n(41),n(1)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-card"},[n("div",{staticClass:"docs-source"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"expandHeight"},on:{enter:t.enter,leave:t.leave}},[t.codeVisible?n("div",{staticClass:"docs-expand"},[t.source.desc?n("div",{staticClass:"docs-description",domProps:{innerHTML:t._s(t.source.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"docs-code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.source.code,expression:"source.code"}]},[t._v("          "),n("code",{staticClass:"html"},[t._v("\n          ")]),t._v("\n        ")])])]):t._e()]),t._v(" "),t.codeVisible?[n("f-sticky",{attrs:{position:"bottom",eventBus:t.eventBus}},[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)])]:[n("div",{staticClass:"docs-control",on:{click:t.handerClick}},[t.codeVisible?[n("f-icon",{attrs:{name:"caret-up"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("隐藏代码")])]:[n("f-icon",{attrs:{name:"caret-down"}}),t._v(" "),n("span",{staticClass:"docs-span"},[t._v("显示代码")])]],2)]],2)},[],!1,null,"32279fa2",null);e.a=u.exports},40:function(t,e,n){"use strict";var i,r,a=n(71),s=RegExp.prototype.exec,o=String.prototype.replace,c=s,l=(i=/a/,r=/b*/g,s.call(i,"a"),s.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,i,r,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",a.call(c))),l&&(e=c.lastIndex),i=s.call(c,t),l&&i&&(c.lastIndex=c.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=c},41:function(t,e,n){"use strict";var i=n(17);n.n(i).a},42:function(t,e,n){"use strict";var i=n(18);n.n(i).a},43:function(t,e,n){"use strict";n(12);var i=n(13),r={slow:10,middle:8,quick:6},a={name:"FlyBackTop",props:{target:{type:String,default:"body"},visibilityHeight:{type:Number,default:200},right:{type:Number,default:40},bottom:{type:Number,default:40},speed:{type:String,default:"middle",validator:function(t){return["slow","middle","quick"].indexOf(t)>-1}}},components:{"f-icon":i.a},created:function(){this.bindEvent()},mounted:function(){this.onScrollEvent()},beforeDestroy:function(){document.removeEventListener("scroll",this.onScrollEvent)},data:function(){return{targetVisible:!1}},computed:{getStyle:function(){return{right:this.right+"px",bottom:this.bottom+"px"}}},methods:{bindEvent:function(){document.addEventListener("scroll",this.onScrollEvent)},onScrollEvent:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;this.targetVisible=Math.abs(t)>this.visibilityHeight},clickBackTop:function(){this.$emit("click"),this.onBackTop()},onBackTop:function(){var t=document.querySelector(this.target).getBoundingClientRect().top;(t=Math.abs(t))>0&&(window.requestAnimationFrame(this.onBackTop),window.scrollTo(0,t-t/r[this.speed]))}}},s=(n(42),n(1)),o=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.targetVisible,expression:"targetVisible"}],staticClass:"f-back-top",style:this.getStyle,on:{click:this.clickBackTop}},[this.$slots.default?[this._t("default")]:[e("div",{staticClass:"caret-up-wrapper"},[e("f-icon",{attrs:{name:"caret-up"}})],1)]],2)},[],!1,null,"c0d4403c",null);e.a=o.exports},45:function(t,e,n){"use strict";var i=n(67),r=n(26),a=n(24),s=n(16),o=n(19),c=n(57),l=n(30),u=n(59),d=n(11)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,p,v,m,g){c(n,e,p);var b,y,x,w=function(t){if(!f&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",_="values"==v,S=!1,k=t.prototype,E=k[d]||k["@@iterator"]||v&&k[v],I=E||w(v),L=v?_?w("entries"):I:void 0,V="Array"==e&&k.entries||E;if(V&&(x=u(V.call(new t)))!==Object.prototype&&x.next&&(l(x,C,!0),i||"function"==typeof x[d]||s(x,d,h)),_&&E&&"values"!==E.name&&(S=!0,I=function(){return E.call(this)}),i&&!g||!f&&!S&&k[d]||s(k,d,I),o[e]=I,o[C]=h,v)if(b={values:_?I:w("values"),keys:m?I:w("keys"),entries:L},g)for(y in b)y in k||a(k,y,b[y]);else r(r.P+r.F*(f||S),e,b);return b}},46:function(t,e,n){var i=n(11)("unscopables"),r=Array.prototype;null==r[i]&&n(16)(r,i,{}),t.exports=function(t){r[i][t]=!0}},486:function(t,e,n){"use strict";var i=n(198);n.n(i).a},487:function(t,e,n){"use strict";var i=n(199);n.n(i).a},50:function(t,e,n){var i=n(23).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(34)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},53:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},55:function(t,e,n){"use strict";var i=n(46),r=n(53),a=n(19),s=n(49);t.exports=n(45)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},568:function(t,e,n){"use strict";n.r(e);n(31);var i=n(32),r=n(38),a=(n(50),n(122),n(12),n(13)),s={name:"FlyCascaderItems",props:{items:Array,height:String,level:Number,selected:Array,loadData:Function,loadingItem:{type:Object,default:function(){return{}}},close:Function},data:function(){return{selectedCopy:this.selected}},components:{"f-icon":a.a},computed:{rightItems:function(){var t=this;if(this.selected&&this.selected[this.level]){var e=this.items.filter(function(e){return e.name===t.selected[t.level].name})[0];if(e&&e.children&&e.children.length)return e.children}}},methods:{selectedItems:function(t){var e=!1;return this.selectedCopy.forEach(function(n){n.name===t.name&&(e=!0)}),e?"isSelected":""},rightArrayVisiable:function(t){return this.loadData?!t.isLeaf:t.children},onClickLabel:function(t){var e=JSON.parse(JSON.stringify(this.selected));if(e[this.level]=t,e.splice(this.level+1),this.$emit("update:selected",e),this.selectedCopy=e,!this.rightArrayVisiable(t)){var n=e.map(function(t){return t.name}).join("/");this.$emit("update:selectedValue",n),this.close()}},onUpdateSelect:function(t){this.$emit("update:selected",t)},onSelectedValue:function(t){this.$emit("update:selectedValue",t)}}},o=(n(486),n(1)),c=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cascader-items",style:{height:t.height}},[n("div",{staticClass:"left"},t._l(t.items,function(e){return n("div",{key:e.name,staticClass:"label",class:t.selectedItems(e),on:{click:function(n){return t.onClickLabel(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"icons"},[e.name===t.loadingItem.name?[n("f-icon",{staticClass:"loading",attrs:{name:"loading"}})]:[t.rightArrayVisiable(e)?n("f-icon",{staticClass:"next",attrs:{name:"right"}}):t._e()]],2)])}),0),t._v(" "),t.rightItems?n("div",{staticClass:"right"},[n("FlyCascaderItems",{attrs:{items:t.rightItems,height:t.height,level:t.level+1,selected:t.selected,"load-data":t.loadData,close:t.close,"loading-item":t.loadingItem},on:{"update:selected":t.onUpdateSelect,"update:selectedValue":t.onSelectedValue}})],1):t._e()])},[],!1,null,"165d68fc",null).exports,l=n(141),u=n(116),d={name:"FlyCascader",props:{sources:Array,popoverHeight:String,loadData:Function,clearable:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"}},directives:{"click-outside":l.a},components:{"f-cascader-items":c,"f-input":u.a},data:function(){return{popoverVisible:!1,selected:[],loadingItem:{},value:"",level:0}},methods:{onTrigger:function(){this.popoverVisible?this.close():this.open()},open:function(){this.popoverVisible=!0},close:function(){this.popoverVisible=!1},onUpdateSelected:function(t){var e=this;this.$emit("update:selected",t);var n=t[t.length-1];this.selected=t;var i=function(t,e){return t.filter(function(t){return t.id===e})[0]};!n.isLeaf&&this.loadData&&(this.loadData(n,function(t){var r=JSON.parse(JSON.stringify(e.sources));(function t(e,n){var r=[],a=[];e.forEach(function(t){t.children?a.push(t):r.push(t)});var s=i(r,n);if(s)return s;if(s=i(a,n))return s;for(var o=0;o<a.length;o++)if(s=t(a[o].children,n))return s}(r,n.id)).children=t,e.$emit("update:sources",r),e.loadingItem={}}),this.loadingItem=n)},onInputValue:function(t){""===t?(this.selected=[],this.value=""):t!==this.getCurrentInputValue()&&(this.value=this.getCurrentInputValue())},getCurrentInputValue:function(){return this.selected.reduce(function(t,e){return t+e.name+"/"},"").replace(/\/$/,"")}}},f=(n(487),Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"f-cascader"},[n("div",{staticClass:"f-cascader-trigger",on:{click:t.onTrigger}},[n("f-input",{staticClass:"pointer",attrs:{clearable:t.clearable,readonly:"",placeholder:t.placeholder},on:{change:t.onInputValue},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),t.popoverVisible?n("div",{staticClass:"f-popover-wrapper"},[n("f-cascader-items",{attrs:{items:t.sources,height:t.popoverHeight,level:t.level,selected:t.selected,loadData:t.loadData,close:t.close,"loading-item":t.loadingItem},on:{"update:selected":[function(e){t.selected=e},function(e){return t.onUpdateSelected(e)}],"update:selectedValue":function(e){t.value=e}}})],1):t._e()])},[],!1,null,"be200fa6",null).exports),h={desc:"只需要为 Cascader 的 <code>sources</code>属性指定选项数组即可渲染出一个级联选择器",code:'\n<tempalte>\n  <f-cascader :sources="sources"/>\n</tempalte>\n\n<script>\n  export default {\n     data(){\n        return {\n           sources: [\n               {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},\n               {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}\n           ]\n        }\n     }\n  }\n<\/script>\n    '},p={desc:"",code:'\n<tempalte>\n  <f-cascader :sources="sources" clearable/>\n</tempalte>\n\n<script>\n  export default {\n     data(){\n        return {\n           sources: [\n               {name: "广东省", children: [{ name: "广州市", children: [{ name: "天河区" }]},{name: "深圳市",children: [{name: "南山区" },{ name: "宝安区" },{ name: "罗湖区" }]}]},\n               {name: "湖北省",children: [{name: "武汉市",children: [{ name: "武昌区" }, { name: "江岸区" }]},{name: "荆州市",children: [{ name: "石首市" }, { name: "监利县" }]}]}\n           ]\n        }\n     }\n  }\n<\/script>\n    '},v={desc:"通过<code>loadData</code>开启动态加载，接受两个参数，第一个参数是上一次点击的某一项列表<code>item</code>，通过<code>item</code>去动态加载对应数据，第二个参数是个回调函数，接受将要加载的数据列表作为参数。<code>:sources.sync</code>是一个语法糖，用于修改sources的数据源",code:"\n<tempalte>\n  <f-cascader :sources.sync=\"sources\" :load-data=\"loadData\" popoverHeight=\"100px\" clearable/>\n</tempalte>\n\n<script>\nconst db = [\n  {id: 1, name: '北京', parent: 0},\n  {id: 2, name: '广东', parent: 0},\n  {id: 3, name: '东城', parent: 1},\n  {id: 4, name: '西城', parent: 1},\n  {id: 5, name: '朝阳', parent: 1},\n  {id: 6, name: '广州', parent: 2},\n  {id: 7, name: '深圳', parent: 2},\n  {id: 8, name: '佛山', parent: 2},\n  {id: 9, name: '越秀', parent: 6},\n  {id: 10, name: '天河', parent: 6},\n  {id: 11, name: '黄埔', parent: 6},\n  {id: 12, name: '罗湖', parent: 7},\n  {id: 13, name: '南山', parent: 7},\n  {id: 14, name: '福田', parent: 7},\n  {id: 15, name: '顺德', parent: 8},\n  {id: 16, name: '三水', parent: 8},\n]\nfunction ajax(parent_id = 0) {\n  return new Promise((resolve, reject) => {\n    let data = db.filter(item => item.parent === parent_id);\n    data.forEach(node => {\n        node.isLeaf = db.filter(item => item.parent === node.id).length <= 0;\n    });\n    resolve(data);\n  });\n}\n\nexport default {\n  data(){\n    return {\n      sources: []\n    }\n  },\n  created() {\n      ajax(0).then(res => {\n         this.sources1 = res;\n      })\n  },\n  methods: {\n    loadData(lastItem, callback){\n      setTimeout(() => {\n        ajax(lastItem.id).then(res => callback(res))\n      }, 500)\n    }\n  }\n}\n<\/script>\n  "},m=[{id:1,name:"北京",parent:0},{id:2,name:"广东",parent:0},{id:3,name:"东城",parent:1},{id:4,name:"西城",parent:1},{id:5,name:"朝阳",parent:1},{id:6,name:"广州",parent:2},{id:7,name:"深圳",parent:2},{id:8,name:"佛山",parent:2},{id:9,name:"越秀",parent:6},{id:10,name:"天河",parent:6},{id:11,name:"黄埔",parent:6},{id:12,name:"罗湖",parent:7},{id:13,name:"南山",parent:7},{id:14,name:"福田",parent:7},{id:15,name:"顺德",parent:8},{id:16,name:"三水",parent:8}];function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(e,n){var i=m.filter(function(e){return e.parent===t});i.forEach(function(t){t.isLeaf=m.filter(function(e){return e.parent===t.id}).length<=0}),e(i)})}var b={name:"CascaderDemos",components:{"f-init-docs":i.a,"f-card":r.a,"f-cascader":f},data:function(){return{BasicCascader:h,ClearableCascader:p,loadingCascader:v,sources:[{name:"广东省",children:[{name:"广州市",children:[{name:"天河区"}]},{name:"深圳市",children:[{name:"南山区"},{name:"宝安区"},{name:"罗湖区"}]}]},{name:"湖北省",children:[{name:"武汉市",children:[{name:"武昌区"},{name:"江岸区"}]},{name:"荆州市",children:[{name:"石首市"},{name:"监利县"}]}]}],sources1:[]}},created:function(){var t=this;g(0).then(function(e){t.sources1=e})},methods:{loadData:function(t,e){setTimeout(function(){g(t.id).then(function(t){return e(t)})},500)}}},y=Object(o.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-cascader"},[n("f-init-docs"),t._v(" "),n("h4",[t._v("基础用法")]),t._v(" "),n("p",[t._v("click 触发子菜单")]),t._v(" "),n("f-card",{attrs:{source:t.BasicCascader}},[n("f-cascader",{attrs:{sources:t.sources}})],1),t._v(" "),n("h4",[t._v("可清空")]),t._v(" "),n("p",[t._v("通过 clearable 设置输入框可清空")]),t._v(" "),n("f-card",{attrs:{source:t.ClearableCascader}},[n("f-cascader",{attrs:{sources:t.sources,clearable:""}})],1),t._v(" "),n("h4",[t._v("动态加载")]),t._v(" "),n("p",[t._v("当选中某一级时，动态加载该级下的选项。")]),t._v(" "),n("f-card",{attrs:{source:t.loadingCascader}},[n("f-cascader",{attrs:{sources:t.sources1,"load-data":t.loadData,popoverHeight:"100px",clearable:""},on:{"update:sources":function(e){t.sources1=e}}})],1)],1)},[],!1,null,"48027527",null);e.default=y.exports},57:function(t,e,n){"use strict";var i=n(70),r=n(52),a=n(30),s={};n(16)(s,n(11)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),a(t,e+" Iterator")}},59:function(t,e,n){var i=n(28),r=n(29),a=n(63)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},60:function(t,e,n){var i=n(54),r=n(25);t.exports=function(t){return function(e,n){var a,s,o=String(r(e)),c=i(n),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c))<55296||a>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):a:t?o.slice(c,c+2):s-56320+(a-55296<<10)+65536}}},61:function(t,e,n){var i=n(44),r=n(11)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:a?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},64:function(t,e,n){"use strict";var i=n(60)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},65:function(t,e,n){"use strict";var i=n(61),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},66:function(t,e,n){"use strict";n(74);var i=n(24),r=n(16),a=n(27),s=n(25),o=n(11),c=n(40),l=o("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),h=!a(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),p=h?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!h||!p||"replace"===t&&!u||"split"===t&&!d){var v=/./[f],m=n(s,f,""[t],function(t,e,n,i,r){return e.exec===c?h&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),g=m[0],b=m[1];i(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},71:function(t,e,n){"use strict";var i=n(22);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},74:function(t,e,n){"use strict";var i=n(40);n(26)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},75:function(t,e,n){}}]);