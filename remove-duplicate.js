function removeDuplicate(arr){
    newArr = [];
    for(const num of arr){
        
            if(newArr.includes(num) === false){
                newArr.push(num)
            }
         
    }
    return newArr;
}

let arr = ['a','b','a','b','c']
let arr2 = removeDuplicate(arr);
console.log(arr2);