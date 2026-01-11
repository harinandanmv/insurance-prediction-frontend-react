# 📊 Insurance Prediction Frontend (React)

A responsive and user-friendly React frontend application that lets users interactively input their personal details to estimate insurance premium costs. It seamlessly connects to the **FastAPI backend** for real-time predictions. This project is built using **React and Vite** for fast development and performance.

---

## 🚀 Features

- 🔹 Clean and intuitive UI for insurance prediction
- 🔹 Form input for user data (age, BMI, smoker status, etc.)
- 🔹 Connects to a REST API backend for live predictions
- 🔹 Built with **React (Vite)** for fast hot-reload development
- 🔹 Easily extendable for styling or feature upgrades

---

## 🧱 Project Structure

```

insurance-prediction-frontend-react/
├── public/                      # Static assets
├── src/                         # Application source code
│   ├── components/             # React components
│   ├── App.jsx                 # Main app component
│   └── index.jsx               # App entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

````

---

## 🛠️ Getting Started (Run Locally)

### 🪄 Clone the Repo
```bash
git clone https://github.com/harinandanmv/insurance-prediction-frontend-react.git
cd insurance-prediction-frontend-react
````

### 🧩 Install Dependencies

```bash
npm install
```

### 🚀 Start the Development Server

```bash
npm run dev
```

Your app will open at:

```
http://localhost:5173
```

---

## 📡 Connect to Backend

This app expects the backend API (FastAPI) to be running and accessible (e.g., at `http://localhost:8000`).

Update the API base URL inside your React config or `.env` file accordingly to ensure the prediction requests reach the backend.

---

## 📦 Built With

| Technology | Role                       |
| ---------- | -------------------------- |
| React      | Frontend UI                |
| Vite       | Dev server & build tooling |
| JavaScript | Language                   |
| CSS        | Styling                    |
| REST       | API communication          |

---

## 🎨 UI Flow

1. User opens the application in a browser
2. Fills out details (age, BMI, smoker status, etc.)
3. Clicks *Predict*
4. App sends input to backend API
5. Displays predicted insurance cost

---

## ⭐ Contributing

Contributions are welcome!
Whether it’s bug fixes, UI improvements, or deployment enhancements — feel free to open issues or PRs.

---

## 📜 License

This project is licensed under the **MIT License** — see the LICENSE file for details.
