import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
const CallFrame = (props) => {
  const { state } = useLocation();
  const account = {
    username: state.username,
    password: state.password
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
    console.log("Token:");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  return (
    <div style={{ height: "100vh" }}>
        <iframe
          src={`${process.env.REACT_APP_CLASS_PATH}`}
          title="chatframe"
          height={"100%"}
          width="100%"
        ></iframe>
      </div>
  )
};
export default CallFrame;
