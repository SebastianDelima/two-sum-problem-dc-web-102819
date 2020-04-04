let arr = [5, -2, 4, 9, 1] 

let sum = 6
function bruteForceTwoSum(sumNum, array){

    let num1 = 0
   
    let found = false

    while (!found === true) {

    for(let counter = 1; counter < array.length; counter++)

    {
       if(array[num1] + array[counter] === sumNum){
        found = true
         return [array[num1], array[counter]]
       }
   
    }
    num1 += 1
    if(num1 === array.length){
        break
    }
    }
}
