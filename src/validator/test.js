



let filters = { isDeleted: false };
if (priceGreater) { filters.price = { $gte:priceGreater.sort(1)} };

        if (priceLower) { filters.price = { $gte:priceLower.sort(-1)} };

        if (size) { filters.size = { $all: size.split(",").map((x)=>x.trim()) } };

        const Products = await productModel.find(filters);    //empty array
        if (documents.length == 0) { return res.status(404).send({ status: false, msg: "no such products found" }) }; 


arr= ['1','2','3']

console.log(arr[1])


if (priceGreaterThan && priceLessThan) {
    obj.price = { $gt: priceGreaterThan, $lt: priceLessThan }}

 if (priceGreaterThan) {
    obj.price = { $gt: priceGreaterThan }
 }
 if (priceLessThan) {
    obj.price = { $lt: priceLessThan };
  }
console.log(obj)
  let productDetails = await productModel.find(obj).sort({price:1});
  if (productDetails) {
    return res
      .status(200)
      .send({ status: true, message: "Product list", data: productDetails });
  }

