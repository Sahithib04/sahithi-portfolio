// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "Open Source Contributor",
      title: "Open Source Contributor",
      company: "Open Source",
      location: "Remote",
      startDate: "July 2025",
      endDate: "Present",
      description: "Contributing to open-source projects by shipping features, improving code quality, and collaborating with global maintainers.",
      achievements: [
        "Contributed to Hacktoberfest and GSSOC projects using Java, ReactJS, and HTML/CSS, improving project efficiency by 20%",
        "Collaborated via GitHub on pull requests, code reviews, and documentation updates improving PR merge acceptance rate",
        "Implemented reusable UI components & utilities increasing code reusability and reducing duplicate code by 50%",
        "Achieved Super Contributor Digital Badge in Hacktoberfest for consistently delivering high-impact PRs across multiple open-source repositories"
      ],
      type: 'work'
    },
    {
      id: "tech-intern",
      title: "Technical Intern",
      company: "VMTW - TS",
      location: "Hyderabad, India",
      startDate: "October 2023",
      endDate: "June 2024",
      description: "Directed technical operations for college events, encompassing website development and promotional materials.",
      achievements: [
        "Orchestrated technical operations for 30+ college events, designing and deploying websites with integrated payment gateways",
        "Increased event participation by 25% through effective technical solutions",
        "Engineered dashboards and automated flows, increasing user satisfaction by 75% and cutting coordination time by 60%",
        "Ensured smooth execution through cross-functional collaboration, achieving 95% client satisfaction"
      ],
      type: 'work'
    },
    // Research positions
    {
        id: "technical-executive",
        title: "Technical Executive",
        company: "Student Council VMTW - TS",
        location: "Hyderabad, India",
        startDate: "August 2023",
        endDate: "May 2024",
        description: "Oversaw technical operations for college events and initiatives as part of the Student Council.",
        achievements: [
          "Oversaw technical operations, utilizing advanced methodologies to achieve project milestones",
          "Engineered and enhanced event websites for cultural festivals, ensuring top-tier performance with creative designs",
          "Managed audiovisual equipment, software applications, and ensured seamless online and offline interactions",
          "Resolved technical issues promptly, minimizing disruptions and maintaining high standards of execution"
        ],
        type: 'leadership'
      },
      {
        id: "technical-convener",
        title: "Technical Team Convener",
        company: "Student Council VMTW - TS",
        location: "Hyderbad, India",
        startDate: "May 2022",
        endDate: "May 2024",
        description: "Led the college technical team, organizing and executing technical aspects of student events.",
        achievements: [
          "Led multidisciplinary technical team, achieving seamless collaboration and innovative solutions",
          "Organized brainstorming sessions with team members to generate website ideas and review progress",
          "Increased student engagement by 40% through committee formation and industry-aligned website redesigns",
          "Bridged the gap between technical requirements and student initiatives"
        ],
        type: 'leadership'
      },
  ];