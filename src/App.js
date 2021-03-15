import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import { FeatureProvider} from "./FeatureContext";


function App() {
  return (
      <FeatureProvider>
    <div className="App">
      <Home/>
    </div>
      </FeatureProvider>
  );
}

export default App;
