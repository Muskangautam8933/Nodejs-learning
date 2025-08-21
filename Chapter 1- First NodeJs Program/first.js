console.log("Kg coding is best");

const fs = require('fs');
fs.watchFile("output.txt" , "writting file",(err)=>{
    if(err){
        console.log("Error ocurred");
    }
    else{
        console.log("File written SUCCESFULLY")
    }
})