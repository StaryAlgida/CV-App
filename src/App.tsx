import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/menu/Main";
import Cv from "./components/section/Cv";
import { Person } from "./interface/Person";

function App() {
  const [person, setPerson] = useState<Person>({
    name: "John Doe",
    email: "john@email.com",
    phone: "+33 333 333 111",
    address: "Poland",
    education: [
      {
        id: uuidv1(),
        school: "Kielce University of Technology",
        degree: "Diploma",
        startDate: "10.2020",
        endDate: "01.2024",
        location: "Kielce Poland",
      },
    ],
    experience: [],
  });

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
