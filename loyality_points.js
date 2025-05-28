function loyalityPoints(purchasesAmount){
    const interest= (10/100)*purchasesAmount;
    return interest;
}
console.log("Loyality Points = " + loyalityPoints(50000))