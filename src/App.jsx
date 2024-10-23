import "./App.css";
import RenderPage from "./components/RenderPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <RenderPage />
    </>
  );
}

export default App;
