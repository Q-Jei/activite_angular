import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post', 'Blablabla :^D', 4),
    new Post('Mon deuxième post', 'Blablabla bis :^D', 2),
    new Post('Mon troisième post', 'Blablabla bis repetita :^D', -2)
  ];
}

class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}
