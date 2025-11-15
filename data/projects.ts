export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "zenspace",
    title: "Zenspace",
    description: "A web-based productivity platform combining task management, journaling and mindfulness.",
    longDescription: "Developed a web-based productivity platform integrating task management, journaling, and mindfulness workflows to improve focus and habit formation. Implemented modular backend services with Spring Boot and responsive UI with HTML/CSS/JS, improving system stability and user engagement.",
    technologies: ["Java", "Springboot", "HTML", "CSS", "JavaScript", "MYSQL"],
    achievements: [
      "Built for 200+ users to plan, track and reflect daily routines, improving productivity by 30%",
      "Achieved 25% faster API response time through optimized Spring Boot REST services and efficient state management",
      "Integrated structured routines + mindfulness modules, increasing daily session retention by 55%",
      "Secured platform operations with API validations and optimized database design, reducing data overhead by 20%"
    ],
    image: "/images/projects/Zenspace/zenspace.jpg",
    github: "https://github.com/Sahithib04/ZenSpace",
    featured: true
  },
  {
    id: "Bugtrackingsystem",
    title: "Bugtrackingsystem",
    description: "A Java Swing based bug tracking system enabling faster defect reporting and resolution with MySQL and Maven.",
    longDescription: "Developed an end-to-end Bug Tracking System using Java Swing and MySQL to streamline defect reporting, assignment, and tracking across teams.",
    technologies: ["Java", "Swing", "MYSQL", "Maven"],
    achievements: [
      "Improved bug resolution efficiency by 35% through structured workflows, prioritization, and seamless assignment flows",
      "Reduced build errors by 25% via Maven-based dependency management and standardized project structure",
      "Enabled faster debugging cycles with interactive Swing UI & instant DB sync, increasing developer velocity",
      "Implemented role-based workspace flows to isolate tester + developer views, enhancing clarity and reducing misclassification"
    ],
    image: "/images/projects/Bugtrackingsystem/Bugtrackingsystem.jpg",
    github: "https://github.com/Sahithib04/Bug-Tracking-System",
    featured: true
  },
  {
    id: "Sharebite",
    title: "Sharebite",
    description: "A responsive food redistribution platform connecting donors and volunteers to reduce food waste using pure HTML/CSS/JS.",
    longDescription: "A responsive web platform that connects restaurants/households with NGOs & volunteers to reduce food waste and enable faster surplus food redistribution.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Built dual role donor + collector system enabling seamless food listing, claim, and pickup coordination",
      "Implemented pure HTML/CSS/JavaScript frontend with responsive layouts and smooth interaction flows across devices",
      "Added real-time filtering, search, animations, and optimized UI states, improving user experience and engagement by 40%"
    ],
    image: "/images/projects/Sharebite/Sharebite.jpg",
    github: "https://github.com/Sahithib04/ShareBite",
    featured: false
  },
  {
    id: "Railease",
    title: "Railease",
    description: "A railway reservation system enabling real-time train search, seat availability and secure ticket booking.",
    longDescription: "A Spring Boot based train ticket reservation platform enabling users to search trains, check seat availability, book tickets, make payments and manage profiles with secure authentication and admin control.",
    technologies: ["Java", "Springboot", "SpringMVC", "SpringdataJPA", "MYSQL", "Maven", "JSP", "Bootstrap", "CSS", "Tomcat"],
    achievements: [
      "Developed REST APIs for train search, fare enquiry, ticket booking/cancellation and history, improving request handling efficiency by 40%",
      "Implemented Spring MVC, Spring Data JPA and MySQL for high performance data persistence and faster query response",
      "Built JSP + Bootstrap UI with secure login, profile management and password workflows enhancing user experience & retention",
      "Integrated role-based admin operations to manage trains end-to-end (add/update/delete/search), improving operational flexibility",
    ],
    image: "/images/projects/Railease/Rail-ease.jpg",
    github: "https://github.com/Sahithib04/Rail-Ease",
    featured: true
  },
  {
    id: "ACM",
    title: "ACM",
    description: "A parallel beverage dispensing system with ingredient validation, automatic low stock alert, and CI test automation.",
    longDescription: "A modular beverage dispensing system capable of serving multiple drinks in parallel based on available ingredients, with auto-low ingredient detection, refill support, and automated validation through unit tests + GitHub Actions.",
    technologies: ["Python", "PyTest", "GitHub Actions CI"],
    achievements: [
      "Designed flexible JSON based input config enabling dynamic beverages and ingredients without code changes",
      "Enabled N parallel dispensing with availability validation, improving efficiency and throughput of beverage preparation",
      "Implemented failure detection + real-time missing ingredient reporting improving debugging accuracy by 60%",
      "Integrated automated unit tests with GitHub Actions, ensuring continuous validation on every code commit"
    ],
    image: "/images/projects/ACM/ACM.jpg",
    github: "https://github.com/Sahithib04/Automated-Coffee-Machine",
    featured: false
  },
  {
    id: "NoteIT",
    title: "NoteIT",
    description: "A React notes app with CRUD operations, routing, and local-storage persistence for fast offline note management.",
    longDescription: "A lightweight React-based notes application with routing and local-storage persistence for creating, viewing, editing, and deleting notes with a clean, responsive UI.",
    technologies: ["React", "JavaScript", "Local Storage", "HTML", "CSS"],
    achievements: [
      "Built modular React components (Editor, Home, ViewNote, NoteMenu) enabling seamless note creation and editing",
      "Added React Router based navigation for smooth transitions and better content organization",
      "Designed responsive interface using custom CSS, enhancing usability across desktop and mobile"
    ],
    image: "/images/projects/NoteIT/NoteIT.jpg",
    github: "https://github.com/Sahithib04/Note-IT",
    featured: false
  },
 
];