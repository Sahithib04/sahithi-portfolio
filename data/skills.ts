// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Web Technologies'
  | 'Frameworks/Libraries'  
  | 'Cloud/Database' 
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
 
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
  ],
  'Web Technologies':[
    {name: 'HTML', category: 'Web Technologies', logoKey: 'html' },
    {name: 'CSS', category: 'Web Technologies', logoKey: 'css' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },

  ],
  'Cloud/Database': [
    { name: 'AWS', category: 'Cloud/Database', logoKey: 'amazonwebservices' },
    { name: 'MYSQL', category: 'Cloud/Database', logoKey: 'mysql' },
  ],
  'Tools': [
    { name: 'Git', category: 'Tools', logoKey: 'git' },
    { name: 'Github', category: 'Tools', logoKey: 'github' },
    { name: 'VSCode', category: 'Tools', logoKey: 'vscode' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};