import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from "./shared/Theme";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
};

export default App;
