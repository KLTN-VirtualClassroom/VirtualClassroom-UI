import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';
import React, { useRef, useState } from 'react';

const App = () => {
  return <JitsiMeeting
    domain = "kltnvirtualclassroom.online"
    roomName = "VirtualClassroom"
    configOverwrite = {{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false
    }}
    interfaceConfigOverwrite = {{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
    }}
    userInfo = {{
        displayName: 'HungNguyen'
    }}
    onApiReady = { (externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
    } }
    getIFrameRef = { (iframeRef) => { iframeRef.style.height = "100vh" ; } }
  />
};

export default App;