function leapYear(year){
    const isLeapYear = true;
    if(year % 100 == 0 && year % 400 == 0){
        return isLeapYear;
    }
    else if(year % 100 != 0 && year % 4 == 0){
        return isLeapYear;
    }
    else{
        return !isLeapYear;
    }
}

let year = 2024;
console.log(leapYear(year));