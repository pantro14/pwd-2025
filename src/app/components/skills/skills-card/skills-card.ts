import { Component, input } from '@angular/core';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';

@Component({
  selector: 'app-skills-card',
  imports: [NgxWordPullupComponent],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css',
})
export class SkillsCard {
  image = input.required<string>();
  name = input.required<string>();
  experience = input.required<number>();
}
