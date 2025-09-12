import { Component, computed, signal } from '@angular/core';
import { NgxTimelineComponent } from '@omnedia/ngx-timeline';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';
import { Project, projects } from '../../config/page-config';

@Component({
  selector: 'app-projects',
  imports: [NgxWordPullupComponent, NgxTimelineComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = signal<Project[]>([...projects]);

  protected readonly projectsTimeline = computed(() => {
    return this.projects().map((project) => ({
      title: `<div class="flex flex-row items-center space-x-4 py-3">
                <p class="text-3xl">${project.year}</p>
                <img src="${project.image}" class="w-30 h-30" />
              </div>`,
      content: `<div class="flex flex-col py-3 space-y-2">
  <div class="flex-1">
    <div class="flex items-center space-x-2">
      <a class="font-bold md:text-xl underline" target="_blank" href="${project.link}">
        ${project.name}
      </a>
      ${project.countries
        .map((country) => `<img src="projects/${country}.svg" class="w-6 h-6" />`)
        .join('')}
    </div>
  </div>

  <p class="font-light md:text-lg text-rose-300">${project.position}</p>
  <p class="font-light text-gray-400 text-justify">${project.description}</p>
</div>`,
    }));
  });
}
