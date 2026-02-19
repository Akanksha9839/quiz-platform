import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentQuiz,
  deleteQuiz,
  editQuizTitle,
} from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";

const MyQuizzes = () => {
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handlePlay = (quiz) => {
    dispatch(setCurrentQuiz(quiz));
    navigate("/play");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (confirmDelete) {
      dispatch(deleteQuiz(id));
    }
  };

  const handleEdit = (quiz) => {
    setEditId(quiz.id);
    setNewTitle(quiz.title);
  };

  const handleSaveEdit = (id) => {
    if (!newTitle.trim()) return alert("Title cannot be empty");

    dispatch(editQuizTitle({ id, newTitle }));
    setEditId(null);
    setNewTitle("");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Quizzes
      </Typography>

      <Typography variant="subtitle1" sx={{ color: "gray", mb: 3 }}>
        Manage, edit or play your created quizzes.
      </Typography>

      {quizzes.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            p: 4,
            border: "1px dashed #ccc",
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" sx={{ color: "gray" }}>
            No quizzes created yet.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Click on "Create Quiz" to get started.
          </Typography>
        </Box>
      )}

      <Stack spacing={4}>
        {quizzes.map((quiz) => (
          <Card
            key={quiz.id}
            elevation={4}
            sx={{
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              {editId === quiz.id ? (
                <Stack spacing={2}>
                  <TextField
                    label="Edit Quiz Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    fullWidth
                  />

                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => handleSaveEdit(quiz.id)}
                    >
                      Save
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              ) : (
                <>
                  <Typography variant="h6" fontWeight="bold">
                    {quiz.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "gray", mt: 1 }}
                  >
                    Total Questions: {quiz.questions.length}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => handlePlay(quiz)}
                    >
                      Play
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => handleEdit(quiz)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(quiz.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default MyQuizzes;