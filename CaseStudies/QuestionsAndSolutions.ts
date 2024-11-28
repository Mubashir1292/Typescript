//! Creating a function for user management and filtering out the data from the array
// import Users from './Users';
// function filtering(users:Users[],email:string,role?:string):{filteredUsers:Users[];emailFounded:Boolean}{
//     const filterUsers=role ? users.filter(user=>user.role==role) : users;
//     const eFounded = email ? users.some(user=>user.email==email):false;
//     return {
//         filterUsers,
//         eFounded,
//     };
// }

function sum(numbers:(string|number|boolean)[],thresholdNumber?:number):number{
    //! firstly have to filter out the numeric elements
    let sum=0;
    const numbersArrays=numbers.filter((ele)=>typeof(ele)=='number') as number[];
    //! checking the minimum requirement
    const checkingMinimumValues=thresholdNumber !== undefined ? numbersArrays.filter((item)=>item<thresholdNumber) : numbersArrays;
    //! Adding the Above filtered Array into the sum variable
    sum=checkingMinimumValues.reduce((result,item)=>result+item,0);
    return sum;
}
//sum([213.213,'sad',123,'ads',false,true],123);


function findingLongestWord(sentence:string):string{
    //! finding and removing the  punctuation marks
    const afterRemovingMarks=sentence.replace(/[^\w\s]/g,"").split(" ");
    const longestWord=afterRemovingMarks.reduce((result,word)=>word.length>result.length?result=word:result);
    return longestWord;
}


function CountingVowels(randomSentence:string):number{
    //?finding the vowels
    const allVowels ='aeiouAEIOU';
    const Count=randomSentence.length > 0? randomSentence.split("").filter((item)=>allVowels.includes(item)).length : 0;
    return Count; 
}



