const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons");
const basicTab = document.getElementById("basic-tab");
const sciTab = document.getElementById("scientific-tab");
const themeButtons = document.querySelectorAll(".themes button");
const themeSlider = document.getElementById("theme-slider");
const modeSlider = document.getElementById("mode-slider");

let isScientific = false;

// Basic mode
const basicButtons = [
  "C", "⌫", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

// Scientific mode
const sciButtons = [
  "C", "⌫", "(", ")",
  "sin(", "cos(", "tan(", "log(",
  "sqrt(", "^", "π", "e",
  "7", "8", "9", "÷",
  "4", "5", "6", "×",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

// Render buttons
function renderButtons() {
  buttonsContainer.innerHTML = "";
  const btns = isScientific ? sciButtons : basicButtons;
  btns.forEach(val => {
    const btn = document.createElement("button");
    btn.textContent = val;
    btn.classList.add("calc-btn");
    btn.onclick = () => handleClick(btn, val);
    buttonsContainer.appendChild(btn);
  });
}
renderButtons();

// Handle clicks
function handleClick(btn, val) {
  document.querySelectorAll(".calc-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (val === "C") {
    display.value = "";
  } else if (val === "⌫") {
    display.value = display.value.slice(0, -1);
  } else if (val === "=") {
    try {
      display.value = eval(
        display.value
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/π/g, "Math.PI")
          .replace(/e/g, "Math.E")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log")
          .replace(/sqrt/g, "Math.sqrt")
          .replace(/\^/g, "**")
      );
    } catch {
      display.value = "Error";
    }
  } else {
    display.value += val;
  }
}

// Mode toggle with slider
basicTab.addEventListener("click", () => {
  isScientific = false;
  basicTab.classList.add("active");
  sciTab.classList.remove("active");
  renderButtons();
  modeSlider.style.transform = "translateX(0%)";
});

sciTab.addEventListener("click", () => {
  isScientific = true;
  sciTab.classList.add("active");
  basicTab.classList.remove("active");
  renderButtons();
  modeSlider.style.transform = "translateX(100%)";
});

// Theme switching with slider
themeButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.body.className = btn.dataset.theme;
    themeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    themeSlider.style.transform = `translateX(${i * 100}%)`;
  });
});

// Default slider positions
modeSlider.style.width = "50%";
themeSlider.style.width = "25%";
