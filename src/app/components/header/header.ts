import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sections, sections } from '../../config/page-config';
import { TitlePipe } from '../../pipes/title-pipe/title-pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterModule, TitlePipe],
})
export class Header {
  protected readonly sections = signal<Sections[]>([...sections]);
}
