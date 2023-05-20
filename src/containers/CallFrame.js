import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
const CallFrame = (props) => {
  const { state } = useLocation();

  const account = {
    username: state.username,
    password: state.password,
    // roomId: Math.floor(Math.random() * (2 - 1 + 1)) +1,
    roomId: "English",
    role: "teacher",
    email: "helloworld@gmail.com"
  };

  const iFrameRef = useRef(null);

  const [authToken, setauthToken] = useState("");

  // useEffect(() => {
  //   let authUser = {};
  //   async function getAuth() {
  //     await axios
  //       .post("http://localhost:3030/getInfor", account)
  //       .then(function (response) {
  //         authUser = response.data;
  //         //console.log(response.data);
  //       });
  //     // await axios.post('https://servervirtual.kltnvirtualclassroom.online/getInfor', account);
  //   }
  //   getAuth();
   
  //   const status = "done";
  //   setauthToken(status);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    // <div style={{ height: "95vh" }}>
    <iframe
      src={`${process.env.REACT_APP_CLASS_PATH}?username=${account.username}&password=${account.password}&roomId=${account.roomId}&role=${account.role}`}
      ref={iFrameRef}
      title="chatframe"
      allow="camera; microphone; fullscreen; display-capture; autoplay"
      frameBorder={0}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        border: "none",
        height: "100vh",
        width: "100%",
      }}
    ></iframe>
    // </div>
  );
};
export default CallFrame;
