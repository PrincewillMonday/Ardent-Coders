function toggleMenu() {
        document.getElementById("navLinks").classList.toggle("active");
    }

    let faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        btn.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});