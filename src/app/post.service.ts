import { Injectable } from '@angular/core';
import {Post} from './app.post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] =[];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    //return [...this.posts];
    this.http.get<{message:string, posts:any}>('http://localhost:3000/api/posts')
    .pipe(map((postData)=>{
      return postData.posts.map((post:any) =>{
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })
    }))
    .subscribe((transformedData)=>{
      console.log(transformedData);
      this.posts = transformedData;
      this.postsUpdated.next([...this.posts]);
    })
  }

  addPostService(title: string, content: string){
  const post: Post ={id:null, title: title, content: content};
  console.log("*****************************",post);
  this.http.post<{message: string; postId: string}>('http://localhost:3000/api/posts',post)
  .subscribe((responseData)=>{
    const id = responseData.postId;
    post.id = id;
    console.log("*****Server Responded", responseData);
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  });
  }

  deletePost(postId: string | null){
    this.http.delete('http://localhost:3000/api/posts/'+postId)
    .subscribe(()=>{
      const updatedPost = this.posts.filter(post=> post.id !=postId);
      this.posts = updatedPost;
      this.postsUpdated.next([...this.posts]);
      console.log('Deleted!');
    })
  }
 getPostUpdateListner()
 {
   return this.postsUpdated.asObservable();
 }
  constructor(private http:HttpClient) { }
}
