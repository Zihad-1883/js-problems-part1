function vowelsCounter(str){
    let count = 0;
    let str2 = str.toLowerCase();
    for(let i=0; i<str2.length; i++){
        if(str2[i] === 'a' || str2[i] === 'e' || str2[i] === 'i' || str2[i] === 'o' || str2[i] === 'u'){
            count += 1;
        }
    }
    return count;
}

let str = 'aeiouIiIaAiOiU';
console.log(vowelsCounter(str));