export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Sahithib04",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bethi-sahithi-reddy-/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:sahithibethi04@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+919676619409",
      icon: "phone"
    }
  ];