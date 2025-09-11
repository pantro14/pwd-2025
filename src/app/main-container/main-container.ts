import { NgComponentOutlet } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { sectionToComponent, SectionToComponent } from '../config/page-config';

@Component({
  selector: 'app-main-container',
  imports: [NgComponentOutlet],
  templateUrl: './main-container.html',
  styleUrl: './main-container.css',
})
export class MainContainer {
  protected readonly sectionToComponent = signal<SectionToComponent>(sectionToComponent);
  protected readonly componentEntries = computed(() => Object.entries(this.sectionToComponent()));
}
