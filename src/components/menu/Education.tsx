import { useState } from "react";
import { Person, Education } from "../../interface/Person";

import DisplayItems from "./education_components/DisplayItems";
import DisplayForm from "./education_components/DisplayForm";

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
        <DisplayItems
          person={person}
          eduState={eduState}
          setEduSate={setEduSate}
          setEduData={setEduData}
        />
      ) : (
        <DisplayForm
          eduData={eduData}
          person={person}
          setPerson={setPerson}
          setEduSate={setEduSate}
        />
      )}
    </div>
  );
}
