import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.B-SOf8M1.js";const _=JSON.parse('{"title":"客服会话列表","description":"","frontmatter":{},"headers":[],"relativePath":"server/service-conversation.md","filePath":"server/service-conversation.md"}'),t={name:"server/service-conversation.md"},o=e(`<h1 id="客服会话列表" tabindex="-1">客服会话列表 <a class="header-anchor" href="#客服会话列表" aria-label="Permalink to &quot;客服会话列表&quot;">​</a></h1><h3 id="功能说明" tabindex="-1">功能说明 <a class="header-anchor" href="#功能说明" aria-label="Permalink to &quot;功能说明&quot;">​</a></h3><p>客服会话列表</p><h3 id="接口调用说明" tabindex="-1">接口调用说明 <a class="header-anchor" href="#接口调用说明" aria-label="Permalink to &quot;接口调用说明&quot;">​</a></h3><blockquote><p>接口地址:<code>/user/service/conversation</code> <code>get</code> <code>application/json</code></p></blockquote><h3 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Header参数</th><th>属性</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td><span style="color:#f79009;">必填</span></td><td>客服登录接口返回的userSig参数</td></tr></tbody></table><h3 id="响应参数" tabindex="-1">响应参数 <a class="header-anchor" href="#响应参数" aria-label="Permalink to &quot;响应参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 1000,</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;成功&quot;,</span></span>
<span class="line"><span>  &quot;data&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;id&quot;: 1, //会话id</span></span>
<span class="line"><span>      &quot;sendId&quot;: 9, //本人id</span></span>
<span class="line"><span>      &quot;recevId&quot;: 7, //对方id</span></span>
<span class="line"><span>      &quot;conversationType&quot;: &quot;GROUP&quot;, //GROUP群 C2C单聊</span></span>
<span class="line"><span>      &quot;recevName&quot;: &quot;测试&quot;, //对方昵称</span></span>
<span class="line"><span>      &quot;recevAvatar&quot;: null, //对方头像</span></span>
<span class="line"><span>      &quot;conversationId&quot;: &quot;GROUP7&quot;,</span></span>
<span class="line"><span>      &quot;lastMessage&quot;: null, //会话最后一条消息</span></span>
<span class="line"><span>      &quot;lastTime&quot;: 0, //会话最后一条消息时间</span></span>
<span class="line"><span>      &quot;unRead&quot;: 0 //会话未读数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9),p=[o];function l(i,c,r,d,u,h){return n(),s("div",null,p)}const v=a(t,[["render",l]]);export{_ as __pageData,v as default};
