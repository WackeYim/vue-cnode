(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0cdc9da"],{"5fcf":function(t,e,i){"use strict";var a=i("c945"),n=i.n(a);n.a},"9a02":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"topic index-section"},[i("div",{staticClass:"topics-container"},[i("div",{staticClass:"detail"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[t._v("loading...")]),i("div",{staticClass:"topic-top"},[i("div",{staticClass:"topic-title"},[t.detail.top||t.detail.good?i("span",{staticClass:"tag"},[t._v(t._s(t._f("tagName")(t.detail)))]):t._e(),i("h1",[t._v(t._s(t.detail.title))])]),i("div",{staticClass:"topic-bottom"},[i("div",{staticClass:"topic-info"},[i("span",[t._v("• 发布于 "+t._s(t._f("fromNow")(t.detail.create_at))+" • 作者 ")]),i("router-link",{attrs:{to:"/user/"+t.detail.author.loginname}},[t._v(t._s(t.detail.author.loginname))]),i("span",[t._v(" • "+t._s(t.detail.visit_count)+" 次浏览 • 最后一次编辑是 "+t._s(t._f("fromNow")(t.detail.last_reply_at))+" • 来自 "+t._s(t._f("comeFrom")(t.detail.tab)))])],1),t.isLogin?i("div",{staticClass:"collection user-select-none"},[i("button",{on:{click:t.collectionBtn}},[t._v(t._s(t.detail.is_collect?"取消收藏":"收藏"))])]):t._e(),t.isLogin&&t.detail.author_id===t.userInfo.id?i("div",{staticClass:"operation-edit"},[i("router-link",{attrs:{to:"/release/"+t.detail.id}},[i("Icon",{attrs:{type:"compose",title:"编辑"}})],1)],1):t._e()])]),i("div",{staticClass:"content markdown-body",domProps:{innerHTML:t._s(t.detail.content)}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.reply_count>0,expression:"detail.reply_count > 0"}],staticClass:"reply"},[i("div",{staticClass:"reply-count"},[t._v(t._s(t.detail.reply_count)+" 回复")]),i("ul",t._l(t.detail.replies,function(e,a){return i("li",{key:e.id},[i("div",{staticClass:"avatar"},[i("router-link",{attrs:{to:"/user/"+e.author.loginname}},[i("img",{attrs:{src:e.author.avatar_url,alt:"头像"}})])],1),i("div",{staticClass:"reply-right"},[i("div",{staticClass:"reply-author"},[i("router-link",{attrs:{to:"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),i("span",[t._v(t._s(a+1)+"楼•"+t._s(t._f("fromNow")(e.create_at)))]),t.detail.author.loginname==e.author.loginname?i("strong",[t._v("作者")]):t._e()],1),i("div",{staticClass:"operation user-select-none"},[i("div",[i("Icon",{attrs:{type:e.is_uped?"ios-heart":"ios-heart-outline"},nativeOn:{click:function(i){t.likeBtn(e.id,e.author,a)}}}),i("em",[t._v(t._s(e.ups.length))])],1),t.isLogin?i("div",{on:{click:function(i){t.replyOthers(e.author.loginname)}}},[i("Icon",{attrs:{type:"reply"}})],1):t._e()])]),i("div",{staticClass:"reply-content markdown-body",domProps:{innerHTML:t._s(e.content)}})])}))]),i("div",{staticClass:"insert-reply",class:{hidden:!t.isLogin}},[i("div",{staticClass:"tip"},[t._v("添加回复")]),i("textarea",{attrs:{id:"markdown-editor"}}),i("div",{staticClass:"reply-btn"},[i("button",{attrs:{type:"button"},on:{click:t.insertReply}},[t._v(t._s(t.insertBtnText))])])])]),i("Sidebar",{attrs:{author:t.detail.author,from:"topic"}})],1)},n=[],o=(i("8184"),i("53d5")),s=i("760d"),c=i.n(s),r=i("365c"),l=i("10c8"),d={name:"Topic",data:function(){return{loading:!0,insertBtnText:"回复",detail:{author:{avatar_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==",loginname:"--"},author_id:"",content:"",create_at:Date.now(),good:!1,id:"",is_collect:!1,last_reply_at:Date.now(),replies:[],reply_count:0,tab:"",title:"",top:!1,visit_count:0},simplemde:null}},computed:Object(o["a"])({},Object(l["b"])(["isLogin","userInfo"])),beforeRouteEnter:function(t,e,i){window.scrollTo(0,0),i(function(t){t.fetchTopic()})},methods:{initMarkdownEditor:function(){this.simplemde=new c.a({element:document.getElementById("markdown-editor"),spellChecker:!1,autoDownloadFontAwesome:!1})},fetchTopic:function(){var t=this;this.loading=!0,axios.get("".concat(r["a"].topicDetail).concat(this.$route.params.id)).then(function(e){e.data.success&&(t.detail=e.data.data,t.loading=!1,t.$nextTick(function(){for(var t=document.querySelectorAll(".markdown-body code"),e=0;e<t.length;e++)hljs.highlightBlock(t[e])}))}).catch(function(e){t.$router.replace("/")})},collectionBtn:function(){var t=this,e=this.detail.is_collect?r["a"].cancelCollection:r["a"].collection;axios.post(e,{topic_id:this.detail.id}).then(function(e){e.data.success&&(t.detail.is_collect=!t.detail.is_collect)}).catch(function(t){return t})},insertReply:function(){var t=this;if("发送中..."!==this.insertBtnText){var e=this.simplemde.value();if(!e)return this.$Message.warning("内容不能为空!");this.insertBtnText="发送中...",axios.post("".concat(r["a"].replies).concat(this.detail.id,"/replies"),{content:"".concat(e,"   \n\n\n[来自第三方vue-cnode](https://github.com/xjh22222228/vue-cnode)")}).then(function(e){e.data.success&&(t.simplemde.value(""),t.$Message.success("发送成功!"),t.insertBtnText="回复",t.fetchTopic())}).catch(function(e){t.insertBtnText="回复"})}},likeBtn:function(t,e,i){var a=this;try{if(!this.isLogin)throw new Error("您未登陆!");if(e.loginname===this.userInfo.loginname)throw new Error("不能赞自己!")}catch(t){return this.$Message.warning(t.message)}axios.post("".concat(r["a"].like).concat(t,"/ups")).then(function(t){t.data.success&&("down"===t.data.action?(a.detail.replies[i].is_uped=!1,a.detail.replies[i].ups.pop()):(a.detail.replies[i].is_uped=!0,a.detail.replies[i].ups.push(Date.now())))}).catch(function(t){return t})},replyOthers:function(t){var e=document.querySelector(".insert-reply").offsetTop;window.scrollTo(0,e-80),this.simplemde.value("@".concat(t," "))}},filters:{tagName:function(t){return t.top?"置顶":t.good?"精华":void 0},comeFrom:function(t){switch(t){case"ask":return"问答";case"share":return"分享";case"job":return"招聘";case"good":return"精华";default:return""}}},mounted:function(){this.initMarkdownEditor()}},u=d,p=(i("5fcf"),i("325c")),h=Object(p["a"])(u,a,n,!1,null,null,null);h.options.__file="Topic.vue";e["default"]=h.exports},c945:function(t,e,i){}}]);