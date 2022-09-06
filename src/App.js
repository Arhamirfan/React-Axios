import AxiosFunction from "./Axios/Screens/Day1_Axios/functional/AxiosFunction";
import AxiosClass from "./Axios/Screens/Day1_Axios/class/AxiosClass";
import { Route, Routes } from "react-router-dom";
import AxiosUser from "./Axios/Screens/Day1_Axios/functional/AxiosUser";
import Home from "./Axios/Screens/Home";
import NewUser from "./Axios/Screens/Day1_Axios/functional/NewUser";
import ReduxApp from "./reactRedux/ReduxApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />{" "}
        <Route path="/axiosclass" element={<AxiosClass />} />
        <Route path="/axiosfunction" element={<AxiosFunction />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/post/:id" element={<AxiosUser />} />
        <Route path="/redux" element={<ReduxApp />} />
      </Routes>
    </>
  );
}

export default App;
