webpackJsonp([2],{AJ86:function(t,e){},F9Fp:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVMM"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-tab"},[this._t("header"),this._v(" "),e("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:this.bodyPaddingTop,paddingBottom:this.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[this._t("default")],2),this._v(" "),this._t("bottom")],2)},staticRenderFns:[]};var s=i("Z0/y")({name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}},o,!1,function(t){i("otb/")},null,null).exports,l=i("+Up5"),a=i.n(l),r=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]};var u=i("Z0/y")(r,c,!1,function(t){i("okOi")},null,null).exports,d=i("B8DQ"),h=(d.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[d.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function n(){var o=t.$refs.nav;o.scrollLeft+=(e.offsetLeft-(o.offsetWidth-e.offsetWidth)/2-o.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)})}}}}),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var f=i("Z0/y")(h,p,!1,function(t){i("vQbT")},null,null).exports,m=(d.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[d.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},_=i("Z0/y")(m,b,!1,null,null,null).exports,v=i("3cXf"),g=i.n(v),w=i("pGA8"),x=i.n(w),C=i("n7TE"),k=i.n(C),y=i("gTEw"),S=i.n(y);Object,String,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Object,Object,Boolean,Number;var B={name:"scroller",props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!1},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function(t,e,i){t&&(void 0!==t.left&&this._xscroll.scrollLeft(t.left,e,i),void 0!==t.top&&this._xscroll.scrollTop(t.top,e,i)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){var e;this.$emit("input",(e=t,JSON.parse(g()(e))))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new x.a({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){if(t._xscroll){var e=t._xscroll.getScrollTop();t.$emit("on-scroll",{top:e,left:t._xscroll.getScrollLeft()}),e>=t._xscroll.containerHeight-t._xscroll.height-t.scrollBottomOffset&&t.$emit("on-scroll-bottom")}}),t.usePulldown){var i=t.$slots.pulldown,n=a()({content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"},t.pulldownConfig);i&&(n.container=i[0].elm),t.pulldown=new k.a(n),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var o=t.$slots.pullup,s=a()({content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"},t.pullupConfig);o&&(s.container=o[0].elm),t.pullup=new S.a(s),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},updated:function(){this.reset()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}};var $={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.styles},[e("div",{staticClass:"xs-container"},[this._t("default"),this._v(" "),this._t("pulldown"),this._v(" "),this._t("pullup")],2)])},staticRenderFns:[]};var T=i("Z0/y")(B,$,!1,function(t){i("gRqF")},null,null).exports,O=i("aiFJ"),P=i("St0H"),I=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(P.b)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(g()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new O.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var R=i("Z0/y")(I,L,!1,function(t){i("F9Fp")},null,null).exports,F=(String,Object,Array,String,{name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(t,e){this.$emit("on-img-error",JSON.parse(g()(t)),e),t.fallbackSrc&&(e.target.src=t.fallbackSrc)},getUrl:function(t){return Object(P.a)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(P.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),Object(P.b)(t.url,this.$router)}}}),j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header)},on:{click:t.onClickHeader}},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[t._t("body",["1"===t.type?t._l(t.list,function(e){return i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])])}):t._e(),t._v(" "),"2"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])}):t._e(),t._v(" "),"3"===t.type?[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},t._l(t.list,function(e){return i("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-cell__hd"},[i("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),i("span",{staticClass:"weui-cell__ft"})])}))])]:t._e(),t._v(" "),"4"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e(),t._v(" "),"5"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-media-box_appmsg"},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])]),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title&&"3"!==t.type?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:t.getUrl(t.footer.url)},on:{click:function(e){return e.preventDefault(),t.onClickFooter(e)}}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()])])},staticRenderFns:[]};var H=i("Z0/y")(F,j,!1,function(t){i("R937")},null,null).exports,A=(d.b,String,{mounted:function(){},name:"tabbar",mixins:[d.b],props:{iconClass:String}}),D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var M=i("Z0/y")(A,D,!1,function(t){i("tIGC")},null,null).exports,N=(String,Number,{name:"badge",props:{text:[String,Number]}}),E={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var W=i("Z0/y")(N,E,!1,function(t){i("AJ86")},null,null).exports,V=(d.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:W},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[d.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},Z=i("Z0/y")(V,Y,!1,null,null,null).exports,U={components:{ViewBox:s,XHeader:u,Tab:f,TabItem:_,Scroller:T,Swiper:R,Panel:H,Tabbar:M,TabbarItem:Z},data:function(){return{list:[{url:"javascript:",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524841368399&di=c488723d3e47f3a63d43900eae914de7&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201601%2F31%2F20160131173121_BZThk.thumb.700_0.jpeg",title:"joker@1.0"},{url:"javascript:",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525434848&di=841254df613d6c7ff2ad317021f7eb28&imgtype=jpg&er=1&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3801213fb80e7becb8dfa5272f2eb9389a506beb.jpg",title:"joker@2.0"},{url:"javascript:",title:"joker@3.0",fallbackImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2812495707,3979389373&fm=27&gp=0.jpg"}],list2:[{src:"http://i6.265g.com/images/201706/201706121133465615.jpg",fallbackSrc:"http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",title:"贪玩蓝月",desc:"大扎好，我系轱天乐，我四渣嘎辉，探挽懒月，介四里没有挽过的船新版本，点一下，玩一年，装备不花一分钱。挤需体验三番钟，里造会干我一样，爱像借款游戏。",url:"/component/cell"},{src:"http://i6.265g.com/images/201706/201706121133465615.jpg",fallbackSrc:"http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",title:"贪玩蓝月",desc:"大扎好，我系轱天乐，我四渣嘎辉，探挽懒月，介四里没有挽过的船新版本，点一下，玩一年，装备不花一分钱。挤需体验三番钟，里造会干我一样，爱像借款游戏。",url:"/component/cell"},{src:"http://i6.265g.com/images/201706/201706121133465615.jpg",fallbackSrc:"http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",title:"贪玩蓝月",desc:"大扎好，我系轱天乐，我四渣嘎辉，探挽懒月，介四里没有挽过的船新版本，点一下，玩一年，装备不花一分钱。挤需体验三番钟，里造会干我一样，爱像借款游戏。",url:"/component/cell"},{src:"http://i6.265g.com/images/201706/201706121133465615.jpg",fallbackSrc:"http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",title:"贪玩蓝月",desc:"大扎好，我系轱天乐，我四渣嘎辉，探挽懒月，介四里没有挽过的船新版本，点一下，玩一年，装备不花一分钱。挤需体验三番钟，里造会干我一样，爱像借款游戏",url:"/component/cell"},{src:"http://i6.265g.com/images/201706/201706121133465615.jpg",title:"贪玩蓝月",desc:"大扎好，我系轱天乐，我四渣嘎辉，探挽懒月，介四里没有挽过的船新版本，点一下，玩一年，装备不花一分钱。挤需体验三番钟，里造会干我一样，爱像借款游戏。",url:{path:"/component/radio",replace:!1},meta:{source:"来源信息",date:"时间",other:"其他信息"}}]}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("ViewBox",[i("XHeader",[t._v("\n\n       joker demo\n          "),i("p",{attrs:{slot:"right"},slot:"right"},[t._v("search")])]),t._v(" "),i("Scroller",{attrs:{"lock-y":!0}},[i("tab",[i("tab-item",{attrs:{selected:"","active-color":"#fff"}},[t._v("福利1")]),t._v(" "),i("tab-item",[t._v("福利2")]),t._v(" "),i("tab-item",[i("a",{staticStyle:{color:"black"},attrs:{href:"http://tv.sohu.com/20101002/n275398113.shtml"}},[t._v("福利3")])]),t._v(" "),i("tab-item",[t._v("福利4")])],1)],1),t._v(" "),i("swiper",{attrs:{list:t.list,auto:""}}),t._v(" "),i("Scroller",{attrs:{"lock-x":!0}},[i("panel",{attrs:{list:t.list2}})],1),t._v(" "),i("tabbar",{attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",[i("span",{attrs:{slot:"label"},slot:"label"},[i("router-link",{staticStyle:{color:"blueviolet"},attrs:{to:"/demo1"}},[t._v(" demo1")])],1)]),t._v(" "),i("tabbar-item",{attrs:{"show-dot":""}},[i("span",{attrs:{slot:"label"},slot:"label"},[i("router-link",{staticStyle:{color:"red"},attrs:{to:"/foo2"}},[t._v(" demo2")])],1)]),t._v(" "),i("tabbar-item",{attrs:{selected:"",link:"/component/demo"}},[i("span",{attrs:{slot:"label"},slot:"label"},[i("router-link",{staticStyle:{color:"blue"},attrs:{to:"/foo3"}},[t._v(" demo3")])],1)]),t._v(" "),i("tabbar-item",{attrs:{badge:"2"}},[i("span",{attrs:{slot:"label"},slot:"label"},[i("router-link",{staticStyle:{color:"gold"},attrs:{to:"/"}},[t._v(" demo4")])],1)])],1)],1)],1)},staticRenderFns:[]};var X=i("Z0/y")(U,q,!1,function(t){i("sO3p")},null,null).exports,z={name:"App",components:{HelloWorld:X}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},staticRenderFns:[]};var G=i("Z0/y")(z,J,!1,function(t){i("lt9v")},null,null).exports,Q=i("zO6J");n.a.use(Q.a);var K=new Q.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:X},{path:"/demo1",name:"FOO1",component:function(t){return i.e(0).then(function(){return t(i("R73G"))}.bind(null,i)).catch(i.oe)}},{path:"/foo2",name:"FOO2",component:function(t){return i.e(0).then(function(){return t(i("APvh"))}.bind(null,i)).catch(i.oe)}},{path:"/foo3",name:"FOO3",component:function(t){return i.e(0).then(function(){return t(i("QxNj"))}.bind(null,i)).catch(i.oe)}}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:K,components:{App:G},template:"<App/>"})},R937:function(t,e){},gRqF:function(t,e){},lt9v:function(t,e){},okOi:function(t,e){},"otb/":function(t,e){},sO3p:function(t,e){},tIGC:function(t,e){},vQbT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.de851af1ee429f1d3bb5.js.map