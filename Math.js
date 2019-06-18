const lod = require('lodash');


function addition(x,y){
    
    if (lod.isNumber(x) && lod.isNumber(y)){
        console.log("ca marche",x+y)
        return x + y
    }else{
       return 'failed'
    }
    
    
}
function soustration(x,y){
    if (lod.isNumber(x) && lod.isNumber(y)){
        console.log("ca marche",x-y)
        return x - y
    }else{
        return 'failed'
    }
    
}
function multiply(x,y){
    if (lod.isNumber(x) && lod.isNumber(y)){
        console.log("ca marche",x*y)
        return x * y
    }else{
        return 'failed'
    }
   
}
function division(x,y){
    if (lod.isNumber(x) && lod.isNumber(y)){
        console.log("ca marche",x/y)
        return x/y
    }else{
        return 'failed'
    }
}
module.exports = {
    addition: addition,
    soustration: soustration,
    multiply: multiply,
    division:division
}