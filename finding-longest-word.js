//  I am learning Programming to become a programmer

function longestWord(str){
    let str2 = str.split(' ');
    let highest = -Infinity;
    let lowest = Infinity;
    let longest;
    for(const word of str2){
        if(word.length > highest && word.length < lowest){
            highest = word.length;
            longest = word;
        }
    }
    return longest;

}

let str = 'I am learning Programming to become a programmer'
console.log(longestWord(str));