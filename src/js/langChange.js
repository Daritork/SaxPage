const changer = document.getElementById("languageChange");
const enPage = document.getElementById("body-en");
const dePage = document.getElementById("body-de");
const ukrPage = document.getElementById("body-ukr");
const ruPage = document.getElementById("body-ru");

changer.addEventListener("onsubmit", languageChange);
console.log("1");

function languageChange() {
  switch (changer.value) {
    case "en":
      enPage.style.display = "block";
      dePage.style.display = "none";
      ukrPage.style.display = "none";
      ruPage.style.display = "none";
      break;
    case "de":
      enPage.style.display = "none";
      dePage.style.display = "block";
      ukrPage.style.display = "none";
      ruPage.style.display = "none";
      break;
    case "ukr":
      enPage.style.display = "none";
      dePage.style.display = "none";
      ukrPage.style.display = "block";
      ruPage.style.display = "none";
      break;
    case "ru":
      enPage.style.display = "none";
      dePage.style.display = "none";
      ukrPage.style.display = "none";
      ruPage.style.display = "block";
      break;
  }
}
