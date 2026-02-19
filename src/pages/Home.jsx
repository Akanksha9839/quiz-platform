import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Welcome to Quiz Platform
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{ mb: 6, color: "gray" }}
      >
        Create, play and manage your quizzes easily.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Create Quiz Card */}
        <Grid item xs={12} md={5}>
          <Card
            onClick={() => navigate("/create")}
            sx={{
              height: 180,
              borderRadius: 4,
              cursor: "pointer",
              background: "linear-gradient(135deg, #2196f3, #21cbf3)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Create New Quiz
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* My Quizzes Card */}
        <Grid item xs={12} md={5}>
          <Card
            onClick={() => navigate("/myquizzes")}
            sx={{
              height: 180,
              borderRadius: 4,
              cursor: "pointer",
              background: "linear-gradient(135deg, #f48fb1, #f06292)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                My Quizzes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;