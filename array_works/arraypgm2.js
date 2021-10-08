var arr=[100,150,75,80,45,40,500,25,50]
var avl_amount=50;
var flag=0;
for(let price of arr){
    if(price<avl_amount){
        flag=1;
        break;
    }
}
if(flag==0?"":"")