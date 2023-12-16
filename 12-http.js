const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to our homepage');
  }
  if(req.url === '/about'){
    res.end('halo!!!');
  }
  res.end('oops');

})

server.listen(5000)