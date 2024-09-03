let submitEmail = false;
let formButton = document.getElementById("btn-submit");
let formWrapper = document.getElementById("form");
let spinnerWrapper = document.getElementById("spinner");
let popupWrapper = document.getElementById("popup-success");
let popupButton = document.getElementById("btn-dismiss");
let formInput = document.getElementById("email");
let formError = document.getElementById("email-error");



function toggleVisibility(element, show) {
  if (show) {
    element.classList.remove("d-none");
    element.classList.add("d-flex");
    element.classList.add("d-lg-flex");
  } else {
    element.classList.remove("d-flex");
    element.classList.remove("d-lg-flex");
    element.classList.add("d-none");
  }
}

function handleFormSubmission() {
  if(submitEmail){
  toggleVisibility(formWrapper, false); // Ocultar el formulario
  toggleVisibility(spinnerWrapper, true); // Mostrar el spinner

  // Deshabilitar el botón para evitar múltiples clics
  formButton.disabled = true;

  setTimeout(() => {
    toggleVisibility(spinnerWrapper, false); // Ocultar el spinner
    toggleVisibility(popupWrapper, true); // Mostrar el formulario

    // Volver a habilitar el botón
    formButton.disabled = false;
  }, 2000);
  }
}

formButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir el envío del formulario si es necesario
  handleFormSubmission();
});

popupButton.addEventListener("click", (e) => {
  toggleVisibility(popupWrapper, false);
  toggleVisibility(spinnerWrapper, true);

  popupButton.disabled = false;

  setTimeout(() => {
    toggleVisibility(spinnerWrapper, false);
    toggleVisibility(formWrapper, true);
  }, 2000);
});

formInput.addEventListener("input", (e) => {
  let inputText = e.target.value;
  if (inputText.includes("@") && inputText.endsWith(".com")) {
    e.target.style.color = ""; // Resetea el color si no cumple la condición
    formError.classList.add("d-none")
    e.target.style.borderColor="";
    e.target.style.backgroundColor = "";
    submitEmail=true;
  } else {
    e.target.style.color = "hsl(4, 100%, 67%)";
    e.target.style.borderColor="hsl(4, 100%, 67%)";
    e.target.style.backgroundColor = "#ffe8df";
    formError.classList.remove("d-none");
    submitEmail=false;
  }
});
