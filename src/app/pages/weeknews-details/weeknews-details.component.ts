import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-weeknews-details',
  templateUrl: './weeknews-details.component.html',
  styleUrls: ['./weeknews-details.component.scss'],
})
export class WeeknewsDetailsComponent implements OnInit {
  id: any;
  data: any;
  constructor(
    private _route: ActivatedRoute,
    private _newsService: NewsService,
    private _router: Router
  ) {}

  ngOnInit() {
    //Adding ID to the Route Path
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    //Getting New from the Route Path ID
    this._newsService.getNews('viewed/7.json').subscribe((data) => {
      this.data = data['results'][this.id];
    });
  }

  goToNews() {
    this._router.navigateByUrl('/weeknews');
  }
}
