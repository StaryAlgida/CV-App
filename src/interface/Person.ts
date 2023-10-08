interface Experience {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface Person {
  name: string;
  email: string;
  phone: string;
  address: string;
  education: Education[];
  experience: Experience[];
}

export type { Person, Education, Experience };
