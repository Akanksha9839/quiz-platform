import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const Result = () => {
  const { score, currentQuiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!currentQuiz) return null;

  const total = currentQuiz.questions.length;
  const percentage = Math.round((score / total) * 100);

  const handleBack = () => {
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card elevation={6} sx={{ borderRadius: 4 }}>
        <CardContent sx={{ textAlign: "center", p: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quiz Completed 🎉
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">
              Score: {score} / {total}
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Percentage: {percentage}%
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            onClick={handleBack}
          >
            Go Home
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Result;