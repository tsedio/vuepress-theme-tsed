---
sidebar: auto
---
# Providers <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Providers }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/lib/di/class/Providers"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.0/src//common/di/class/Providers.ts#L0-L0">/common/di/class/Providers.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">class</span> Providers <span class="token keyword">extends</span> <a href="#api/core/registry"><span class="token">Registry</span></a>&lt<span class="token punctuation">;</span><a href="#api/common/di/provider"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> <a href="#api/common/di/iprovider"><span class="token">IProvider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span>&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">createRegistry</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> model<span class="token punctuation">:</span> <a href="#api/core/type"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><a href="#api/common/di/provider"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt<span class="token punctuation">;</span><a href="#api/common/di/registrysettings"><span class="token">RegistrySettings</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/typedprovidersregistry"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>
    <span class="token function">getRegistrySettings</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="#api/core/registrykey"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/registrysettings"><span class="token">RegistrySettings</span></a><span class="token punctuation">;</span>
    <span class="token function">createRegisterFn</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">getRegistry</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="#api/core/registrykey"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/typedprovidersregistry"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
:::


<!-- Members -->




## Constructor



::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
:::



::: v-pre
Internal Map
:::



## Members


<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">createRegistry</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> model<span class="token punctuation">:</span> <a href="#api/core/type"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><a href="#api/common/di/provider"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt<span class="token punctuation">;</span><a href="#api/common/di/registrysettings"><span class="token">RegistrySettings</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/typedprovidersregistry"><span class="token">TypedProvidersRegistry</span></a></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">getRegistrySettings</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="#api/core/registrykey"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/registrysettings"><span class="token">RegistrySettings</span></a></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">createRegisterFn</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token keyword">void</span></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">getRegistry</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="#api/core/registrykey"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="#api/common/di/typedprovidersregistry"><span class="token">TypedProvidersRegistry</span></a></code></pre>
:::
</div>