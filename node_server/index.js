const http=require("http");
const fs=require("fs");
const url=require("url");

const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}::new Req Received\n`
    const myurl=url.parse(req.url,true)
    fs.appendFile("./log.txt",log,(err,result)=>{
        switch(myurl.pathname){
            case "/" :return res.end("home page")
            case "/about":
                const username=myurl.query.myname;
                return res.end(`helloo ${username}`)
             default:return res.end("error page 404")
        }
        // console.log("new rew rceived");
        // res.end("hello this is response form our side")
    })

})

myserver.listen(8000,()=>{
    console.log("server started")
})