const formsValidation = () => {
  const calcSquareInput = document.querySelector(".calc-square");
  const calcCountInput = document.querySelector(".calc-count");
  const calcDayInput = document.querySelector(".calc-day");
  const calcBlock = document.querySelector(".calc-block");
  const textForms = document.querySelectorAll("form");
  const yourMessage = document.querySelector(".mess");

  textForms.forEach((item) => {
    const yourName = item.querySelector("input[type=text]");
    const yourEmail = item.querySelector("input[type=email]");
    const yourPhone = item.querySelector("input[type=tel]");

    yourName.addEventListener("input", (e) => {
      e.preventDefault();

      yourName.value = yourName.value.replace(
        /[a-zA-Z0-9)(*&^%$#@!_=+/\\"№;:?.,\{\}\[\]|~`']/,
        ""
      );
    });

    yourEmail.addEventListener("input", (e) => {
      e.preventDefault();

      yourEmail.value = yourEmail.value.replace(
        /[а-яА-Я)(&^%$#=+/\\"№;:?,\{\}\[\]|`]/,
        ""
      );
    });

    yourPhone.addEventListener("input", (e) => {
      e.preventDefault();

      yourPhone.value = yourPhone.value.replace(
        /[а-яА-Яa-zA-Z*&^%$#@!_=/\\"№;:?.,\{\}\[\]|~`']/,
        ""
      );
    });
  });

  yourMessage.addEventListener("input", (e) => {
    e.preventDefault();

    yourMessage.value = yourMessage.value.replace(
      /[a-zA-Z0-9)(*&^%$#@_=+/\\"№;:\{\}\[\]|~`']/,
      ""
    );
  });

  calcBlock.addEventListener("input", (e) => {
    e.preventDefault();
    calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
    calcCountInput.value = calcCountInput.value.replace(/\D+/, "");
    calcDayInput.value = calcDayInput.value.replace(/\D+/, "");
  });
};

export default formsValidation;
