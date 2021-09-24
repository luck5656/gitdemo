#!/usr/bin/env node

let fs=require("fs");

//IFFI
(function(){
let n=process.argv[2];
let name=process.argv[3]

if(!Number.isInteger(+n)||typeof name!="string" || n<=0){
    console.log("invalid input");
    return;
}

//if same name file exist then delete it
if(fs.existsSync(`${name}-0`)){
    for(let i=0;i<n;i++){
        fs.rmdirSync(`${name}-${i}`);
        }
}else{ //else creat the file 
    for(let i=0;i<n;i++){
        fs.mkdirSync(`${name}-${i}`);
        }
        
}
})();



