import React, { useState } from "react"; // Importerer React og useState fra React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importerer Router, Routes og Route fra react-router-dom til navigation
import Navbar from "./components/Navbar"; // Importerer Navbar komponenten (navigationsbaren)
import Home from "./pages/Home"; // Importerer Home-komponenten (forsiden)
import Todos from "./pages/Todos"; // Importerer Todos-komponenten (todo-listen)
import Login from "./pages/Login"; // Importerer Login-komponenten (login-siden)
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"; // Importerer styled-components og ThemeProvider for dynamisk styling

// Definerer temaer til dynamisk styling
const lightTheme = {
  background: "#ffffff", // Baggrundsfarve for lyst tema
  color: "#000000", // Tekstfarve for lyst tema
};

const darkTheme = {
  background: "#333333", // Baggrundsfarve for mørkt tema
  color: "#ffffff", // Tekstfarve for mørkt tema
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #21a1f1;  // Change background on hover
}
`;

// Oprette global styles ved brug af createGlobalStyle
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Arial', sans-serif; /* Default font */
    background-color: ${({ theme }) => theme.background}; /* Dynamically set background color */
    color: ${({ theme }) => theme.color}; /* Dynamically set text color */
  }

  * {
    box-sizing: border-box;
  }
`;



// Definer container-styling baseret på tema
const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background}; // Dynamisk baggrundsfarve fra tema
  color: ${({ theme }) => theme.color}; // Dynamisk tekstfarve fra tema
  min-height: 100vh; // Minimum højde for hele viewporten
  display: flex; // Flexbox til justering
  flex-direction: column; // Vertikal layout
  align-items: center; // Centrerer indhold horisontalt
  padding: 1rem; // Indvendig margen
`;

function App() {
  const [todos, setTodos] = useState([]); // State til at holde styr på todos (to-dos)
  const [theme, setTheme] = useState("light"); // State til at holde styr på det aktuelle tema

  // Funktion til at tilføje et nyt todo til listen
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Opdaterer todos-listen med det nye todo
  };

  // Funktion til at skifte mellem lyst og mørkt tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Skifter mellem temaer
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* ThemeProvider giver det aktuelle tema til alle child-komponenter */}

      {/* Apply Global Styles */}
      <GlobalStyle />
      
      <AppContainer>
        {/* AppContainer er en styled.div, der tilpasser sig temaet */}
        
        <Router>
          {/* Router komponenten indkapsler alle komponenter for at aktivere routing i applikationen */}
          
          <Navbar /> {/* Vis navbaren, der indeholder navigationslinks */}
          
          <StyledButton onClick={toggleTheme}>
            Toggle Theme {/* Knappen skifter mellem lyst og mørkt tema */}
            </StyledButton>
          
          <Routes>
            {/* Definerer ruter for de forskellige sider */}
            
            <Route path="/" element={<Home />} /> {/* Route for Home siden (forsiden) */}
            <Route
              path="/todos"
              element={<Todos todos={todos} addTodo={addTodo} />} 
              // Sender todos og addTodo som props til Todos-komponenten
            />
            <Route path="/login" element={<Login />} /> {/* Route for Login siden */}
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; // Eksporterer App-komponenten som standard




