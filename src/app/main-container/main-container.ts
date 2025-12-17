import { Component } from '@angular/core';
import { Certifications } from '../components/certifications/certifications';
import { Home } from '../components/home/home';
import { Projects } from '../components/projects/projects';
import { Skills } from '../components/skills/skills';
@Component({
  selector: 'app-main-container',
  imports: [Home, Skills, Projects, Certifications],
  templateUrl: './main-container.html',
  styleUrl: './main-container.css',
})
export class MainContainer {}
