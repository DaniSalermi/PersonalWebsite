import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        mod => mod.ProjectsModule
      )
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then(
        mod => mod.AboutMeModule
      )
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(mod => mod.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
