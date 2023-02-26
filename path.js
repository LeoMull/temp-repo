const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Welcome Home page')
  }
  if(req.url === '/about'){
    res.end('Welcome about')
  }
  res.end(`
    <h1>Oops!</h1>        
    <p>Wrong page</p>
  `)
  res.write('Welcome');
  res.end()
})

server.listen(5000)