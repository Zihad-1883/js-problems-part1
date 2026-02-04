function repeatedNumbers(numbers,find){
    let count = 0;
    for(const num of numbers){
        if(num === find){
            count += 1;
        }
    }
    return count;
}

let numbers = [5,6,11,12,98,5];
let find = 5;
let find2 = 25;
console.log(repeatedNumbers(numbers,find));
console.log(repeatedNumbers(numbers,find2));