import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './containers/Login'
import ToRoom from './containers/ToRoom'
import CallFrame from './containers/CallFrame'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ToRoom" element={<ToRoom />} />
        <Route path="/CallFrame" element={<CallFrame />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
