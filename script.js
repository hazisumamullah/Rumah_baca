const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const isDark = body.classList.contains("dark-mode");
  modeToggle.innerHTML = isDark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
});
