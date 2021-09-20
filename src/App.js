import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
