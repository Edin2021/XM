import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Banner from "../components/sections/Banner";
import CryptoInfoCards from "../components/sections/CryptoInfoCards";
import AboutSection1 from "../components/sections/AboutSection1";
import AboutSection2 from "../components/sections/AboutSection2";
import FormSection from "../components/sections/FormSection";
import EventGallery from "../components/sections/EventGallery";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__inner--wrapper">
          <Banner />
          <div className="main__inner--container">
            <CryptoInfoCards />
            <AboutSection1 />
            <FormSection />
          </div>
        </div>
        <EventGallery />
        <div className="main__inner--container">
          <AboutSection2 />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
