(function(e){function t(t){for(var o,a,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0889":function(e,t,n){"use strict";n("819e")},"0a4d":function(e,t,n){"use strict";n("3d9e")},"27c5":function(e,t,n){"use strict";n("91ec")},"2c84":function(e,t,n){"use strict";n("2ef5")},"2ef5":function(e,t,n){},"3d9e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App",methods:{}},i=a,l=(n("034f"),n("2877")),u=Object(l["a"])(i,r,s,!1,null,null,null),c=u.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home_container"},[n("navBar"),n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"header-style"},[n("span",[e._v("首页/"+e._s(e.pathName))]),n("div",[n("Dropdown",{staticClass:"info-style"},[n("Avatar",{attrs:{size:"large",src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}}),n("span",{staticClass:"login-name",attrs:{size:"large"}},[e._v(e._s(e.userinfo.user.username))]),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{nativeOn:{click:function(t){return e.alertinfo.apply(null,arguments)}}},[e._v("个人信息")]),n("DropdownItem",{nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("登出")])],1)],1)],1)]),n("router-view")],1)],1)},p=[],m=n("5530"),g=n("2f62"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar-style"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-1","background-color":"#000","text-color":"#fff","unique-opened":!0},on:{select:e.onSelect}},e._l(e.menuList,(function(t){return n("el-submenu",{key:t.name,attrs:{index:t.name}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))]),e._l(t.child,(function(o){return n("el-menu-item",{key:o.name,attrs:{index:o.name},on:{click:function(n){return e.handleMenu(t,o)}}},[e._v(e._s(o.title))])}))],2)})),1)],1)},v=[],I={data:function(){return{menuList:[{title:"目录",name:"1",child:[{name:"1-1",title:"个人信息",path:"myInfo"},{name:"1-2",title:"自定义页面",path:"list"}]}]}},methods:{onSelect:function(){},handleMenu:function(e,t){this.$router.push("/".concat(t.path))}}},b=I,y=(n("677a"),n("27c5"),Object(l["a"])(b,h,v,!1,null,"1ca6ea68",null)),_=y.exports,w={components:{navBar:_},data:function(){return{userObj:this.$store.state,pathName:"个人信息"}},computed:Object(m["a"])({},Object(g["b"])(["userinfo"])),watch:{$route:function(e){this.pathName=e.meta,console.log(e)}},created:function(){},methods:{logout:function(){var e=this;this.$message.success("即将退出登陆"),sessionStorage.removeItem("user",null),sessionStorage.removeItem("token",null),setTimeout((function(){e.$router.push("/login")}),1e3)},alertinfo:function(){this.$router.push("myInfo")}}},x=w,$=(n("0889"),Object(l["a"])(x,f,p,!1,null,null,null)),k=$.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loginLoading,expression:"loginLoading"}],staticClass:"login_container",style:e.height,attrs:{"element-loading-text":"正在登陆...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{staticClass:"tab"},[n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("FormItem",{attrs:{prop:"user"}},[n("Input",{attrs:{type:"text",placeholder:"账号"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),n("FormItem",[n("div",{staticClass:"btn_style"},[n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登陆")]),n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.clear("formInline")}}},[e._v("重置")]),n("Button",{attrs:{type:"default"},on:{click:e.regist}},[e._v("注册")])],1)])],1)],1)])},j=[],S=(n("d3b7"),{data:function(){return{loginLoading:!1,height:{height:"calc(100vh)"},formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;this.loginLoading=!0;var t={username:this.formInline.user,password:this.formInline.password};this.$api.post(this.common.login,t).then((function(t){var n=t.data;0==n.code?(e.$message.success("登陆成功"),e.$store.commit("setUserInfo",n.data),console.log(e.$store.state,"state"),setTimeout((function(){e.$router.push("/home"),e.$router.go(0),e.loginLoading=!1}),1e3)):e.$message.error(n.data)})).finally((function(){e.loginLoading=!1}))},regist:function(){this.$router.push("regist")},clear:function(){this.$refs.formInline.resetFields()}}}),C=S,L=(n("2c84"),n("cd28"),Object(l["a"])(C,O,j,!1,null,"7913f2b3",null)),E=L.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login_container",attrs:{"element-loading-text":"正在努力加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{staticClass:"tab"},[n("h2",{staticClass:"text-style"},[e._v("欢迎注册")]),n("p",{staticClass:"text-style text-style-p"},[e._v("每一天，乐在进步！")]),n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",placeholder:"昵称"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}},[n("Icon",{attrs:{slot:"prepend",type:"logo-tux"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),n("div",{staticClass:"code-style"},[n("FormItem",{attrs:{prop:"code"}},[n("Input",{attrs:{type:"text",placeholder:"验证码"},model:{value:e.formInline.code,callback:function(t){e.$set(e.formInline,"code",t)},expression:"formInline.code"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-send"},slot:"prepend"})],1)],1),n("Button",{attrs:{type:"warning"},on:{click:e.randomCode}},[e._v(e._s(e.codeText))])],1)],1),n("Button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary",loading:e.btnLoading,icon:"ios-power"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("立即注册")])],1)])},B=[],F={data:function(){var e=this,t=function(t,n,o){""==n?o(new Error("验证码不可为空")):n!=e.codeText?o(new Error("验证码错误")):o(),console.log(t,n,o,"rule, value, callback")};return{codeText:"",loading:!1,btnLoading:!1,isFocus:!1,randomList:[1,2,3,4,5,6,7,8,9,0,"A","B","C","D"],formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"昵称不可为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],code:[{validator:t,trigger:"blur"}]}}},created:function(){this.randomCode()},methods:{randomCode:function(){this.codeText="";for(var e=0;e<4;e++){var t=Math.floor(13*Math.random());this.codeText+=this.randomList[t]}},handleSubmit:function(){var e=this;this.btnLoading||this.$refs.formInline.validate((function(t){t&&(e.loading=!0,e.btnLoading=!0,e.$api.post(e.common.registry,e.formInline).then((function(t){var n=t.data;0==n.code?(e.$message.success("".concat(n.data,"，即将跳转登陆页")),setTimeout((function(){e.$router.push("/login")}),2e3)):e.$message.error(n.data)})).finally((function(){e.loading=!1,e.btnLoading=!1})))}))},regist:function(){this.$router.push("regist")},clear:function(){this.$refs.formInline.resetFields()}}},T=F,A=(n("0a4d"),n("fc21"),Object(l["a"])(T,P,B,!1,null,"c431996a",null)),M=A.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 我的个人信息 ")])},U=[],q={data:function(){return{}},methods:{}},D=q,J=Object(l["a"])(D,N,U,!1,null,null,null),R=J.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 列表 ")])},z=[],G={data:function(){return{}},methods:{}},H=G,K=Object(l["a"])(H,V,z,!1,null,null,null),Q=K.exports;o["default"].use(d["a"]);var W=new d["a"]({mode:"hash",routes:[{path:"/home",component:k,children:[{path:"",name:"myInfo",meta:"个人信息",component:R},{path:"/myInfo",name:"myInfo",meta:"个人信息",component:R},{path:"/list",name:"list",meta:"列表",component:Q}]},{path:"/",component:E,children:[{path:"/login",name:"login",meta:"登陆",component:E}]},{path:"/regist",name:"regist",meta:"注册",component:M}]}),X=n("5c96"),Y=n.n(X),Z=n("bc3a"),ee=n.n(Z),te=n("4328"),ne=n.n(te);o["default"].use(g["a"]);var oe=new g["a"].Store({state:{userinfo:JSON.parse(sessionStorage.getItem("setUserInfo"))},mutations:{setUserInfo:function(e,t){sessionStorage.setItem("setUserInfo",JSON.stringify(t))}}}),re=ee.a.create({baseURL:"/pre",timeout:1e5,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}});re.interceptors.request.use((function(e){return e.data=ne.a.stringify(e.data),e.headers.token=oe.state.userinfo?oe.state.userinfo.token:"",e}),(function(e){return console.log(e,"请求错误"),Promise.reject(e)})),re.interceptors.response.use((function(e){return console.log(e,"返回拦截"),e}),(function(e){return console.log(e),Promise.reject(e)}));var se=re,ae=(n("0fae"),{login:"/admin/login",registry:"/admin/registry"}),ie={common:ae},le=n("f825"),ue=n.n(le);n("f8ce");o["default"].use(Y.a),o["default"].use(ue.a),console.log(ie,"common"),o["default"].prototype.$api=se,o["default"].prototype.common=ie.common,console.log(Object({NODE_ENV:"production",VUE_APP_BASE_API:"/pre",VUE_APP_BASE_URL:"http://49.234.96.50:8083",BASE_URL:""}),"全局变量环境"),new o["default"]({router:W,store:oe,render:function(e){return e(c)}}).$mount("#app")},"677a":function(e,t,n){"use strict";n("7268")},7268:function(e,t,n){},"819e":function(e,t,n){},"836f":function(e,t,n){},"85ec":function(e,t,n){},"91ec":function(e,t,n){},cd28:function(e,t,n){"use strict";n("836f")},e490:function(e,t,n){},fc21:function(e,t,n){"use strict";n("e490")}});