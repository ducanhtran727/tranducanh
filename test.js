//ex1
// let userInput = prompt("input number");
// let reUserInput = userInput.split(" ");
// for(let i = reUserInput.length-1; i >=0 ;i--){
//     console.log(reUserInput[i])
// }

// ex2
let array = [128,2,4,16,2,128,64,4,7,5,64];
let filter = array.filter(x => 256%x === 0);
// console.log(filter)
function filter1(arr){
    return arr.filter((value,index,arr)=>arr.indexOf(value)=== index);

}
let newFilter = filter1(filter);
// console.log(newFilter)
let number1 = '';
let number2 = '';
for(let i = 0 ; i < newFilter.length; i++){
    number1 = newFilter[i];
    number2 = 256/number1;
    if (number1 * number2 === 256 &&newFilter.indexOf(number1) != newFilter.indexOf(number2)) {
      console.log(`${number1} và ${number2} tại vị trí ${newFilter.indexOf( number1)} và ${newFilter.indexOf(number2)}`);
    }    
}
