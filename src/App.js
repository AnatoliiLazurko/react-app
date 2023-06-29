import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Films from "./components/Films/Films";
import ToDo from "./components/ToDo/ToDo";
import './index.css';
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import UserInfo from "./components/Users/UserInfo";
import UsersContext from "./contexts/UsersContext";
import { useEffect, useState } from "react";
import axios from "axios";
import ThemeProvider from "./providers/ThemeProvider";
import FavoriteFilmsProvider from "./providers/FavoriteFilmsProvider";
import Counters from "./components/Counters/Counters";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <UsersContext.Provider value={users}>
        <ThemeProvider>
          <FavoriteFilmsProvider>

            <Header />

            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="/films" element={<Films />} />
              <Route path="/counter" element={<Counter />} />

              <Route path="/users" element={<Users />}>
                <Route path="/users/:id" element={<UserInfo />} />
              </Route>

              <Route path="/counters" element={<Counters />} />

              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>

          </FavoriteFilmsProvider>
        </ThemeProvider>
      </UsersContext.Provider>
    </>
  );
}

export default App;
