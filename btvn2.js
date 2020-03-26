//b1
// // what is boolean ?
// // boolean la dai dien kieu du lieu cho 2 gia tri la ( true/false)
// //Write down 3 different expression that results a Boolean type
// const x = 5;
// console.log(x > 6);
// console.log(x === 5 || x <= 3);
// console.log(!(x === 6) && x >=3);

// //b3

// //What is nested conditionals?

// //If Statement inside another IF Statement called JavaScript Nested If Statement. 

// //The JavaScript Else Statement allows us to print different statements depending upon the expression result (TRUE, FALSE)

// let time = Number(prompt(`nhap vao thoi gian`));

// if( time <= 7 && time>= 5){
// console.log(`ban den dung gio`)
// }else if(time >= 7 && time <=9){
//     console.log(`ban den muon`)
// }else{
//     console.log(`false`)};
//b1
let mass = Number(prompt(`nhap can nang`));
let x = Number(prompt(`nhap chieu cao`));
const height = x * 0.01;
let BMI = mass / (height * height) ;

if(BMI < 16){
    console.log(`Severely underweight`);
}else if(BMI>=16 && BMI<18.5){
    console.log(`Underweight`);
}else if(BMI >= 18.5 && BMI <25){
    console.log(`Normal`);
}else if(BMI>=25 && BMI<=30){
    console.log(`Overweight`);
}else{console.log(`Obese`)};


//b2
let userinput = Number(prompt(`n`));

let result = 1
for( i = 1 ;i <= userinput; i++){
result = result * i
}
console.log(result);

