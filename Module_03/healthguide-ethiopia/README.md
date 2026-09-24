# 🩺 HealthGuide Ethiopia

A simple, responsive health information navigator designed around **common situations**, not diagnoses.

Instead of asking *"What disease do I have?"*, the app lets users choose what they are **experiencing** — like fever, headache, breathing difficulty, or stomach issues — and gives them **general educational information** along with **recommended next steps**.

---

## 📌 About the App

**HealthGuide Ethiopia** is a React-based web application built to help users understand common symptoms and decide whether they should:

- ✅ Self-care at home
- ⚠️ Seek urgent medical attention
- 🏥 Find a nearby hospital, clinic, or pharmacy

The app **does not diagnose** anything. It only provides general health education based on publicly available guidance.

---

## ✨ Core Features

### 🏠 Home Page – Symptom Selection
- Four main categories: **Fever, Headache, Breathing, Stomach**
- Beautiful, animated glassmorphism cards
- Real-time **search bar** to filter symptoms instantly

### 📖 Symptom Guide Page
- **Possible general causes** of the symptom
- **What you can do** (self-care actions)
- **⚠️ Warning signs** that require urgent care
- **❤️ Bookmark button** to save the guide for later

### 🏥 Nearby Health Facilities (Geolocation + OpenStreetMap)
- Uses the browser's **Geolocation API** to get the user's coordinates
- Fetches real hospitals, clinics, and pharmacies within **5 km** via the free **Overpass API**
- Displays results as clean, tappable cards

### ❤️ Saved Health Tips
- Users can bookmark any symptom guide
- Saved items persist in **localStorage** (survive page refresh)
- Dedicated page to view all saved tips

### ⚕️ Medical Disclaimer
- A permanent footer reminding users that this app is **educational only** and not a substitute for professional medical advice.

---

## 🎨 Design Highlights

- **Ethiopian flag color theme** (Green 🇪🇹, Yellow, Red) used as accents
- **Glassmorphism UI** (frosted-glass cards with blur and shadows)
- **Smooth hover animations** (lift, scale, glow)
- **Pulsing emergency button** for urgent situations
- **Fully responsive** — works beautifully on phones, tablets, and desktops

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | Frontend UI library |
| **Vite** | Fast build tool and dev server |
| **React Router** | Page navigation (`/`, `/symptom/:id`, `/saved`) |
| **CSS3** | Custom styling, animations, responsive layout |
| **Overpass API** | Free OpenStreetMap API for nearby health centers |
| **Geolocation API** | Browser built-in for user's location |
| **localStorage** | Persisting saved/bookmarked tips |

---

## 📡 APIs Used

| API | Type | Purpose |
| :--- | :--- | :--- |
| **Overpass API** (`overpass-api.de`) | Free, no key required | Fetch nearby hospitals, clinics, pharmacies |
| **Browser Geolocation** | Built-in | Get user's latitude & longitude |

---

## 📁 Project Structure
