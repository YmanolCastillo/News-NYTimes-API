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

  // articles: any;

  // newsAuthor: string;
  // dayNews: boolean = true;
  // weekNews: boolean;
  constructor(private _newsService: NewsService, private router: Router) {}

  ngOnInit() {
    // this.dayNews = true;
    //Request for 1 Day News
    this._newsService.getNews('viewed/1.json').subscribe((data) => {
      this.data = data;
    });
    //Request for 7 Days (Week) News
    // this._newsService.getNews('viewed/7.json').subscribe((articles) => {
    //   this.articles = articles;
    //   console.log(articles);
    // });
  }

  onDayNewsDetails(id) {
    this.router.navigateByUrl(`/news-details/${id}`);
  }
  // onWeekNewsDetails(id) {
  //   this.router.navigateByUrl(`/weeknews-details/${id}`);
  // }

  // showDayNews() {
  //   this.weekNews = false;
  //   this.dayNews = true;
  // }
  // showWeekNews() {
  //   this.dayNews = false;
  //   this.weekNews = true;
  // }
}
