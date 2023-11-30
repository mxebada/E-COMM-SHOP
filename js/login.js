let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email == "" || password == "") {
    alert("please fill data");
  } else if (
    getEmail &&
    getEmail.trim() === email.value.trim() &&
    getPassword &&
    getPassword.trim() === password.value
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 400);
  } else {
    alert("username or password is wrong, please enter correct data");
  }
});
