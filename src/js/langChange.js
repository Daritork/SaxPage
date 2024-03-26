import "../languages/de.json";
import "../languages/en.json";
import "../languages/ukr.json";
import "../languages/ru.json";

const changer = document.getElementById("changer");
changer.onchange = async () => {
  location.hash = changer.value;
  changeLanguage(changer.value);
  location.reload();
};

// Function to fetch language data
async function fetchLanguageData(lang) {
  if (lang === "de") {
    const response = await fetch(`./src/languages/de.json`);
    return response.json();
  } else if (lang === "ukr") {
    const response = await fetch(`./src/languages/ukr.json`);
    return response.json();
  } else if (lang === "ru") {
    const response = await fetch(`./src/languages/ru.json`);
    return response.json();
  } else {
    const response = await fetch(`./src/languages/en.json`);
    return response.json();
  }
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);

  //? Updates <select> value
  let a = window.location.hash.split("#"); //* Language option in searchbar
  if (a != "") {
    changer.value = a[1];
  } else {
    changer.value = "en";
  }

  updateContent(langData);
});
