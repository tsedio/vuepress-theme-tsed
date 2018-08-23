---
sidebar: auto
---
# IResponseError <Badge text="Interface" type="interface"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { IResponseError }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.0/src//common/mvc/interfaces/IResponseError.ts#L0-L0">/common/mvc/interfaces/IResponseError.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">interface</span> IResponseError <span class="token keyword">extends</span> Error <span class="token punctuation">{</span>
    errors?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    origin?<span class="token punctuation">:</span> Error<span class="token punctuation">;</span>
    headers?<span class="token punctuation">:</span> <a href="#api/common/mvc/iresponseheaders"><span class="token">IResponseHeaders</span></a><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
:::


<!-- Description -->
## Description

::: v-pre
Interface can be implemented to customize the error sent to the client.
:::

<!-- Members -->




## Members


<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang ">errors?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang ">origin?<span class="token punctuation">:</span> Error</code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang ">headers?<span class="token punctuation">:</span> <a href="#api/common/mvc/iresponseheaders"><span class="token">IResponseHeaders</span></a></code></pre>
:::
</div>