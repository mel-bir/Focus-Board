# Focus-Board

# 📋 FocusBoard — Interactive Task Dashboard

A clean, responsive task and habit dashboard built with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. FocusBoard features a responsive CSS Grid card layout, instant category filtering, live completion tracking, and a smooth Dark/Light theme switcher.

🔗 **Live Demo:** [View Live Project](https://mel-bir.github.io/Focus-Board/)

---

## ✨ Features

- **Responsive CSS Grid Layout:** Automatically reflows cards from a multi-column desktop grid to a single-column mobile stack using `repeat(auto-fit, minmax(320px, 1fr))`—zero media queries required.
- **Interactive Task Completion:** Click any card's circular checkmark button to mark a task complete, triggering visual strikethrough states and updating the live completion counter.
- **Instant View Filtering:** Switch seamlessly between **All Tasks**, **Pending**, and **Completed** views without reloading the page.
- **Dark & Light Mode Theme Switcher:** Toggles CSS custom properties (`:root` variables) across the entire UI with smooth color transitions.
- **Semantic & Accessible Markup:** Built using `<header>`, `<main>`, `<section>`, `<article>`, and native `<button>` elements for clean keyboard navigation and screen-reader clarity.

---

## 🛠️ Built With

- **HTML5** – Semantic landmark elements and clean `id`/`class` architecture
- **CSS3** – Custom properties (CSS variables), Flexbox alignment, and responsive CSS Grid
- **JavaScript (ES6+)** – DOM selection (`getElementById`, `querySelectorAll`), event listeners, and state-driven class toggling (`classList`)

---

## 📂 Project Structure

```text
focusboard/
├── index.html      # Semantic layout structure and task cards
├── style.css       # Design tokens, responsive grid, and theme/state styles
├── script.js       # Theme toggle, card completion, and filtering logic
└── README.md       # Project documentation