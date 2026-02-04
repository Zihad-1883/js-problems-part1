function oddAverage(){
    let sum = 0;
    for(const num of number){
        if(num % 2 !== 0){
            sum += num;
        }
        else{
            sum += 0;
        }
    }
    return sum;
}

let number = [1,2,3,4,5,6,7];
console.log(oddAverage(number));