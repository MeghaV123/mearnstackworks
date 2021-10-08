//var arr=[10,11,13,14,12,100,2,3,200]
//sorting in ascending order 
//arr.sort((num1,num2)=>num1-num2)//num1 comes before num2  (num1>num2?-1:1)
//console.log(arr);


var arr = [10, 11, 13, 12, 15]
arr.sort((num1, num2) => num1 - num2)
console.log(arr);
var element = 23;
flag=0;var low = 0, upp = arr.length - 1;
while (low < upp) {
    mid = Math.floor((low + upp) / 2);
    if (element < arr[mid]) {
        upp = mid - 1
    }
    else if (element > arr[mid]) {
        low = mid + 1
    }
    else if(element == arr[mid]){
        flag = 1;
        break;
    }

}
console.log(flag == 0 ? "element is not found" : "element found");
