var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourn",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
]

var high_price=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(high_price);
var low_cost=products.reduce((item1,item2)=>item2[2]<item1[2]?item2:item1)
console.log(low_cost);

var scrh=products.find(item=>item[1]=="treat")
console.log(scrh);
var prce=products.find(item=>item[2]==20)
console.log(prce);
var is_available=products.some(item=>item[2]<10)
console.log(is_available);
//forEach
// ------
products.map(item=>item[1]).forEach(names=>console.log(names))

products.filter(item=>item[2]>30).forEach(pr=>console.log(pr))





//sort pdt stock wise
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);

//d\sort by price
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);


//print no:of items in shop
// console.log(products.length);

//prnt no:of available items
// var available=products.filter((prdt=>prdt[3]!=0))
// console.log(available.length);

//prnt all product names only
// var product_name=products.map((prdt=>prdt[1]))
// console.log(product_name);

// var out_stock=products.filter(prdt=>prdt[3]==0).map(prdt=>prdt[1])
// console.log(out_stock);

// add 5rs to that stock>50
// var product_stock=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
// console.log(product_stock);