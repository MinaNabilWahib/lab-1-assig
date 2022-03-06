import { Component, Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'dateFormat' })
export class MyPipe implements PipeTransform {
  transform(val: Date) {
    return val.toLocaleString;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab-1-assig';
}
