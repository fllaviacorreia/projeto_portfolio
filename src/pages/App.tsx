import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Home from "@/components/content/home";
import About from "@/components/content/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />  
      <Home />
      <About />
      <Footer />

    </div>
  );
}

export default App;
