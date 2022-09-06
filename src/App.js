import { Link } from "react-router-dom";
import AxiosFunction from "./day1_axios/functional/AxiosFunction";
import AxiosClass from "./day1_axios/class/AxiosClass";
import { Route, Routes } from "react-router-dom";
import AxiosUser from "./day1_axios/functional/AxiosUser";
import Home from "./day1_axios/Home";
import NewUser from "./day1_axios/functional/NewUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />{" "}
        <Route path="/axiosclass" element={<AxiosClass />} />
        <Route path="/axiosfunction" element={<AxiosFunction />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/post/:id" element={<AxiosUser />} />
      </Routes>
    </>
  );
}

export default App;
