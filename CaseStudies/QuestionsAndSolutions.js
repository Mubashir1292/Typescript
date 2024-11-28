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
function sum(numbers, thresholdNumber) {
    //! firstly have to filter out the numeric elements
    var sum = 0;
    var numbersArrays = numbers.filter(function (ele) { return typeof (ele) == 'number'; });
    //! checking the minimum requirement
    var checkingMinimumValues = thresholdNumber !== undefined ? numbersArrays.filter(function (item) { return item < thresholdNumber; }) : numbersArrays;
    //! Adding the Above filtered Array into the sum variable
    sum = checkingMinimumValues.reduce(function (result, item) { return result + item; }, 0);
    return sum;
}
//sum([213.213,'sad',123,'ads',false,true],123);
function findingLongestWord(sentence) {
    //! finding and removing the  punctuation marks
    var afterRemovingMarks = sentence.replace(/[^\w\s]/g, "").split(" ");
    var longestWord = afterRemovingMarks.reduce(function (result, word) { return word.length > result.length ? result = word : result; });
    return longestWord;
}
function CountingVowels(randomSentence) {
    //?finding the vowels
    var allVowels = 'aeiouAEIOU';
    var Count = randomSentence.length > 0 ? randomSentence.split("").filter(function (item) { return allVowels.includes(item); }).length : 0;
    return Count;
}
