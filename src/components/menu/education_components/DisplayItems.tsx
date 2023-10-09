import { Education, Person } from "../../../interface/Person";

export default function DisplayItems({
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
