import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export const contextCart = createContext(null);
function App() {
  const [cart, setcart] = useState([{ id: 1, qty: 1 }]);

  return (
    <div>
      <contextCart.Provider value={{ cart, setcart }}>
        {/* //pass value to components */}
        <Navbar />
        <div>hello world!</div>
      </contextCart.Provider>
    </div>
  );
}

export default App;
