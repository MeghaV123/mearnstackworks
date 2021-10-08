var products={p_code:100,name:"Rice",price:250,aval_qty:50}

//pnt product name
console.log(products.name);

//update stock as current stock +30
products.aval_qty+=30
console.log(products);

//check for dicount key is present
console.log("discount" in products);

//add discount:10%
products["discount"]="10%"
console.log(products);

//chk for batch_code is present
//if not add batch_code=est_2k21_09
