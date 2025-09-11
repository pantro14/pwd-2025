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

export const experience = [
  'Senior Frontend Developer',
  'Web application expert',
  'Angular Expert',
  'React Developer',
  'Fullstack enthusiast',
  'UX designer',
  'Open Source Contributor',
];

export const skills = [
  { name: 'Javascript', image: 'skills/javascript.svg', level: 9 },
  { name: 'Typescript', image: 'skills/typescript.svg', level: 9 },
  { name: 'Html5', image: 'skills/html5.svg', level: 9 },
  { name: 'Css3', image: 'skills/css3.svg', level: 8 },
  { name: 'Angular', image: 'skills/angular.svg', level: 9 },
  { name: 'React', image: 'skills/react.svg', level: 5 },
  { name: 'NextJS', image: 'skills/nextjs.svg', level: 3 },
  { name: 'RxJs', image: 'skills/rxjs.svg', level: 7 },
  { name: 'Redux', image: 'skills/redux.svg', level: 7 },
  { name: 'Tailwindcss', image: 'skills/tailwindcss.svg', level: 5 },
  { name: 'Jest', image: 'skills/jest.svg', level: 5 },
  { name: 'GraphQL', image: 'skills/graphql.svg', level: 5 },
  { name: 'Figma', image: 'skills/figma.svg', level: 2 },
  { name: 'Git', image: 'skills/git.svg', level: 9 },
  { name: 'GitHub', image: 'skills/github.svg', level: 9 },
  { name: 'Azure', image: 'skills/azure.svg', level: 5 },
  { name: 'Firebase', image: 'skills/firebase.svg', level: 2 },
];
