import "./styles.css";
import TitleBar from "./components/TitleBar";
import Summary from "./components/Summary";
import WebDevelopment from "./components/WebDevelopment";
import Employment from "./components/Employment";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import AdditionalEducation from "./components/AdditionialEducation";
import Languages from "./components/Languages";

export default function App() {
  return (
    <div className="App">
      <a href="/" id="source-link">
        see this resume's source code
      </a>
      <hr></hr>
      <TitleBar />
      <hr></hr>
      <main>
        <section>
          <Summary />
          <WebDevelopment />
          <Employment />
          <Education />
        </section>
        <aside>
          <Skills />
          <Certifications />
          <AdditionalEducation />
          <Languages />
        </aside>
      </main>
    </div>
  );
}
