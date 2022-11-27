import {caloriesCounter} from "./script.js";
import {reset} from "./reset-forms.js";

const genders = document.querySelector('#gender-male');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const activity = document.querySelectorAll('input[name="activity"]');

const counterResult = document.querySelector('.counter__result');
const calculatedCalories = [counterResult.querySelector('#calories-minimal'),
                            counterResult.querySelector('#calories-norm'),
                            counterResult.querySelector('#calories-maximal')];

const radioGroups = document.querySelector(".radios-group");
const form = document.querySelector('.counter__form');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const inputsGroup = document.querySelector('.inputs-group');

caloriesCounter();
reset();

export {
    submitButton, resetButton, inputsGroup, counterResult,
    genders, age, height, weight, form,
    calculatedCalories, activity, radioGroups
};