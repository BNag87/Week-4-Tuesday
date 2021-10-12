// function barkHealth(input)
// {
//     console.log("You are "+input+" with sugar.")
// }

// function displayHealth(input, fn)
// {
//     if (input < 20)
//     {
//         fn("super low");
//     }
//     else if (input>=20 && input <50)
//     {
//         fn("totally fine")
//     }
//     else if (input >= 75)
//     {
//         fn("stuffed to the brim")
//     }
// }

// displayHealth(89, barkHealth)
// displayHealth(4, barkHealth)
// displayHealth(33, barkHealth)

//====================END OF HIGHER ORDER FUNCTION DEMO
//====================CHALLENGE 1 - higher functions pt1

console.log("=======================CHALLENGE 1 - Higher functions pt1===========================\n")
function FN_print()
{
    console.log("Hello Code Nation")
}

function FN_setOff(inQty){
    for(let i = 0; i<inQty; i++)
    {
        FN_print()
    }
}

FN_setOff(5)

//====================CHALLENGE 2 - Higher Functions pt2

console.log("\n=======================CHALLENGE 2 - Higher Functions pt2===========================\n")
let total = 0;

function addTwo(num1, num2, fn)
{
    let result = (num1 + num2)
    total += result;
    console.log(num1+"+"+num2+" = "+result)
    fn(total)
}

function spitTotal(inTot)
{
    console.log("\tCurrent total is: "+inTot+"\n")
}

addTwo(1,2,spitTotal)
addTwo(3,4,spitTotal)

//====================CHALLENGE 3 - Array Map

console.log("\n=======================CHALLENGE 3 - Array Maps===========================\n")
let AR_nums = [1,2,3,4,5]
let AR_mapNums = AR_nums.map(FN_mapMod)

function FN_mapMod(number)
{
    return (number * 3)
}

function barkItems(array)
{
    for(let i = 0; i< array.length; i++)
    {
        console.log("Mapped array element: "+i+" (originally "+AR_nums[i]+") is "+array[i])
    }
}

barkItems(AR_mapNums)

//====================CHALLENGE 4 - Maths problems
console.log("\n=======================CHALLENGE 4 - Maths Problems===========================\n")

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide = (a,b) => {
    return a/b
}

const subtract = (a,b) => {
    return a-b
}

const doMath = (num1) =>{
    return(num2, fn) =>{
        return fn(num1,num2)
    }
}

console.log("10 + 2 = ")
console.log("\t["+doMath(10)(2,add)+"]")
console.log("10 - 2 = ")
console.log("\t["+doMath(10)(2,subtract)+"]")
console.log("10 x 2 = ")
console.log("\t["+doMath(10)(2,multiply)+"]")
console.log("10 ÷ 2 = ")
console.log("\t["+doMath(10)(2,divide)+"]")