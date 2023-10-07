interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export default interface Person {
  name: string;
  email: string;
  phone: string;
  address: string;
  education: Education[];
  experience: Experience[];
}
