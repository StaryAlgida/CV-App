import Person from "../../interface/Person";

function LoadClearButtons({
  setPerson,
}: {
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  const clear = () => {
    const person: Person = {
      name: "",
      email: "",
      phone: "",
      address: "",
      education: [],
      experience: [],
    };

    setPerson(person);
    console.log("clear");
  };
  return (
    <div className="clear-example">
      <button onClick={clear}>Clear Resume</button>
      <button>Load Example</button>
    </div>
  );
}

function PersonalInfo({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  console.log(person);

  return (
    <form className="personal-info">
      <h2 className="menu-section-title">Personal Inforamtions</h2>
      <div className="input-group">
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          name="fullName"
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          type="email"
          name="email"
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone number</label>
        <input
          value={person.phone}
          onChange={(e) => setPerson({ ...person, phone: e.target.value })}
          type="text"
          name="phone"
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          value={person.address}
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
          type="text"
          name="address"
          id=""
        />
      </div>
    </form>
  );
}

function Education({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  return (
    <form className="education">
      <h2 className="menu-section-title">Education</h2>
    </form>
  );
}

function Work({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  return (
    <form className="work">
      <h2 className="menu-section-title">Experience</h2>
    </form>
  );
}

export default function Main({
  person,
  setPerson,
}: {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}) {
  return (
    <div className="main-menu">
      <LoadClearButtons setPerson={setPerson} />
      <PersonalInfo person={person} setPerson={setPerson} />
      <Education person={person} setPerson={setPerson} />
      <Work person={person} setPerson={setPerson} />
    </div>
  );
}
