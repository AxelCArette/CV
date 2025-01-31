export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface CV {
  id: number;
  name: string;
  skills: string[];
  experience: Experience[];
  education: string;
}

export const cvData: CV[] = [
  {
    id: 1,
    name: "Développeur Full Stack",
    skills: ["React", "NestJS", "MongoDB", "TailwindCSS"],
    experience: [
      {
        company: "Startup X",
        role: "Lead Developer",
        duration: "2022 - 2024"
      },
      {
        company: "Agence Web Y",
        role: "Développeur Front-end",
        duration: "2020 - 2022"
      }
    ],
    education: "Master en Informatique - Université Z",
  },
  {
    id: 2,
    name: "Ingénieur Logiciel",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
    experience: [
      {
        company: "Entreprise A",
        role: "Ingénieur Backend",
        duration: "2021 - 2024"
      }
    ],
    education: "Diplôme d'Ingénieur - École B",
  },
  {
    id: 3,
    name: "Architecte Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    experience: [
      {
        company: "CloudCorp",
        role: "Cloud Architect",
        duration: "2019 - 2024"
      }
    ],
    education: "Certifications AWS & Kubernetes",
  },
  {
    id: 4,
    name: "Développeur Mobile",
    skills: ["Flutter", "Dart", "Firebase", "React Native"],
    experience: [
      {
        company: "AppDev",
        role: "Mobile Developer",
        duration: "2020 - 2023"
      }
    ],
    education: "Licence en Informatique - Université Y",
  },
  {
    id: 5,
    name: "Analyste Cybersécurité",
    skills: ["SIEM", "Pentesting", "Python", "Sécurité Réseau"],
    experience: [
      {
        company: "CyberSecure",
        role: "Security Analyst",
        duration: "2018 - 2024"
      }
    ],
    education: "Master en Cybersécurité - École C",
  },
  {
    id: 6,
    name: "Data Scientist",
    skills: ["Python", "TensorFlow", "Machine Learning", "Big Data"],
    experience: [
      {
        company: "AI Solutions",
        role: "Data Scientist",
        duration: "2019 - 2024"
      }
    ],
    education: "Doctorat en Intelligence Artificielle - Université X",
  },
  {
    id: 7,
    name: "DevOps Engineer",
    skills: ["CI/CD", "Jenkins", "Kubernetes", "Ansible"],
    experience: [
      {
        company: "CloudOps",
        role: "DevOps Engineer",
        duration: "2020 - 2024"
      }
    ],
    education: "Master en Systèmes et Réseaux - École D",
  },
  {
    id: 8,
    name: "UX/UI Designer",
    skills: ["Figma", "Adobe XD", "Design Thinking", "User Research"],
    experience: [
      {
        company: "Creative Studio",
        role: "UI/UX Designer",
        duration: "2017 - 2024"
      }
    ],
    education: "Licence en Design Numérique - Université V",
  },
  {
    id: 9,
    name: "Chef de Projet IT",
    skills: ["Gestion de projet", "Agile", "Scrum", "JIRA"],
    experience: [
      {
        company: "TechCorp",
        role: "Chef de Projet IT",
        duration: "2016 - 2024"
      }
    ],
    education: "MBA en Management des SI - Université W",
  },
  {
    id: 10,
    name: "Spécialiste en Blockchain",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"],
    experience: [
      {
        company: "CryptoSolutions",
        role: "Blockchain Developer",
        duration: "2021 - 2024"
      }
    ],
    education: "Certification Blockchain & Crypto - École E",
  }
];
