import "./App.css";
import Header from "./components/Header";
import {
  Features,
  Hero,
  Highlight,
  Pricing,
  Testimonials,
  FinalCTA,
} from "./components/Land";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Highlight />
      <Pricing />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

export default App;
