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

// Typing animation timeouts tracker
let typingTimeouts = [];

// Typing animation function
function typeText(element, text, speed = 50, isHTML = false) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      typingTimeouts.push(setTimeout(type, speed));
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
      typingTimeouts.push(setTimeout(type, speed));
    }
  }

  type();
}

// Function to clear all typing animation timeouts
function clearTypingTimeouts() {
  typingTimeouts.forEach((timeout) => clearTimeout(timeout));
  typingTimeouts = [];
}

// Function to set the profile text to its final state
function setProfileTextFinal() {
  const helloText = document.getElementById("hello-text");
  const nameText = document.getElementById("name-text");
  const descriptionText = document.getElementById("description-text");
  if (helloText && nameText && descriptionText) {
    helloText.innerHTML = "Hello, I'm";
    nameText.innerHTML = "Pradyun";
    descriptionText.innerHTML =
      'Undergraduate Student at The <span class="wisconsin-red">University of Wisconsin - Madison</span>';
  }
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

  // Add event listeners to close popups when clicking outside the content
  addPopupOutsideClickClose("project-popup");
  addPopupOutsideClickClose("portfolio-popup");
  addPopupOutsideClickClose("econ-popup");

  // Add listeners to stop typing animation on button click
  const cvBtn = document.querySelector('button[onclick*="Resume_Updated"]');
  const contactBtn = document.querySelector(
    'button[onclick*="contacts-anchor"]'
  );
  [cvBtn, contactBtn].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        clearTypingTimeouts();
        setProfileTextFinal();
      });
    }
  });
});

function openProjectPopup() {
  document.getElementById("project-popup").classList.add("open");
  // Load saved description
  const desc = localStorage.getItem("kitchen-pantry-desc") || "";
  document.getElementById("kitchen-pantry-desc").value = desc;
  document.getElementById("saved-desc").textContent = desc
    ? "Saved: " + desc
    : "";
}
function closeProjectPopup() {
  document.getElementById("project-popup").classList.remove("open");
}
function saveProjectDescription() {
  const desc = document.getElementById("kitchen-pantry-desc").value;
  localStorage.setItem("kitchen-pantry-desc", desc);
  document.getElementById("saved-desc").textContent = desc
    ? "Saved: " + desc
    : "";
}

function openPortfolioPopup() {
  document.getElementById("portfolio-popup").classList.add("open");
}
function closePortfolioPopup() {
  document.getElementById("portfolio-popup").classList.remove("open");
}

function openEconPopup() {
  document.getElementById("econ-popup").classList.add("open");
}
function closeEconPopup() {
  document.getElementById("econ-popup").classList.remove("open");
}

// Add event listeners to close popups when clicking outside the content
function addPopupOutsideClickClose(popupId) {
  const popup = document.getElementById(popupId);
  if (!popup) return;
  popup.addEventListener("mousedown", function (event) {
    if (event.target === popup) {
      popup.classList.remove("open");
    }
  });
}
