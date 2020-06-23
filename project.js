
function myFunction1(){
    let input = document.getElementById("input");
    let filter = input.value.toUpperCase();
    let list_timkiem = document.getElementById("list-timkiem");
    let li = list_timkiem.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        
        let txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
            
        } else {
            li[i].style.display= "none"
        }

    }
    if(!input.value){
        list_timkiem.style.display = "none"
    }else{
        list_timkiem.style.display= "block"
    }
}


// $(document).ready(function () {
//     $('#input').on('keyup', function (event) {
//         event.preventDefault();
//         /* Act on the event */
//         var tukhoa = $(this).val().toLowerCase();
//         $('#list-timkiem li').filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
//         });
//     });
// });
let biglist = [
    { diadiem: "ha long", link:"https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/"},
    { diadiem: "ha noi",link: "https://vi.wikipedia.org/wiki/H%C3%A0_N%E1%BB%99i" },
    { diadiem: "da lat", link: "https://www.google.com/search?q=da+lat&rlz=1C1CHBF_enVN889VN889&oq=da&aqs=chrome.0.69i59j46j69i57j69i59j0j69i60l2j69i61.807j0j7&sourceid=chrome&ie=UTF-8" },
    { diadiem: "sai gon", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "sapa", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "nha trang", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "mui ne", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "thai lan", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "tam dao", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "sam son", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "da nang", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "singapore", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "malaysia", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "nhat ban", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "ha giang", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "cua lo", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "hue", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "trung quoc", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },
    { diadiem: "campuchia", link: "https://www.ivivu.com/blog/2013/09/du-lich-ha-long-cam-nang-tu-a-den-z/" },


];

let input = document.getElementById("input");
// let tukhoa = biglist.filter(function(item){
//     return item.diadiem === input.value;
// });
// function myFunction(){
//     window.open(tukhoa.link)
// }
// console.log(tukhoa.link);
function myFunction(){
    for (let i = 0; i < biglist.length; i++) {
        if (biglist[i].diadiem === input.value) {
            window.open(biglist[i].link);

        }
    }
}

