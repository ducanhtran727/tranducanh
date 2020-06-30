let list_timkiem = document.getElementById("list-timkiem");
// let dangnhap = document.getElementById("dangnhap");
let li = list_timkiem.getElementsByTagName("li");
let input = document.getElementById("input");
// if (JSON.parse(localStorage.getItem("isloging"))) {
//   console.log(JSON.parse(localStorage.getItem("isloging")));
//   let a = JSON.parse(localStorage.getItem("isloging"));
//   dangnhap.innerHTML = `Đăng Xuất`;
//   let span = document.getElementById("span");
//   span.innerHTML = `Welcome : ${a}`;
// }
// dangnhap.addEventListener("click", function dangxuat() {
//   if (JSON.parse(localStorage.getItem("isloging"))) {
//     localStorage.removeItem("isloging");
//     location.href = "./project.html";
//   } else {
//     location.href = "./login.html";
//   }
// });
console.log(JSON.parse(localStorage.getItem("isloging")));
let cmt = document.getElementById("fcmt");
if (!JSON.parse(localStorage.getItem("isloging"))){
  cmt.style.visibility="hidden";

}
  function myFunction1() {
    let filter = input.value;

    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];

      let txtValue = a.innerText;

      if (change_alias(txtValue).indexOf(change_alias(filter)) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    if (!input.value) {
      list_timkiem.style.display = "none";
    } else {
      list_timkiem.style.display = "block";
    }
  }

function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
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
  {
    diadiem: "hạ long",
    link: "./halong1.html",
  },
  {
    diadiem: "hà nội",
    link: "hanoi1.html",
  },
  {
    diadiem: "đà lạt",
    link: "./hanoi1.html",
  },
  {
    diadiem: "sài gòn",
    link: "saigon1.html/",
  },
  {
    diadiem: "sapa",
    link: "sapa1.html",
  },
  {
    diadiem: "nha trang",
    link: "./nhatrang1.html",
  },
  {
    diadiem: "mũi né",
    link: "./tamdao1.html",
  },
  {
    diadiem: "thái lan",
    link: "./thailan1.html",
  },
  {
    diadiem: "tam đảo",
    link: "./tamdao1.html",
  },
  {
    diadiem: "sầm sơn",
    link: "./tamdao1.html",
  },
  {
    diadiem: "đà nẵng",
    link: "danang1.html",
  },
  {
    diadiem: "singapore",
    link: "./singapore1.html",
  },
  {
    diadiem: "malaysia",
    link: "nhatban1.html",
  },
  {
    diadiem: "nhật bản",
    link: "./nhatban1.html",
  },
  {
    diadiem: "hà giang",
    link: "./halong1.html",
  },
  {
    diadiem: "cửa lò",
    link: "nhatrang1.html",
  },
  {
    diadiem: "huế",
    link: "hue1.html",
  },
  {
    diadiem: "trung quốc",
    link: "hanquoc1.html",
  },
  {
    diadiem: "campuchia",
    link: "./hanquoc1.html",
  },

  {
    diadiem: "london",
    link: "./london1.html",
  },
  {
    diadiem: "paris",
    link: "./paris1.html",
  },
];

// let input = document.getElementById("input");
// let tukhoa = biglist.filter(function(item){
//     return item.diadiem === input.value;
// });
// function myFunction(){
//     window.open(tukhoa.link)
// }
// console.log(tukhoa.link);
function myFunction() {
  for (let i = 0; i < biglist.length; i++) {
    if (biglist[i].diadiem === input.value) {
      window.open(biglist[i].link);
    }
  }
}
let fcmt = document.getElementById("fcmt");
let ul = document.getElementById("list-cmt");
ul.innerHTML = localStorage.getItem("cmt");
fcmt.addEventListener("submit", onSubmitevent);
function onSubmitevent(event) {
  event.preventDefault();
  let todocontent = fcmt.addcmt.value;
  let a = JSON.parse(localStorage.getItem("isloging"));
  let li = document.createElement("li");
  let d = new Date();
  li.innerHTML = `<h3 style="color:red; text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">${a}:</h3>${todocontent} <span id="del" onclick="" type="submit" style="color:red;" class="material-icons"> 
close
</span><p style="font-size:13px; color:#fff;">${d}</p>`;
  ul.appendChild(li);

  fcmt.addcmt.value = "";
  const bigul = ul.innerHTML;
  localStorage.setItem("cmt", bigul);
}
ul.addEventListener("click", onDeleteEvent);
function onDeleteEvent(event) {
  if (event.target.id === "del") {
    event.target.parentNode.remove();
    const bigul = ul.innerHTML;
    localStorage.setItem("cmt", bigul);
  }
}
