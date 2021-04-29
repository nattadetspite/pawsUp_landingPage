import "./App.css";
import Content from "./components/content";
import Hero from "./components/hero";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      {/* structures
  nav
    - icon
    - nav button wrapper
  hero
    - hero-text
    - hero-description
    - hero-button
  content
    - title
    - row-flex
    - action button
  */}
      <Nav />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
