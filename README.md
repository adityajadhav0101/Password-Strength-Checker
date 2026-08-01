# 🔐 Password Strength Checker

<p align="center">
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed on Vercel" />
  <img src="https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6" />
</p>

<p align="center">
  A modern, interactive password strength checker with real-time analysis, actionable feedback, and a glassmorphism-inspired UI — built entirely with vanilla HTML, CSS, and JavaScript.
</p>

<p align="center">
  <a href="https://password-strength-checker-phi-brown.vercel.app/"><strong>🚀 View Live Demo »</strong></a>
</p>

---

## 🧭 Overview

**Password Strength Checker** is a lightweight, client-side web application that evaluates password strength in real time and provides clear, actionable suggestions to help users create stronger, more secure passwords. Built with zero external dependencies, it's fast, portable, and easy to deploy anywhere.

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Real-Time Analysis** | Instant strength feedback as the user types — no page reloads, no delays. |
| 💡 **Dynamic Suggestions** | Contextual, actionable tips (length, symbols, casing, numbers) to strengthen weak passwords. |
| 🎨 **Modern UI/UX** | Glassmorphism design language with a neon glowing strength bar and subtle animated pulse effects. |
| 🪶 **Lightweight & Fast** | Pure vanilla HTML/CSS/JS — no frameworks, no build step, no external libraries. |
| 📱 **Responsive Design** | Works cleanly across desktop, tablet, and mobile viewports. |

## 📸 Preview

**Password Input & Suggestions**

<img width="1136" height="664" alt="image" src="https://github.com/user-attachments/assets/912caf2c-c092-45ab-8e3c-42c595b235e3" />

**Neon Strength Bar**

<img width="1136" height="664" alt="image" src="https://github.com/user-attachments/assets/f44ce487-051c-4ee5-9873-061b1c1f99d4" />

## 🛠 Tech Stack

- **HTML5** — semantic markup and structure
- **CSS3** — glassmorphism styling, gradients, and neon glow/pulse animations
- **JavaScript (ES6)** — password validation logic and dynamic DOM updates
- **Vercel** — hosting and continuous deployment

## 📂 Project Structure

```text
├── assets/
│   └── logo.png          # Application logo and brand imagery
├── index.html            # Main HTML layout and document structure
├── style.css             # Custom styles (Glassmorphism & neon theme)
├── script.js             # Client-side logic & dynamic UI validation
└── README.md             # Technical documentation and setup guide
```

## 🚀 Getting Started

No build tools or dependencies are required — this is a static, vanilla web project.

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) [Git](https://git-scm.com/) for cloning the repository

### Installation

```bash
# Clone the repository
git clone https://github.com/adityajadhav0101/password-strength-checker.git

# Navigate into the project directory
cd password-strength-checker

# Open index.html directly in your browser
open index.html    # macOS
start index.html    # Windows
```

Alternatively, serve it locally with any static file server, e.g.:

```bash
npx serve .
```

## ⚙️ How It Works

1. The user types a password into the input field.
2. `script.js` evaluates the password against a set of strength criteria — length, uppercase/lowercase mix, numeric characters, and special symbols.
3. A weighted score determines the strength level (e.g., *Very Weak*, *Weak*, *Medium*, *Strong*).
4. The UI updates in real time: the neon strength bar animates to reflect the score, and tailored suggestions are displayed to help the user improve weak passwords.

## 🗺 Roadmap

- [ ] Add a "Show/Hide Password" toggle
- [ ] Integrate a breached-password check (e.g., Have I Been Pwned API)
- [ ] Add copy-to-clipboard for generated strong passwords
- [ ] Dark/Light theme toggle
- [ ] Unit tests for the scoring logic

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please open an issue first for major changes to discuss what you'd like to modify.

---

<p align="center">Made with ❤️ by <a href="https://github.com/adityajadhav0101">Aditya Jadhav</a></p>
