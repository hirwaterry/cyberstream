import Navbar from "../components/Navbar";
import NoPage from "../components/NoPage";
import Footer from "../components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <NoPage />
        <Footer />
      </div>
    </>
  );
};

export default App;
