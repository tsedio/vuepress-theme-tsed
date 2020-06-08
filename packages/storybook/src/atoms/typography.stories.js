export default {
  title: 'Atoms/Typography'
}

export const overview = () => ({
  template: `<div class="p-5 bg-white">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    
    <hr />
    
    <h2 class="font-hairline">OUR<br /><b>CONTRIBUTORS</b></h2>
    
    <hr />
    
    <p>
      <strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the <ApiSymbolName>release</ApiSymbolName> of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    
    <hr />
    
    <pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Configuration<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tsed/di"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootDir <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>

@<span class="token function">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootDir
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>
  </div>`
})
