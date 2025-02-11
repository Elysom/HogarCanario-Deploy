import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item, Welcome } from '../../interfaces/youtube.interfaces';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent implements OnChanges {

  @Input() videoId: string = ''; // Input property for the video ID
  itemvideo: Item | undefined;     // Video data object

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoId'] && this.videoId) {
      this.fetchVideoData();
    }
  }
  constructor(private http: HttpClient) { }
  fetchVideoData(): void {
    const apiKey = 'AIzaSyBsTkYVBVNXnSY8OaaDZhY4hWNWs2NZfTc'; // Replace with your actual API key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${this.videoId}&key=${apiKey}`;

    this.http.get<Welcome>(apiUrl).subscribe(
      response => {
        if (response.items && response.items.length > 0) {
          this.itemvideo = response.items[0]; // Assuming you get a valid response
        }
      },
      error => {
        console.error('Error fetching video data:', error);
        // Optionally, handle the error by showing a message or fallback UI
      }
    );
  }

}