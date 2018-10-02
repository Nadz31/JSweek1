const petersHouseEstimation = (8*10*10*2.5*1000) + (100*300);
const juliasHouseEstimation = (5*11*8*2.5*1000) + (70*300);
let petersHousePrice = 2500000;
let juliasHousePrice = 1000000;

console.log("Peter's house price:" +petersHousePrice);
console.log("Julia's house price:" +juliasHousePrice);

if(petersHouseEstimation>juliasHouseEstimation){
  console.log("Peter is paying" + petersHouseEstimation + "which is less");
}
else{
  console.log("Julia is paying" + juliasHouseExtimation + "which is more");
}


