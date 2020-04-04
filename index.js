function bruteForceTwoSum(sumNum, array){

    let num1 = 0
    let arr = []
    let found = false

    while (num1 != array.length) {

    for(let counter = 1; counter < array.length; counter++)

    {
       if(array[num1] + array[counter] === sumNum){
        found = true
      arr.push([array[num1], array[counter]])
       }
   
    }
    num1 += 1
    
    }
   
      let newArr = []
      let counter = 1
    arr.map((num) => {
      if(arr[counter] !== undefined){
      if (num[0] !== arr[counter][0] & num[1] !== arr[counter][1] ){
        newArr.push(num)
    console.log(counter)
      }}
    counter += 1
   })
    return newArr
}