import DownloadSection from "./Components/DownloadSection";
import FaskQuestion from "./Components/FaskQuestion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import KidsSection from "./Components/KidsSection";
import TvSection from "./Components/TvSection";
function App() {
  return (
    <div>
      <Header />
      <TvSection/>
      <DownloadSection/>
      <KidsSection/>
      <FaskQuestion/>
      <Footer/>
    </div>
  );
}

export default App;
