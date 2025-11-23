// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  // Toggle hamburger menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-list a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Form validation and submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const fullName = this.querySelector('input[type="text"]').value.trim()
      const email = this.querySelector('input[type="email"]').value.trim()
      const message = this.querySelector("textarea").value.trim()

      // Basic validation
      if (!fullName || !email || !message) {
        alert("Please fill in all fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address")
        return
      }

      // Success message
      alert("Thank you for your message! We will get back to you within 24 hours.")
      this.reset()
    })
  }

  // Add scroll event listener for animations
  let scrollTimeout
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      // Trigger animations for visible elements
      const elements = document.querySelectorAll(".cont, .info")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          el.style.animation = "fadeInUp 0.6s ease forwards"
        }
      })
    }, 50)
  })

  // Handle card container responsiveness
  const cardContainer = document.querySelector(".card-container")
  function adjustCardLayout() {
    if (window.innerWidth <= 768) {
      cardContainer.style.flexWrap = "wrap"
    } else {
      cardContainer.style.flexWrap = "nowrap"
    }
  }

  // Run on load and resize
  adjustCardLayout()
  window.addEventListener("resize", adjustCardLayout)
})
