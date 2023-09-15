const http=require("http");
const express=require("express");
const app=express();
// const server=http.createServer();
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.listen(8000,()=>{
    console.log("server is listening on port no 40000")
})


// rest - representational state transfer