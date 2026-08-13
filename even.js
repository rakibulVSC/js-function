function isEven(number){
    console.log(number%2)
}
// isEven(48)

function smalliFy(name){
    const fullname= name +' '+ 'chowdury';
    return fullname;
}
const robinChow= smalliFy("Robin");
// console.log(robinChow)

function doubleOrHalf(price,isDouble){
    if(isDouble===true){
    const askingPrice=price*2;
        return askingPrice;
    }
    else{
       const askingPrice=price/2;
    }
}
const myPrice=doubleOrHalf(100, true);
console.log("price for mango",myPrice)
console.log("price for leader",myPrice)