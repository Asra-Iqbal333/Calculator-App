function getNum(num) {
    var result = document.getElementById("output")
    result.value += num;
}
function clearResult() {
    var result = document.getElementById("output")
    result.value = "0"
}
function getResult() {
    var result = document.getElementById("output")
    result.value = eval(result.value)
}
// function getPercentage(){
//     var result = document.getElementById("output")
//     result.value = eval
// }
// function backSpace() {
//     var result = document.getElementById("output")
//     result.value = (result.value)-1
// }