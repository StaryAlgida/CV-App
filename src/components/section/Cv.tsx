import Person from "../../interface/Person";

export default function Cv({ person }: { person: Person }) {
  return (
    <div className="Cv">
      <div className="header">
        <h1>{person.name}</h1>
        <div className="more-info">
          <span className="cv-info">
            {person.email ? `Email: ${person.email}` : ""}
          </span>
          <span className="cv-info">
            {person.phone ? `Tel: ${person.phone}` : ""}
          </span>
          <span className="cv-info">
            {person.address ? `Address: ${person.address}` : ""}
          </span>
        </div>
      </div>
      <div className="education"></div>
      <div className="experience"></div>
    </div>
  );
}
