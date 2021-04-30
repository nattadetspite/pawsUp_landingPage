/**
 * This code is license for TedxCharoenkrung Volunteers
 *
 * online web hosting: https://nattadetspite.github.io/pawsUp_landingPage
 *
 * @author: Nattadet Chinthanathatset <ntd.ctnts@gmail.com>, 2021
 */

import "./App.css";
import Content from "./components/content";
import Hero from "./components/hero";
import Nav from "./components/nav";

/**
 * 
structures
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
 */

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
