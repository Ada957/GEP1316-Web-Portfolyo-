
// 1. Açık ve koyu tema değiştirme
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const darkMode = document.body.classList.contains("dark");
        localStorage.setItem("theme", darkMode ? "dark" : "light");

        themeToggle.textContent = darkMode
            ? "☀️ Açık Tema"
            : "🌙 Koyu Tema";
    });
}

// 2. Mobil menü kontrolü
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// 3. Proje arama ve filtreleme
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const searchMessage = document.getElementById("searchMessage");

if (projectSearch) {
    projectSearch.addEventListener("input", function () {
        const search = projectSearch.value.toLocaleLowerCase("tr").trim();
        let count = 0;

        projectCards.forEach(function (card) {
            const content = card.textContent.toLocaleLowerCase("tr");
            const match = content.includes(search);

            card.hidden = !match;

            if (match) {
                count++;
            }
        });

        searchMessage.textContent = count > 0
            ? count + " proje bulundu."
            : "Aramanıza uygun proje bulunamadı.";
    });
}

// 4. İletişim formu doğrulama
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name.length < 3 || !email.includes("@") || message.length < 10) {
            formMessage.textContent = "Lütfen bilgilerinizi doğru giriniz.";
            formMessage.style.color = "#c0392b";
            return;
        }

        formMessage.textContent =
            "Form başarıyla doğrulandı. Bu bir test formudur; mesaj gönderilmedi.";

        formMessage.style.color = "#27854a";
        contactForm.reset();
    });
}

