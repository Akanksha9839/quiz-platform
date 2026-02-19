import { useSelector, useDispatch } from "react-redux";
import { increaseScore } from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

const PlayQuiz = () => {
  const { currentQuiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!currentQuiz) return <Typography>No quiz selected</Typography>;

  const question = currentQuiz.questions[currentIndex];

  const handleAnswer = (option) => {
    if (option === question.answer) {
      dispatch(increaseScore());
    }

    if (currentIndex + 1 < currentQuiz.questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h6">
        Question {currentIndex + 1} of {currentQuiz.questions.length}
      </Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        {question.question}
      </Typography>

      {question.options.map((opt, i) => (
        <Button
          key={i}
          variant="outlined"
          sx={{ display: "block", mt: 2 }}
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </Button>
      ))}
    </Container>
  );
};

export default PlayQuiz;