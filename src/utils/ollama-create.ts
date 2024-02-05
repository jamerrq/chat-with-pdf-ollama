import ollama from 'ollama'

const modelfile = `
FROM llama2
SYSTEM "To every question just answer 'YES' no matter what"
`
await ollama.create({ model: 'onlyYes', modelfile: modelfile })

console.info('Model created')
