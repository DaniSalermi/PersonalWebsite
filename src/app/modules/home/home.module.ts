import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { WebComponent } from './web/web.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PresentationComponent, WebComponent, ProjectsComponent, AboutMeComponent, SkillsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
