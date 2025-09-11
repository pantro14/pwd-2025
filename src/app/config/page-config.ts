import { Certifications } from '../components/certifications/certifications';
import { Home } from '../components/home/home';
import { Projects } from '../components/projects/projects';
import { Skills } from '../components/skills/skills';

export const sectionToComponent = {
  home: Home,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
} as const;

export type SectionToComponent = typeof sectionToComponent;

export type Sections = SectionToComponent extends Record<infer K, any> ? K : never;
export type Components = SectionToComponent extends Record<any, infer V> ? V : never;

export const sections = Object.keys(sectionToComponent) as Sections[];
