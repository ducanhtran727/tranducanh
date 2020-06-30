let arrayemail = [];
let arraypassword = [];


const loginBox = document.getElementById("login");
const regBox = document.getElementById("register");
const forgetBox = document.getElementById("forgot");

const loginTab = document.getElementById("lt");
const regTab = document.getElementById("rt");

function regTabFun() {
  event.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "hidden";

  regTab.style.backgroundColor = "rgb(12, 132, 189)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function loginTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
  forgetBox.style.visibility = "hidden";

  loginTab.style.backgroundColor = "rgb(12, 132, 189)";
  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}
function forTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "visible";

  regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
  loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function register() {
  event.preventDefault();

  const email = document.getElementById("re").value;
  const password = document.getElementById("rp").value;
  const passwordRetype = document.getElementById("rrp").value;
  

  if (email == "") {
    alert("Email required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (arrayemail.indexOf(email) == -1) {
          if(JSON.parse(localStorage.getItem("email")) && JSON.parse(localStorage.getItem("password"))) {
            arrayemail = JSON.parse(localStorage.getItem("email"));
            arraypassword = JSON.parse(localStorage.getItem("password"));
          }
           arrayemail.push(email);
           arraypassword.push(password);
           
           console.log(arrayemail);
           localStorage.setItem("email", JSON.stringify(arrayemail));
           localStorage.setItem("password", JSON.stringify(arraypassword));

           alert(email + "  Thanks for registration. \nTry to login Now");

           document.getElementById("re").value = "";
           document.getElementById("rp").value = "";
           document.getElementById("rrp").value = "";
         } else {
           alert(email + " is already register.");
           return;
         }
}
function login() {
  event.preventDefault();

  const email = document.getElementById("se").value;
  const password = document.getElementById("sp").value;
  const datae = JSON.parse(localStorage.getItem('email'));
  const datap = JSON.parse(localStorage.getItem('password'));
  
  const i = datae.indexOf(email);

  if (datae.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  } else if (datap[i] != password) {
    console.log(i);
    console.log(password);
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(email + " yor are login Now \n welcome to our website.");

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    localStorage.setItem("isloging",JSON.stringify(email));
    window.open("./project.html");
    return;
  }
}
function forgot() {
  event.preventDefault();

  const email = document.getElementById("fe").value;

  if (localStorage.getItem("email").indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("fe").value = "";
}

console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));
