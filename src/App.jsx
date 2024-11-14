import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Starfield, Portfolio, Articles, Contact } from "./components";

const App = () => {
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
        <div>
          <div id="home">
            <Hero/>
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
