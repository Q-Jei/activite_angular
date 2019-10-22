import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService) {}

  posts: any[]
  postSubscription: Subscription

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Array<object>) => {
        this.posts = posts.reverse();
      }
    )
    this.postService.emmitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
