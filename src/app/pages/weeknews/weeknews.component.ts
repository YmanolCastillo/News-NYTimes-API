import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-weeknews',
  templateUrl: './weeknews.component.html',
  styleUrls: ['./weeknews.component.scss'],
})
export class WeeknewsComponent implements OnInit {
  data: any;
  id: number;
  filteredNews: string = '';

  constructor(private _newsService: NewsService, private _router: Router) {}

  ngOnInit(): void {
    //Request for 7 Days (Week) News
    this._newsService.getNews('viewed/7.json').subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
  onWeekNewsDetails(id) {
    this._router.navigateByUrl(`/weeknews-details/${id}`);
  }
}
