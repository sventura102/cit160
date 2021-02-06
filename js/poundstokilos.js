function multiplyBy() {
    //Input
let x = parseFloat(document.getElementById("number1").nodeValue);
    //Processing
let multiplyBy = x * 0.45359237
    //Output
document.getElementById("output").innerHTML = `${x}pounds equals ${multiplyBy} kilograms`
}