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
    experience: [
      {
        id: uuidv1(),
        companyName: "Funny company",
        position: "Jr. Front-end developer",
        startDate: "10.2022",
        endDate: "06.2023",
        location: "Warsaw Poland",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sunt a! Nisi deleniti minus ullam, magnam explicabo modi iste aliquid illum alias ipsam rerum, delectus nam, commodi distinctio omnis vitae!",
      },
    ],
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
