import{_ as p,D as o,c as i,a as n,j as s,I as e,w as l,a2 as t,o as c}from"./chunks/framework.B-SOf8M1.js";const Ks=JSON.parse('{"title":"消息方法（消息相关）——下部分","description":"","frontmatter":{},"headers":[],"relativePath":"client/messagemethods2.md","filePath":"client/messagemethods2.md"}'),d={name:"client/messagemethods2.md"},r=s("h1",{id:"消息方法-消息相关-——下部分",tabindex:"-1"},[n("消息方法（消息相关）——下部分 "),s("a",{class:"header-anchor",href:"#消息方法-消息相关-——下部分","aria-label":'Permalink to "消息方法（消息相关）——下部分"'},"​")],-1),u=s("br",null,null,-1),h=s("br",null,null,-1),_=s("br",null,null,-1),g=s("hr",null,null,-1),m=s("br",null,null,-1),b=t(`<p>参数：</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.getGroupInfo({</span></span>
<span class="line highlighted"><span>    groupId:&#39;GroupTestid1&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;群聊信息&#39;,res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_7-获取群成员-getgroupmember" tabindex="-1">7.获取群成员 <code>getGroupMember</code> <a class="header-anchor" href="#_7-获取群成员-getgroupmember" aria-label="Permalink to &quot;7.获取群成员 \`\`\`getGroupMember\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>params <code>{ groupId: 群组id, page:页码 1开始，, size:分页大小 }</code></p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.getGroupMember({</span></span>
<span class="line highlighted"><span>    page:1,</span></span>
<span class="line"><span>    size:20,</span></span>
<span class="line"><span>    groupId:&#39;GroupTestid1&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;群成员&#39;,res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_8-获取会话列表-getconversastion" tabindex="-1">8.获取会话列表 <code>getConversastion</code> <a class="header-anchor" href="#_8-获取会话列表-getconversastion" aria-label="Permalink to &quot;8.获取会话列表 \`\`\`getConversastion\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：null</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.getConversastion().then(res=&gt;{</span></span>
<span class="line highlighted"><span>    console.log(&#39;会话列表&#39;,res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_9-获取消息记录-getmessagerecord" tabindex="-1">9.获取消息记录 <code>getMessageRecord</code> <a class="header-anchor" href="#_9-获取消息记录-getmessagerecord" aria-label="Permalink to &quot;9.获取消息记录 \`\`\`getMessageRecord\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p><p>params {conversationType:<code>C2C|GROUP</code>,size:<code>分页大小</code>,to：<code>对方userId</code>,messageId:用于消息续拉，即从那一条消息开始拉取，比如分也是传第一页的最早的一条消息的Id}</p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.getMessageRecord({</span></span>
<span class="line highlighted"><span>    conversationType:&#39;C2C&#39;,</span></span>
<span class="line"><span>    size:20,</span></span>
<span class="line"><span>    to:1,</span></span>
<span class="line"><span>    // messageId:&#39;1839345879890023&#39;  第一页不传，第二页开始才传  或者直接指定到某一条消息之后的消息，用于消息跳转等时可用</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;消息列表&#39;,res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_10-创建自定义消息-createcustomemessage" tabindex="-1">10.创建自定义消息 <code>createCustomeMessage</code> <a class="header-anchor" href="#_10-创建自定义消息-createcustomemessage" aria-label="Permalink to &quot;10.创建自定义消息 \`\`\`createCustomeMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,27),f={tabindex:"0"},I=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),x=s("td",null,"to:string,number",-1),v=s("td",null,"用户的userId 或 群聊ID",-1),k=s("td",null,"conversationId:string",-1),C=s("td",null,"会话Id,取自会话列表",-1),P=s("td",null,"conversationType:string",-1),F=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),y=s("td",null,"data:string",-1),T=s("td",null,"发送的自定义文本（JSON字符串）",-1),M=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),R=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),B=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),q=s("td",null,"description",-1),A=s("td",null,"消息描述",-1),O=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createCustomeMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    data:JSON.stringify({</span></span>
<span class="line"><span>        id:1,</span></span>
<span class="line"><span>        name:2,</span></span>
<span class="line"><span>        test:3,</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    description:&#39;我是着一条自定义消息的标题描述文字&#39;,</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39; </span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的文本消息&#39;)</span></span>
<span class="line"><span>    fxIm.sendMessage(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建消息后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_11-创建图片消息-createimagemessage" tabindex="-1">11.创建图片消息 <code>createImageMessage</code> <a class="header-anchor" href="#_11-创建图片消息-createimagemessage" aria-label="Permalink to &quot;11.创建图片消息 \`\`\`createImageMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,7),S={tabindex:"0"},U=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),G=s("td",null,"to:string,number",-1),V=s("td",null,"用户的userId 或 群聊ID",-1),w=s("td",null,"conversationId:string",-1),D=s("td",null,"会话Id,取自会话列表",-1),N=s("td",null,"conversationType:string",-1),j=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),E=s("td",null,"file:FILE",-1),L=s("td",null,"发送的图片",-1),z=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),$=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),J=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),H=s("tr",null,[s("td",null,"onProgress:function"),s("td",null,"可选"),s("td",null,"上传进度反馈")],-1),K=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createImageMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    file:new File({name:&#39;213.png&#39;,}),  // 传入文件</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39;,</span></span>
<span class="line"><span>    onProgress:(e)=&gt;{</span></span>
<span class="line"><span>        console.log(e,&#39;这里处理文件上传的进度&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的文本消息&#39;)</span></span>
<span class="line"><span>    // 消息商品 同时发送</span></span>
<span class="line"><span>    fxIm.sendMessage(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建消息后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_12-创建视频消息-createvideomessage" tabindex="-1">12.创建视频消息 <code>createVideoMessage</code> <a class="header-anchor" href="#_12-创建视频消息-createvideomessage" aria-label="Permalink to &quot;12.创建视频消息 \`\`\`createVideoMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,7),Q={tabindex:"0"},W=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),X=s("td",null,"to:string,number",-1),Y=s("td",null,"用户的userId 或 群聊ID",-1),Z=s("td",null,"conversationId:string",-1),ss=s("td",null,"会话Id,取自会话列表",-1),ns=s("td",null,"conversationType:string",-1),as=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),es=s("td",null,"file:FILE",-1),ls=s("td",null,"发送的视频文件",-1),ts=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),ps=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),os=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),is=s("tr",null,[s("td",null,"onProgress:function"),s("td",null,"可选"),s("td",null,"上传进度反馈")],-1),cs=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createVideoMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    file:new File({name:&#39;213.mp4&#39;,}),  // 传入文件</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39;,</span></span>
<span class="line"><span>    onProgress:(e)=&gt;{</span></span>
<span class="line"><span>        console.log(e,&#39;这里处理文件上传的进度&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的消息&#39;)</span></span>
<span class="line"><span>    // 消息商品 同时发送</span></span>
<span class="line"><span>    fxIm.sendMessage(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建消息后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_12-创建音频-语音消息-createaudiomessage" tabindex="-1">12.创建音频-语音消息 <code>createAudioMessage</code> <a class="header-anchor" href="#_12-创建音频-语音消息-createaudiomessage" aria-label="Permalink to &quot;12.创建音频-语音消息 \`\`\`createAudioMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,7),ds={tabindex:"0"},rs=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),us=s("td",null,"to:string,number",-1),hs=s("td",null,"用户的userId 或 群聊ID",-1),_s=s("td",null,"conversationId:string",-1),gs=s("td",null,"会话Id,取自会话列表",-1),ms=s("td",null,"conversationType:string",-1),bs=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),fs=s("td",null,"file:FILE",-1),Is=s("td",null,"发送的音频文件",-1),xs=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),vs=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),ks=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),Cs=s("tr",null,[s("td",null,"onProgress:function"),s("td",null,"可选"),s("td",null,"上传进度反馈")],-1),Ps=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createAudioMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    file:new File({name:&#39;213.mp3&#39;,}),  // 传入文件</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39;,</span></span>
<span class="line"><span>    onProgress:(e)=&gt;{</span></span>
<span class="line"><span>        console.log(e,&#39;这里处理文件上传的进度&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的消息&#39;)</span></span>
<span class="line"><span>    // 消息商品 同时发送</span></span>
<span class="line"><span>    fxIm.sendMessage(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建消息后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_12-创建其他文件消息-createfilemessage" tabindex="-1">12.创建其他文件消息 <code>createFileMessage</code> <a class="header-anchor" href="#_12-创建其他文件消息-createfilemessage" aria-label="Permalink to &quot;12.创建其他文件消息 \`\`\`createFileMessage\`\`\`&quot;">​</a></h3><p>tips:请在登录后使用</p><p>参数：</p>`,7),Fs={tabindex:"0"},ys=s("thead",null,[s("tr",null,[s("th",null,"key"),s("th",null,"status"),s("th",null,"字段描述")])],-1),Ts=s("td",null,"to:string,number",-1),Ms=s("td",null,"用户的userId 或 群聊ID",-1),Rs=s("td",null,"conversationId:string",-1),Bs=s("td",null,"会话Id,取自会话列表",-1),qs=s("td",null,"conversationType:string",-1),As=s("td",null,"会话列表 可选（C2C 单聊，GROUP 群聊）",-1),Os=s("td",null,"file:FILE",-1),Ss=s("td",null,"发送的文件",-1),Us=s("tr",null,[s("td",null,"needReadReceipt:Boolean"),s("td",null,"可选"),s("td",null,"是否需要已读回执，默认为false,即不需要已读回执")],-1),Gs=s("tr",null,[s("td",null,"atUserList:Array"),s("td",null,"可选"),s("td",null,"@ 成员名单，单聊无效")],-1),Vs=s("tr",null,[s("td",null,"hasRiskContent:Boolean"),s("td",null,"可选"),s("td",null,"消息进行风险标识")],-1),ws=s("tr",null,[s("td",null,"onProgress:function"),s("td",null,"可选"),s("td",null,"上传进度反馈")],-1),Ds=t(`<p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.createFileMessage({</span></span>
<span class="line highlighted"><span>    to:1,</span></span>
<span class="line"><span>    file:new File({name:&#39;213.rar&#39;,}),  // 传入文件</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;,// 可选GROUP发送群聊消息</span></span>
<span class="line"><span>    conversationId: &#39;C2CtestUser&#39;,</span></span>
<span class="line"><span>    onProgress:(e)=&gt;{</span></span>
<span class="line"><span>        console.log(e,&#39;这里处理文件上传的进度&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    console.log(res,&#39;创建的消息&#39;)</span></span>
<span class="line"><span>    // 消息商品 同时发送</span></span>
<span class="line"><span>    fxIm.sendMessage(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>推荐使用 createMessage 创建消息后直接上屏渲染 减少等待时间</p></blockquote><h3 id="_13-踢出群成员-removemember" tabindex="-1">13.踢出群成员 <code>removeMember</code> <a class="header-anchor" href="#_13-踢出群成员-removemember" aria-label="Permalink to &quot;13.踢出群成员  \`\`\`removeMember\`\`\`&quot;">​</a></h3><p>参数： <code>{userId:对方的id,groupId:要操作的群聊}</code></p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.removeMember({</span></span>
<span class="line highlighted"><span>    userId:2,</span></span>
<span class="line"><span>    groupId:&#39;testGroup1&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_14-设置消息已读-setmessageread" tabindex="-1">14.设置消息已读 <code>setMessageRead</code> <a class="header-anchor" href="#_14-设置消息已读-setmessageread" aria-label="Permalink to &quot;14.设置消息已读  \`\`\`setMessageRead\`\`\`&quot;">​</a></h3><p>参数： <code>{conversationType:会话类型,lastMessageId:最新一条消息Id,to:对方id}</code></p><p>返回值：<code>Promise&lt;Object&gt;</code></p><p>eg：</p><div class="language-ecmascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ecmascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import {useFxIm} from &#39;fx-im-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fxIm = useFxIm()</span></span>
<span class="line"><span>fxIm.setMessageRead({</span></span>
<span class="line highlighted"><span>    yo:2,</span></span>
<span class="line"><span>    lastMessageId:&#39;xxxxxxxx&#39;,</span></span>
<span class="line"><span>    conversationType:&#39;C2C&#39;</span></span>
<span class="line"><span>}).then(res=&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div>`,14);function Ns(js,Es,Ls,zs,$s,Js){const a=o("font");return c(),i("div",null,[r,u,h,_,g,m,n(" ### 6.获取群信息 ```getGroupInfo``` tips:请在登录后使用 "),b,s("table",f,[I,s("tbody",null,[s("tr",null,[x,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),v]),s("tr",null,[k,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),C]),s("tr",null,[P,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),F]),s("tr",null,[y,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),T]),M,R,B,s("tr",null,[q,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),A])])]),O,s("table",S,[U,s("tbody",null,[s("tr",null,[G,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),V]),s("tr",null,[w,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),D]),s("tr",null,[N,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),j]),s("tr",null,[E,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),L]),z,$,J,H])]),K,s("table",Q,[W,s("tbody",null,[s("tr",null,[X,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),Y]),s("tr",null,[Z,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),ss]),s("tr",null,[ns,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),as]),s("tr",null,[es,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),ls]),ts,ps,os,is])]),cs,s("table",ds,[rs,s("tbody",null,[s("tr",null,[us,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),hs]),s("tr",null,[_s,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),gs]),s("tr",null,[ms,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),bs]),s("tr",null,[fs,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),Is]),xs,vs,ks,Cs])]),Ps,s("table",Fs,[ys,s("tbody",null,[s("tr",null,[Ts,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),Ms]),s("tr",null,[Rs,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),Bs]),s("tr",null,[qs,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),As]),s("tr",null,[Os,s("td",null,[e(a,{color:"FireBrick"},{default:l(()=>[n(" 必填 ")]),_:1})]),Ss]),Us,Gs,Vs,ws])]),Ds])}const Qs=p(d,[["render",Ns]]);export{Ks as __pageData,Qs as default};
