//async 
//sync


const fs = require('fs');

// fs.readFile('first.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })


// const filecontent=fs.readFileSync('first.txt','utf-8');
// console.log(filecontent);

// fs.writeFile('text.txt','subscribe to our channel',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File written successfully")
// })

// fs.writeFileSync('text2.txt',"Hello");
// console.log("write successfully")

// fs.stat('first.txt',(err,stats)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(stats)
// })

// const stats=fs.statSync('text.txt');

// console.log(stats)

// fs.mkdir('new_Directory',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Directory created");
// })

// fs.rmdir('new_Directory',(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('Directory removed')
// })

fs.unlink('text2.txt',(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('File deleted')
})
