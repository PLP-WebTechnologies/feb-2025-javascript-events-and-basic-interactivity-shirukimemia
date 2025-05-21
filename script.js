// 1. Event Handling 🎈
document.getElementById("magicBtn").addEventListener("click", function () {
    this.classList.toggle("clicked");
    this.textContent = this.classList.contains("clicked") ? "Clicked!" : "Click Me!";
});

document.getElementById("keyInput").addEventListener("keydown", function (e) {
    console.log("Key pressed:", e.key);
});

document.getElementById("secretBox").addEventListener("dblclick", function () {
    alert("🎉 You found the secret!");
});

// 2. Interactive Tabs 🎮
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabContents.forEach((tab) => (tab.style.display = "none"));
        document.getElementById(`tab-${btn.dataset.tab}`).style.display = "block";
    });
});

// 3. Form Validation 📋✅
const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("passFeedback");

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
    } else {
        feedback.textContent = "✅ Password looks good!";
        feedback.style.color = "green";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("❌ Invalid email format.");
        return;
    }

    alert("🎉 Form submitted successfully!");
});
