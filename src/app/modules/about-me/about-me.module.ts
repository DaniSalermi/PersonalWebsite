import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { PresentationDetailComponent } from './presentation-detail/presentation-detail.component';


@NgModule({
  declarations: [PresentationDetailComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
