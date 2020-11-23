export default {
  title: 'Atoms/Typography'
}

export const overview = () => ({
  template: `<main class="p-5 bg-white content__default">
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
    
    <ul>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
    </ul>
    
    <ul><li><code>type</code> - <code>smtp</code></li> <li><code>SMTP</code> - <code>object</code> (optional, if not present will use <code>transport</code> field)
<ul><li><code>host</code> - <code>string</code> (optional, defaults to <code>localhost</code>)</li> <li><code>port</code> - <code>integer</code> (optional, defaults to <code>25</code>)</li> <li><code>auth</code> - <code>object</code> (optional) - authentication details
<ul><li><code>user</code> - <code>string</code></li> <li><code>pass</code> - <code>string</code></li></ul></li></ul></li> <li><code>transport</code> - <code>object</code> (optional, if not present will use <code>SMTP</code>) - see <a href="https://nodemailer.com/smtp/" target="_blank" rel="noopener noreferrer"><code>nodemailer</code><span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a> docs for transport options
<ul><li><code>plugin</code> - <code>string</code> (optional, defaults to <code>smtp</code>) - the nodemailer transport plugin to use</li> <li><code>options</code> - <code>object</code> - configuration for the transport plugin</li></ul></li> <li><code>attachment</code> - <code>object</code> (optional) - send logs as email attachment
<ul><li><code>enable</code> - <code>boolean</code> (optional, defaults to <code>false</code>)</li> <li><code>message</code> - <code>string</code> (optional, defaults to <code>See logs as attachment</code>) - message to put in body of email</li> <li><code>filename</code> - <code>string</code> (optional, defaults to <code>default.log</code>) - attachment filename</li></ul></li> <li><code>sendInterval</code> - <code>integer</code> (optional, defaults to <code>0</code>) - batch emails and send in one email every <code>sendInterval</code> seconds, if <code>0</code> then every log message will send an email.</li> <li><code>shutdownTimeout</code> - <code>integer</code> (optional, defaults to <code>5</code>) - time in seconds to wait for emails to be sent during shutdown</li> <li><code>recipients</code> - <code>string</code> - email addresses to send the logs to</li> <li><code>subject</code> - <code>string</code> (optional, defaults to message from first log event in batch) - subject for email</li> <li><code>sender</code> - <code>string</code> (optional) - who the logs should be sent as</li> <li><code>html</code> - <code>boolean</code> (optional, defaults to <code>false</code>) - send the email as HTML instead of plain text</li> <li><code>layout</code> - <code>object</code> (optional, defaults to basicLayout) - see <a href="https://logger.tsed.io/layouts.html" target="_blank" rel="noopener noreferrer">layouts<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a></li> <li><code>cc</code> - <code>string</code> (optional) - email addresses to send the carbon-copy logs to</li> <li><code>bcc</code> - <code>string</code> (optional) - email addresses to send the blind-carbon-copy logs to</li></ul>
    
    <ol>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
       <li><strong>Lorem Ipsum</strong> is <code>simply</code> dummy text of the <a>printing</a> and typesetting industry.</li>
    </ol>
    
    <hr />
    
    <pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Configuration<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tsed/di"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootDir <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>

@<span class="token function">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rootDir
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>
  </main>`
})
