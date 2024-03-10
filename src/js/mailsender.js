document
  .getElementById("MailSubmit")
  .addEventListener("click", Email(e.target.value, e));

function Email(email, e) {
  e.preventDefault();
}
