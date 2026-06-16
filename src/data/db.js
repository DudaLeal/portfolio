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
import partyMatch from "./party-match.png";
import cv from "./Eduarda_Cardoso_EN_CV.pdf";
import docPartyMatch from "./TCC_Eduarda_Carvalho.pdf";
import workoutAppImg from "./workout.png";
import weddingImg from "./weddingImg.jpg";
import weddingVideo from "./weddingVideo.mp4";
import chatbotImg from "./chatbot.jpg";

export const personalData = {
  name: "Eduarda Cardoso",
  role: "Software Engineer",
  introduction:
    "I am a Software Engineer with over 3 years of professional experience, specializing in back-end development.",
  cvLink: cv,
  socialLinks: {
    linkedin: "https://linkedin.com/in/eduarda-lcardoso",
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
    "REACT NATIVE",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "JAVA",
    "AWS",
    "GCP",
    "DOCKER",
    "MONGODB",
    "POSTGRESQL",
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
  {
    id: 2,
    title: "Workout App",
    desc: "Mobile application for managing bodybuilding routines, featuring automated workout rotation, progress tracking, and local data persistence.",
    stack: "React Native, Expo, SQLite",
    year: 2026,
    role: "Mobile Developer",
    image: workoutAppImg,
    github: "https://github.com/DudaLeal/WorkoutApp/",
    longDesc: (
      <>
        <p>
          Workout App is a mobile application designed to manage bodybuilding
          routines and track user progress. The project was built with a strong
          focus on offline-first capabilities and an intuitive interface to help
          users know exactly what to train each day.
        </p>

        <br />

        <h3>The Challenge</h3>
        <p>
          Gym-goers frequently struggle to keep track of their training
          divisions, remember the weights used in previous sessions, and time
          their rests efficiently. Relying on physical notes or generic note
          apps often disrupts the workout flow.
        </p>

        <br />

        <h3>The Solution</h3>
        <p>A comprehensive and automated workout tracker offering:</p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Rich Exercise Library:</strong> Access to thousands of
            exercises with visual demonstrations (GIFs/Images), targeted
            muscles, equipment, and step-by-step instructions.
          </li>
          <li>
            <strong>Automated Rotation:</strong> Intelligent logic that
            calculates the next workout of the day based on the user's
            historical sessions and current training plan.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Detailed weight history for each
            exercise and built-in timers for execution and rest periods.
          </li>
          <li>
            <strong>Plan Management:</strong> Full CRUD capabilities for
            creating training macrocycles and their specific subdivisions (e.g.,
            Workout A, B, C).
          </li>
        </ul>

        <br />

        <h3>Engineering & Architecture</h3>
        <p>
          The system was built as a modern, offline-first mobile application:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Mobile Framework:</strong> Developed using React Native and
            the Expo ecosystem, utilizing Expo Router for modern file-based
            navigation.
          </li>
          <li>
            <strong>Offline-First Data:</strong> Powered by a local SQLite
            database. The app performs a massive initial data seed from a local
            JSON file, ensuring all subsequent reads and writes happen directly
            on the device with near-zero latency.
          </li>
          <li>
            <strong>Dynamic Internationalization:</strong> Implemented{" "}
            <code>react-i18next</code>
            in a highly optimized way. Instead of translating on the frontend,
            the language preference dictates dynamic SQL queries (e.g., fetching{" "}
            <code>name_en</code>
            or <code>name_pt</code>), keeping the UI lightweight.
          </li>
          <li>
            <strong>Data Visualization:</strong> Integration of{" "}
            <code>react-native-gifted-charts</code>
            to render complex historical weight data into user-friendly
            interactive graphs.
          </li>
        </ul>

        <br />

        <h3>Results</h3>
        <p>
          The final product is a highly responsive mobile app that perfectly
          bridges the gap between complex workout planning and simple daily
          execution. It empowers users to maintain consistency in their
          macrocycles while keeping their training data secure and instantly
          accessible offline.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Wedding System",
    desc: "Serverless full-stack application for managing weddings, featuring a unified RSVP and gift registry with zero operational costs.",
    stack: "Next.js, React, MongoDB Atlas",
    year: 2026,
    role: "Full-Stack Developer",
    image: weddingImg,
    video: weddingVideo,
    github: "https://github.com/DudaLeal/wedding-system",
    wip: true,
    longDesc: (
      <>
        <p>
          The Wedding System is a serverless full-stack application focused on
          end-to-end wedding management. Architected under a strict Zero Cost
          infrastructure constraint, it unifies RSVP and gift registries without
          the high fees and maintenance costs of traditional market platforms.
        </p>

        <br />

        <h3>The Challenge</h3>
        <p>
          Couples face tool fragmentation when organizing an event (separate
          platforms for guest lists and gifts) and high fees from standard
          payment gateways. Technologically, the challenge lies in handling gift
          reservation concurrency and complex guest hierarchies without
          resorting to paid infrastructure, background workers, or CRON jobs.
        </p>

        <br />

        <h3>The Solution</h3>
        <p>A unified, zero-operational-cost platform delivering:</p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>For guests:</strong> A seamless experience featuring a State
            Machine-restricted RSVP (immutable on the client after submission),
            support for companions linked to the main invitation, and a gift
            registry with frictionless checkout (PIX/Credit Card).
          </li>
          <li>
            <strong>For the couple:</strong> A segregated and secure Admin
            dashboard for guest management, real-time gift tracking, and
            best-effort financial reconciliation via webhooks.
          </li>
        </ul>

        <br />

        <h3>Engineering & Architecture</h3>
        <p>
          The system was built as a modern, offline-first mobile application:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Core:</strong> Next.js (App Router) orchestrating the React
            Front-end and Back-end via Server Actions and API Routes.
          </li>
          <li>
            <strong>Data:</strong> MongoDB Atlas (Mongoose). The database
            centralizes business rules, such as the gift concurrency lock system
            resolved on-the-fly via timestamp queries, eliminating costs
            associated with background routines.
          </li>
          <li>
            <strong>Integrations</strong> InfinitePay for payment processing and
            webhook handling.
          </li>
          <li>
            <strong>Infrastructure:</strong> Automated deployment and serverless
            hosting on Vercel.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "WhatsApp Chatbot",
    desc: "An automated customer support chatbot integrated with WhatsApp, leveraging RAG to deliver precise, hallucination-free answers from a vector database.",
    stack:
      "Node.js, TypeScript, Google Gemini API, Supabase, WhatsApp Cloud API",
    year: 2026,
    role: "Software Engineer",
    image: chatbotImg,
    github: "https://github.com/DudaLeal/chatbot-faq/",
    wip: true,
    longDesc: (
      <>
        <p>
          The WhatsApp Chatbot is an automated messaging system
          designed to optimize customer communication. Operating 24/7, it uses
          advanced Artificial Intelligence to provide instant, precise answers
          to frequently asked questions (FAQ).
        </p>

        <br />

        <h3>The Challenge</h3>
        <p>
          Support teams often face a high volume of repetitive inquiries, which
          can delay response times and increase operational costs. The
          challenge was to build an automated system that could accurately
          understand user intent while strictly preventing the AI from
          hallucinating or providing information outside the company's
          established knowledge base.
        </p>

        <br />

        <h3>The Solution</h3>
        <p>A scalable, serverless chatbot featuring:</p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>RAG (Retrieval-Augmented Generation):</strong> Semantic
            search capabilities that understand the context of user questions,
            ignoring slang and grammatical errors, to fetch correct
            answers.
          </li>
          <li>
            <strong>Strict Hallucination Mitigation:</strong> The LLM is rigidly
            configured to respond exclusively using the indexed corporate
            knowledge base.
          </li>
          <li>
            <strong>Human Handoff:</strong> Automated triggers that pause the
            chatbot and smoothly transfer the conversation to a human operator
            when the AI confidence is low or the user requests it.
          </li>
          <li>
            <strong>Continuous Learning Panel:</strong> An admin interface for
            curating failed queries and re-indexing the vector database without
            requiring code changes.
          </li>
        </ul>

        <br />

        <h3>Engineering & Architecture</h3>
        <p>
          The system was built with a modern, serverless cloud architecture
          focusing on low maintenance and high scalability:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Backend & Integrations:</strong> Developed in Node.js using
            TypeScript to robustly handle asynchronous webhook processing
            directly from the official WhatsApp Cloud API.
          </li>
          <li>
            <strong>AI Engine:</strong> Powered by the Google Gemini API,
            utilizing <code>gemini-embedding-001</code> for creating vector
            representations of knowledge and Gemini for highly cost-effective
            and intelligent language generation.
          </li>
          <li>
            <strong>Vector Database:</strong> Built on Supabase, leveraging the{" "}
            <code>pgvector</code> extension to centralize both traditional chat
            history logs and knowledge embeddings within the same PostgreSQL
            ecosystem.
          </li>
          <li>
            <strong>Admin Interface:</strong> Designed with Retool to provide a user-friendly curation and log management
            dashboard.
          </li>
        </ul>

        <br />

        <h3>Results</h3>
        <p>
          The result is a highly stable and intelligent messaging system that
          drastically reduces the human support workload. By maintaining an
          uncompromised standard of data privacy via environment variables and
          seamlessly integrating the human handoff protocol, the chatbot ensures
          users always receive accurate, reliable, and fluid customer service.
        </p>
      </>
    ),
  },
];

export const experienceData = [
  {
    date: "Feb 2024 — Oct 2025",
    title: "Software Engineer",
    company: "Accenture Brazil",
    desc: (
      <>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>Backend & Cloud Architecture:</strong> Engineered and
            maintained a high-traffic WhatsApp chatbot using Node.js, AWS, and
            MongoDB, effectively automating critical customer service
            operations.
          </li>
          <li>
            <strong>Generative AI Integration: </strong> Implemented GenAI
            capabilities into the conversational flow using AWS Bedrock agents,
            utilizing AWS Lambda for seamless serverless execution.
          </li>
          <li>
            <strong>Infrastructure Management: </strong> Managed cloud
            deployments using AWS Elastic Beanstalk and monitored application
            health, performance, and logs via AWS CloudWatch.
          </li>
          <li>
            <strong>Agile Delivery: </strong> Actively participated in all Scrum
            ceremonies consistently delivering new features and resolving
            complex bugs.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: "Feb 2022 — Jan 2024",
    title: "Software Engineer Intern",
    company: "Accenture Brazil",
    desc: (
      <>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <li>
            <strong>WhatsApp Bot Backend (May 2023 – Jan 2024): .</strong>{" "}
            Transitioned to the core backend team, contributing to the
            development of the Node.js/AWS chatbot, implementing logic features,
            and managing the MongoDB database in the cloud.
          </li>
          <li>
            <strong>Full-Stack Web Development (Feb 2022 – May 2023): </strong>{" "}
            Engineered a web platform building responsive interfaces and robust
            APIs using Node.js and React.js. Managed data with MongoDB and
            Redis, and utilized Jenkins for continuous integration and
            deployment pipelines.
          </li>
          <li>
            <strong>Agile Collaboration:</strong> Engaged in daily Scrum
            meetings and technical alignments, ensuring highquality code
            delivery within sprint deadlines.
          </li>
        </ul>
      </>
    ),
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
          developed a<strong> Desktop Inventory Control System</strong>{" "}
          connected to a SQL Server database. The same project scope was
          executed twice to consolidate concepts in different environments:
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
