import { useSelector, useDispatch } from "react-redux";
import { increaseScore } from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

const PlayQuiz = () => {
  const { currentQuiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Safety check
  if (!currentQuiz || currentQuiz.questions.length === 0) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h6">
          No quiz selected.
        </Typography>
      </Container>
    );
  }

  const question = currentQuiz.questions[currentIndex];

  const handleAnswer = (selectedOption) => {
    // ✅ Correct comparison
    if (selectedOption === question.correctAnswer) {
      dispatch(increaseScore());
    }

    // Move to next question or result
    if (currentIndex + 1 < currentQuiz.questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h6">
        Question {currentIndex + 1} of{" "}
        {currentQuiz.questions.length}
      </Typography>

      <Typography variant="h5" sx={{ mt: 3 }}>
        {question.question}
      </Typography>

      <Box sx={{ mt: 3 }}>
        {question.options?.map((option, index) => (
          <Button
            key={index}
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default PlayQuiz;