const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", checkCode);

function checkCode() {
  const enteredCode = document.getElementById("secretCode").value.trim();
  const SECRET_CODE = "Bava"; // ❤️ Secret word

  if (enteredCode.toLowerCase() === SECRET_CODE.toLowerCase()) {
    alert("Welcome Bava 💖");

    // 👉 Redirect to next page
    // window.location.href = "love.html";
  } else {
    errorMsg.style.display = "block";
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 2000);
  }
}


