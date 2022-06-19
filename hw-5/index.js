const http = require('http');

const server=http.createServer((req,res)=>{
    const url = req.url;
    console.log('req is sended');

    if(url ==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>INDEX PAGE</h2>");
    }else   if(url ==="/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>About PAGE</h2>");
    }
    else   if(url ==="/contact"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>contact PAGE</h2>");
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h2>404 PAGE</h2>");
    }

    res.end();
});
const port=5000;
server.listen(port,()=>{
    console.log(`port ${port} is live`);
})