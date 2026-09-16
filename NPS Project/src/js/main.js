import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// 1. Update the disclaimer link with park data
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// 2. Update the browser tab title
document.title = parkData.fullName;

// 3. Set up the hero banner image and text
// Find the main element where the hero goes
const main = document.querySelector("#main");

// Create a template function for the park info text (from instructions)
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// Build the HTML structure for the hero banner dynamically
main.innerHTML = `
  <section class="hero-banner">
    <img src="${parkData.images[0].url}" alt="${parkData.images[0].alt}" />
    <div class="hero-banner__content">
      ${parkInfoTemplate(parkData)}
    </div>
  </section>
`;