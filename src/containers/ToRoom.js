import {  Button, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ToRoom = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const handleSubmit = () => {
    navigate("/CallFrame", {
      state: { username: state.username, password: state.password },
    });
  };
  console.log(state);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      width={"100%"}
      marginTop="10%"
    >
      <Box>Tên đăng nhập là: {state.username}</Box>

      {/* <Box>Pass là: {state.password}</Box> */}
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        sx={{
          bgcolor: "#56408a",
          color: "white",
          marginTop: "1rem",
          paddingY: "0.7rem",
          fontWeight: "600",
        }}
        onClick={handleSubmit}
      >
        To Room
      </Button>
    </Box>
  );
};

export default ToRoom;
