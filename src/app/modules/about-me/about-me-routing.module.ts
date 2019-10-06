import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationDetailComponent } from './presentation-detail/presentation-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule {}
