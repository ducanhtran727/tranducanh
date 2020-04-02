//b1
// let x = Number(prompt(`user input`));
// let y = 1;
// if ( x < 0){
//     console.log(`invalid input`);
// }else{
//     for(let i = 1 ; i <= x ; i++){
//         y = y*i;
//     }console.log(y);
// }
// //b2
// let x = prompt(`user input name`);
// let y = Number(prompt(`user input age`));
// if (y < 18){
//     let a = x + ` chua du tuoi vao trang wed`
//     console.log(a);
// }else{
//     let b = prompt(`ban co muon vao trang wed nay khong`);
    
//     if(b === `yes`){
//         let c = x +` da vao trang wed thanh cong`
//         console.log(c);
//     }else{
//         let d = x + ` da thoat khoi trang wed`;
//         console.log(d);
        
//     }
// }
// //b3
// let x = prompt(`user name`);
// let y = prompt(`passwords`);
// let username2 = `ducanh`;
// let passwords2 = `123456`;
// if(x === username2 && y === passwords2){
//     console.log(`dang nhap thanh cong`);
// }else if(y === passwords2 ){
//     console.log(`user name sai`);
// }else if(x === username2){
//     console.log(`passwords sai`);
// }else{
//     console.log(`invalid input`);
// };
// //b4
// let x = prompt(`name`);
// let y = Number(prompt(`month`));
// switch(y){
//     case 1 :
//     case 2 :
//     case 3 :
//     {
//         console.log(x + ` sinh vao mua xuan`);
//         break;
//     }
//     case 4 :
//     case 5 :
//     case 6 :{
//         console.log(x+` sinh vao mua he`);
//         break;
//     }
//     case 7 :
//     case 8 :
//     case 9 :  {console.log(x+` sinh vao mua thu`);
//     break;
// } 
//  case 10 :
// case 11 :
// case 12 :{
//     console.log(x+ ` sinh vao mua dong`);
//     break;
// }
// default : {
//     console.log(`input không hợp lệ`);
// }
   
// } 
// //b5
// let loop = true


// while(loop){
//     let a = Number(prompt(`tham so a`));
//     let b = Number(prompt(`tham so b`));
//     let c = Number(prompt(`tham so c`));
//     let e = prompt(`yes or no`);
//     let d = b*b - 4*a*c;
//     if(d<0){
//         console.log(`phuong trinh vo nghiem`);
        
//         if(e === `yes`){
//             loop = true
//         }else{
//             loop = false;
//         }
//     }else if(d === 0){
//         let x = -b/(2*a);
//         console.log(x);
       
//     if(e === `yes`){
//         loop = true
//     }else{
//         loop = false;
//     }
//     }else{
//         let x1 = (- b+ Math.sqrt(d))/(a*2);
//         let x2 = (- b - Math.sqrt(d))/(a*2);
//         console.log(x1);
//         console.log(x2); 
//        if(e=== `yes`){
//         loop = true
//     }else{
//         loop = false;
//     }
//     }
    
    
// }
// b6
let loop = true;
while(loop)
{
    const x = prompt(`nhap vao chuoi bat ky`);
   let a = prompt(`người dùng có muốn tiếp tục chương trình?`);
for(let i = x.length-1;i>=0;i--)

    console.log(x[i]);
    if(a == `no`){
    loop = false;
        
    }else{
        loop = true;
    }

}

