import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SectionInfo from "./components/sectionInfo/sectionInfo";
import SectionStayProductive from "./components/sectionStayProductive/sectionStayProductive";
import SectionComments from "./components/sectionComments/sectionComments";
import SectionEarlyAccess from "./components/sectionEarlyAccess/sectionEarlyAccess";
import Footer from "./components/footer/footer";

import './App.css'

function App() {
  return (
    <main className="container">
      <div className="bg-hero">
        <Header />

        <Hero />
      </div>

      <div className="bg-infos">
        <SectionInfo />

        <SectionStayProductive />

        <SectionComments />

        <SectionEarlyAccess />
      </div>

      <Footer />
    </main>
  );
}

export default App;
