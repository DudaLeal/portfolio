import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiGit, SiGooglecloud } from "react-icons/si";
import profileImg from "./profile.jpeg";
import partyMatch from "./pm.svg";
import cv from "./Eduarda_CV.pdf";
import docPartyMatch from "./TCC_Eduarda_Carvalho.pdf";

export const personalData = {
  name: "Eduarda Carvalho",
  role: "Software Engineer",
  introduction:
    "I am a Software Engineer with over 3 years of professional experience, specializing in back-end development.",
  cvLink: cv,
  socialLinks: {
    linkedin: "https://linkedin.com/in/eduarda-leal-carvalho",
    github: "https://github.com/DudaLeal",
  },
  heroImage: profileImg,
  aboutMeShort:
    "Software Engineer with over 3 years of professional experience, recently graduated with a Bachelor's Degree in Computer Science from UFRJ. My core expertise is in back-end development, specializing in building scalable applications using Node.js and AWS Cloud. In my most recent role at Accenture, I developed robust applications, including chatbots, while also gaining full-stack experience with React.js. I am passionate about end-to-end solutions and currently looking for new challenges.",
  location: "Lisbon",
};

export const techStack = [
  { icon: <FaNodeJs style={{ color: "#339933" }} />, name: "Node.js" },
  { icon: <FaAws style={{ color: "#FF9900" }} />, name: "AWS" },
  { icon: <FaReact style={{ color: "#61DAFB" }} />, name: "React" },
  { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "JS" },
  { icon: <SiMongodb style={{ color: "#47A248" }} />, name: "MongoDB" },
  { icon: <SiPostgresql style={{ color: "#336791" }} />, name: "SQL/Postgres" },
  { icon: <SiGit style={{ color: "#F05032" }} />, name: "Git" },
  { icon: <FaDocker style={{ color: "#2496ED" }} />, name: "Docker" },
  { icon: <FaHtml5 style={{ color: "#E34F26" }} />, name: "HTML" },
  { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, name: "CSS" },
  { icon: <SiGooglecloud style={{ color: "#4285F4" }} />, name: "GCloud" },
  { icon: <FaFigma style={{ color: "#F24E1E" }} />, name: "Figma" },
];

export const aboutPageData = {
  capabilitiesDescription:
    "I am always looking to add more skills. My solid foundation in back-end architecture allows me to approach front-end development with a deep understanding of performance and system integration.",
  capabilitiesList: [
    "NODE.JS",
    "REACT.JS",
    "AWS CLOUD",
    "MONGODB",
    "SQL SERVER",
    "MYSQL",
    "JAVASCRIPT",
    "PYTHON",
    "GIT",
    "SCRUM",
    "IBM WATSON",
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Party Match",
    desc: "Mobile marketplace connecting event organizers with suppliers, featuring integrated management and budget tools.",
    stack: "React Native, Java, Postgres",
    year: 2025,
    role: "Full-Stack Developer",
    image: partyMatch,
    github: "https://github.com/DudaLeal/party-match-front",
    githubBack: "https://github.com/DudaLeal/party-match-back",
    // preview: "https://meusite.com/demo",
    longDesc: (
      <>
        <p>
          Party Match is a mobile application developed as a Bachelor's Thesis
          in Computer Science at UFRJ. The project was conceived to address the
          fragmentation and insecurity within the social event organization
          market.
        </p>

        <br />

        <h3>The Challenge</h3>
        <p>
          Event organizers struggle with the lack of a centralized platform to
          find reliable services, while small vendors face significant
          difficulties with visibility and management.
        </p>

        <br />

        <h3>The Solution</h3>
        <p>A comprehensive bilateral marketplace offering:</p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>For Clients:</strong> Intelligent supplier search, quote
            requests, and a management dashboard featuring Guest Lists,
            Financial Control, and a "Food & Drink" Calculator.
          </li>
          <li>
            <strong>For Vendors:</strong> Digital showcase, ad management,
            metrics dashboard, and a reputation system.
          </li>
        </ul>

        <br />

        <h3>Engineering & Architecture</h3>
        <p>
          The system was built following a robust and scalable Client-Server
          architecture:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Mobile:</strong> Developed in React Native (Expo) to ensure
            cross-platform compatibility.
          </li>
          <li>
            <strong>Backend:</strong> Robust RESTful API built in Java with
            Spring Boot.
          </li>
          <li>
            <strong>Data:</strong> Relational PostgreSQL database hosted on
            Google Cloud SQL.
          </li>
          <li>
            <strong>Infrastructure:</strong> Deployment executed on Google Cloud
            Platform (GCP) using Cloud Run (Docker) and Cloud Storage for media
            assets.
          </li>
        </ul>

        <br />

        <h3>Results</h3>
        <p>
          Development followed the Scrum agile methodology. The final product
          was validated with real users using the TAM (Technology Acceptance
          Model), achieving over 85% approval ratings for ease of use and
          intention to adopt.
        </p>
      </>
    ),
    figma:
      "https://www.figma.com/design/nD9YGmYico7UoF4mAd0SU9/Party-Match?node-id=0-1&t=F6T7kBWastYNjFH1-1",
    documentation: docPartyMatch,
  },
];

export const experienceData = [
  {
    date: "Feb 2022 — Oct 2025",
    title: "Software Engineer",
    company: "Accenture Brasil",
    desc: "During my tenure as a Software Engineer at Accenture, I specialized in building high-performance, scalable web solutions, with a strong core focus on backend development using Node.js and AWS Cloud architecture. My work encompassed the full software lifecycle, from designing serverless microservices using AWS Lambda and API Gateway to developing responsive front-end interfaces with React.js. I played a key role in engineering a high-traffic conversational AI (WhatsApp chatbot), integrating IBM Watson with a robust Node.js and MongoDB infrastructure to ensure high availability and seamless user flow. Beyond technical delivery, I was committed to team growth, actively mentoring junior developers and driving technical alignment within Agile/Scrum environments to maintain high code quality standards.",
  },
];

export const educationData = [
  {
    date: "Aug 2022 — July 2025",
    title: "Bachelor's, Computer Science",
    institution: "Federal University of Rio de Janeiro (UFRJ)",
    desc: (
      <>
        <p>
          Bachelor of Science in Computer Science at Federal University of Rio
          de Janeiro (UFRJ). The program provided a comprehensive foundation in
          software engineering, covering advanced technical subjects such as{" "}
          <strong>Machine Learning</strong>,{" "}
          <strong>Information Security</strong>, and{" "}
          <strong>Concurrent Programming</strong>, alongside essential core
          concepts like
          <strong> Data Structures</strong> and{" "}
          <strong>Algorithm Complexity</strong>.
        </p>

        <br />

        <h3>Academic Extension & Research</h3>
        <p>
          Beyond the classroom, I actively contributed to university extension
          projects, bridging the gap between technology and the community:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Caronaê (Smart Mobility):</strong> Acted as a developer for
            the institutional ride-sharing app designed for UFRJ students and
            staff, contributing to a sustainable mobility solution within the
            campus.
          </li>
          <li>
            <strong>Museu da Computação:</strong> Authored technical articles
            and historical documentation (e.g., history of processors and
            computing hardware) for the museum's digital portal, translating
            complex history into accessible content.
          </li>
          <li>
            <strong>Lab Escola 3D:</strong> Served as the Web Designer utilizing
            WordPress and Elementor to develop the project's website, dedicated
            to showcasing the lab's initiatives, updates, and activities.
          </li>
        </ul>

        <br />

        <h3>Capstone Project: Party Match</h3>
        <p>
          For my Bachelor's Thesis, I developed <strong>Party Match</strong>, a
          mobile marketplace for event organization. The project involved
          full-cycle development using React Native and Spring Boot, validating
          skills in Product Management and Software Architecture.
        </p>
      </>
    ),
  },
  {
    date: "Mar 2018 — Oct 2019",
    title: "Technical, Software Development",
    institution: "Fundação Bradesco",
    desc: (
      <>
        <p>
          A hands-on technical program focused on the fundamentals of Software
          Development, providing a solid base in logic,{" "}
          <strong>Object-Oriented Programming (OOP)</strong>, and desktop
          application development.
        </p>

        <br />

        <h3>Core Competencies</h3>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Languages:</strong> C# and Java.
          </li>
          <li>
            <strong>Database:</strong> Relational Database design and management
            using <strong>SQL Server</strong>.
          </li>
        </ul>

        <br />

        <h3>Key Projects: Retail Inventory System</h3>
        <p>
          As a practical assessment at the end of each programming module, I
          developed a<strong> Desktop Inventory Control System</strong> connected
          to a SQL Server database. The same project scope was executed twice to
          consolidate concepts in different environments:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>C# Module:</strong> Developed a desktop application
            integrating the interface directly with the SQL Server database.
          </li>
          <li>
            <strong>Java Module:</strong> Re-implemented the system using Java,
            focusing on database connectivity (JDBC) and OOP principles.
          </li>
        </ul>
      </>
    ),
  },
];
