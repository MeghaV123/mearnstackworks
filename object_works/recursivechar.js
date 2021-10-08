
// var arr = [10, 11, 10, 20, 21, 21]
 //word count,duplication,first recursive


var pattern="BCABB"
var alpha={}
for(let num of pattern){
    if(num in alpha){
        console.log(num,"is the first recursive character");
        break;
    }
    else{
        alpha[num]=1
    }
}
