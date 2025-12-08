//MOBILE NAVIGATION TOGGLE
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// FAQ ACCORDION
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        // Close all other questions
        faqButtons.forEach((otherBtn) => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove("active");
                otherBtn.nextElementSibling.style.maxHeight = null;
            }
        });

        // Toggle the selected question
        btn.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// CONTACT FORM SUBMISSION
let smsBtn = document.querySelector(".sms-btn");
let nameInput = document.querySelector("input[type='text']");
let emailInput = document.querySelector("input[type='email']"); // FIXED SELECTOR
let messageInput = document.querySelector("textarea");
let programmeSelect = document.querySelector("select[name='programme']");
let contactForm = document.querySelector(".contact-form form");

function showPopup(message, type) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    popupText.textContent = message;

    popup.className = `popup show ${type}`; // type = success or error

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);
}

// Email validation function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

smsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();
    let programme = programmeSelect.value;

    // Check empty fields
    if (!name || !email || !message || !programme) {
        showPopup("Please fill in all fields before sending your message.", "error");
        return;
    }

    // Check email format
    if (!isValidEmail(email)) {
        showPopup("Please enter a valid email address.", "error");
        return;
    }

    showPopup("Message sent successfully! We'll get back to you soon.", "success");

    contactForm.reset();
});
