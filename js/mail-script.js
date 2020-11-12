var mailList = ["nico@gmail.com", "mara@gmail.com", "cabel@gmail.com", "richi@gmail.com"];
console.log(mailList);
var userMail = prompt("inserisci la tua mail");
console.log(userMail);
var access = false;
for (var i = 0; i < mailList.length; i++) {
  console.log(mailList[i]);
  if (userMail === mailList[i]) {
    access = true;
    console.log(access);
  }
}

if (access === true) {
  document.getElementById("allowed_denied").innerHTML = "Accesso Consentito";
} else {
  document.getElementById("allowed_denied").innerHTML = "Accesso Non Consentito";
}
