import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  id: any;
  data: any;
  constructor(
    private _newsService: NewsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    //Getting Article from the Route Path ID
    this._newsService.getNews('viewed/1.json').subscribe((data) => {
      this.data = data['results'][this.id];
    });
  }

  goToNews() {
    this._router.navigateByUrl('/home');
  }
}
