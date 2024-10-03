import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { Navbar, Hero, About, Starfield, Portfolio, Articles, Contact } from "./components";

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
          <div id="home">
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" >
            <About />
          </div>
          <div id="work" >
            <Portfolio />
          </div>
          <div id="articles" >
            <Articles />
          </div>
          <div id="contact" >
            <Contact />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
