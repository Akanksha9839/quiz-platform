import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  currentQuiz: null,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },

    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz.id !== action.payload
      );
    },

    editQuizTitle: (state, action) => {
      const { id, newTitle } = action.payload;
      const quiz = state.quizzes.find((q) => q.id === id);
      if (quiz) {
        quiz.title = newTitle;
      }
    },

    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
      state.score = 0;
    },

    increaseScore: (state) => {
      state.score += 1;
    },

    resetQuiz: (state) => {
      state.currentQuiz = null;
      state.score = 0;
    },
  },
});

export const {
  addQuiz,
  deleteQuiz,
  editQuizTitle,
  setCurrentQuiz,
  increaseScore,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;