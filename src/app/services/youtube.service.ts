import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, Welcome } from '../interfaces/youtube.interfaces';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = 'AIzaSyBsTkYVBVNXnSY8OaaDZhY4hWNWs2NZfTc'; // Reemplaza con tu clave de API
  private API_URL = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private http: HttpClient) {}
  
  public itemvideo: Item[] = [];


  fetchVideoData(): void {
    this.http.get<Welcome>(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${this.videoId}&key=YOUR_API_KEY`)
      .subscribe(response => {
        this.itemvideo = response.items[0]; // Assuming you get a valid response
      });
  }
}