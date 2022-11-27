import {
    submitButton, resetButton, inputsGroup, counterResult,
    genders, age, height, weight, activity
} from "./main.js";

const isResetButtonAvailable = () => {
    resetButton.disabled = !(age.value > 0 || height.value > 0 || weight.value > 0);
};

const resetForms = () => {
    counterResult.classList.add('counter__result--hidden');
    genders.checked = true;
    age.value = '';
    height.value = '';
    weight.value = '';
    activity[0].checked = true;
    submitButton.disabled = true;
    resetButton.disabled = true;
};

const reset = () => {
    inputsGroup.addEventListener('input', isResetButtonAvailable);
    resetButton.addEventListener('click', resetForms);
};

export {reset};