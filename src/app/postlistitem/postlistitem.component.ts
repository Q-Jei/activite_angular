import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.postService.lovePost(post);
  }

  onDoNotLoveIt(post: Post) {
    this.postService.doNotLovePost(post);
  }

  onDelete(post: Post) {
    this.postService.removePost(post);
  }


}
