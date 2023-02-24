import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    title: 'Home',
    component: HomeComponent,
    path: '',
  },
  {
    title: 'About',
    component: AboutComponent,
    path: 'about',
  },
  {
    title: 'Projects',
    component: ProjectComponent,
    path: 'projects',
  },
  {
    title: 'Skills',
    component: SkillsComponent,
    path: 'skills',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
