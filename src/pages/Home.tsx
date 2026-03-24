import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      className="page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1>Welcome to the React-Redux Demo App</h1>
      <p>
        This application demonstrates the use of React and Redux together. Use
        the navigation links to explore different features and examples of Redux
        in action.
      </p>
    </Box>
  );
};

export default Home;
