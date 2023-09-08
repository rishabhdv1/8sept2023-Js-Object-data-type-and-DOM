
let car1 = {
    //1. P:V (Many)
    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:"black",
    type:'SUV',
    engine:"EV/Petrol/Diesel",
    price:1400000,

    //2. Functions/Method (Many)
    getFullDetail(){
        //Every function return something
        return this.brand + this.year + this.model + this.color +this.type + this.engine + this.price;
    }
}
var car2 = {
    //1. P:V (Many)
    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:"black",
    type:'Gypsy',
    engine:"Diesel",
    price:1400000

    //2. Functions (Many)

}
const car3 = {
    //1. P:V (Many)
    brand:"Hundai",
    year:2023,
    model:"Verna",
    color:"black",
    type:'Sedan',
    engine:"Petrol",
    price:1600000

    //2. Functions (Many)
}

console.log(car1.brand); //object.property
console.log(car2["brand"]); //object["propperty"]
console.log(car2[x]); //object[expression] x is an expression