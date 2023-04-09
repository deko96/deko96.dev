import { FC, useEffect, useRef, useState } from "react";
import { ComponentsData } from "./types";
import { Header } from "./components/Header/Header";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { Workshops } from "./components/Workshops/Workshops";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Languages } from "./components/Languages/Languages";
import { DownloadPDF } from "./components/DownloadPDF/DownloadPDF";

const JSON_DATA_PATH = "/data.json";

const App: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [componentsData, setComponentsData] = useState<ComponentsData>();

  useEffect(() => {
    fetch(JSON_DATA_PATH)
      .then((r) => r.json() as Promise<ComponentsData>)
      .then((data) => setComponentsData(data));
  }, []);

  return (
    <div className="container">
      {!componentsData ? (
        "Loading..."
      ) : (
        <div ref={rootRef}>
          <Header {...componentsData.header} />
          <div className="content">
            <div className="left">
              <WorkExperience {...componentsData.workExperience} />
              <Workshops {...componentsData.workshops} />
            </div>
            <div className="right">
              <Skills {...componentsData.skills} />
              <Projects {...componentsData.projects} />
              <Languages {...componentsData.languages} />
            </div>
          </div>
          <DownloadPDF contentRef={rootRef} />
        </div>
      )}
    </div>
  );
};

export default App;
