import './index.css'
import css from '../src/index.css?inline'
import normalization from '../src/normalize.css?inline'

const vars = document.getElementById('variables')
vars?.insertAdjacentHTML('afterend', `
<pre>
${css}
</pre>`)

document.getElementById('normalization')?.insertAdjacentHTML('afterend',
`<pre>
${normalization}
</pre>`)