import "./App.css";
import CustomerReview from "./component/CustomerReview";
import Footer from "./component/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
