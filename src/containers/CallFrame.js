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
      await axios.post("http://localhost:3030/getInfor", account);
    }

    getAuth();
    //localStorage.clear();
    const status = "done";
    setauthToken(status);
    console.log("Token:");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  return (
    <div style={{ height: "93vh" }}>
        <iframe
          src="http://localhost:4200"
          title="chatframe"
          height={"100%"}
          width="100%"
        ></iframe>
      </div>
  )
};
export default CallFrame;
