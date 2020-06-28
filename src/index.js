import axios from "axios";

const url = "http://numbersapi.com";

const loading = document.querySelector(".loading");
const form = document.querySelector(".form-data");
const results = document.querySelector(".result-container");
const number = document.querySelector(".text");
const trivia = document.querySelector(".trivia");

results.style.display = "none";
loading.style.display = "none";

const triviaResults = async (number) => {
  if (number === "") {
    number = "random";
  }
  loading.style.display = "block";
  try {
    const { data } = await axios.get(`${url}/${number}/trivia?json`);
    loading.style.display = "none";
    results.style.display = "block";
    trivia.textContent = data.text;
  } catch (error) {
    console.log(error);
  }
};
const handleSubmit = async (e) => {
  e.preventDefault();
  triviaResults(number.value);
};

form.addEventListener("submit", (e) => handleSubmit(e));
