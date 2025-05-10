const form = document.getElementById('contactform');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById('name');
  if (!validateName(nameInput.value)) {
    showError(nameInput, "* Ім’я: 2-30 літер, тільки букви, дефіс або пробіл.");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  const emailInput = document.getElementById('email');
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "* Некоректний email.");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  const ageInput = document.getElementById('age');
  if (!validateAge(ageInput.value)) {
    showError(ageInput, "* Вік має бути числом від 18 до 130.");
    isValid = false;
  } else {
    clearError(ageInput);
  }

  const websiteInput = document.getElementById('company');
  if (!validateWebsite(websiteInput.value)) {
    showError(websiteInput, "* Некоректний URL або поле залиш пустим.");
    isValid = false;
  } else {
    clearError(websiteInput);
  }

  const messageInput = document.getElementById('message');
  if (!validateMessage(messageInput.value)) {
    showError(messageInput, "* Повідомлення має бути від 10 до 350 символів.");
    isValid = false;
  } else {
    clearError(messageInput);
  }

  if (isValid) {
    //form.submit();
  }
});

const inputs = document.querySelectorAll('.user-data');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    clearError(input);
  });
});

function showError(input, message) {
  input.classList.add('input-error');
  let errorElem = input.nextElementSibling;
  if (!errorElem || !errorElem.classList.contains('error-message')) {
    errorElem = document.createElement('div');
    errorElem.classList.add('error-message');
    input.parentNode.insertBefore(errorElem, input.nextSibling);
  }
  errorElem.textContent = message;
}

function clearError(input) {
  input.classList.remove('input-error');
  let errorElem = input.nextElementSibling;
  if (errorElem && errorElem.classList.contains('error-message')) {
    errorElem.textContent = '';
  }
}

function validateName(name) {
  let pattern = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\- ]{2,30}$/;
  return pattern.test(name);
}

function validateAge(age) {
  let num = Number(age);
  return Number.isInteger(num) && num >= 18 && num <= 130;
}

function validateEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validateWebsite(website) {
  if (website.trim() === "") return true;
  try {
    new URL(website);
    return true;
  } catch (e) {
    return false;
  }
}

function validateMessage(message) {
  let length = message.trim().length;
  return length >= 10 && length <= 350;
}