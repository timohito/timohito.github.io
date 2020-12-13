$(document).ready(function () {
  let form = document.forms[1];
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      let formData = new FormData(form);
      formData.forEach((e) => {
        console.log(e);
      });
      if (!validateEmail(formData.get("email"))) {
        errorMessage(
          "Something is wrong with email: " + formData.get("email")
        );
        return;
      }
      if (formData.get("nick").length < 6) {
        errorMessage("Too short nickname");
        return;
      }
	  if (formData.get("pass").length < 6){
		  errorMessage("Too short password");
        return;
	  }
	  if (formData.get("confpass") != formData.get("pass")){
		  errorMessage("Passwords are different");
        return;
	  }
      Swal.fire({
        title: "Registration",
        text:
          "We've sent a confirmation letter to your email: " +
          formData.get("email"),
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
    false
  );
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function errorMessage(text) {
  Swal.fire({
    title: "Ooops!",
    text: text,
    icon: "error",
    confirmButtonText: "Ok",
  });
}