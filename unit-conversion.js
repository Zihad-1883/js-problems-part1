function unitConversion(inch){
    let feet = parseInt(inch/12);
    let inchRemaining = inch % 12;
    let inFeet = feet + ' feet ' + inchRemaining + ' Inches';
    return inFeet;
}


let inch = 75;
console.log(unitConversion(inch));


function milesToKilo(miles){
    let kilo = miles * 1.60934;
    return kilo;
}

let miles = 12;
console.log(milesToKilo(miles));