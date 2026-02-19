# 🧠 Quiz Platform

A modern Quiz Management Web Application built using React, Redux Toolkit, React Router and Vite.

This application allows users to create quizzes, manage them, play quizzes, and view final results in a clean and structured interface.

---

## 🚀 Live Demo

🔗 Live Link: (Add your GitHub Pages link here after deployment)

---

## 📌 Project Overview

Quiz Platform is a single-page application that enables users to:

- Create custom quizzes
- Add multiple questions
- Select correct answers
- Manage created quizzes
- Play quizzes
- View final score results

The application uses Redux Toolkit for centralized state management and React Router for navigation.

---

## ✨ Features

### 🏠 Home Page
- Sidebar navigation layout
- Welcome dashboard
- Quick access cards:
  - Create New Quiz
  - My Quizzes

### ➕ Create Quiz
- Add multiple questions
- Add 4 options per question
- Select correct answer using radio button
- Add multiple questions in one quiz
- Save quiz functionality

### 📋 My Quizzes
- View all created quizzes
- Display quiz title
- Active / Inactive status
- Edit quiz option
- Delete quiz option
- Play quiz option

### 🎮 Play Quiz
- Radio button answer selection
- Next question navigation
- Automatic score tracking

### 📊 Results Page
- Displays final score
- Shows score out of total questions
- Clean result UI

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Router DOM
- Vite
- JavaScript (ES6)
- CSS

---

## 🧠 State Management

Redux Toolkit is used for:
- Storing quizzes
- Managing current quiz
- Tracking user score
- Handling answer selection
- Resetting quiz state

---

## 📂 Folder Structure
quiz-platform/ │ ├── src/ │   ├── components/        # Reusable UI components │   ├── features/ │   │   └── quiz/          # Redux slice and quiz logic │   ├── pages/             # Home, CreateQuiz, MyQuizzes, PlayQuiz, Result pages │   ├── App.jsx            # Main app routing │   ├── main.jsx           # Entry point │ ├── index.html ├── package.json ├── vite.config.js └── README.md
