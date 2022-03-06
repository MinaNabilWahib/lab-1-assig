import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, AsideComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, AsideComponent],
})
export class CoreModule {}
