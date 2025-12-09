// MOBILE NAVIGATION TOGGLE
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// FAQ ACCORDION
const faqButtons = document.querySelectorAll(".faq-btn");
faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        faqButtons.forEach((otherBtn) => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove("active");
                otherBtn.nextElementSibling.style.maxHeight = null;
            }
        });
        btn.classList.toggle("active");
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});

// CONTACT FORM
let smsBtn = document.querySelector(".sms-btn");
let nameInput = document.querySelector("input[type='text']");
let emailInput = document.querySelector("input[type='email']");
let messageInput = document.querySelector("textarea");
let programmeSelect = document.querySelector("select[name='programme']");
let contactForm = document.querySelector(".contact-form form");

// Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbxnTyzeisK804XbGjMWTSENpwZ7SwDHY1r_fYBQbJ1cgCRK-lJG_3bfyE-amixGF5E3Uw/exec";

function showPopup(message, type) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    popupText.textContent = message;
    popup.className = `popup show ${type}`; // type = success or error

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);
}

// Email validation
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Submit handler
smsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();
    let programme = programmeSelect.value;

    if (!name || !email || !message || !programme) {
        showPopup("Please fill in all fields.", "error");
        return;
    }

    if (!isValidEmail(email)) {
        showPopup("Please enter a valid email address.", "error");
        return;
    }

    // Prepare URL-encoded params
    let params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("message", message);
    params.append("programme", programme);

    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            showPopup("Message sent! Check your email for confirmation.", "success");
            contactForm.reset();
        } else {
            showPopup("Error sending message. Try again.", "error");
            console.error(data);
        }
    })
    .catch(error => {
        showPopup("Error sending message. Check console.", "error");
        console.error(error);
    });
});