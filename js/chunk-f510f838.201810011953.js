(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f510f838"],{4115:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"release index-section"},[a("div",{staticClass:"topics-container release-left"},[a("div",{staticClass:"top"},[a("router-link",{attrs:{to:"/"}},[t._v("主页")]),a("em",[t._v(" / ")]),a("span",[t._v(t._s(t.currentStatus?"发布话题":"编辑话题"))])],1),a("div",{staticClass:"select-tab"},[a("span",[t._v("选择版块：")]),a("Select",{staticStyle:{width:"200px"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("Option",{attrs:{value:"dev"}},[t._v("客户端测试")]),a("Option",{attrs:{value:"share"}},[t._v("分享")]),a("Option",{attrs:{value:"ask"}},[t._v("问答")]),a("Option",{attrs:{value:"job"}},[t._v("招聘")])],1)],1),a("div",{staticClass:"title"},[a("Input",{attrs:{placeholder:"标题字数 10字以上"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("div",{staticClass:"editor"},[a("textarea",{attrs:{id:"markdown-editor"}}),a("div",{staticClass:"release-btn"},[a("button",{on:{click:t.releaseTopics}},[t._v(t._s(t.currentStatus?"发布":"更新"))])])])]),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"release-sidebar"},[a("div",{staticClass:"block-box"},[a("div",{staticClass:"title-top"},[t._v("Markdown 语法参考")]),a("div",{staticClass:"inner"},[a("p",[t._v("### 单行的标题")]),a("p",[t._v("**粗体**")]),a("p",[t._v("`console.log('行内代码')`")]),a("p",[t._v("```js\\n code \\n``` 标记代码块")]),a("p",[t._v("[内容](链接)")]),a("p",[t._v("![文字说明](图片链接)")]),a("p",[a("a",{attrs:{href:"https://segmentfault.com/markdown",target:"_blank"}},[t._v("Markdown 文档")])])])]),a("div",{staticClass:"block-box"},[a("div",{staticClass:"title-top"},[t._v("话题发布指南")]),a("div",{staticClass:"inner"},[a("p",[t._v("尽量把话题要点浓缩到标题里")]),a("p",[t._v("代码含义和报错可在 "),a("a",{attrs:{href:"https://segmentfault.com/t/node.js",target:"_blank"}},[t._v("SegmentFault")]),t._v(" 提问")])])])])}],n=(a("8184"),a("53d5")),r=a("365c"),c=a("760d"),o=a.n(c),l=a("10c8"),u={name:"Release",data:function(){return{title:"",tab:"dev",currentStatus:!0}},computed:Object(n["a"])({},Object(l["b"])(["isLogin"])),created:function(){var t=this;"create"!==this.$route.params.id&&(this.currentStatus=!1,axios.get("".concat(r["a"].topicDetail).concat(this.$route.params.id),{params:{mdrender:!1}}).then(function(e){e.data.success&&(t.title=e.data.data.title,t.tab=e.data.data.tab,t.simplemde.value(e.data.data.content))}).catch(function(e){t.$Message.warning("不存在此话题"),t.$router.replace("/")}))},methods:{initMarkdownEditor:function(){this.simplemde=new o.a({element:document.getElementById("markdown-editor"),spellChecker:!1,autoDownloadFontAwesome:!1})},releaseTopics:function(){var t=this;try{if(!this.isLogin)throw new Error("请登录后再提交");if(this.title.length<10)throw new Error("标题至少10字以上");var e=this.simplemde.value();if(!e)throw new Error("主体内容不能为空")}catch(t){return this.$Message.warning(t.message)}var a=this.currentStatus?r["a"].newTopics:r["a"].updateTopics;axios.post(a,{title:this.title,tab:this.tab,content:e,topic_id:this.currentStatus?void 0:this.$route.params.id}).then(function(e){e.data.success&&(t.currentStatus?t.$Message.success("发布成功"):t.$Message.success("更新成功"),t.$router.push("/topic/".concat(e.data.topic_id)))}).catch(function(t){return t})}},mounted:function(){this.initMarkdownEditor()}},d=u,v=(a("5a42"),a("325c")),p=Object(v["a"])(d,s,i,!1,null,null,null);p.options.__file="Release.vue";e["default"]=p.exports},"5a42":function(t,e,a){"use strict";var s=a("ca7a"),i=a.n(s);i.a},ca7a:function(t,e,a){}}]);