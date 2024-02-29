import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderComponent = (view) => {
    switch (view) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "events":
        return <Events />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-900">
      <Navbar />
<Home />
<About />
     <Events />
     <Contact />

      <Footer />
    </div>
  );
};

export default App;
