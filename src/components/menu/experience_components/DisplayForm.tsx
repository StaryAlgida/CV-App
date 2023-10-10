import { Experience, Person } from "../../../interface/Person";
import { v1 as uuidv1 } from "uuid";
import _ from "underscore";
import { useState } from "react";

export default function DisplayForm({
  expData,
  person,
  setPerson,
  setExpState,
}: {
  expData: Experience;
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
  setExpState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [expInfo, setExpInfo] = useState<Experience>(expData);

  const cencleListner = () => {
    setExpState(true);
  };

  const saveListner = () => {
    const newPerson = { ...person };

    if (expInfo.id === "") {
      newPerson.experience.push({ ...expInfo, id: uuidv1() });
    } else {
      const foundIndex = newPerson.experience.findIndex((element) => {
        return element.id === expInfo.id;
      });
      if (!_.isEqual(newPerson.experience[foundIndex], expInfo))
        newPerson.experience[foundIndex] = { ...expInfo };
    }

    setPerson({ ...newPerson });
    setExpState(true);
    console.log("save exp", newPerson.experience);
  };

  const deletEdu = () => {
    if (expInfo.id !== "") {
      const newPerson = { ...person };
      const index = newPerson.experience.findIndex((element) => {
        return element.id === expInfo.id;
      });
      console.log(index);
      if (index >= 0) {
        newPerson.experience.splice(index, 1);
        setPerson({ ...newPerson });
        setExpState(true);
      }
    }
  };

  return (
    <form onSubmit={saveListner} className="edu-form">
      <div className="input-group">
        <label htmlFor="school">Company Name</label>
        <input
          type="text"
          value={expInfo.companyName}
          onChange={(e) =>
            setExpInfo({ ...expInfo, companyName: e.target.value })
          }
          name="school"
          id="school"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">Position</label>
        <input
          type="text"
          value={expInfo.position}
          onChange={(e) => setExpInfo({ ...expInfo, position: e.target.value })}
          name="degree"
          id="degree"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="start-date">Start-date</label>
        <input
          type="text"
          value={expInfo.startDate}
          onChange={(e) =>
            setExpInfo({ ...expInfo, startDate: e.target.value })
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
          value={expInfo.endDate}
          onChange={(e) => setExpInfo({ ...expInfo, endDate: e.target.value })}
          name="end-date"
          id="end-date"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={expInfo.location}
          onChange={(e) => setExpInfo({ ...expInfo, location: e.target.value })}
          name="location"
          id="location"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Description</label>
        <textarea
          value={expInfo.description}
          onChange={(e) =>
            setExpInfo({ ...expInfo, description: e.target.value })
          }
          name="location"
          id="location"
          required
        ></textarea>
      </div>
      <div className="buttons">
        <button className="delete" onClick={deletEdu}>
          Delete
        </button>
        <div>
          <button className="cencle" onClick={cencleListner}>
            Cencle
          </button>
          <input className="submit" type="submit" value="Save" />
        </div>
      </div>
    </form>
  );
}
