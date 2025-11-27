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
      // Fix: Always clear typing and set text to empty before starting animation
      clearTypingTimeouts();
      const helloText = document.getElementById("hello-text");
      const nameText = document.getElementById("name-text");
      const descriptionText = document.getElementById("description-text");
      if (helloText) helloText.innerHTML = "";
      if (nameText) nameText.innerHTML = "";
      if (descriptionText) descriptionText.innerHTML = "";
      // Start the animation again
      startProfileTypingAnimation();
    } else {
      selectedSection.style.display = "flex";
    }
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
    nameText.innerHTML = "Pradyun Bachu";
    descriptionText.innerHTML =
      "CS and Economics Major at The University of Wisconsin - Madison";
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

    // Animate all lines at the same time
    typeText(helloText, "Hello, I'm", 100);
    typeText(nameText, "Pradyun Bachu", 100);
    typeText(
      descriptionText,
      "CS and Economics Major at The University of Wisconsin - Madison",
      50
    );
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
  addPopupOutsideClickClose("redline-popup");

  // Add listeners to stop typing animation on any button click
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearTypingTimeouts();
      setProfileTextFinal();
    });
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

function openRedlinePopup() {
  document.getElementById("redline-popup").classList.add("open");
}
function closeRedlinePopup() {
  document.getElementById("redline-popup").classList.remove("open");
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

function showCategory(categoryId) {
  // Hide all categories
  const categories = document.querySelectorAll(".skills-category");
  categories.forEach((cat) => {
    cat.classList.remove("active");
  });

  // Show selected category
  const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
    selectedCategory.classList.add("active");
  }

  // Update active button
  const buttons = document.querySelectorAll(".category-circle");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-category") === categoryId) {
      btn.classList.add("active");
    }
  });
}
