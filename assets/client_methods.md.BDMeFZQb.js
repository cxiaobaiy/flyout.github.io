import{_ as l,D as o,c as i,j as s,I as a,w as e,a2 as t,o as c,a as p}from"./chunks/framework.B-SOf8M1.js";const R=JSON.parse('{"title":"事件方法 （系统级）","description":"","frontmatter":{},"headers":[],"relativePath":"client/methods.md","filePath":"client/methods.md"}'),d={name:"client/methods.md"},r=t('<h1 id="事件方法-系统级" tabindex="-1">事件方法 （系统级） <a class="header-anchor" href="#事件方法-系统级" aria-label="Permalink to &quot;事件方法 （系统级）&quot;">​</a></h1><br><br><br><hr><br><h3 id="请注意" tabindex="-1">请注意 <a class="header-anchor" href="#请注意" aria-label="Permalink to &quot;请注意&quot;">​</a></h3><p>1、所有的方法调用都需要等待 sdk 状态就绪后才能使用 即 等待 <code>ReadyStatusChange</code> 返回 true</p><p>2、<code>个人信息</code> 与 <code>聊天</code> 等操作须在调用 <code>登录/login</code> 成功后才能有效调用</p><h3 id="_1-设置日志等级-setloglevel" tabindex="-1">1.设置日志等级 <code>setLogLevel</code> <a class="header-anchor" href="#_1-设置日志等级-setloglevel" aria-label="Permalink to &quot;1.设置日志等级 ```setLogLevel```&quot;">​</a></h3><p>参数：<code>&#39;debug&#39; | &#39;PRO&#39;</code></p><p>返回值： <code>String</code></p><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {setLogLevel} from &#39;fx-im-web&#39;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>let level = setLogLevel(&#39;debug&#39;)</span></span></code></pre></div><p>tips:</p><blockquote><p>开发环境建议设置为 <code>debug</code> 等级，该等级会输出较为详细的日志 <code>PRO</code> 等级会限制日志的输出</p></blockquote><h3 id="_2-初始化-initsdk" tabindex="-1">2.初始化 <code>initSdk</code> <a class="header-anchor" href="#_2-初始化-initsdk" aria-label="Permalink to &quot;2.初始化 ```initSdk```&quot;">​</a></h3><p>参数：<code>sdkId</code> 由管理后台获取</p><p>返回值：<code>viod</code></p><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>const fxIm = useFxIm()</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>fxIm.initSdk({</span></span>\n<span class="line highlighted"><span>    sdkId:&#39;xxxxxxx&#39;</span></span>\n<span class="line"><span>})</span></span></code></pre></div><p>tips:</p><blockquote><p>请保证sdkId 的正确性，在<code>debug</code> 等级的日志会输出所有异常情况</p></blockquote><h3 id="_3-登录-userlogin" tabindex="-1">3.登录 <code>userLogin</code> <a class="header-anchor" href="#_3-登录-userlogin" aria-label="Permalink to &quot;3.登录 ```userLogin```&quot;">​</a></h3>',24),u={tabindex:"0"},h=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),_=s("td",null,"userId:String",-1),g=s("td",null,"用户Id，调用服务端api进行注册获得",-1),m=s("td",null,"userSig:string",-1),b=s("td",null,"用户签名，调用服务端api进行注册获得",-1),f=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>let loginparams ={</span></span>
<span class="line highlighted"><span>    userId:&#39;123&#39;,</span></span>
<span class="line"><span>    userSig:&#39;xxxx&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.userLogin(loginparams).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;登录成功&#39;)</span></span>
<span class="line"><span>}).catch(err=&gt;{</span></span>
<span class="line"><span>    console.log(err,&#39;登录失败&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_4-更新用户信息-updateuserinfo" tabindex="-1">4.更新用户信息 <code>updateUserInfo</code> <a class="header-anchor" href="#_4-更新用户信息-updateuserinfo" aria-label="Permalink to &quot;4.更新用户信息 \`\`\`updateUserInfo\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,6),x={tabindex:"0"},k=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),I=s("td",null,"nick:String",-1),v=s("td",null,"用户昵称",-1),q=s("td",null,"id:string,number",-1),S=s("td",null,"用户的userId",-1),C=s("tr",null,[s("td",null,"avatar:string"),s("td",null,"可选"),s("td",null,"用户头像")],-1),P=s("tr",null,[s("td",null,"description:string"),s("td",null,"可选"),s("td",null,"用户描述")],-1),T=s("tr",null,[s("td",null,"sex:number,string"),s("td",null,"可选"),s("td",null,"用户性别(0 女，1 男)")],-1),y=s("tr",null,[s("td",null,"customize:string"),s("td",null,"可选"),s("td",null,"自定义字段")],-1),F=t(`<p>tips:</p><blockquote><p>customize 可以使用JSON字符串来获得更多的数据支持</p></blockquote><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>let updateUserInfo ={</span></span>
<span class="line highlighted"><span>    id:4580,</span></span>
<span class="line"><span>    nick:&#39;Jack&#39;,</span></span>
<span class="line"><span>    avatar:&#39;https://www.example.png&#39;,</span></span>
<span class="line"><span>    description:&#39;日照香炉生紫烟&#39;,</span></span>
<span class="line"><span>    sex:0,</span></span>
<span class="line"><span>    customize:JSON.stringify({</span></span>
<span class="line"><span>        id:123,</span></span>
<span class="line"><span>        demo1:&#39;123&#39;,</span></span>
<span class="line"><span>        demo2:&#39;123&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.updateUserInfo(updateUserInfo).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;更新成功&#39;)</span></span>
<span class="line"><span>}).catch(err=&gt;{</span></span>
<span class="line"><span>    console.log(err,&#39;更新失败&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_5-获取用户信息-getuserinfo" tabindex="-1">5.获取用户信息 <code>getUserInfo</code> <a class="header-anchor" href="#_5-获取用户信息-getuserinfo" aria-label="Permalink to &quot;5.获取用户信息 \`\`\`getUserInfo\`\`\`&quot;">​</a></h3><p>参数：<code>null</code> 无参数</p><p>返回值：<code>userInfo</code></p><blockquote><p>请在登录后使用以获取用户最新的用户信息，发消息时默认会使用最新的信息 eg:</p></blockquote><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let userInfo = fxIm.getUserInfo()</span></span></code></pre></div>`,10);function L(w,N,V,A,U,B){const n=o("font");return c(),i("div",null,[r,s("table",u,[h,s("tbody",null,[s("tr",null,[_,s("td",null,[a(n,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),g]),s("tr",null,[m,s("td",null,[a(n,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),b])])]),f,s("table",x,[k,s("tbody",null,[s("tr",null,[I,s("td",null,[a(n,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),v]),s("tr",null,[q,s("td",null,[a(n,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),S]),C,P,T,y])]),F])}const D=l(d,[["render",L]]);export{R as __pageData,D as default};
