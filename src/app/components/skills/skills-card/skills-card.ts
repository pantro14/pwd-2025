import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  imports: [],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css',
})
export class SkillsCard {
  image = input.required<string>();
  name = input.required<string>();
  experience = input.required<number>();
}
