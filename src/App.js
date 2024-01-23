import "./App.css";
import CustomerReview from "./component/CustomerReview";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Services from "./component/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <CustomerReview />
    </div>
  );
}

export default App;
