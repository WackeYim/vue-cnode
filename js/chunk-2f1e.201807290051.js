(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f1e"],{"0a0d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"index-section"},[e("div",{staticClass:"topics-container index-container"},[e("nav",{staticClass:"nav"},[e("router-link",{class:{active:"all"==t.$route.query.tab||!t.$route.query.tab},attrs:{to:"/"}},[t._v("全部")]),e("router-link",{class:{active:"good"==t.$route.query.tab},attrs:{to:"/?tab=good"}},[t._v("精华")]),e("router-link",{class:{active:"share"==t.$route.query.tab},attrs:{to:"/?tab=share"}},[t._v("分享")]),e("router-link",{class:{active:"ask"==t.$route.query.tab},attrs:{to:"/?tab=ask"}},[t._v("问答")]),e("router-link",{class:{active:"job"==t.$route.query.tab},attrs:{to:"/?tab=job"}},[t._v("招聘")]),e("router-link",{class:{active:"dev"==t.$route.query.tab},attrs:{to:"/?tab=dev"}},[t._v("客户端测试")])],1),e("div",{staticClass:"topics-list"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.mark,expression:"mark"}],staticClass:"mark-box"},[e("div",{staticClass:"mark-line"}),e("div",{staticClass:"mark-line"}),e("div",{staticClass:"mark-line"})]),e("List",{attrs:{topics:t.topics}})],1),e("div",{staticClass:"pagination-box"},[e("Page",{attrs:{total:t.total,"page-size":40,current:t.page},on:{"update:current":function(a){t.page=a},"on-change":t.currentChange}})],1)]),e("Sidebar")],1)},r=[],i=(e("7f7f"),e("365c")),n={name:"HomePage",data:function(){return{page:1,total:9999,topics:[],mark:!1}},created:function(){this.page=parseInt(this.$route.query.page)||1,this.fetchTopics()},methods:{currentChange:function(t){this.$router.push({name:this.$route.name,query:{tab:this.$route.query.tab,page:t}})},fetchTopics:function(){var t=this;this.mark=!0;var a=Date.now();axios.get(i["a"].topics,{params:{limit:40,mdrender:!1,tab:this.$route.query.tab||"all",page:this.page}}).then(function(e){var s=Date.now()-a;s<=300?setTimeout(function(){t.mark=!1},300-s):t.mark=!1,e.data.success&&(t.topics=e.data.data)}).catch()}},watch:{$route:function(t,a){"HomePage"===t.name&&(1!=t.query.page&&t.query.page||(this.page=1),this.fetchTopics())}}},o=n,c=(e("6e54"),e("2877")),u=Object(c["a"])(o,s,r,!1,null,null,null);a["default"]=u.exports},"0add":function(t,a,e){},"6e54":function(t,a,e){"use strict";var s=e("0add"),r=e.n(s);r.a},"7f7f":function(t,a,e){var s=e("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in r||e("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);