export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    
    {
      id: "srm",
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "Vignan’s Institute Of Management And Technology For Women",
      location: "Hyderabad, India",
      startDate: "October 2021",
      endDate: "June 2024",
      gpa: "7.2/10.00"
    }
  ];