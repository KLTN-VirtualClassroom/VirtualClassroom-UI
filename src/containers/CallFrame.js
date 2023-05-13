import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
const CallFrame = (props) => {
  const { state } = useLocation();

  const account = {
    username: state.username,
    password: state.password,
    // roomId: Math.floor(Math.random() * (2 - 1 + 1)) +1,
    roomId: "English",
    role: "teacher"
  }

  const [authToken, setauthToken] = useState("");

  useEffect(() => {
    async function getAuth() {
      await axios.post(`${process.env.REACT_APP_SERVER_PATH}/getInfor`, account);
    }

    getAuth();
    //localStorage.clear();
    const status = "done";
    setauthToken(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  return (
    // <div style={{ height: "95vh" }}>
        <iframe
          src={`${process.env.REACT_APP_CLASS_PATH}`}
          title="chatframe"
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          frameBorder={0}
          style={{position: "absolute", top: "0", left: "0", border: "none", height: '100vh', width: "100%"}}
        ></iframe>
      // </div>
  )
};
export default CallFrame;
