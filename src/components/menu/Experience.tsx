import { useState } from "react";
import { Experience, Person } from "../../interface/Person";
import DisplayForm from "./experience_components/DisplayForm";
import DisplayItems from "./experience_components/DisplayItems";

export default function ExperienceField({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  const [expState, setExpState] = useState(true);
  const [expData, setExpData] = useState<Experience>(person.experience[0]);

  return (
    <>
      <div className="experience-form">
        <h2 className="menu-section-title">Experience</h2>
        {expState ? (
          <DisplayItems
            person={person}
            expState={expState}
            setExpState={setExpState}
            setExpData={setExpData}
          />
        ) : (
          <DisplayForm
            expData={expData}
            person={person}
            setPerson={setPerson}
            setExpState={setExpState}
          />
        )}
      </div>
    </>
  );
}
