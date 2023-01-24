import Navbar from "./components/navbar/Navbar";
import {
  Header,
  Features,
  Download,
  Faq,
  Cta,
  Footer,
} from "./containers/index";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <Features />
        <Download />
        <Faq />
      </div>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
