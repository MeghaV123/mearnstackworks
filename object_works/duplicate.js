var duplicates = {}
for (let num of arr) {
    if(num in duplicates){
    duplicates[num] += 1
}
else {
    duplicates[num] = 1
}
}
console.log(duplicates);