import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';
  public todo = {
    id: '',
    done: false,
    content: ''
  };
  public todos: Object[] = [];

  public onSubmit(e: Event): void {
    e.preventDefault()
    console.log(e)
  }
}
