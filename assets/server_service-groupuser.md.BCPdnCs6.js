import{_ as s,c as a,o as t,a2 as n}from"./chunks/framework.B-SOf8M1.js";const k=JSON.parse('{"title":"聊天室成员","description":"","frontmatter":{},"headers":[],"relativePath":"server/service-groupuser.md","filePath":"server/service-groupuser.md"}'),e={name:"server/service-groupuser.md"},p=n(`<h1 id="聊天室成员" tabindex="-1">聊天室成员 <a class="header-anchor" href="#聊天室成员" aria-label="Permalink to &quot;聊天室成员&quot;">​</a></h1><h3 id="功能说明" tabindex="-1">功能说明 <a class="header-anchor" href="#功能说明" aria-label="Permalink to &quot;功能说明&quot;">​</a></h3><p>客服查询群成员</p><h3 id="接口调用说明" tabindex="-1">接口调用说明 <a class="header-anchor" href="#接口调用说明" aria-label="Permalink to &quot;接口调用说明&quot;">​</a></h3><blockquote><p>接口地址:<code>/user/service/groupUser</code> <code>post</code> <code>application/json</code></p></blockquote><h3 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Header参数</th><th>属性</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td><span style="color:#f79009;">必填</span></td><td>客服登录接口返回的userSig参数</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">Body参数</th><th>类型</th><th>属性</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">page</td><td>int</td><td><span style="color:#f79009;">必填</span></td><td>分页数据:分页下标，从1开始</td></tr><tr><td style="text-align:left;">size</td><td>int</td><td><span style="color:#f79009;">必填</span></td><td>分页数据:分页大小</td></tr><tr><td style="text-align:left;">groupId</td><td>int</td><td><span style="color:#f79009;">必填</span></td><td>聊天室id(会话列表type为GROUP的会话，字段recevId就是groupId)</td></tr><tr><td style="text-align:left;">searchName</td><td>String</td><td><span style="color:#667085;">选填</span></td><td>搜索字段(根据uuid和昵称搜索)</td></tr><tr><td style="text-align:left;">level</td><td>String</td><td><span style="color:#667085;">选填</span></td><td>用户等级</td></tr><tr><td style="text-align:left;">shutup</td><td>int</td><td><span style="color:#667085;">选填</span></td><td>0未禁言 1禁言</td></tr></tbody></table><h3 id="请求示例" tabindex="-1">请求示例 <a class="header-anchor" href="#请求示例" aria-label="Permalink to &quot;请求示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;groupId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应参数" tabindex="-1">响应参数 <a class="header-anchor" href="#响应参数" aria-label="Permalink to &quot;响应参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 1000,</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;成功&quot;,</span></span>
<span class="line"><span>  &quot;data&quot;: {</span></span>
<span class="line"><span>    &quot;records&quot;: [ //成员数组</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;id&quot;: 5, //用户id</span></span>
<span class="line"><span>        &quot;nick&quot;: &quot;Robot1&quot;, //用户昵称</span></span>
<span class="line"><span>        &quot;avatar&quot;: null, //用户头像</span></span>
<span class="line"><span>        &quot;uuid&quot;: &quot;add2ede7b69c4c22bebf3f71123e80b6&quot;, //用户uuid</span></span>
<span class="line"><span>        &quot;manager&quot;: 0, //1管理员 0不是</span></span>
<span class="line"><span>        &quot;shutup&quot;: 0, //1禁言 0未禁言</span></span>
<span class="line"><span>        &quot;description&quot;: null, //用户描述</span></span>
<span class="line"><span>        &quot;sex&quot;: null, //用户性别</span></span>
<span class="line"><span>        &quot;customize&quot;: null, //用户自定义</span></span>
<span class="line"><span>        &quot;level&quot;: &quot;等级1&quot; //用户等级</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;total&quot;: 3, //总条数</span></span>
<span class="line"><span>    &quot;size&quot;: 1, //分页大小</span></span>
<span class="line"><span>    &quot;current&quot;: 1, //当前下标</span></span>
<span class="line"><span>    &quot;orders&quot;: [],</span></span>
<span class="line"><span>    &quot;optimizeCountSql&quot;: true,</span></span>
<span class="line"><span>    &quot;searchCount&quot;: true,</span></span>
<span class="line"><span>    &quot;countId&quot;: null,</span></span>
<span class="line"><span>    &quot;maxLimit&quot;: null,</span></span>
<span class="line"><span>    &quot;pages&quot;: 3 //总页数</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12),l=[p];function i(o,d,r,u,c,h){return t(),a("div",null,l)}const g=s(e,[["render",i]]);export{k as __pageData,g as default};
