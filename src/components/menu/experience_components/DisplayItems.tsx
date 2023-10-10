import { Experience, Person } from "../../../interface/Person";

export default function DisplayItems({
  person,
  expState,
  setExpState,
  setExpData,
}: {
  person: Person;
  expState: boolean;
  setExpState: React.Dispatch<React.SetStateAction<boolean>>;
  setExpData: React.Dispatch<React.SetStateAction<Experience>>;
}) {
  const changeToForm = (exp: Experience) => {
    setExpState(false);
    setExpData(exp);
  };

  const expAdd = () => {
    setExpState(expState ? false : true);
    setExpData({
      id: "",
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <>
      {person.experience.map((exp) => {
        return (
          <div
            className="education-element"
            onClick={() => changeToForm(exp)}
            key={exp.id}
          >
            <h3>{exp.companyName}</h3>
          </div>
        );
      })}
      <button className="add-button" onClick={expAdd}>
        + Experience
      </button>
    </>
  );
}
