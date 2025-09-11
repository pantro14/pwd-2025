import { Component } from '@angular/core';
import { NgxTimelineComponent, TimelineEntry } from '@omnedia/ngx-timeline';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';

@Component({
  selector: 'app-projects',
  imports: [NgxWordPullupComponent, NgxTimelineComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  timelineData = [
    {
      title: '<p>Start</p>',
      content: '<div>The beginning of the project.<div>',
    },
    {
      title: '<p>Development</p>',
      content: 'Key development milestones achieved.',
    },
    {
      title: '<p>Launch</p>',
      content: '<div>The project goes live!</div>',
    },
  ] as TimelineEntry[];
}
