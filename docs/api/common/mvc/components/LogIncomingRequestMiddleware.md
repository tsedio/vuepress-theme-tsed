---
sidebar: auto
---
# LogIncomingRequestMiddleware <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { LogIncomingRequestMiddleware }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/lib/mvc/components/LogIncomingRequestMiddleware"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.0/src//common/mvc/components/LogIncomingRequestMiddleware.ts#L0-L0">/common/mvc/components/LogIncomingRequestMiddleware.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">class</span> LogIncomingRequestMiddleware <span class="token keyword">implements</span> <a href="#api/common/mvc/imiddleware"><span class="token">IMiddleware</span></a> <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>serverSettingsService<span class="token punctuation">:</span> <a href="#api/common/config/serversettingsservice"><span class="token">ServerSettingsService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">use</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">onLogStart</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">configureRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">requestToObject</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">minimalRequestPicker</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">getDuration</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">stringify</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> propertySelector<span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">onLogEnd</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">cleanRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
:::


<!-- Members -->




## Members


<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">use</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>


::: v-pre
Handle the request.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">onLogStart</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>


::: v-pre
The separate onLogStart() function will allow developer to overwrite the initial request log.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">configureRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>


::: v-pre
Attach all informations that will be necessary to log the request. Attach a new `request.log` object.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">requestToObject</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre>
:::
</div>


::: v-pre
Return complete request info.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">minimalRequestPicker</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre>
:::
</div>


::: v-pre
Return a filtered request from global configuration.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">getDuration</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span></code></pre>
:::
</div>


::: v-pre
Return the duration between the time when LogIncomingRequest has handle the request and now.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">stringify</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> propertySelector<span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">string</span></code></pre>
:::
</div>


::: v-pre
Stringify a request to JSON.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">onLogEnd</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>


::: v-pre
Called when the `request.end()` is called by Express.
:::



***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> <span class="token function">cleanRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Express.<a href="#api/common/filters/request"><span class="token">Request</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>


::: v-pre
Remove all data that added with `LogIncomingRequest.configureRequest()`.
:::