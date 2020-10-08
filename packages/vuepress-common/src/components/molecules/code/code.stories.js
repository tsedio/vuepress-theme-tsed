export default {
  title: 'Molecules/Codes'
}

export const overview = () => ({
  template: `<div class="p-5 bg-white">
    <div class="language-typescript"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Configuration<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tsed/di"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootDir <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>

@<span class="token function">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootDir
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>
  </div>`
})

export const withLineNumbers = () => ({
  template: `<div class="p-5 bg-white">
    <div class="language-typescript line-numbers-mode">
      <pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Configuration<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tsed/di"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootDir <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>

@<span class="token function">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootDir
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div>
   </div>
  </div>`
})
