const emailInput = document.querySelector('#email');
const emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
export let emailValid

function validateInput(input, pattern) {
  return pattern.test(input.value);
}

function classChange(input, isValid) {
  if (isValid) {
    input.classList.remove('_unvalid');
    input.classList.add('_valid');
  } else {
    input.classList.add('_unvalid');
    input.classList.remove('_valid');
  }
}

export function removeValidClass() {
  emailInput.classList.remove('_valid');
  emailValid = false;
}

emailInput.addEventListener('input', () => {
  emailValid = validateInput(emailInput, emailPattern);
  classChange(emailInput, emailValid);
})