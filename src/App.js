import Address from "./Address/Address";
import "./App.css";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Welcome from "./Welcome/Welcome";

function App() { 
  return (
    <div>
      <Header />
      <Welcome />
      <Services />
      <Gallery />
      <Team />
      <Address />
    </div>
  );
}

export default App;
