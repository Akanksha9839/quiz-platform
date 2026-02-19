import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";

const loadState = () => {
  try {
    const saved = localStorage.getItem("quizState");
    return saved ? JSON.parse(saved) : undefined;
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("quizState", JSON.stringify(state));
  } catch (e) {}
};

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  preloadedState: {
    quiz: loadState() || undefined,
  },
});

store.subscribe(() => {
  saveState(store.getState().quiz);
});