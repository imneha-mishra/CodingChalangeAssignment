const items = [
    {
        name:"Iphone 15",
        category:"Mobile",
        PriceUSD:999
    },
    {
        name:"Macbook Air",
        category:"Laptop",
        PriceUSD:1499
    },
    {
        name:"Watch",
        category:"Watches",
        PriceUSD:399
    },
];

const exchangeRate =80;

function convertToINR(priceInUSD){
    return priceInUSD * exchangeRate;
}
const itemsInINR = items.map((item)=>({
    ...item,
    priceINR:convertToINR(item.priceUSD),
}));
console.log(itemsInINR);




