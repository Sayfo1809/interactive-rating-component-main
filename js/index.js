"use strict";

const submitBtn = document.querySelector(`[data-btn="ratingSubmit"]`);
const initialState = document.querySelector(".rating-form__initial");
const finalState = document.querySelector(`[data-state="finalState"]`);
const ratingOutcome = document.querySelector(`[data-rating="userRating"]`);

const stateHandler = () => {
  initialState.classList.toggle("show");
  finalState.classList.toggle("show");
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;

  stateHandler();

  setTimeout(() => {
    location.reload();
  }, 5000);

  ratingOutcome.textContent = userRating;
});
