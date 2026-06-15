// ── Toggle password visibility ──
function togglePassword(id, btn) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}

// ── Password strength checker ──
function checkStrength(value) {
  const fill  = document.getElementById("strengthFill");
  const label = document.getElementById("strengthLabel");
  if (!fill) return;

  let score = 0;
  if (value.length >= 8)            score++;
  if (/[A-Z]/.test(value))          score++;
  if (/[0-9]/.test(value))          score++;
  if (/[^A-Za-z0-9]/.test(value))   score++;

  const levels = [
    { pct: "0%",   color: "transparent", text: "" },
    { pct: "25%",  color: "#ff4d4d",     text: "Weak" },
    { pct: "50%",  color: "#ff9a44",     text: "Fair" },
    { pct: "75%",  color: "#ffe066",     text: "Good" },
    { pct: "100%", color: "#4caf50",     text: "Strong" },
  ];

  fill.style.width      = levels[score].pct;
  fill.style.background = levels[score].color;
  label.textContent     = levels[score].text;
  label.style.color     = levels[score].color;
}

// ── Login handler ──
function handleLogin() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    showToast("Please fill in all fields.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Enter a valid email address.", "error");
    return;
  }

  // Simulate login success (replace with real API call)
  showToast("Logged in successfully! 🎉", "success");
  setTimeout(() => window.location.href = "dashboard.html", 1500);
}

// ── Register handler ──
function handleRegister() {
  const fname    = document.getElementById("fname")?.value.trim();
  const lname    = document.getElementById("lname")?.value.trim();
  const email    = document.getElementById("email").value.trim();
  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password").value;
  const confirm  = document.getElementById("confirm").value;
  const terms    = document.getElementById("terms")?.checked;

  if (!fname || !lname || !email || !username || !password || !confirm) {
    showToast("Please fill in all fields.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Enter a valid email address.", "error");
    return;
  }

  if (password.length < 8) {
    showToast("Password must be at least 8 characters.", "error");
    return;
  }

  if (password !== confirm) {
    showToast("Passwords do not match.", "error");
    return;
  }

  if (!terms) {
    showToast("Please accept the Terms of Service.", "error");
    return;
  }

  // Simulate register success (replace with real API call)
  showToast("Account created! Welcome to PreSpace-Skill 🚀", "success");
  setTimeout(() => window.location.href = "login.html", 1800);
}

// ── Helpers ──
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Toast notification ──
function showToast(message, type = "success") {
  // Remove any existing toast
  document.querySelectorAll(".sh-toast").forEach(t => t.remove());

  const toast = document.createElement("div");
  toast.className = "sh-toast";
  toast.textContent = message;

  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: ${type === "success" ? "#2979ff" : "#ff4d4d"};
    color: white;
    padding: 14px 28px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    z-index: 9999;
    opacity: 0;
    transition: opacity .3s, transform .3s;
    box-shadow: 0 8px 24px rgba(0,0,0,.4);
    white-space: nowrap;
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}