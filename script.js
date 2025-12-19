// Language Toggle Functionality
const languageToggle = document.getElementById("languageToggle")
let currentLanguage = "pt" // Default language is Portuguese

// Translation data
const translations = {
  pt: {
    flag: "🇬🇧",
    text: "English",
  },
  en: {
    flag: "🇧🇷",
    text: "Português",
  },
}

// Function to toggle language
function toggleLanguage() {
  // Toggle between 'pt' and 'en'
  currentLanguage = currentLanguage === "pt" ? "en" : "pt"

  // Update all translatable elements
  const translatableElements = document.querySelectorAll("[data-pt][data-en]")

  translatableElements.forEach((element) => {
    const ptText = element.getAttribute("data-pt")
    const enText = element.getAttribute("data-en")

    // Update text content based on current language
    element.textContent = currentLanguage === "pt" ? ptText : enText
  })

  // Update language toggle button
  const flagElement = languageToggle.querySelector(".flag")
  const langTextElement = languageToggle.querySelector(".lang-text")

  flagElement.textContent = translations[currentLanguage].flag
  langTextElement.textContent = translations[currentLanguage].text

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en"

  // Save language preference to localStorage
  localStorage.setItem("preferredLanguage", currentLanguage)
}

// Add event listener to language toggle button
languageToggle.addEventListener("click", toggleLanguage)

// Check for saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage")

  if (savedLanguage && savedLanguage !== currentLanguage) {
    toggleLanguage()
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  observer.observe(section)
})
