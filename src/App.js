import "./App.css";
import CustomerReview from "./component/CustomerReview";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import NewsLetter from "./component/NewsLetter";
import Services from "./component/Services";
import Specialist from "./component/Specialist";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Specialist />
      <CustomerReview />
      <NewsLetter />
    </div>
  );
}

export default App;
