import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';

  todo = ''

  todos: string[] = []

  updateTodo(content: string) {
    this.todo = content
    console.log('this todo', this.todo)
  }

  public onSubmit(e: Event): void {
    e.preventDefault()
    // console.log(e)
  }
}
