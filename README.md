# 🚀 HERO.IO | App Store Explorer

**HERO.IO** is a modern, high-performance web application designed for discovering, managing, and installing digital applications. Built with a focus on seamless user experience and "glassmorphism" aesthetics, HERO.IO provides a centralized hub for users to browse trending apps, view detailed analytics, and manage their personal collection via local persistence.

---
## 🚀 Key Features

* **🔍 Dynamic App Discovery**
    Browse a curated list of applications with real-time search functionality and multi-criteria filtering (including A-Z, Z-A, and Size-based sorting).

* **📊 Rich Data Visualization**
    Gain insights at a glance with interactive rating distributions powered by specialized `recharts` components, styled to match modern app store aesthetics.

* **💾 Smart Installation System**
    A fully functional simulation of app installations using `localStorage` for data persistence, featuring duplicate prevention and a dedicated "My Apps" management view.

* **✨ Adaptive Navigation**
    A sleek "Glassmorphism" navbar featuring `backdrop-blur` effects, active route tracking with `NavLink`, and a fully optimized mobile-responsive design.

* **🛣️ Robust Routing**
    Engineered with React Router 7, utilizing custom `loaders` for data fetching, `hydrateFallbackElement` for smooth loading states, and custom Error Boundaries for 404 recovery.

* **🔔 Toast Notifications**
    Instant, non-blocking visual feedback for user interactions (installations, uninstalls, and warnings) using `react-toastify`.


## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core UI library for component-based architecture |
| **Tailwind CSS** | Utility-first styling for responsive design |
| **DaisyUI** | Premium component library for consistent UI |
| **React Router** | Client-side routing with loaders and fallbacks |
| **Recharts** | Data visualization for app rating distributions |
| **React Toastify** | Non-blocking notifications for user feedback |

🚀 Getting Started
Follow these steps to get your local development environment running:

1. Prerequisites
Make sure you have Node.js installed on your machine.

2. Installation
Clone the repository and install the dependencies:

git clone https://github.com/your-username/hero-io.git
cd hero-io
npm install


3. Running the Project
Launch the Vite development server:

npm run dev



https://gregarious-meringue-2fb191.netlify.app/
Open http://localhost:5173 or https://gregarious-meringue-2fb191.netlify.app/ in your browser to see the result.


📂Project Structure
src/components: Reusable UI elements (Navbar, Cards, Charts).

src/pages: Main view components (AllApps, AppDetails, InstalledApps).

src/layouts: Main application shells.

public/resources: Local JSON data acting as a mock API for app information.

📄 License
Distributed under the MIT License. See LICENSE for more information.





# 🦸‍♂️ Assignment 03 — Hero IO


---


# 🐣 Basic Requirements

- Make the Application Responsive for All the Devices
- Do minimum 5 commits to your github Repository
- Give a meaning full name to your application
- Make Sure on Production Application is error Free
- Add a Readme.md with App Name , Description & Technologies

---

# 🔧 Main Requirements

## 1. 🧱 Layout & Data Design

#### Header

- The header must include:
  - A logo.on clicking it user will be navigated to home page.
  - A navigation bar with links [ `home` , `apps` , `installation` ] and active route indication.
  - A `Contribution` button as Figma linking to the your GitHub profile.

#### Footer

- Design a custom footer using your own creativity and style.

#### Data

- Create an JSON Array of minimum 12-20 objects for app data using the following structure:
  ```js
  {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: number;
    ratingAvg: number;
    downloads: number;
    ratings: [
      { name: "1 star"; count: number },
      { name: "2 star"; count: number },
      { name: "3 star"; count: number },
      { name: "4 star"; count: number },
      { name: "5 star"; count: number }
    ];
  }
  ```

---

## 2. 🏠 Home Page

#### Banner

- Must contain a center-aligned heading, text, and two buttons.
- “App Store” button will redirect to the App Store.
- “Play Store” button will redirect to the Play Store.

#### States Section

- Must contain three state cards as shown in Figma.

#### Top Apps Section

- Display eight apps in a four-column layout.
- Each app card should display:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on a card should navigate the user to the App Details page.
- Include a “Show All” button that navigates to the All Apps page.

---

## 3.📱 All Apps Page

#### Title Section

- Include a title and subtitle following the Figma design.

#### Search and States

- Display the total number of apps on the left and a search bar on the right.
- `Implement live search functionality`
  - filters apps by title as the user types.
  - Search will be case-insensitive
  - If no app matches, display a “No App Found” message.

#### App Section

- Display all apps from the JSON data.
- Each app card should include:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on an app card should navigate to the App Details page.

---

## 4.📊 App Details Page

#### App Information

- Show app image on the left.
- Display app details such as title, rating, downloads, reviews.
- Include an `Install button`:
  - When clicked, it becomes disabled and the text changes to `Installed`.
  - Show a Success Toast after App installed

#### App Review Chart

- Implement a responsive chart using the **Recharts** library.
- Visualize the app’s review data as shown in the Figma design.

#### App Description

- Show the app details in description section as per Figma layout.

---

## 5. Error Page & Others

- Create a custom error page for invalid routes.

- Show a loading animation during: `Challenge Part`

  - Page navigation.
  - Search operation.

- Show a Relevant Not Found message app not found in app details section.

- Ensure that reloading any route after deployment does not cause an error.

---

# Challenge Requirement

### LocalStorage Features

#### App Installation

- When the “Install” button is clicked:
  - Save the app to localStorage.
  - If the app is already installed, show a disabled button with the text `Installed`.

#### My Installation Page

- Create a page named “My Installation” following the Figma design.
- Display all installed apps as cards.
- Include an Uninstall button:
  - Clicking it
    - removes the app from both the UI and localStorage.
    - Show an Toast with some relevant message

---

### Sort by Downloads

- Implement a dropdown for sorting apps by download count.
- The dropdown must include:
  - **High-Low:** Sort apps in descending order by downloads.
  - **Low-High:** Sort apps in ascending order by downloads.

---

### Loading Animation

- Show a loading animation during:
  - Page navigation.
  - Search operation

---

## 🚀 Deployment

- Deploy the project to Cloudflare / Netlify / Vercel.
- Reloading from any route must work correctly without showing a 404 error.

---

## 🔗 Submission Guideline

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 26 March , 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 27 March , 2026 (11:59 pm⏱️)

### 📅 Deadline For 30 marks: Since this is the final assignment, there will be no 30-mark deadline. You must submit it within the 50-mark deadline to qualify for the reward.


