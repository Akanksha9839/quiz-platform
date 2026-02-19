import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          Quiz Platform
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            variant={location.pathname === "/" ? "outlined" : "text"}
            sx={{ mr: 1 }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/create"
            variant={location.pathname === "/create" ? "outlined" : "text"}
            sx={{ mr: 1 }}
          >
            Create Quiz
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/myquizzes"
            variant={location.pathname === "/myquizzes" ? "outlined" : "text"}
          >
            My Quizzes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;