window.addEventListener("load", (event) => {
  // if (!navigator.onLine ? "Online" : "OFFline") {
  main();
  // }
});

function main() {
  var agreePolicy = document.getElementById("agreepolicy");
  var warningTxt = document.getElementsByClassName("note")[0];

  var username = document.getElementsByName("username")[0];
  var password = document.getElementsByName("password")[0];
  var loginbtn = document.getElementById("loginbtn");

  // if (warningTxt.innerHTML == "Wrong username/password")
  //   logMeIn("exam33", "exam@33");
  if (
    warningTxt.innerHTML == "Wrong username/password" ||
    "You are not allowed to login from this IP address"
  )
    logMeIn("12216428", "WWW@6969");
  else logMeIn("exam26", "exam@26");
  function logMeIn(id, pass) {
    agreePolicy.click();

    // if (agreePolicy.checked) {
    username.value = id;
    password.value = pass;

    loginbtn.click();
    // }
  }
}
