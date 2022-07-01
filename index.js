function receivesAFunction(cb){
    console.log(cb())
}
function returnsANamedFunction(){
    return function fun(){
        console.log ("Heyo")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log ("Hiya")
    }
}