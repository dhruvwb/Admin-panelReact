import { Sidebar } from "./Topbar/sidebar/Sidebar";
import { Topbar } from "./Topbar/Topbar";
import "./app.css";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
