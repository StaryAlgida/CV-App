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

function Experience({ person }: { person: Person }) {
  return (
    <div className="education">
      <h2 className="edu-title">Experience</h2>
      <div className="education-container">
        {person.experience.map((exp) => {
          return (
            <div className="education-item" key={exp.id}>
              <div className="time-location">
                <span className="time black-color">
                  {exp.startDate} - {exp.endDate}
                </span>
                <span className="location black-color">{exp.location}</span>
              </div>
              <div className="school-degree">
                <span className="school black-color">
                  <b>{exp.companyName}</b>
                </span>
                <span className="degree black-color">{exp.position}</span>
                <span className="description black-color">
                  {exp.description}
                </span>
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
      <Experience person={person} />
    </div>
  );
}
