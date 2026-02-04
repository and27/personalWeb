export interface ProjectEntry {
  title: string;
  description: string;
  impact: string[];
  hidden?: boolean;
  slug?: string;
  category?: string;
  contributors?: string[];
  link?: string;
  cta?: string;
  github?: string;
  technologies?: string[];
  image?: string;
}

export interface ProjectsSection {
  title: string;
  projects: ProjectEntry[];
}
