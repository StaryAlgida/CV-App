import { Person } from "../../interface/Person";

function Education({ person }: { person: Person }) {
  return (
    <div className="education">
      <h2 className="edu-title">Education</h2>
      <div className="education-container">
        {person.education.map((edu) => {
          return (
            <div className="education-item" key={edu.id}>
              <div className="time-location">
                <span className="time black-color">
                  {edu.startDate} - {edu.endDate}
                </span>
                <span className="location black-color">{edu.location}</span>
              </div>
              <div className="school-degree">
                <span className="school black-color">
                  <b>{edu.school}</b>
                </span>
                <span className="degree black-color">{edu.degree}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
      <Education person={person} />
      <div className="experience"></div>
    </div>
  );
}
