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
