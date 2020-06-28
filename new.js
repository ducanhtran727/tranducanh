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
    link: "./halong.html",
  },
  {
    diadiem: "hà nội",
    link: "hanoi.html",
  },
  {
    diadiem: "đà lạt",
    link: "./hanoi.html",
  },
  {
    diadiem: "sài gòn",
    link: "saigon.html/",
  },
  {
    diadiem: "sapa",
    link: "sapa.html",
  },
  {
    diadiem: "nha trang",
    link: "./nhatrang.html",
  },
  {
    diadiem: "mũi né",
    link: "./tamdao.html",
  },
  {
    diadiem: "thái lan",
    link: "./thailan.html",
  },
  {
    diadiem: "tam đảo",
    link: "./tamdao.html",
  },
  {
    diadiem: "sầm sơn",
    link: "./tamdao.html",
  },
  {
    diadiem: "đà nẵng",
    link: "danang.html",
  },
  {
    diadiem: "singapore",
    link: "./singapore.html",
  },
  {
    diadiem: "malaysia",
    link: "nhatban.html",
  },
  {
    diadiem: "nhật bản",
    link: "./nhatban.html",
  },
  {
    diadiem: "hà giang",
    link: "./halong.html",
  },
  {
    diadiem: "cửa lò",
    link: "nhatrang.html",
  },
  {
    diadiem: "huế",
    link: "tamdao.html",
  },
  {
    diadiem: "trung quốc",
    link: "hanquoc.html",
  },
  {
    diadiem: "campuchia",
    link: "./hanquoc.html",
  },

  {
    diadiem: "london",
    link: "./london.html",
  },
  {
    diadiem: "paris",
    link: "./paris.html",
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
  let a = JSON.parse(localStorage.getItem("islogging"));
  let li = document.createElement("li");
  li.innerHTML = `<h3 style="color:red;">${a}:</h3> ${todocontent} <span id="del" onclick="" type="submit" class="material-icons">
close
</span>`;
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
