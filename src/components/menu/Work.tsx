import Person from "../../interface/Person";

export default function Work({
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
