var text="hai hello hai hello"
var words=text.split(" ")
var word_count={};
for(let word of words){
    //chk for hai is present in word_count if yes add current value +1 else word_count[word]=1
if(word in word_count){
    word_count[word]+=1;
}
else{
    word_count[word]=1
}
}
console.log(word_count);