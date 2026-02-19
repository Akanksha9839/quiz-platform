import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuiz } from "../features/quiz/quizSlice";
import { v4 as uuidv4 } from "uuid";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [questionType, setQuestionType] = useState("single");

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // 🔥 NEW STATE FOR MULTIPLE QUESTIONS
  const [questions, setQuestions] = useState([]);

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  // ✅ Add Question (Only Adds To Array)
  const handleAddQuestion = () => {
    if (!question) return;

    const newQuestion = {
      id: uuidv4(),
      type: questionType,
      question,
      options:
        questionType === "single" || questionType === "multiple"
          ? options
          : [],
      correctAnswer,
    };

    setQuestions([...questions, newQuestion]);

    // Reset fields
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  // ✅ Final Save Quiz
  const handleSaveQuiz = () => {
    if (!title || questions.length === 0) return;

    const newQuiz = {
      id: uuidv4(),
      title,
      questions,
    };

    dispatch(addQuiz(newQuiz));
    navigate("/my-quizzes");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box sx={{ mb: 2 }}>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Create New Quiz
      </Typography>

      {/* Question Type Modal */}
      <Dialog open={open}>
        <DialogTitle>Select Question Type</DialogTitle>
        <DialogContent>
          <RadioGroup
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="MCQ (Single Correct)"
            />
            <FormControlLabel
              value="multiple"
              control={<Radio />}
              label="MCQ (Multiple Correct)"
            />
            <FormControlLabel
              value="short"
              control={<Radio />}
              label="Short Answer"
            />
            <FormControlLabel
              value="description"
              control={<Radio />}
              label="Description"
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      {!open && (
        <Box mt={4}>
          <TextField
            fullWidth
            label="Quiz Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            sx={{ mb: 3 }}
          />

          {(questionType === "single" ||
            questionType === "multiple") &&
            options.map((opt, index) => (
              <TextField
                key={index}
                fullWidth
                label={`Option ${index + 1}`}
                value={opt}
                onChange={(e) =>
                  handleOptionChange(index, e.target.value)
                }
                sx={{ mb: 2 }}
              />
            ))}

          <TextField
            fullWidth
            label="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* 🔥 Add Question Button */}
          <Button
            variant="outlined"
            size="large"
            sx={{ mr: 2 }}
            onClick={handleAddQuestion}
          >
            Add Question
          </Button>

          {/* ✅ Final Save */}
          <Button
            variant="contained"
            size="large"
            onClick={handleSaveQuiz}
          >
            Save Quiz
          </Button>

          {/* Preview Count */}
          <Typography mt={2}>
            Total Questions Added: {questions.length}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CreateQuiz;