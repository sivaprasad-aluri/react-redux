import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../features/counter/counterSlice";
import { Box, Button, Paper, Typography } from "@mui/material";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  useEffect(() => {
    if (count < 0) {
      dispatch(reset());
    }
  }, [count, dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems=" center"
      height="100vh"
      overflow="scroll-y"
    >
      <Paper
        elevation={3}
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          width: "450px",
          margin: "0 auto",
        }}
      >
        <h2>Counter</h2>
        <Typography variant="h3" gutterBottom sx={{ my: 4 }}>
          {count}
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            Increment By 1
          </Button>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            Decrement By 1
          </Button>

          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment By 5
          </Button>
        </Box>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => dispatch(reset())}
          sx={{ mt: 2 }}
        >
          Reset
        </Button>
      </Paper>
    </Box>
  );
};

export default Counter;
