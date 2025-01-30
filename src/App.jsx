import Header from "./components/header";
import InfoCard from "./components/infoCard";
import Navbar from "./components/navbar";
import PopularTravel from "./components/popularTravel";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <InfoCard />
      <PopularTravel />
    </>
  );
}

export default App;
