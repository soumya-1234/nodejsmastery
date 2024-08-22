const http=require('http');

const server = http.createServer((req,res)=>{
    console.log('Started');
    res.end("Hello i m response");
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})