import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from 'src/app/_models/news.interface';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  id: any;
  paramsSubscription: Subscription;
  data: any;
  article: any;
  dataInfo: News = new News();
  constructor(
    private _newsService: NewsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this._newsService.getNews('shared/7.json').subscribe((data) => {
      this.data = data['results'][this.id];
      console.log(this.data['media'][0]['media-metadata'][0]['url']);

      this.dataInfo.getObject(this.data);
    });
  }

  goToNews() {
    this._router.navigateByUrl('/home');
  }
}
