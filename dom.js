// 1. Select the main heading and change it
const mainHeading = document.querySelector("h1");
mainHeading.textContent = "Welcome to My Website";

// 2. Select all nav links
const navLinks = document.querySelectorAll(".nav-link");
console.log("Nav links:", navLinks.length);

// 3. Select all content sections
const contentSections = document.querySelectorAll(".content");
console.log("Content sections:", contentSections.length);

// 4. Select the first paragraph inside the article
const firstArticlePara = document.querySelector("article p");
firstArticlePara.style.color = "blue";

// 5. Select all paragraphs inside the article
const articleParas = document.querySelectorAll("article p");
articleParas.forEach(function(p) {
  p.style.fontSize = "18px";
});

// 6. Select the last paragraph in the article and highlight it
const lastPara = document.querySelector("article p:last-child");
lastPara.style.backgroundColor = "yellow";

// 7. Select the contact form by ID
const contactForm = document.getElementById("contact-form");

// 8. Create a new paragraph and add it to the page
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.querySelector("main").appendChild(newPara);

// 9. Listen for form submit
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted! Thank you.");
});