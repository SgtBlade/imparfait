import Authentication from "./pages/Authentication/Authentication.js";
import { useObserver } from "mobx-react-lite";
import './App.css';

function App() {

  return useObserver (() => (
    <>
    <Authentication/>
    </>
  ));
}

export default App;
