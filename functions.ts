function addTwo(num:number):number{
    //*  we are'nt be able return here a string or any other type other then number
    return num+3;
}
console.log(addTwo(4));

function signup(name:string|number,email:string,password:string):string|number{
    console.log(name,email,password);
    return name ;
}
// ! by using union method in functions in typescript we can add two datatypes of every parameter , and return type also
signup("2","3","4");
function login(name:string,id:number){
    return name+id;
}
login("Mubashir",3);
export {}