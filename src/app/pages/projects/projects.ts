import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = PROJECTS;
}