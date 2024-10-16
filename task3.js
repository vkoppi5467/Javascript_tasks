function actualPrice(costPrice,){
    costPrice = document.getElementById("price").value;
    discount = costPrice*0.2;
    sellingPrice = costPrice - discount;
    console.log(sellingPrice);
    console.log(costPrice);
    console.log(discount);
    document.getElementById("sellingPrice").innerHTML=`The selling price is ${sellingPrice} and cost price is ${costPrice} and discount is ${discount} `;
}
