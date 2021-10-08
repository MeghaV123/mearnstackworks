var a=10,b=2,c=3;
if((a<b)&(b>c)){
    console.log(a, "is second large");
}
else if((b<c)&(c>a)){
    console.log(b, "is second large");
}
else if((c<a)&(a>b)){
    console.log(c, "is second large");
}
else{
    console.log("three numbers are same");
}
