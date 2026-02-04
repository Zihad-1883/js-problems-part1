function oddAverage(){
    let sum = 0;
    let odd = [];
    for(const num of number){
        if(num % 2 !== 0){
            sum += num;
            odd.push(num);
        }
        else{
            sum += 0;
        }
    }
    let avg = sum / odd.length;
    return avg;
}

let number = [1,2,3,4,5,6,7];
console.log(oddAverage(number));