console.log("Creating the file for the variables and other methods");
let total_number:object={
    name:'Nmane',
    age:123
};
console.log(total_number);
function greet(person:string,date:Date){
    return `Person:${person} and Date:${date}`;
}
console.log(greet("Mubashir",new Date()))
