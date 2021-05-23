import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) {}

  getNews(url) {
    // return this.http.get(API_URL);
    return this.http.get(`${API_URL}/${url}?api-key=${API_KEY}`);
  }
}
