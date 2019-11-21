import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { SafePipe } from "src/app/pipes/safe.pipe";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, SafePipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, MenuComponent]
})
export class ReusableModule {}
