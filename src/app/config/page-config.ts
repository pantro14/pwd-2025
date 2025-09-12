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
] as const;

export type Skill = typeof skills extends ReadonlyArray<infer T> ? T : never;

export const projects = [
  {
    name: 'Fedex',
    image: 'projects/fedex.svg',
    position: 'Senior Frontend Angular Developer',
    link: 'https://www.fedex.com/',
    countries: ['us', 'ue'],
    year: 2025,
    description:
      'As Senior Frontend Developer, I led the design and implementation of a web application central to international shipments and freight management, used by over 2 million weekly users across 100+ countries. I delivered core features with Angular v20, established GitHub Actions CI/CD pipelines, and applied testing frameworks like Karma and Playwright to ensure reliability. By leveraging advanced concepts—memoization, caching, multicasting, lazy loading, hydration, and deferrable views—I optimized performance and reduced load times. I also coordinated AB testing, feature toggles, and audience targeting through Optimizely to tailor feature releases to global legislation and regional needs, making the platform a trusted solution in the worldwide logistics sector.',
  },
  {
    name: 'Rabobank',
    image: 'projects/rabobank.svg',
    position: 'Senior Frontend Developer, Azure DevOps',
    link: 'https://www.rabobank.com/',
    countries: ['nl'],
    year: 2023,
    description:
      'As Senior Frontend Leader at Rabobank, I contributed to the “development of capital” domain, building web and mobile apps for payments, savings, and investments using Angular, React, Ionic, Stencil JS, Apollo, RxJs, Redux, and GraphQL. I developed reusable components to streamline customer access to financial products while designing CI/CD strategies and DevOps infrastructure with Azure DevOps, Bitbucket, and Jenkins to enhance delivery. As part of the production support team, I ensured app stability through real-time incident response with Splunk, Dynatrace, SignalFX, and Azure Monitor. I also implemented a measurement plan for customer interactions, integrating Google Analytics to generate data insights for marketing, ultimately strengthening Rabobank’s digital banking experience.',
  },
  {
    name: 'Alliander',
    image: 'projects/alliander.svg',
    position: 'GIS software engineer, Frontend developer',
    link: 'https://www.alliander.com/en/',
    countries: ['nl'],
    year: 2018,
    description:
      'As a GIS Engineer and Frontend Developer, I designed and built a critical web portal for plotting the Netherlands’ electrical infrastructure, enabling real-time incident resolution and operational efficiency. Leveraging ESRI, Geocortex, and Oracle DB, I developed geo-tools to analyze electrical threats in both urban and rural areas. Using Dojo Toolkit and Maps JavaScript API, I delivered interactive mapping features that improved monitoring, visualization, and decision-making for electrical network management across the country.',
  },
  {
    name: 'Tacx/Garmin',
    image: 'projects/garmin.svg',
    position: 'Medior Frontend Developer, Android/iOS Developer',
    link: 'https://www.rabobank.com/',
    year: 2016,
    countries: ['nl', 'ue'],
    description:
      'At Tacx (now Garmin), I contributed to the design and implementation of customer care web portals using AngularJS, Angular, Bootstrap, Ionic, and NodeJS. In parallel, I developed native Android and iOS applications that connected mobile devices with Tacx bicycle trainers via Bluetooth technology, enhancing user experience and enabling seamless integration between hardware and software.',
  },
] as const;

export type Project = typeof projects extends ReadonlyArray<infer T> ? T : never;
