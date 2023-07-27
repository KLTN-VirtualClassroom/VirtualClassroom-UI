import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
const CallFrame = (props) => {
  const { state } = useLocation();
  let account = {};
  // account = {
  //   username: state.username,
  //   password: state.password,
  //   // roomId: Math.floor(Math.random() * (2 - 1 + 1)) +1,
  //   roomId: "English",
  //   role: "teacher",
  //   email: "kltnvirtualclass@gmail.com",
  // };
  if (state.username === "nghianguyen"){
    account = {
      username: state.username,
      password: state.password,
      // roomId: Math.floor(Math.random() * (2 - 1 + 1)) +1,
      roomId: "English",
      role: "teacher",
      email: "hieunghia3107@gmail.com",
    };
  }
  else{
    account = {
      username: state.username,
      password: state.password,
      // roomId: Math.floor(Math.random() * (2 - 1 + 1)) +1,
      roomId: "English",
      role: "student",
      email: "kltnvirtualclass1222@gmail.com",
    };
  }
  const iFrameRef = useRef(null);
  console.log(account)

  const handleCloseIframe = () => {
    iFrameRef.current.contentWindow.postMessage("close", "*");
  };

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
    <iframe
      src={`${process.env.REACT_APP_CLASS_PATH}?username=${account.username}&password=${account.password}&roomId=${account.roomId}&role=${account.role}&email=${account.email}`}
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
