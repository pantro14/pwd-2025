import { Component, signal } from '@angular/core';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { experience } from '../../config/page-config';

@Component({
  selector: 'app-home',
  imports: [NgxStarrySkyComponent, NgxTypewriterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly experience = signal([...experience]);
  protected readonly pwd = signal(`<PWD/> Pardo Web Developer`);
}
