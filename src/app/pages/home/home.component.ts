import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  id: number;
  newsAuthor: string;
  dayNews: boolean;
  weekNews: boolean;
  constructor(private _newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.dayNews = true;
    //Request for 1 Day News
    this._newsService.getNews('shared/1.json').subscribe((data) => {
      this.data = data;
      console.log(data);
    });
    //Request for 7 Days (Week) News
    this._newsService.getNews('shared/7.json').subscribe((data) => {
      this.data = data;
    });
  }

  onNewsDetails(id) {
    this.router.navigateByUrl(`/news-details/${id}`);
  }

  showDayNews() {
    this.weekNews = false;
    this.dayNews = true;
  }
  showWeekNews() {
    this.dayNews = false;
    this.weekNews = true;
  }
}
