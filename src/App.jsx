import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { Navbar, Hero, About, Starfield } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <main className="max-w-7xl mx-auto">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
        <Navbar />
        <div ref={wrapperRef}>
          <div id="hero">
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" >
            <About />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
