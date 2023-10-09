import { Education, Person } from "../../../interface/Person";
import { v1 as uuidv1 } from "uuid";
import _ from "underscore";
import { useState } from "react";

export default function DisplayForm({
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
