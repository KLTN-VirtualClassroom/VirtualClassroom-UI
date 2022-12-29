import {  useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = () =>{

    navigate('/ToRoom', {state:{username: user, password: pass}});

  }

  return (
    <Box display="flex" flexDirection={"column"}  alignItems="center" width={"100%"}>
      <Box   >
        <TextField
          margin="normal"
          name="reasonInput"
          label="Tài khoản"
          id="reasonInput"
          value={user}
          onChange={handleUser}
        />
      </Box>
      <div className="form-group position-relative">
        <TextField
          margin="normal"
          name="reasonInput"
          label="Mật khẩu"
          id="reasonInput"
          value={pass}
          onChange={handlePass}
        />
      </div>
      <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{
                bgcolor: '#56408a',
                color: 'white',
                marginTop: '1rem',
                paddingY: '0.7rem',
                fontWeight: '600'
            }}
               onClick={handleSubmit}
            >
              LOGIN
            </Button>
    </Box>
  );
};

export default Login;
