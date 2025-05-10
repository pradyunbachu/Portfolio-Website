function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    if (sectionId === "profile") {
      selectedSection.style.display = "grid";
    } else {
      selectedSection.style.display = "flex";
    }
  }

  // If Home/profile is shown, restart the typing animation
  if (sectionId === "profile") {
    startProfileTypingAnimation();
  }
}

function saveContent(section) {
  const content = document.getElementById(`${section}-content`).value;
  localStorage.setItem(`${section}-content`, content);
  alert("Content saved successfully!");
}

// Typing animation function
function typeText(element, text, speed = 50, isHTML = false) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Function to type text with color
function typeTextWithColor(element, text, color, speed = 50) {
  let i = 0;
  const span = document.createElement("span");
  span.className = "wisconsin-red";
  element.appendChild(span);

  function type() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Function to start the profile typing animation
function startProfileTypingAnimation() {
  const helloText = document.getElementById("hello-text");
  const nameText = document.getElementById("name-text");
  const descriptionText = document.getElementById("description-text");

  if (helloText && nameText && descriptionText) {
    // Reset the text content
    helloText.innerHTML = "";
    nameText.innerHTML = "";
    descriptionText.innerHTML = "";

    // Start with "Hello, I'm"
    typeText(helloText, "Hello, I'm", 100);

    // After "Hello, I'm" is done, start typing the name
    setTimeout(() => {
      typeText(nameText, "Pradyun", 100);

      // After name is done, start typing the description
      setTimeout(() => {
        // First type "Undergraduate Student at The"
        typeText(descriptionText, "Undergraduate Student at The ", 50);

        // Then type the university name in red
        setTimeout(() => {
          typeTextWithColor(
            descriptionText,
            "University of Wisconsin - Madison",
            "#C5050C",
            50
          );
        }, 1500);
      }, 1000);
    }, 1000);
  }
}

// Load saved content when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Load saved content
  const sections = ["about", "experience", "projects", "contacts"];
  sections.forEach((section) => {
    const contentElement = document.getElementById(`${section}-content`);
    if (contentElement) {
      const savedContent = localStorage.getItem(`${section}-content`);
      if (savedContent) {
        contentElement.value = savedContent;
      }
    }
  });

  // Start typing animations on page load
  startProfileTypingAnimation();
});
