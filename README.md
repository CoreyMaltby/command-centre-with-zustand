# Store Command Centre PoC

A global state management Proof of Concept built with React, Zustand, and Recharts. This application demonstrates how to manage UI layouts, cross-component communication, and user preferences.

## Key Features
* **Global State Management:** Uses Zustand to create a central manager for the entire application. Components subscribe only to the data they need, preventing unnecessary re-renders.
* **Persistent Layout:** Utilises the persist middleware to automatically sync the user's dashboard configuration to localStorage. The dashboard remains the same when refreshing.
* **Dynamic Data Visualisation:** Integrated with Recharts to provide live sales performances and value distribution. The chart instantly reacts to the global department toggles.
* **Light and Dark Mode Themes:** A global theme switcher that toggles between a light and dark mode, which applies across all components simultaneously.

## Tech Stack
* **Frontend:** React, Vite
* **State Management:** Zustand
* **Data Visualisation:** Recharts
* **Styling:** JavaScript-based Dyanmic Styling

## What I Learned
### 1. Centralised UI Logic.
I learned how to move UI states out of individual components and into a global store. This makes the application easier to scale as more panels are added.

### 2. Selective Subscription.
By using Zustand selectors, I learned how to ensure components only re-render when the specific data they are following is changed, ensuring the dashboard performs well even with the charts.

### 3. Middleware & Persistence
I implemented the persist middleware to link volatile memory and permanent storage. This taught me how to handle hydration, and ensure the app loads correctly loads the settings correctly when first loading.

### 4. Coordinated Visualisations
Integrating Recharts taught me how to filter global datasets in real-time. I implemented logic where toggling a department hides the UI card and filters the data used in the line and pie charts.

## Local Setup

```
git clone https://github.com/CoreyMaltby/command-centre-with-zustand.git
cd command-centre-with-zustand
npm install
npm run dev
```
