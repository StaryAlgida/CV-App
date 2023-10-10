import { Person } from "../interface/Person";
import { v1 as uuidv1 } from "uuid";

const data: Person = {
  name: "John Doe",
  email: "john@email.com",
  phone: "+33 333 333 111",
  address: "Poland",
  education: [
    {
      id: uuidv1(),
      school: "Kielce University of Technology",
      degree: "Diploma",
      startDate: "10.2020",
      endDate: "01.2024",
      location: "Kielce Poland",
    },
  ],
  experience: [
    {
      id: uuidv1(),
      companyName: "Funny company",
      position: "Jr. Front-end developer",
      startDate: "10.2022",
      endDate: "06.2023",
      location: "Warsaw Poland",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sunt a! Nisi deleniti minus ullam, magnam explicabo modi iste aliquid illum alias ipsam rerum, delectus nam, commodi distinctio omnis vitae!",
    },
  ],
};
export default data;
