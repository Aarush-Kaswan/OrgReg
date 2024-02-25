import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import AddOrg from "./AddOrg";
import ViewOrg from "./ViewOrg";
import ModifyOrg from "./ModifyOrg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user === null && <Login setUser={setUser} />}
      {user !== null && (
        <div>
          <Header setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addorg" element={<AddOrg />}></Route>
            <Route
              path="/Vieworg/:organisationID"
              element={<ViewOrg />}
            ></Route>
            <Route
              path="/modifyorg/:organisationID"
              element={<ModifyOrg />}
            ></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
