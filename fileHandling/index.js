const fs=require("fs")


//synchronous call
// fs.writeFileSync("./index2.txt","console.log")

//async
// fs.writeFile("./index3.txt","console.log asybc",(e)=>{console.log(e)})

//read file
// const result=fs.readFileSync("./index3.txt","utf-8");
// console.log(result)

//read file sync
// fs.readFile("./index3.txt","utf-8",(err,result)=>{
//     if(err){

//     }else{
//         console.log(result)
//     }
// });



//append file
fs.appendFileSync("./index2.js",`${Date.now()}whre are yoy\n`)
//it do not overwrite despite it addes further


//to delete filr you can do 
fs.unlinkSync("./index2.js")

//you can also make files and folders and know the stats fo the file and all