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
          "Что-то не так с ваашим E-mail: " + formData.get("email")
        );
        return;
      }
      if (formData.get("nick").length < 6) {
        errorMessage("Слишком короткое имя");
        return;
      }
	  if (formData.get("pass").length < 6){
		  errorMessage("Слишком короткий пароль");
        return;
	  }
	  if (formData.get("confpass") != formData.get("pass")){
		  errorMessage("Пароли не совпадают");
        return;
	  }
      Swal.fire({
        title: "Успешная регистрация",
        text:
        "Мы отправили письмо с подтверждением на вашу электронную почту: " +
          formData.get("email"),
        icon: "success",
        confirmButtonText: "Отлично",
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
    title: "Что-то не так...",
    text: text,
    icon: "error",
    confirmButtonText: "Ok",
  });
}