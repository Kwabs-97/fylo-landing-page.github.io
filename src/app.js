/** @format */

function validate() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("validate");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    // text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "#ff0000";
  }
}
