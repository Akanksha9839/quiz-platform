# 🧠 Quiz Platform

A fully functional Quiz Management Web Application built using React, Redux Toolkit, React Router, and Vite.

The application enables users to create, manage, and play quizzes with real-time score tracking in a clean, modular, and responsive interface.

---

## 🚀 Live Application

🔗 **Live Demo:**  
https://akanksha9839.github.io/quiz-platform/

🔗 **GitHub Repository:**  
https://github.com/Akanksha9839/quiz-platform

---

## 📌 Project Overview

Quiz Platform is a Single Page Application (SPA) designed to demonstrate modern frontend development practices including component-based architecture, centralized state management, and client-side routing.

The platform allows users to:

- Create custom quizzes with multiple questions
- Define answer options and select correct answers
- Manage created quizzes
- Attempt quizzes interactively
- View real-time scoring and final results

The application follows a modular folder structure and uses Redux Toolkit for efficient and scalable state management.

---

## ✨ Core Features

### 🏠 Dashboard
- Sidebar navigation layout
- Clean and responsive UI
- Quick access to quiz creation and quiz management

### ➕ Quiz Creation
- Add multiple questions dynamically
- Add four options per question
- Select correct answers via radio buttons
- Save quiz functionality
- Structured quiz data handling

### 📋 Quiz Management
- View all created quizzes
- Edit quiz details
- Delete quizzes
- Play selected quiz
- Display quiz status

### 🎮 Quiz Play Mode
- Interactive question navigation
- Single-answer selection using radio inputs
- Automatic score calculation
- Seamless transition between questions

### 📊 Result Page
- Displays total score
- Shows score out of total questions
- Clear and minimal result interface

---

## 🛠️ Tech Stack

- **React** – Component-based UI development
- **Redux Toolkit** – Centralized state management
- **React Router DOM** – Client-side routing
- **Vite** – Fast development and optimized production build
- **JavaScript (ES6+)**
- **CSS**

---

## 🧠 State Management Architecture

Redux Toolkit is implemented to manage:

- Quiz data storage
- Current active quiz
- User score tracking
- Answer validation
- State reset functionality

This ensures predictable state updates and scalable architecture.

---

## 📂 Project Structure
quiz-platform/ │ ├── src/ │   ├── components/        # Reusable UI components │   ├── features/ │   │   └── quiz/          # Redux slice and quiz logic │   ├── pages/             # Home, CreateQuiz, MyQuizzes, PlayQuiz, Result │   ├── App.jsx            # Routing configuration │   └── main.jsx           # Application entry point │ ├── index.html ├── package.json ├── vite.config.js └── README.md
---

## ⚙️ Installation & Setup

### Clone the repository
```bash
git clone https://github.com/Akanksha9839/quiz-platform.git
Install dependencies
npm install
Start development server
npm run dev
The application is deployed using GitHub Pages with the gh-pages package.
To deploy:
npm run deploy

🎯 Learning Outcomes
This project demonstrates:
Component-based architecture in React
Clean and modular folder structure
Effective state management using Redux Toolkit
Client-side routing using React Router
Production deployment using GitHub Pages
Version control and repository management using Git
📌 Conclusion
Quiz Platform reflects best practices in frontend application development, combining scalability, maintainability, and user-friendly design. It showcases practical implementation of state management and routing within a real-world use case.
⭐ If you found this project helpful, feel free to star the repository.

