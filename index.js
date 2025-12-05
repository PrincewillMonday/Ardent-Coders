function toggleMenu() {
        document.getElementById("navLinks").classList.toggle("active");
    }

    let faqButtons = document.querySelectorAll(".faq-btn");

    faqButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            // CLOSE all other FAQs
            faqButtons.forEach((otherBtn) => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove("active");
                    otherBtn.nextElementSibling.style.maxHeight = null;
                }
            });

            // TOGGLE the clicked FAQ
            btn.classList.toggle("active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });