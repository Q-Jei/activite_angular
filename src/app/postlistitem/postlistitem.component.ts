import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  updateLikes(value: string) {
    switch (value) {
      case 'add':
        this.post.loveIts++;
        break;
      case 'remove':
        this.post.loveIts--;
        break;
    }
  }
}
