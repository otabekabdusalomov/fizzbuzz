const elForm = document.querySelector (".form");

const elFormInput = document.querySelector (".form-control");

const elFormResult = document.querySelector (".form__result");

elForm.addEventListener ("submit", function (evt){
    evt.preventDefault();


    const elFormInputValue = elFormInput.value;

    if ((elFormInputValue % 3 === 0) && (elFormInputValue % 5 === 0) ) {

        elFormResult.textContent = `FizzBuzz`;

    } else if (elFormInputValue % 3 === 0) {

        elFormResult.textContent = `Fizz`;

    } else if (elFormInputValue % 5 === 0) {

        elFormResult.textContent = `Buzz`;

    } else {
        elFormResult.textContent = `Mavjud emas`;
    }

})
