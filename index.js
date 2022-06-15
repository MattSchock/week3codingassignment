//Problem 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]  //create array

function findLastElement (array) {                        //finds last element in array.
    return array.slice(-1);
    }

let subtractionResult = (findLastElement(ages) - ages[0])  //Subtracts last element from first

console.log(subtractionResult);

ages.push(14);                          //adds 14 to end of array
  
subtractionResult = (findLastElement(ages) - ages[0])  //subtracts last element from first

console.log(subtractionResult);

let averageAge = 0                          
for (let i = 0; i < ages.length; i++) {      //Finds average age of ages array.
averageAge += ages[i];
}
console.log(averageAge / ages.length);


//Problem 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']   //create names array

let avgNameLength = 0                              //finds average length of names in array
for (let i = 0; i < names.length; i++) {
    avgNameLength += names[i].length
}
console.log(avgNameLength / names.length);

let totalNames = ''                             //prints all names in array in one variable.
for (let i = 0; i < names.length; i++) {
    totalNames += names[i] + ' '
}
console.log(totalNames)

//Problem 3 How do you access the last element of an array?
//   Answer: either array.length -1 or in my case use the slice method with a negative value.

//Problem 4 How do you access the first element of any array?
//   Answer  array[0]

//Problem 5
let nameLengths = []                            //outputs array of lengths of elements in names array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

//Problem 6
let nameLengthsSum = 0                             //totals sum of nameLength array
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i]
}
console.log(nameLengthsSum);


//Problem 7                                       //logs words passed number of times
function numberwords (word, n) {
    for (let i = 0; i < n; i++) {
        console.log(word)
    }
}
numberwords('hello', 3)

//Problem 8                                       //returns full name from first and last
function fullName (firstName, LastName) {
    return firstName + ' ' + LastName
}
console.log(fullName('matt', 'schock'));

//Problem 9                                      //Tests to see if sum of array is greater than 100
let testArray100 = [1, 2, 3, 4, 100]
function greaterThan100 (array) {
    let arraySum = 0
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i]
    }
    if (arraySum > 100) {
        return true
    } else {
        return false
    }
}
console.log(greaterThan100(testArray100));

//Problem 10    
let arraySum = 0                              //Finds average value of array
function arrayAvg (array) {
    for(let i = 0; i < array.length; i++) {
        arraySum += array[i]
    }
    return arraySum / array.length
}

console.log(arrayAvg(testArray100));

//Problem 11
let testArray2 = [1, 2, 3, 4]
let testArray3 = [5, 6, 7, 8]

function compareArraysAvg (array1, array2) {            //compares avg of two arrays 
    if (arrayAvg(array1) > arrayAvg(array2)) {
        return true
    } else {
        return false
    }
}
console.log(compareArraysAvg(testArray2, testArray3));

//Problem 12                                         //compares temp and amount of money and decides to buy drink
let isHotOutside = true
let moneyInPocket = 12
function willBuyDrink (temp, cash) {
    if (temp == true && cash > 10.50) {
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Problem 13                                          //compares cats cuteness level and time since last treat. 
let catsAreBeingCute = true                           // decides if should feed cats a treat
let timeSinceTreats = 2
function giveCatsTreats (cute, time) {
    if (cute == true && time > 1) {
        console.log('Time to give the cats a treat')
    }
}
giveCatsTreats(catsAreBeingCute, timeSinceTreats);