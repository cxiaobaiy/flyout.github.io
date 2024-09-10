import{_ as s,c as n,o as a,a2 as e}from"./chunks/framework.B-SOf8M1.js";const u=JSON.parse('{"title":"事件监听","description":"","frontmatter":{},"headers":[],"relativePath":"client/event.md","filePath":"client/event.md"}'),p={name:"client/event.md"},l=e(`<h1 id="事件监听" tabindex="-1">事件监听 <a class="header-anchor" href="#事件监听" aria-label="Permalink to &quot;事件监听&quot;">​</a></h1><br><br><br><hr><br><h3 id="请注意" tabindex="-1">请注意 <a class="header-anchor" href="#请注意" aria-label="Permalink to &quot;请注意&quot;">​</a></h3><p>1、所有的监听操作请使用具名函数作为回调 <br> eg: <br><code>$on(eventName,FunctionName)</code><br> 而不是 <code>$on(eventName,(data){})</code></p><p>2、请在合适的时间移除监听操作<code>页面栈移除/订阅事件不再有效</code> 即调用 <code>$off</code> 方法</p><h3 id="_1-sdk-状态就绪-readystatuschange" tabindex="-1">1.sdk 状态就绪 <code>ReadyStatusChange</code> <a class="header-anchor" href="#_1-sdk-状态就绪-readystatuschange" aria-label="Permalink to &quot;1.sdk 状态就绪  \`\`\`ReadyStatusChange\`\`\`&quot;">​</a></h3><blockquote><p>ReadyStatusChange Function(callback) 返回值 状态的 布尔值</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onStatuschange = (status) =&gt;{</span></span>
<span class="line highlighted"><span>    console.log(&#39;当前Ready状态:&#39;,status)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;ReadyStatusChange&#39;,onStatuschange)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;ReadyStatusChange&#39;,onStatuschange)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_2-当前用户信息变更-userinfochange" tabindex="-1">2.当前用户信息变更 <code>UserInfoChange</code> <a class="header-anchor" href="#_2-当前用户信息变更-userinfochange" aria-label="Permalink to &quot;2.当前用户信息变更 \`\`\`UserInfoChange\`\`\`&quot;">​</a></h3><p>tips:此事件为通过服务端修改用户信息后下发的通知，用于同步用户信息</p><blockquote><p>UserInfoChange Function(callback) 返回值 更新后的用户信息 object</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onUserInfoChange = (userInfo) =&gt;{</span></span>
<span class="line highlighted"><span>    // 保存至状态机用于个人页面展示或其他</span></span>
<span class="line"><span>    console.log(&#39;更新后的用户信息:&#39;,userInfo)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;UserInfoChange&#39;,onUserInfoChange)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;UserInfoChange&#39;,onUserInfoChange)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_3-收到信息-onmessagearrived" tabindex="-1">3.收到信息 <code>onMessageArrived</code> <a class="header-anchor" href="#_3-收到信息-onmessagearrived" aria-label="Permalink to &quot;3.收到信息 \`\`\`onMessageArrived\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到信息后通知同步信息</p><blockquote><p>onMessageArrived Function(callback) 返回值 最新的一条消息</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onMessage = (message) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;最新的消息:&#39;,message)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onMessageArrived&#39;,onMessage)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onMessageArrived&#39;,onMessage)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_3-消息被撤回-onmessagerevoked" tabindex="-1">3.消息被撤回 <code>onMEssageRevoked</code> <a class="header-anchor" href="#_3-消息被撤回-onmessagerevoked" aria-label="Permalink to &quot;3.消息被撤回 \`\`\`onMEssageRevoked\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到信息后通知同步信息</p><blockquote><p>onMEssageRevoked Function(callback) 返回值 被撤回的完整消息包括 撤回人信息</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onMEssageRevoked = (data) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;被撤回的消息:&#39;,data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onMEssageRevoked&#39;,onMessageRead)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onMEssageRevoked&#39;,onMessageRead)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_4-收到已读回执-onmessageread" tabindex="-1">4.收到已读回执 <code>onMessageRead</code> <a class="header-anchor" href="#_4-收到已读回执-onmessageread" aria-label="Permalink to &quot;4.收到已读回执 \`\`\`onMessageRead\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到信息被对方读取后通知同步信息</p><blockquote><p>onMessageRead Function(callback) 返回值 已读消息的最新一条的id</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onMessageRead = (data) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;最新的消息:&#39;,data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onMessageRead&#39;,onMessageRead)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onMessageRead&#39;,onMessageRead)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_5-收到消息被删除通知-onmessagedeleted" tabindex="-1">5.收到消息被删除通知 <code>onMessageDeleted</code> <a class="header-anchor" href="#_5-收到消息被删除通知-onmessagedeleted" aria-label="Permalink to &quot;5.收到消息被删除通知 \`\`\`onMessageDeleted\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到信息被对方读取后通知同步信息</p><blockquote><p>onMessageDeleted Function(callback) 返回值 被删除消息的完整消息体</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onMessageDeleted = (message) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;被删除的消息:&#39;,message)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onMessageDeleted&#39;,onMessageDeleted)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onMessageDeleted&#39;,onMessageDeleted)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_6-收到群组中被禁言通知-onsilence" tabindex="-1">6.收到群组中被禁言通知 <code>onSilence</code> <a class="header-anchor" href="#_6-收到群组中被禁言通知-onsilence" aria-label="Permalink to &quot;6.收到群组中被禁言通知 \`\`\`onSilence\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到信息被对方读取后通知同步信息</p><blockquote><p>onSilence Function(callback) 返回值 被禁言的群聊Id</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onSilence = (data) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;被禁言的信息:&#39;,data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onSilence&#39;,onSilence)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onSilence&#39;,onSilence)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_7-收到被群聊踢出时通知-onremovegroup" tabindex="-1">7.收到被群聊踢出时通知 <code>onRemoveGroup</code> <a class="header-anchor" href="#_7-收到被群聊踢出时通知-onremovegroup" aria-label="Permalink to &quot;7.收到被群聊踢出时通知 \`\`\`onRemoveGroup\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到被群聊踢出后通知同步信息</p><blockquote><p>onSilence Function(callback) 返回值 被踢出的群聊信息 收到此通知应当重新获取会话列表</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onRemoveGroup = (data) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;被踢出的群聊信息:&#39;,data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;onRemoveGroup&#39;,onRemoveGroup)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;onRemoveGroup&#39;,onRemoveGroup)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div><h3 id="_8-收到被踢出下线原因-login-out" tabindex="-1">8.收到被踢出下线原因 <code>login_out</code> <a class="header-anchor" href="#_8-收到被踢出下线原因-login-out" aria-label="Permalink to &quot;8.收到被踢出下线原因 \`\`\`login_out\`\`\`&quot;">​</a></h3><p>tips:此事件为客户端收到异地登录时被踢出</p><blockquote><p>onSilence Function(callback) 返回值 收到被踢下线的原因</p></blockquote><p>eg:</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onLogout = (data) =&gt;{</span></span>
<span class="line highlighted"><span>    // 消息上屏</span></span>
<span class="line"><span>    console.log(&#39;被踢下线信息:&#39;,data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fxIm.$on(&#39;login_out&#39;,onLogout)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在页面退出的时候 或其他该事件订阅不再有效的时候</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>    fxIm.$off(&#39;login_out&#39;,onLogout)</span></span>
<span class="line"><span>},1000)</span></span></code></pre></div>`,53),o=[l];function i(c,t,d,r,g,h){return a(),n("div",null,o)}const b=s(p,[["render",i]]);export{u as __pageData,b as default};
