import{_ as l,D as o,c as i,j as s,I as n,w as e,a2 as t,o as c,a as p}from"./chunks/framework.B-SOf8M1.js";const w=JSON.parse('{"title":"消息方法（消息相关）——上部分","description":"","frontmatter":{},"headers":[],"relativePath":"client/messagemethods1.md","filePath":"client/messagemethods1.md"}'),u={name:"client/messagemethods1.md"},d=t('<h1 id="消息方法-消息相关-——上部分" tabindex="-1">消息方法（消息相关）——上部分 <a class="header-anchor" href="#消息方法-消息相关-——上部分" aria-label="Permalink to &quot;消息方法（消息相关）——上部分&quot;">​</a></h1><br><br><br><hr><br><h3 id="_1-创建文本消息-createtextmessage" tabindex="-1">1.创建文本消息 <code>createTextMessage</code> <a class="header-anchor" href="#_1-创建文本消息-createtextmessage" aria-label="Permalink to &quot;1.创建文本消息 ```createTextMessage```&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>',9),r={tabindex:"0"},m=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),q=s("td",null,"to:string,number",-1),h=s("td",null,"用户的userId 或 群聊ID",-1),g=s("td",null,"conversationId:string",-1),_=s("td",null,"会话Id,取自会话列表",-1),b=s("td",null,"conversationType:string",-1),f=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),x=s("td",null,"text:string",-1),k=s("td",null,"发送的文本",-1),v=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),I=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),C=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),P=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createTextMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    text:&#39;我是测试消息&#39;,</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39; </span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的文本消息&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建文本后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_2-发送消息-sendmessage" tabindex="-1">2.发送消息 <code>sendMessage</code> <a class="header-anchor" href="#_2-发送消息-sendmessage" aria-label="Permalink to &quot;2.发送消息 \`\`\`sendMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>message 由createxxMessage 返回的对象</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createTextMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    text:&#39;我是测试消息&#39;,</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39; </span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    fxIm.sendMessage(res.data).then(res=&gt;{</span></span>
<span class="line"><span>        //可以在这里处理消息状态变更等操作</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_3-撤回消息-revokenmessage" tabindex="-1">3.撤回消息 <code>revokenMessage</code> <a class="header-anchor" href="#_3-撤回消息-revokenmessage" aria-label="Permalink to &quot;3.撤回消息 \`\`\`revokenMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>message 需要撤回的完整消息对象</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.revokenMessage(</span></span>
<span class="line highlighted"><span>    {</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;1818143398549393408&quot;,</span></span>
<span class="line"><span>        &quot;conversationType&quot;: &quot;GROUP&quot;,</span></span>
<span class="line"><span>        &quot;conversationId&quot;: &quot;GROUPtest&quot;,</span></span>
<span class="line"><span>        &quot;sendUserInfo&quot;: {</span></span>
<span class="line"><span>            &quot;nick&quot;: &quot;nickName&quot;,</span></span>
<span class="line"><span>            &quot;id&quot;: 1,</span></span>
<span class="line"><span>            &quot;avatar&quot;: &quot;https://ts1.cn.mm.bing.net/th?id=OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo&amp;w=316&amp;h=197&amp;c=8&amp;rs=1&amp;qlt=90&amp;o=6&amp;pid=3.1&amp;rm=2&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;time&quot;: 1722314141287,</span></span>
<span class="line"><span>        &quot;messageType&quot;: &quot;TEXT_MESSAGE&quot;,</span></span>
<span class="line"><span>        &quot;payload&quot;: {</span></span>
<span class="line"><span>            &quot;text&quot;: &quot;我是测试消息&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;flow&quot;: &quot;out&quot;,</span></span>
<span class="line"><span>        &quot;sendId&quot;: 1,</span></span>
<span class="line"><span>        &quot;recevId&quot;: 1,</span></span>
<span class="line"><span>        &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>        &quot;isRevoked&quot;: false,</span></span>
<span class="line"><span>        &quot;nick&quot;: &quot;nickName&quot;,</span></span>
<span class="line"><span>        &quot;avatar&quot;: &quot;https://ts1.cn.mm.bing.net/th?id=OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo&amp;w=316&amp;h=197&amp;c=8&amp;rs=1&amp;qlt=90&amp;o=6&amp;pid=3.1&amp;rm=2&quot;,</span></span>
<span class="line"><span>        &quot;isPeerRead&quot;: false,</span></span>
<span class="line"><span>        &quot;isDeleted&quot;: false,</span></span>
<span class="line"><span>        &quot;isModified&quot;: false,</span></span>
<span class="line"><span>        &quot;needReadReceipt&quot;: false,</span></span>
<span class="line"><span>        &quot;hasRiskContent&quot;: false,</span></span>
<span class="line"><span>        &quot;atUserList&quot;: []</span></span>
<span class="line"><span>    }).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;消息撤回成功&#39;)</span></span>
<span class="line"><span>    //更新视图操作</span></span>
<span class="line"><span>    })</span></span></code></pre></div><h3 id="_4-删除消息-deletemessage" tabindex="-1">4.删除消息 <code>deleteMessage</code> <a class="header-anchor" href="#_4-删除消息-deletemessage" aria-label="Permalink to &quot;4.删除消息 \`\`\`deleteMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>message 由createxxMessage 返回的对象 完整的消息对象即可</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.deleteMessage(</span></span>
<span class="line highlighted"><span>    {</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;1818143398549393408&quot;,</span></span>
<span class="line"><span>        &quot;conversationType&quot;: &quot;GROUP&quot;,</span></span>
<span class="line"><span>        &quot;conversationId&quot;: &quot;GROUPtest&quot;,</span></span>
<span class="line"><span>        &quot;sendUserInfo&quot;: {</span></span>
<span class="line"><span>            &quot;nick&quot;: &quot;nickName&quot;,</span></span>
<span class="line"><span>            &quot;id&quot;: 1,</span></span>
<span class="line"><span>            &quot;avatar&quot;: &quot;https://ts1.cn.mm.bing.net/th?id=OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo&amp;w=316&amp;h=197&amp;c=8&amp;rs=1&amp;qlt=90&amp;o=6&amp;pid=3.1&amp;rm=2&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;time&quot;: 1722314141287,</span></span>
<span class="line"><span>        &quot;messageType&quot;: &quot;TEXT_MESSAGE&quot;,</span></span>
<span class="line"><span>        &quot;payload&quot;: {</span></span>
<span class="line"><span>            &quot;text&quot;: &quot;我是测试消息&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;flow&quot;: &quot;out&quot;,</span></span>
<span class="line"><span>        &quot;sendId&quot;: 1,</span></span>
<span class="line"><span>        &quot;recevId&quot;: 1,</span></span>
<span class="line"><span>        &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>        &quot;isRevoked&quot;: false,</span></span>
<span class="line"><span>        &quot;nick&quot;: &quot;nickName&quot;,</span></span>
<span class="line"><span>        &quot;avatar&quot;: &quot;https://ts1.cn.mm.bing.net/th?id=OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo&amp;w=316&amp;h=197&amp;c=8&amp;rs=1&amp;qlt=90&amp;o=6&amp;pid=3.1&amp;rm=2&quot;,</span></span>
<span class="line"><span>        &quot;isPeerRead&quot;: false,</span></span>
<span class="line"><span>        &quot;isDeleted&quot;: false,</span></span>
<span class="line"><span>        &quot;isModified&quot;: false,</span></span>
<span class="line"><span>        &quot;needReadReceipt&quot;: false,</span></span>
<span class="line"><span>        &quot;hasRiskContent&quot;: false,</span></span>
<span class="line"><span>        &quot;atUserList&quot;: []</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;删除消息成功&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>注意：删除分为管理员操作和非管理员操作，管理员操作为物理删除，管理员删除后，在消息记录中将无法再次获取该消息，且管理员操作将会影响群聊所有用户 非管理员和单聊操作删除，将仅影响用户本身，且为逻辑删除 即不会通知对方或群聊成员，仅自己不可见</p></blockquote><h3 id="_5-群组设置禁言-setgroupsilence" tabindex="-1">5.群组设置禁言 <code>setGroupSilence</code> <a class="header-anchor" href="#_5-群组设置禁言-setgroupsilence" aria-label="Permalink to &quot;5.群组设置禁言 \`\`\`setGroupSilence\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>params <code>{ groupId: 群组id , userId： 需要禁言的用户ID}</code></p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.setGroupSilence({</span></span>
<span class="line highlighted"><span>    userId:1,</span></span>
<span class="line"><span>    groupId:&#39;GroupTestid1&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;禁言成功&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_6-群组全员禁言-setallmembermute" tabindex="-1">6.群组全员禁言 <code>setAllMemberMute</code> <a class="header-anchor" href="#_6-群组全员禁言-setallmembermute" aria-label="Permalink to &quot;6.群组全员禁言 \`\`\`setAllMemberMute\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>params <code>{ groupId: 群组id}</code></p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.setAllMemberMute({</span></span>
<span class="line highlighted"><span>    groupId:&#39;GroupTestid1&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;禁言成功&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,40);function T(y,M,R,O,A,F){const a=o("font");return c(),i("div",null,[d,s("table",r,[m,s("tbody",null,[s("tr",null,[q,s("td",null,[n(a,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),h]),s("tr",null,[g,s("td",null,[n(a,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),_]),s("tr",null,[b,s("td",null,[n(a,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),f]),s("tr",null,[x,s("td",null,[n(a,{color:"FireBrick"},{default:e(()=>[p(" 必填 ")]),_:1})]),k]),v,I,C])]),P])}const G=l(u,[["render",T]]);export{w as __pageData,G as default};
