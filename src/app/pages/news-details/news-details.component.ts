import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/_services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  id = 0;
  paramsSubscription: Subscription;
  data: any;
  article: any;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      // console.log(this.id);
    });
    this.newsService.getNews('viewed/7.json').subscribe((data) => {
      this.data = data['results'].findIndex((x) => x.id === this.id);

      console.log(data['results'].findIndex((x) => x.id === this.id));
    });
    // this.data.findIndex((x) => x.id === this.id);
    // this.data.filter((x) => x.id == this.id).map((x) => x.id);
    // console.log(this.data);
    // console.log(this.newsService.currentArticle);
    // this.paramsSubscription = this.route.params.subscribe(
    //   (params: ParamMap) => {
    //     this.id = +params.get('id'); // (+) converts string 'id' to a number
    //     //   console.log(this.id);
    //   }
    // );
  }
}
