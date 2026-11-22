import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  subject = 'Веб-разработка';
  teacher = 'Хамитов Илья Раильевич';

  showTopics = signal(false);

  toggleTopics() {
    this.showTopics.update((value) => !value);
  }
}