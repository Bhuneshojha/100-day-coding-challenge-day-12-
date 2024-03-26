//          100 days of coding challenge ( DAY 12 )

//   Question 01    
let favPizza:string[] = ["Veg","Cheese","Chicken","Desert"]
for (let pizza of favPizza){
  console.log("Pizza")
}
console.log("/n")
for (let pizza of favPizza){
  console.log(`I really love to eat ${pizza} pizza.`);
}
console.log("I really like pizza");
//   Question 02
let birds:string[] = ["Parrot","Pigeon","Peacock","Crow"];
birds.forEach(bird =>{
  console.log(`The${bird} looks beautiful when fly.`);
});
console.log("Any of these birds Looks cute!");
//   Question 03
function design_shirt(size:string,message:string){
  console.log(`making a ${size} t-shirt with print the message ${message} on it.`);

}
design_shirt("medium","Happy Holi");
