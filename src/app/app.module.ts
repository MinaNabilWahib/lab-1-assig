import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerComponent } from './speaker/speaker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SpeakerComponent],
  imports: [BrowserModule, CoreModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
