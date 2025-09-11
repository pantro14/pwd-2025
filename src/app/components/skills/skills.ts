import { Component, signal } from '@angular/core';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';
import { skills } from '../../config/page-config';
import { SkillsCard } from './skills-card/skills-card';

@Component({
  selector: 'app-skills',
  imports: [SkillsCard, NgxWordPullupComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly skills = signal([...skills]);
}
