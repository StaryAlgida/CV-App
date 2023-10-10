import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/menu/Main";
import Cv from "./components/section/Cv";
import { Person } from "./interface/Person";
import data from "./components/data";

function App() {
  const [person, setPerson] = useState<Person>({ ...data });

  return (
    <>
      <Header />
      <div className="content">
        <Main person={person} setPerson={setPerson} />
        <Cv person={person} />
      </div>
      <Footer />
    </>
  );
}

export default App;
