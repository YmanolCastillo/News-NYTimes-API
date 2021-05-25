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
  filteredNews: string = '';
  constructor(private _newsService: NewsService, private router: Router) {}

  ngOnInit() {
    //Request for 1 Day News
    this._newsService.getNews('viewed/1.json').subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  onDayNewsDetails(id) {
    this.router.navigateByUrl(`/news-details/${id}`);
  }
}
