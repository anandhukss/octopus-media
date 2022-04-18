import "./App.css";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Welcome from "./Welcome/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;
