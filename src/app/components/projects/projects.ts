import { afterNextRender, Component, signal } from '@angular/core';
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';
import { Project, projects } from '../../config/page-config';

@Component({
  selector: 'app-projects',
  imports: [NgxWordPullupComponent, NgxTimelineComponent, NgxTimelineEntryComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = signal<Project[]>([...projects]);

  constructor() {
    afterNextRender(() => {
      console.log('Projects component rendered');
    });
  }
}
