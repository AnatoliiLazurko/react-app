import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Films from "./components/Films/Films";
import ToDo from "./components/ToDo/ToDo";
import './index.css';
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import UserInfo from "./components/Users/UserInfo";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/films" element={<Films />} />
        <Route path="/counter" element={<Counter />} />
        
        <Route path="/users" element={<Users />}>
          <Route path="/users/:id" element={<UserInfo />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
