// (celsius * 1.8) + 32

function temp(celsiusTemp){
    let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
    return fahrenheitTemp;
}

const celsiusTemp = 37;
console.log(temp(celsiusTemp));
