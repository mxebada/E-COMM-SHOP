let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value !== confirm.value) {
    alert("Password is not the same as confirm password");
  } else {
    if (
      username.value == "" ||
      email.value == "" ||
      password.value == "" ||
      confirm.value == ""
    ) {
      alert("please fill data");
    } else {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      localStorage.setItem("confirm", confirm.value);

      setTimeout(() => {
        window.location = "login.html";
      }, 400);
    }
  }
});
