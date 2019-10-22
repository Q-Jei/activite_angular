import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

export class PostService {

  postsSubject = new Subject<any[]>()

  private posts: Array<object> = [
    {
      title: 'Un post',
      content: 'Blablabla :^D',
      loveIts: 4,
      createdAt: new Date()
    },
    {
      title: 'Un autre post',
      content: 'Blablabla bis :^D',
      loveIts: 2,
      createdAt: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Blablabla bis repetita :^D',
      loveIts: -2,
      createdAt: new Date()
    }
  ]


  emmitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  doNotLovePost(post: Post) {
    post.loveIts--;
  }

  lovePost(post: Post) {
    post.loveIts++;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1)
    this.emmitPostSubject();
  }

}
