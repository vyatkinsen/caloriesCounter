import {submitButton, inputsGroup, counterResult, age, height, weight, form, calculatedCalories, radioGroups} from "./main.js";
import {genderConstants, activityLevel} from "./utils.js";

const checkSubmitButton = () => {
    submitButton.disabled = !(age.value > 0 && height.value > 0 && weight.value > 0);
};

const submit = (evt) => {
    evt.preventDefault();
    calculateCalories();
    counterResult.classList.remove('counter__result--hidden');
};

const calculateCaloriesWithCoefficient = (num, coefficient) => {
    return Math.round(num * coefficient);
}

let selectedActivityLevel = activityLevel.get('activity-minimal');

const calculateCalories = () => {
    const average = calculateCaloriesWithCoefficient((10 * weight.value) + (6.25 * height.value) - (5 * age.value) +
                                             genderConstants.get(form.elements.gender.value), selectedActivityLevel);
    const newCalculatedCalories = [calculateCaloriesWithCoefficient(average, 0.85), average, calculateCaloriesWithCoefficient(average, 1.15)];
    for (let i = 0; i < calculatedCalories.length; i++) {
        calculatedCalories[i].textContent = newCalculatedCalories[i];
    }
};

const caloriesCounter = () => {
    inputsGroup.addEventListener("input", checkSubmitButton);
    radioGroups.addEventListener("change", function(event) {
        selectedActivityLevel = activityLevel.get(event.target.id);
    });
    submitButton.addEventListener('click', submit);
};

export {caloriesCounter};
