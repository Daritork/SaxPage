//*consts
const bodyStyle = document.body.style;
const saxophone = document.getElementById("movingSax");
var topSpace = (window.innerHeight - saxophone.offsetHeight) / 2;

window.onload = myFunction;
function myFunction() {
  //*
  //? Finds a "top" Property for a picture to be always in center */
  bodyStyle.setProperty(
    "--topSpace",
    (window.innerHeight - saxophone.offsetHeight) / 2 + "px"
  );
  //? Finds a title size below 150px to fit in picture */
  bodyStyle.setProperty(
    "--titleSize",
    Math.min(
      ((saxophone.offsetHeight - 0.1 * window.innerWidth - 220) / 4).toFixed(3),
      150
    ) + "px"
  );
  //? Finds a title "top" Property to fit in with a picture */
  bodyStyle.setProperty("--titleTopSpace", saxophone.offsetWidth / -4 + "px");
  //? Finds a title "top" Property for absolute */
  bodyStyle.setProperty(
    "--absoluteTop",
    (2 * window.innerHeight - saxophone.offsetHeight - topSpace).toFixed(3) +
      "px"
  );
}
//? Change Properties on resize */
window.addEventListener("resize", () => {
  //? Finds a "top" Property for a picture to be always in center */
  bodyStyle.setProperty(
    "--topSpace",
    (window.innerHeight - saxophone.offsetHeight) / 2 + "px"
  );
  //? Finds a title size below 150px to fit in picture */
  bodyStyle.setProperty(
    "--titleSize",
    Math.min(
      ((saxophone.offsetHeight - 0.1 * window.innerWidth - 200) / 4).toFixed(3),
      150
    ) + "px"
  );
  //? Finds a title "top" Property to fit in with a picture */
  bodyStyle.setProperty("--titleTopSpace", saxophone.offsetWidth / -4 + "px");
  //? Finds a title "top" Property for absolute */
  bodyStyle.setProperty(
    "--absoluteTop",
    (2 * window.innerHeight - saxophone.offsetHeight - topSpace).toFixed(3) +
      "px"
  );
});
