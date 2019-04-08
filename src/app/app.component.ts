import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: '<h1>angular-course</h1><script>alert("Attack");</script>'
  };

  onLogoClick() {
    console.log('Hello Angular!');
  }

  onKeyUp(title: string) {
    this.data.title = title;
  }
}
