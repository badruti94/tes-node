const http = require('http')

http.createServer((req, res)=>{
    res.end('tes');
}).listen(4000);
