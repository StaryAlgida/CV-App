import { useState } from "react";
import { Person, Education } from "../../interface/Person";
import { v1 as uuidv1 } from "uuid";
import _ from "underscore";

function DisplayEducation({
  person,
  eduState,
  setEduSate,
  setEduData,
}: {
  person: Person;
  eduState: boolean;
  setEduSate: React.Dispatch<React.SetStateAction<boolean>>;
  setEduData: React.Dispatch<React.SetStateAction<Education>>;
}) {
  const changeToForm = (edu: Education) => {
    setEduSate(false);
    setEduData(edu);
  };

  const eduAdd = () => {
    setEduSate(eduState ? false : true);
    setEduData({
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  return (
    <>
      {person.education.map((edu) => {
        return (
          <div
            className="education-element"
            onClick={() => changeToForm(edu)}
            key={edu.id}
          >
            <h3>{edu.school}</h3>
          </div>
        );
      })}
      <button onClick={eduAdd}>+ Education</button>
    </>
  );
}

function EducationForm({
  eduData,
  person,
  setPerson,
  setEduSate,
}: {
  eduData: Education;
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
  setEduSate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [eduInfo, setEduInfo] = useState<Education>(eduData);

  const cencleListner = () => {
    setEduSate(true);
  };

  const saveListner = () => {
    const newPerson = { ...person };

    if (eduInfo.id === "") {
      newPerson.education.push({ ...eduInfo, id: uuidv1() });
    } else {
      const foundIndex = newPerson.education.findIndex((element) => {
        return element.id === eduInfo.id;
      });
      if (!_.isEqual(newPerson.education[foundIndex], eduInfo))
        newPerson.education[foundIndex] = { ...eduInfo };
    }

    setPerson({ ...newPerson });
    setEduSate(true);
    console.log("save", newPerson.education);
  };

  const deletEdu = () => {
    if (eduInfo.id !== "") {
      const newPerson = { ...person };
      const index = newPerson.education.findIndex((element) => {
        return element.id === eduInfo.id;
      });
      console.log(index);
      if (index >= 0) {
        newPerson.education.splice(index, 1);
        setPerson({ ...newPerson });
        setEduSate(true);
      }
    }
  };

  return (
    <form onSubmit={saveListner} className="edu-form">
      <div className="input-group">
        <label htmlFor="school">School</label>
        <input
          type="text"
          value={eduInfo.school}
          onChange={(e) => setEduInfo({ ...eduInfo, school: e.target.value })}
          name="school"
          id="school"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          value={eduInfo.degree}
          onChange={(e) => setEduInfo({ ...eduInfo, degree: e.target.value })}
          name="degree"
          id="degree"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="start-date">Start-date</label>
        <input
          type="text"
          value={eduInfo.startDate}
          onChange={(e) =>
            setEduInfo({ ...eduInfo, startDate: e.target.value })
          }
          name="start-date"
          id="start-date"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="end-date">End-date</label>
        <input
          type="text"
          value={eduInfo.endDate}
          onChange={(e) => setEduInfo({ ...eduInfo, endDate: e.target.value })}
          name="end-date"
          id="end-date"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={eduInfo.location}
          onChange={(e) => setEduInfo({ ...eduInfo, location: e.target.value })}
          name="location"
          id="location"
          required
        />
      </div>
      <div className="buttons">
        <button onClick={deletEdu}>Delete</button>
        <button onClick={cencleListner}>Cencle</button>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}

export default function Educationfield({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  const [eduState, setEduSate] = useState(true);
  const [eduData, setEduData] = useState<Education>(person.education[0]);
  return (
    <div className="education-form">
      <h2 className="menu-section-title">Education</h2>
      {eduState ? (
        <DisplayEducation
          person={person}
          eduState={eduState}
          setEduSate={setEduSate}
          setEduData={setEduData}
        />
      ) : (
        <EducationForm
          eduData={eduData}
          person={person}
          setPerson={setPerson}
          setEduSate={setEduSate}
        />
      )}
    </div>
  );
}
